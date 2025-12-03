import React, { useState } from "react";
import { postData } from "../redux/features/crackerApiSlice";
import { useDispatch } from "react-redux";

const CrackerAdd = () => {
  const productData = [
    "Sparklers",
    "Ground Chakkar",
    "Wheels/Spinners",
    "Bijili Crackers",
    "Flower Pots",
    "Twinkling Stars",
    "One Sound Crackers",
    "Pencil Torches",
    "Bombs",
    "Paper Bombs",
    "Rockets",
    "Fancy",
    "Aerial Novelties",
    "Multi Shots",
    "Matches",
    "Colour Fountains",
    "Gift Boxes"
  ];

  const [form, setForm] = useState({
    id: "",
    name: "",
    mrp: "",
    price: "",
    per: "",
    category: "",
    img: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(postData(form));

    alert("Cracker added successfully!");

    setForm({
      id: "",
      name: "",
      mrp: "",
      price: "",
      per: "",
      category: "",
      img: ""
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-8 border border-gray-200">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Add Cracker
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="number"
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="name"
          placeholder="Cracker Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="number"
          name="mrp"
          placeholder="MRP"
          value={form.mrp}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="price"
          placeholder="Price (Selling Price)"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="per"
          placeholder="Per (piece / packet / box)"
          value={form.per}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select Category</option>
          {productData.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={form.img}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Add Cracker
        </button>
      </form>
    </div>
  );
};

export default CrackerAdd;
