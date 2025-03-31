import React from "react";

/**
 * Footer component with links
 */
function InventoryFooter() {
  return (
    <footer className="flex justify-center items-center px-20 border border-gray-100 h-[53px] max-md:px-10 max-sm:px-5">
      <nav className="flex gap-6 justify-center items-center w-full max-w-screen-xl">
        <a href="#" className="text-sm text-gray-600">
          Privacy Policy
        </a>
        <a href="#" className="text-sm text-gray-600">
          Terms of Service
        </a>
        <a href="#" className="text-sm text-gray-600">
          Contact
        </a>
      </nav>
    </footer>
  );
}

export default InventoryFooter;
