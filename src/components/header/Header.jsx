"use client";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 h-[80px] bg-white">
      <div>
        <Image
          src="/realizelogo.png"
          width={150}
          height={150}
          alt="Realize Logo"
        />
      </div>
      <div className="flex gap-6 items-center max-sm:hidden mr-10">
          <a href="#" className="text-base text-gray-600 cursor-pointer">
            Documentation
          </a>
          <a href="#" className="text-base text-gray-600 cursor-pointer">
            Support
          </a>
          <div className="flex gap-2 items-center cursor-pointer">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b35e72e25cbd9d23a2ce400aa1c9b3fb4f1a9023"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-black">
              <i className="ti ti-chevron-down" />
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Header;
