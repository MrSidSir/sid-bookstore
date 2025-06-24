// 📦 Express ko import kar rahe hain
const express = require("express");
const app = express();

// 🔓 CORS (Cross-Origin Resource Sharing) allow karne ke liye
const cors = require("cors");

// 🛢️ MongoDB ke liye mongoose import kar rahe hain
const mongoose = require("mongoose");

// 🌐 Port number set kar rahe hain (default 5000 if not in .env)
const port = process.env.PORT || 5000;

// 🔑 .env file ko load karne ke liye
require("dotenv").config();

// 🔍 DB connection string console me check karne ke liye (debug purpose)
console.log("db url", process.env.DB_URL);

// =======================
// 🧱 Middleware Setup
// =======================

// ➤ JSON format me data handle karne ke liye
app.use(express.json());

// ➤ Frontend (localhost:5173) ko CORS allow karne ke liye
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [
      "http://localhost:5173",
      "https://sid-bookstore-w5nr.vercel.app",
      "https://sid-bookstore-3j5u.vercel.app",
    ];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// =======================
// 📚 Routes Import
// =======================

// ➤ Book-related API routes import kiya ja raha hai
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");
// ➤ /api/books ke path par book routes apply kar diya
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// =======================
// 📦 MongoDB Atlas Password (commented info only)
// =======================
// mongodb password = UkkhLZbLLnt2Ok6E

// =======================
// ⚙️ MongoDB Connect Function
// =======================
async function main() {
  // 📌 Mongoose se MongoDB Atlas cluster se connect kar rahe hain
  await mongoose.connect(
    "mongodb+srv://irshad1554:XKAEFS3JKlCZJ5eO@cluster0.obejehi.mongodb.net/sid-bookstore?retryWrites=true&w=majority&appName=Cluster0"
  );

  // 🔁 Again print DB_URL to confirm env is loaded (optional)
  console.log("db url", process.env.DB_URL);

  // ✅ Root route — simple API check
  app.get("/", (req, res) => {
    res.send("Welcome to my server, this is bookstore!");
  });
}

// 🔁 MongoDB connect karke server start hone ka confirmation message
main()
  .then(() => console.log("Mongodb connect successfully"))
  .catch((err) => console.log(err));

// =======================
// 🚀 Start Express Server
// =======================
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
