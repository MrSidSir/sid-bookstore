import React from 'react'                                // ⚛️ React import
import { Navigate, Outlet } from 'react-router-dom';     // 🚦 Navigate for redirection, Outlet for nested routing

// 🔐 AdminRoute: Protects admin-only routes by checking token
const AdminRoute = ({children}) => {
  const token = localStorage.getItem('token');           // 🔑 Get JWT token from localStorage

  if(!token) {                                            // ❌ If no token found
    return <Navigate to="/admin"/>                       // 🚫 Redirect to /admin login page
  }

  return children ? children : <Outlet/>;                // ✅ If token exists:
                                                         // 📦 Render `children` (if given),
                                                         // 🧩 otherwise render nested route using <Outlet />
}

export default AdminRoute                                // 📤 Export to use in route protection



