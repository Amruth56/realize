"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { FaCoins, FaUser, FaMoneyCheck, FaKey, FaHistory, FaCog, FaClipboard, FaBell, FaSyncAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const router = useRouter();
  const [showCoins, setShowCoins] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const coinRef = useRef(null);
  const profileRef = useRef(null);
  const [coinBalance, setCoinBalance] = useState(834);

  const coinPacks = [
    { amount: 100, price: 5 },
    { amount: 250, price: 10, label: "Best Value" },
    { amount: 500, price: 18 },
  ];

  // Close popups on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (coinRef.current && !coinRef.current.contains(e.target)) {
        setShowCoins(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className=" pl-12 relative flex items-center justify-between w-full px-4 py-2 h-[80px] bg-white shadow-sm z-50">
      <div className="cursor-pointer">
        {/* <Image
          src="/realizeLogo.png"
          width={150}
          height={150}
          alt="Realize Logo"
          onClick={() => router.push("/dashboard")}
        /> */}    
        <img
          src="/realizeLogo.png"
          alt="Realize Logo"
          className=" rounded-lg"
        />
      </div>

      <div className="flex gap-6 items-center max-sm:hidden mr-10">
        {/* Coin Balance Button + Popup */}
        <div ref={coinRef} className="relative">
          <div
            onClick={() => {
              setShowCoins((prev) => !prev);
              setShowProfileDropdown(false); // Close profile dropdown when opening coins
            }}
            className="text-base text-gray-600 cursor-pointer bg-white shadow-md rounded-full px-4 py-2"
          >
            <h1 className="text-black font-semibold">
              <span className="text-yellow-600 text-2xl mr-1">{coinBalance}</span> Coins
            </h1>
          </div>

          {showCoins && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl z-50">
              <div className="p-4 text-center">
                <h2 className="font-bold text-lg">
                  You have <span className="text-yellow-500">{coinBalance} Coins</span>
                </h2>
                <p className="text-gray-500 text-sm">
                  Balance available for services
                </p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold">
                  Buy More Coins
                </button>
              </div>

              <div className="divide-y">
                {coinPacks.map((pack, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center px-4 py-3 ${
                      pack.label ? "bg-blue-50 rounded-lg" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FaCoins className="text-yellow-500 text-xl" />
                      <div>
                        <p className="font-semibold text-sm">{pack.amount} Coins</p>
                        <p className="text-xs text-gray-500">${pack.price}</p>
                      </div>
                    </div>
                    {pack.label && (
                      <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded font-medium">
                        {pack.label}
                      </span>
                    )}
                    <div className="text-gray-400 text-lg font-bold">&gt;</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center px-4 py-3">
                <input 
                  type="checkbox" 
                  id="useCoins" 
                  className="mr-2"
                />
                <label htmlFor="useCoins" className="text-xs text-gray-500">
                  Use coins to access premium features
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Nav Links */}
        <a href="/listofpages" className="text-base text-gray-600 cursor-pointer hover:text-blue-500">
          List of Pages
        </a>
        <a href="#" className="text-base text-gray-600 cursor-pointer">
          Documentation
        </a>
        <a href="#" className="text-base text-gray-600 cursor-pointer">
          Support
        </a>

        {/* Profile Dropdown */}
        <div ref={profileRef} className="relative">
          <div
            onClick={() => {
              setShowProfileDropdown((prev) => !prev);
              setShowCoins(false); // Close coins dropdown when opening profile
            }}
            className="flex gap-2 items-center cursor-pointer"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b35e72e25cbd9d23a2ce400aa1c9b3fb4f1a9023"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-black">
              <i className="ti ti-chevron-down" />
            </div>
          </div>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50">
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-medium text-gray-900">Mona Kumari</p>
                <p className="text-xs text-gray-500">Customer Admin</p>
              </div>
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center hover:text-black"> <FaUser className="text-gray-400" />My Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center hover:text-black"> <FaMoneyCheck className="text-gray-400"/> Payment</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center hover:text-black"> <FaKey className="text-gray-400"/> License Dashboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center hover:text-black"> <FaHistory className="text-gray-400"/> Activity History</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center hover:text-black"> <FaClipboard className="text-gray-400"/> My Requests</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center hover:text-black"> <FaCog className="text-gray-400"/> Settings</a>
              </div>
              <div className="py-1 border-t">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center hover:text-black"> <FaSyncAlt className="text-gray-400"/> Switch Account</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center hover:text-black"> <FaBell className="text-gray-400"/> Notifications</a>
              </div>
              <div className="py-1 border-t">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex gap-3 items-center text-red-500"> <FaSignOutAlt/> Log Out</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;