const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const crackerRoutes = require("./routes/CrackerRoutes");
const orderRoutes = require("./routes/OrderRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/crackers", crackerRoutes);
app.use("/api/orders", orderRoutes);

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error", err));

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
