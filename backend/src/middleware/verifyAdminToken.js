const jwt = require('jsonwebtoken'); // 🔐 JWT library for token verification
const JWT_SECRET = process.env.JWT_SECRET_KEY // 🔑 Secret key from environment

// 🛡️ Middleware to verify admin's JWT token
const verifyAdminToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 
    // 🔍 Extract token from Authorization header (Bearer <token>)

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided' });
        // ❌ If no token, deny access with 401 Unauthorized
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        // ✅ Verify token using secret
        if (err) {
            return res.status(403).json({ message: 'Invalid credientials' });
            // ❌ If token invalid/expired, deny access with 403 Forbidden
        }
        req.user = user; // ✅ Attach decoded user info to request object
        next();          // ⏭️ Pass control to next middleware/route
    });
}

module.exports = verifyAdminToken; // 📦 Export the middleware for use in protected routes
    


// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTg1Y2JjYTUyOGRlMDdkZTU3OTU3YSIsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTA2MjMyOTAsImV4cCI6MTc1MDYyNjg5MH0.g23WqnvuVO79AN6ZVjDM-DH7Z0hZc_QIRRiKDmKRc0w",