// Order model ko import kiya gaya hai jisse MongoDB me order data save/fetch kiya ja sake
const Order = require("./order.model");

// =============================
// 📌 Function: createAOrder
// ➤ Kaam: Naya order create karta hai
// =============================
const createAOrder = async (req, res) => {
  try {
    // 🧾 req.body me user ke taraf se bheja gaya order data hota hai
    // Order() constructor se ek naya order object create kiya ja raha hai
    const newOrder = await Order(req.body);

    // 💾 newOrder ko MongoDB me save kiya ja raha hai
    const savedOrder = await newOrder.save();

    // ✅ Agar save ho jaye to client ko response me saved order bhej diya jata hai
    res.status(200).json(savedOrder);
  } catch (error) {
    // ❌ Agar koi error aaye to use console me log karte hain
    console.error("Error creating order", error);

    // ⚠️ Client ko error message ke sath 500 Internal Server Error bhej dete hain
    res.status(500).json({ message: "Failed to create order" });
  }
};

// =============================
// 📌 Function: getOrderByEmail
// ➤ Kaam: Specific user ke email se uske sare orders fetch karta hai
// =============================
const getOrderByEmail = async (req, res) => {
  try {
    // 📩 req.params se email nikala ja raha hai (URL me diya gaya)
    const { email } = req.params;

    // 🔍 MongoDB me email se sare orders dhundh rahe hain aur unko latest order pehle (descending) sort kar rahe hain
    const orders = await Order.find({ email }).sort({ createdAt: -1 });

    // ❗ Agar orders exist nahi karte to 404 response bhejna
    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }

    // ✅ Agar orders mil jaye to unko client ko return kar dena
    res.status(200).json(orders);
  } catch (error) {
    // ❌ Koi error aaye to console me log karo
    console.error("Error fetching orders", error);

    // ⚠️ Client ko error message ke sath 500 status bhejo
    res.status(500).json({ message: "Failed to fetch order" });
  }
};

// 🔁 Dono functions ko module.exports me export kiya gaya hai taaki routes me use ho sake
module.exports = {
  createAOrder,
  getOrderByEmail,
};
