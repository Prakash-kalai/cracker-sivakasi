// src/components/Estimate.js
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import ProductRow from "./ProductRow";

export default function Estimate() {
  const [productData, setProductData] = useState([]);
  const [qtyMap, setQtyMap] = useState({});
  const minOrder = 3000;

  // Fetch data from backend
  async function getData() {
    try {
      const data = await axios.get("http://localhost:5000/api/crackers");
      setProductData(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Handle quantity change
  function onQtyChange(id, qty) {
    setQtyMap(prev => ({ ...prev, [id]: qty }));
  }

  // Group products by category
  const rows = useMemo(() => {
    const byCat = {};
    productData.forEach(p => {
      if (!byCat[p.category]) byCat[p.category] = [];
      byCat[p.category].push(p);
    });
    return byCat;
  }, [productData]);

  // Calculate subtotal
  const subtotal = useMemo(() => {
    return productData.reduce((acc, p) => {
      const q = Number(qtyMap[p._id] || 0);
      return acc + (Number(p.price) || 0) * q;
    }, 0);
  }, [qtyMap, productData]);

  const tax = +(subtotal * 0.18).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  // Print Estimate
  function printEstimate() {
    const w = window.open("", "_blank");
    if (!w) return;

    const content = `
      <html><head><title>Estimate</title>
      <style>
        body { font-family: Arial, sans-serif; padding:20px; }
        table { width:100%; border-collapse: collapse; }
        td,th { border:1px solid #ddd; padding:8px; }
        th { background:#f2f2f2; }
      </style></head><body>
      <h2>Abishek Crackers & Dhanraj Crackers - Estimate</h2>
      <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
      <p>GST (18%): ₹${tax.toFixed(2)}</p>
      <p><strong>Total: ₹${total.toFixed(2)}</strong></p>
      <hr/>
      <table>
        <thead><tr><th>S.No</th><th>Product</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
        <tbody>
          ${productData.map((p, i) => {
            const q = Number(qtyMap[p._id] || 0);
            if (!q) return "";
            const amt = Number(p.price) * q;

            return `
              <tr>
                <td>${i + 1}</td>
                <td>${p.name}</td>
                <td>${q}</td>
                <td>₹${p.price}</td>
                <td>₹${amt.toFixed(2)}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
      <script>window.print()</script>
      </body></html>
    `;

    w.document.write(content);
    w.document.close();
  }

  // Submit order to backend
  async function orderProduct() {
    if (subtotal < minOrder) {
      alert("Please make a minimum order of ₹3000");
      return;
    }

    const orderItems = productData
      .filter(p => qtyMap[p._id] > 0)
      .map(p => ({
        productId: p._id,
        name: p.name,
        qty: Number(qtyMap[p._id]),
        rate: Number(p.price),
        amount: Number(p.price) * Number(qtyMap[p._id])
      }));

    if (orderItems.length === 0) {
      alert("Please select at least one product");
      return;
    }

    const orderPayload = {
      items: orderItems,
      subtotal,
      tax,
      total,
      createdAt: new Date()
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        orderPayload
      );

      if (response.status === 201 || response.status === 200) {
        alert("Order submitted successfully!");
        setQtyMap({});
      } else {
        alert("Order submission failed. Try again!");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting order. Check console.");
    }
  }

  return (
    <div className="estimate-page" style={{ paddingBottom: "140px" }}>
      <h2>Estimate</h2>
      <div className="estimate-banner">Minimum Order Amount: ₹3000</div>

      <div className="table-wrap">
        <table className="product-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(rows).sort().map(cat => (
              <React.Fragment key={cat}>
                <tr className="cat-row">
                  <td colSpan="6" style={{ background: "#eee", fontWeight: "bold" }}>
                    {cat}
                  </td>
                </tr>

                {rows[cat].map((p, idx) => (
                  <ProductRow
                    key={p._id}
                    product={p}
                    index={idx}
                    qty={qtyMap[p._id] || 0}
                    onQtyChange={onQtyChange}
                  />
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar text-black">
        <div className="totals">
          <span>Subtotal: ₹{subtotal.toFixed(2)}</span>
          <span>GST (18%): ₹{tax.toFixed(2)}</span>
          <span
            className="total"
            style={{ color: subtotal < minOrder ? "red" : "#0d47a1" }}
          >
            Total: ₹{total.toFixed(2)}
          </span>
        </div>

        <div className="actions">
          <button
            className="btn submit-btn"
            onClick={orderProduct}
            style={{
              backgroundColor: subtotal < minOrder ? "#ccc" : "#ff9800",
              cursor: subtotal < minOrder ? "not-allowed" : "pointer",
            }}
          >
            Submit
          </button>

          <button className="btn" onClick={printEstimate}>
            Print / Download
          </button>
        </div>
      </div>
    </div>
  );
}
