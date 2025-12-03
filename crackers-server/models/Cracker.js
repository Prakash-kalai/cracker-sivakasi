const mongoose = require("mongoose");
const crackerSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  mrp: { type: Number, required: true },
  price: { type: String, required: true },
  per: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true }
});


module.exports = mongoose.model("Cracker", crackerSchema);
