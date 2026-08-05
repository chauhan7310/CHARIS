const express = require("express");
const cors = require("cors");

// const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

/* ---------------- MongoDB Connection ---------------- */

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected Successfully");
//   })
//   .catch((err) => {
//     console.log("❌ MongoDB Connection Error");
//     console.log(err);
//   });

/* ---------------- Middlewares ---------------- */

app.use(cors());
app.use(express.json());

/* ---------------- Test Route ---------------- */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CHARIS Backend is Running 🚀",
  });
});

/* ---------------- Routes ---------------- */

app.use("/api/auth", authRoutes);
app.use("/api/consultation", consultationRoutes);
app.use("/api/recommendations", recommendationRoutes);

module.exports = app;