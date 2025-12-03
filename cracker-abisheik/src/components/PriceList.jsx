// src/components/PriceList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PriceList() {
  const [productData, setProductData] = useState([]);
  const [load,setLoad]=useState()

    async function getData() {
      const data = await axios.get("http://localhost:5000/api/crackers");
      setProductData(data.data);
      setLoad(data.status)
    }
    
    
  useEffect(() => {
    getData();
  }, []);

  const rows = {};
  productData.forEach((p) => {
    if (!rows[p.category]) rows[p.category] = [];
    rows[p.category].push(p);
  });

  return (
    <div className="w-full px-4 py-6 text-black">
      <h2 className="text-3xl font-bold text-center text-red-600">Price List</h2>
      <p className="text-center text-gray-600 mb-8">Full price list - 2025</p>

      {Object.keys(rows)
        .sort()
        .map((cat) => (
          <div
            key={cat}
            className="bg-white shadow-md rounded-xl p-6 mb-10 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 underline">
              {cat}
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border font-semibold">S.No</th>
                    <th className="px-4 py-2 border font-semibold">Product</th>
                    <th className="px-4 py-2 border font-semibold">MRP</th>
                    <th className="px-4 py-2 border font-semibold">60% Rate</th>
                    <th className="px-4 py-2 border font-semibold">Per</th>
                  </tr>
                </thead>

                <tbody>
                  {rows[cat].map((p, i) => (
                    <tr
                      key={p._id}
                      className="hover:bg-red-50 transition-all"
                    >
                      <td className="px-4 py-2 border">{i + 1}</td>
                      <td className="px-4 py-2 border">{p.name}</td>
                      <td className="px-4 py-2 border">₹{p.mrp}</td>
                      <td className="px-4 py-2 border text-red-600 font-bold">
                        ₹{p.price}
                      </td>
                      <td className="px-4 py-2 border">{p.per}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
    </div>
  );
}
