import React from "react";

function StatusFooter() {
  return (
    <footer className="px-20 py-8 mt-8 border-t border-solid max-sm:p-4">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:text-center">
        <div className="text-sm text-gray-600">
          © 2025 Realize. All rights reserved.
        </div>
        <nav className="flex gap-7 text-base text-gray-600">
          <a href="#" className="cursor-pointer">
            Privacy Policy
          </a>
          <a href="#" className="cursor-pointer">
            Terms of Service
          </a>
          <a href="#" className="cursor-pointer">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default StatusFooter;
