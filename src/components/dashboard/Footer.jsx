import React from "react";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center px-20 py-8 bg-white border-t border-solid max-md:px-10 max-md:py-8 max-sm:p-4">
      <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:gap-4 max-sm:text-center">
        <p className="text-sm text-gray-600">
          © 2025 Realize. All rights reserved.
        </p>
        <nav className="flex gap-7 max-sm:justify-center">
          <a href="#" className="text-base text-gray-600 cursor-pointer">
            Privacy Policy
          </a>
          <a href="#" className="text-base text-gray-600 cursor-pointer">
            Terms of Service
          </a>
          <a href="#" className="text-base text-gray-600 cursor-pointer">
            Contact
          </a>
        </nav>
      </div>      
    </footer>
  );
};

export default Footer;
