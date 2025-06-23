const mongoose = require('mongoose'); // 🔗 Importing mongoose to interact with MongoDB
const bcrypt = require('bcrypt');     // 🔐 Importing bcrypt to hash passwords

// 🧾 Define the user schema
const userSchema = new mongoose.Schema({
    username: {                          // ✅ User's name (unique)
        type: String,
        required: true,                  // 🔒 Must be provided
        unique: true                     // 🔑 No duplicates allowed
    },
    password: {                          // 🔐 User's password
        type: String,
        required: true                   // 🔒 Required field
    },
    role: {                              // 🎭 User role for access control
        type: String,
        enum: ['user', 'admin'],         // 📋 Only allowed values
        required: true                   // 🔒 Must be defined
    }
});

// 🔁 Hash password before saving user to DB
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // ⏩ Skip if password hasn't changed
    this.password = await bcrypt.hash(this.password, 10); // 🔐 Hash the password
    next();                                           // ✅ Proceed to save
});

// 📤 Export the model
module.exports = mongoose.model('User', userSchema); // 📦 Exporting User model for use elsewhere
