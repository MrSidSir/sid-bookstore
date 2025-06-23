import React from 'react'
import footerLogo from "../assets/footer-logo.png"; 
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 px-4">

      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
          </ul>
        </div>

        {/* Right Side - About + Contact */}
        <div className="md:w-1/2 w-full text-sm">
          <h3 className="text-lg font-semibold mb-2">About Sid-Bookstore</h3>
          <p className="mb-2">
            Sid-Bookstore is your trusted platform for discovering and ordering top-quality books online.
            We aim to deliver knowledge and joy to readers at the click of a button.
          </p>
          <p className="font-semibold">📞 Contact: <a href="tel:+917355534404" className="hover:text-primary">+91-7355534404</a></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a href="https://www.facebook.com/sayyad.irshad.92" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
          <a href="https://x.com/Mrsidsir4404" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/conceptcoachingclassesnewdelhi?igsh=eWxkcW9tcGV1bjFu" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
