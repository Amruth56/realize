import React from "react";

function ImplementationTrackerFooter() {
  return (
    <footer className="px-20 py-8 bg-white border-t border-solid max-md:p-6 max-sm:p-4">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-4">
        <p className="text-sm text-gray-600">
          © 2025 Realize. All rights reserved.
        </p>
        <nav className="flex gap-7 max-sm:gap-4">
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
}

export default ImplementationTrackerFooter;
