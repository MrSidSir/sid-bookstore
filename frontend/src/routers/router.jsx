import {createBrowserRouter} from "react-router-dom"; // 🌐 To create client-side routing configuration
import App from "../App";                             // 📦 Main layout component
import Home from "../pages/home/Home";                // 🏠 Homepage component
import Login from "../components/Login";              // 🔐 Login page
import Register from "../components/Register";        // 📝 Register page
import CartPage from "../pages/books/CartPage";       // 🛒 Cart listing page
import CheckoutPage from "../pages/books/CheckoutPage"; // 💳 Secure checkout page
import SingleBook from "../pages/books/SingleBook";   // 📖 Individual book detail page
import PrivateRoute from "./PrivateRoute";            // 🔒 Wrapper to protect routes for logged-in users
import OrderPage from "../pages/books/OrderPage";     // 📦 User orders page
import AdminRoute from "./AdminRoute";                // 🛡️ Admin route protector
import AdminLogin from "../components/AdminLogin";    // 🔐 Admin login component
import DashboardLayout from "../pages/dashboard/DashboardLayout"; // 🗂️ Admin dashboard layout wrapper
import Dashboard from "../pages/dashboard/Dashboard";             // 📊 Admin dashboard home
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks"; // 📚 Admin manages all books
import AddBook from "../pages/dashboard/addBook/AddBook";         // ➕ Add new book
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";  // ✏️ Update/edit book details
import UserDashboard from "../pages/dashboard/users/UserDashboard"; // 👤 Logged-in user's personal dashboard
  

const router = createBrowserRouter([
    {
      path: "/",                             // 🌍 Root route
      element: <App/>,                       // 🧩 Renders layout and <Outlet/>
      children: [                            // 👨‍👩‍👧‍👦 Nested children routes inside App layout
        {
            path: "/",                       // 🏠 Homepage
            element: <Home/>,
        },
        {
            path: "/orders",                 // 📦 Protected order page
            element: <PrivateRoute><OrderPage/></PrivateRoute>
        },
        {
            path: "/about",                  // ℹ️ About page
            element: <div>About</div>
        },
        {
          path: "/login",                    // 🔐 User login
          element: <Login/>
        },
        {
          path: "/register",                 // 📝 User registration
          element: <Register/>
        },
        {
          path: "/cart",                     // 🛒 Shopping cart
          element: <CartPage/>
        },
        {
          path: "/checkout",                 // 💳 Checkout page (protected)
          element: <PrivateRoute><CheckoutPage/></PrivateRoute>
        },
        {
          path: "/books/:id",                // 📘 Single book detail
          element: <SingleBook/>
        },
        {
          path: "/user-dashboard",           // 👤 User-specific dashboard (protected)
          element: <PrivateRoute><UserDashboard/></PrivateRoute>
        }
      ]
    },
    {
      path: "/admin",                        // 🔐 Admin login page route
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",                    // 🛠️ Admin dashboard base route
      element: <AdminRoute>
        <DashboardLayout/>                   // 🧱 Admin layout (Sidebar, Header etc.)
      </AdminRoute>,
      children:[                             // 👨‍💻 Admin dashboard child routes
        {
          path: "",                          // 📊 Admin dashboard home (default)
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-book",              // ➕ Add new book route
          element: <AdminRoute>
            <AddBook/>
          </AdminRoute>
        },
        {
          path: "edit-book/:id",             // ✏️ Edit existing book
          element: <AdminRoute>
            <UpdateBook/>
          </AdminRoute>
        },
        {
          path: "manage-books",              // 📚 View & manage all books
          element: <AdminRoute>
            <ManageBooks/>
          </AdminRoute>
        }
      ]
    }
  ]);

  export default router;