import React from "react";

const Footer2 = () => {
  return (
    <footer className="px-20 py-8 bg-white border max-md:px-10 max-sm:px-5">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl max-sm:flex-col max-sm:gap-6">
        <p className="text-sm text-gray-600">
          © 2025 Realize. All rights reserved.
        </p>
        <nav className="flex gap-7 text-base text-gray-600">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer2;
