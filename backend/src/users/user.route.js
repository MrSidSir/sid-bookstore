const express = require('express');              // 🚀 Import Express framework
const User = require('./user.model');           // 📦 Import User model (correct path ✅)
const jwt = require('jsonwebtoken');             // 🔐 Import JWT for token creation

const router = express.Router();                 // 🔄 Create a new router instance
 
const JWT_SECRET = process.env.JWT_SECRET_KEY;   // 🔑 Load secret key from .env for JWT

// 🛡️ Admin login route
router.post("/admin", async (req, res) => {
    const { username, password } = req.body;     // 📥 Extract username & password from request

    try {
        const admin = await User.findOne({ username }); // 🔎 Find admin by username

        if (!admin) {
            // ❌ If no admin found
            return res.status(404).send({ message: "Admin not found!" });
        }

        if (admin.password !== password) {
            // ❌ If password is incorrect
            return res.status(401).send({ message: "Invalid password!" });
        }

        // ✅ If credentials valid, sign a JWT
        const token = jwt.sign(
            { id: admin._id, username: admin.username, role: admin.role }, // 🧾 Payload
            JWT_SECRET,                                                    // 🔐 Secret key
            { expiresIn: "1h" }                                            // ⏰ Token expiry
        );

        // ✅ Return response with token and user info
        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role // ✅ Fixed typo: 'rile' → 'role'
            }
        });
    } catch (error) {
        console.error("Failed to login as admin", error); // 🧱 Log error for debugging
        res.status(401).send({ message: "Failed to login as admin" }); // ❌ Fallback response
    }
});

module.exports = router; // ✅ Corrected: was mistakenly written as `module.experts`
