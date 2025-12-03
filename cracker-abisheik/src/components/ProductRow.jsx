// src/components/ProductRow.js
import React from "react";

export default function ProductRow({ product, index, qty, onQtyChange }) {
  const price = Number(product.price) || 0;
  const subtotal = price * (qty || 0);

  return (
    <tr className="product-row">
      {/* Serial Number */}
      <td>{index + 1}</td>

      {/* Product Image */}
      <td className="img-cell">
        <img
          src={product.img || "/no-image.png"}
          alt={product.name}
          style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 5 }}
        />
      </td>

      {/* Name + Per */}
      <td className="name-cell">
        <div className="pname">{product.name}</div>
        <div className="per">{product.per}</div>
      </td>

      {/* Price Details */}
      <td className="price-cell">
        <div className="p">₹{product.price}</div>
        <div className="p">
  ₹{(Number(product.price) * 0.6).toFixed(2)}
</div>
      </td>

      {/* Quantity Input */}
      <td>
        <input
          type="number"
          min="0"
          value={qty || ""}
          onChange={(e) =>
            onQtyChange(product._id, Number(e.target.value || 0))
          }
          className="qty-input"
          style={{ width: "60px", padding: "4px" }}
        />
      </td>

      {/* Subtotal */}
      <td className="subtotal">₹{subtotal.toFixed(2)}</td>
    </tr>
  );
}
