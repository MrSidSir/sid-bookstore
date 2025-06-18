import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login";
import Register from "../components/Register.jsx";
import CartPage from "../pages/books/CartPage"; // ✅ Path must be correct
import CheckoutPage from "../pages/books/CheckoutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div>Orders</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />, // ✅ Must be defined and imported
      },
      {
        path: "/checkout",
        element: <CheckoutPage/>, // ✅ Must be defined and imported
      },
    ],
  },
]);

export default router;
