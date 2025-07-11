import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext"; // ✅ Correctly using auth

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const { currentUser, logout, loading } = useAuth(); // ✅ includes loading

  const handleLogOut = () => {
    logout(); // ✅ calls logout from AuthContext
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-screen-2xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 flex items-center gap-2"
          >
            <HiBars3CenterLeft className="text-2xl" />
            <span className="hidden sm:inline">SID Bookstore</span>
          </Link>

          <div className="relative hidden md:block">
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 border rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Right: Icons + Avatar/Login */}
        <div className="flex items-center gap-4 relative">
          {/* Heart Icon */}
          <button className="hidden sm:block text-gray-600 hover:text-red-500">
            <HiOutlineHeart className="text-xl" />
          </button>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm text-gray-600 hover:text-blue-600"
          >
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length > 0 ? cartItems.length : "0"}
            </span>
          </Link>

          {/* Avatar / Login */}
          {loading ? null : currentUser ? (
            <div>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img
                  src={currentUser.photoURL || avatarImg}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-blue-500"
                />
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <FaUserAlt className="text-xl text-gray-600 hover:text-blue-600" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
