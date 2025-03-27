import React from "react";

function IntegrationFooter() {
  return (
    <footer className="flex flex-col py-1 pr-6 pl-20 mt-6 w-full leading-none bg-white max-md:px-5 max-md:max-w-full">
      <div className="self-end max-w-full text-sm font-medium text-white w-[136px]">
        <div className="gap-3.5 w-[120px]">Integration Status</div>
        <div className="z-10 gap-3.5 mt-0 w-[120px]">Integration Status</div>
      </div>
      <div className="flex flex-col justify-center px-8 py-6 mt-1 w-full max-w-screen-xl text-base text-gray-500 bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 w-full bg-opacity-0 max-md:max-w-full">
          <p>© 2025 Realize Platform. All rights reserved.</p>
          <nav className="flex flex-1 gap-7 py-1.5 bg-opacity-0">
            <a href="#" className="grow hover:text-gray-700">
              Privacy Policy
            </a>
            <a href="#" className="basis-auto hover:text-gray-700">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-700">
              Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default IntegrationFooter;
