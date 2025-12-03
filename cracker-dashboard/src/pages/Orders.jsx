import React, { useEffect, useState } from "react";
import axios from "axios";
import { orderGetData } from "../redux/features/ordrsSlice";
import { useDispatch,useSelector } from "react-redux";
export default function OrdersPage() {

  
  
  const status = true; // example — you can replace with order.status later
  const {data,loading}=useSelector((state)=>state.orders)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(orderGetData())
  },[])
  
 

  if (loading) return <p className="text-center py-10">Loading orders...</p>;
  if (data.length === 0) return <p className="text-center py-10">No orders found.</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold mb-6">Orders</h2>
        <button className="px-4 py-2 rounded-lg text-white font-semibold">Pending</button>
        <button className="px-4 py-2 rounded-lg text-white font-semibold">Completed</button>
      </div>

      {data.map((order, index) => (
        <div
          key={order._id}
          className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Order #{index + 1}</h3>
            <button
              className={`px-4 py-2 rounded-lg text-white font-semibold ${
                status ? "bg-green-600" : "bg-yellow-500"
              }`}
            >
              {status ? "Completed" : "Pending"}
            </button>
          </div>

          <p className="text-gray-600 mb-4">
            <strong className="text-gray-800">Date:</strong>{" "}
            {new Date(order.createdAt).toLocaleString()}
          </p>

          {/* Table */}
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-2 font-semibold">S.No</th>
                <th className="border p-2 font-semibold">Product</th>
                <th className="border p-2 font-semibold">Qty</th>
                <th className="border p-2 font-semibold">Rate</th>
                <th className="border p-2 font-semibold">Amount</th>
              </tr>
            </thead>

            <tbody>
              {order.items.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.qty}</td>
                  <td className="border p-2">₹{item.rate}</td>
                  <td className="border p-2">₹{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end gap-6 text-gray-700 text-sm">
            <p><strong className="text-gray-900">Subtotal:</strong> ₹{order.subtotal}</p>
            <p><strong className="text-gray-900">Tax:</strong> ₹{order.tax}</p>
            <p><strong className="text-gray-900">Total:</strong> ₹{order.total}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
