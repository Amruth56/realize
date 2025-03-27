import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-20 py-8 bg-white border-t border-solid max-md:px-10 max-md:py-8 max-sm:p-4">
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
      <div className="flex absolute right-0 gap-3.5 items-center px-4 py-1.5 text-sm text-white bg-blue-600 bottom-[89px] rounded-[10px_0_0_0]">
        <div>Integration Status</div>
        <div>
          <i className="ti ti-dots" />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d39914e84d85c37858a537a0b4cd258af7aa1008"
        alt="Footer avatar"
        className="absolute w-20 h-20 rounded-full bottom-[130px] right-[26px]"
      />
    </footer>
  );
};

export default Footer;
