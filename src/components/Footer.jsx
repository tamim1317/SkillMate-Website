import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p>Email: support@skillmate.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* 🌐 Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500 duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-600 duration-200" />
            </a>
          </div>
        </div>

        {/* 🔒 Privacy Policy */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Privacy & Policy</h3>
          <p>
            We respect your privacy and are committed to protecting your personal data.Read our <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SkillMate. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
