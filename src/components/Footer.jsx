import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
          <p>Email: support@skillmate.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-600 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Privacy & Policy</h3>
          <p className="text-gray-400">
            We respect your privacy and are committed to protecting your personal data.
            Read our <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SkillMate. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;