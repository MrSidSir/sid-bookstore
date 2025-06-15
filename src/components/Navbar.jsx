import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import avatarImg from "../assets/avatar.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = true;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-screen-2xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <HiBars3CenterLeft className="text-2xl" />
            <span className="hidden sm:inline">SID Bookstore</span>
          </Link>

          {/* Search Box */}
          <div className="relative hidden md:block">
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 border rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Right: Icons & Avatar */}
        <div className="flex items-center gap-4">
          {/* Heart Icon */}
          <button className="hidden sm:block text-gray-600 hover:text-red-500">
            <FaHeartbeat className="text-xl" />
          </button>

          {/* Cart Icon */}
          <Link to="/cart" className="relative text-gray-600 hover:text-blue-600">
            <FaCartShopping className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          {/* Avatar / Login */}
          {currentUser ? (
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img
                src={avatarImg}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-blue-500"
              />
            </button>
          ) : (
            <Link to="/login">
              <FaUserAlt className="text-xl text-gray-600 hover:text-blue-600" />
            </Link>
          )}
        </div>
      </nav>

      {/* Optional Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-4 top-16 bg-white border rounded-md shadow-lg w-40 py-2 z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Profile
          </Link>
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            onClick={() => console.log("Logout")}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
