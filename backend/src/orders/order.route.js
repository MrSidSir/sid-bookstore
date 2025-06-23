// 📦 express framework ko import kar rahe hain
const express = require('express');

// 📥 order controller se do function import kar rahe hain: 
// 1️⃣ createAOrder - naya order banata hai
// 2️⃣ getOrderByEmail - email ke basis par order fetch karta hai
const { createAOrder, getOrderByEmail } = require('./order.controller');

// 📌 router banane ke liye Express ka Router function use kiya gaya
const router = express.Router();


// ===============================
// 📍 POST /api/order/
// ➤ Kaam: Ek naya order create karta hai
// ➤ Data: req.body me order details hona chahiye
// ===============================
router.post("/", createAOrder);


// ===============================
// 📍 GET /api/order/email/:email
// ➤ Kaam: Specific user ke email ke basis par uske sare orders fetch karta hai
// ➤ Example: /api/order/email/user@example.com
// ===============================
router.get("/email/:email", getOrderByEmail);


// 🔁 is router object ko export kiya ja raha hai taaki main app me use ho sake
module.exports = router;
