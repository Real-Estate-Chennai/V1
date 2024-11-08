// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-8">
        <a href="#facebook" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#twitter" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#linkedin" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#youtube" className="text-gray-400 hover:text-white">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#instagram" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* About Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a real estate platform helping you find your dream property. 
            Discover the best options in apartments, houses, and land.
          </p>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Property Listings</li>
            <li>Real Estate Consultancy</li>
            <li>Property Management</li>
            <li>Valuation Services</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/apartment" className="hover:text-white">Apartment</Link></li>
            <li><Link to="/land" className="hover:text-white">Land/Plots</Link></li>
            <li><Link to="/individual-house" className="hover:text-white">Individual House</Link></li>
            <li><Link to="/ongoing-projects" className="hover:text-white">Ongoing Projects</Link></li>
            <li><Link to="/commercial" className="hover:text-white">Commercial Property</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-2">
            Get in Touch with us, we would be more than happy to help.
          </p>
          <p className="text-gray-400">Phone: +91 98404 22265</p>
          <p className="text-gray-400">Email: contact@realestate.com</p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        <p>
          DISCLAIMER: IBIMEDIA technologies Private Limited is only an intermediary offering its platform to facilitate the transactions between Seller and Customer/Buyer/User and is not and cannot be a party to or control in any manner any transactions between the Seller and the Customer/Buyer/User. IBIMEDIA technologies Private Limited shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Seller and Customer/Buyer/User shall settle all such disputes without involving IBIMEDIA technologies Private Limited in any manner.
        </p>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Real Estate Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
