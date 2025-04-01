import React from "react";

function PlannedPurchaseFooter() {
  return (
    <footer className="px-20 py-8 bg-white max-sm:p-4">
      <div className="flex justify-between items-center mx-auto my-0 max-w-screen-xl max-sm:flex-col max-sm:gap-4 max-sm:text-center">
        <p className="text-sm text-gray-600">
          © 2025 Realize. All rights reserved.
        </p>
        <nav className="flex gap-7 max-sm:justify-center">
          <a href="#" className="text-base text-gray-600 no-underline">
            Privacy Policy
          </a>
          <a href="#" className="text-base text-gray-600 no-underline">
            Terms of Service
          </a>
          <a href="#" className="text-base text-gray-600 no-underline">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default PlannedPurchaseFooter;
