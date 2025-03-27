import React from "react";

function ROIDashboardFooter() {
  return (
    <footer className="flex flex-col justify-center px-20 py-px w-full text-gray-600 bg-white max-w-[1440px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-4 py-8 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <p className="py-1 my-auto text-sm">
            © 2025 Realize. All rights reserved.
          </p>
          <nav className="flex gap-7 py-1.5 text-base leading-none">
            <a href="#" className="grow">
              Privacy Policy
            </a>
            <a href="#" className="basis-auto">
              Terms of Service
            </a>
            <a href="#" className="">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default ROIDashboardFooter;
