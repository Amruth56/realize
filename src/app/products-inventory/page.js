"use client";

import Header from "@/resuable/header/Header";
import Footer from "@/resuable/footer/Footer";

import {
  FaUsers,
  FaUser,
  FaChartPie,
  FaFileExport,
  FaFilter,
  FaDesktop,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import OverViewCard from "@/resuable/overViewCard/OverViewCard";

export default function MicrosoftInventory() {
  const overviewStats = [
    {
      title: "Total Products",
      value: "12",
      percentage: "+2 this month",
      icon: <FaChartPie />,
    },
    {
      title: "Total Licenses",
      value: "2,450",
      percentage: "🟢 Active users",
      icon: <FaUsers />,
    },
    {
      title: "Assigned Licenses",
      value: "1,890",
      percentage: "77% utilized",
      icon: <FaUser />,
    },
    {
      title: "Available Licenses",
      value: "560",
      percentage: "🔶 Consider redistribution",
      icon: <FaChartPie />,
    },
  ];

  const licenseCards = [
    {
      name: "Microsoft 365 E3",
      category: "Enterprise Suite",
      icon: <FaDesktop />,
      utilization: 78,
      total: 1000,
      assigned: 780,
    },
    {
      name: "Microsoft Intune",
      category: "Device Management",
      icon: <FaMobileAlt />,
      utilization: 92,
      total: 800,
      assigned: 736,
    },
    {
      name: "Azure AD Premium",
      category: "Identity Management",
      icon: <FaShieldAlt />,
      utilization: 65,
      total: 650,
      assigned: 422,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow  px-6 py-8">
        {/* Page Title */}
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Microsoft Products Inventory
        </h1>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full sm:flex-1 border border-gray-300 rounded-md p-3 text-sm"
          />
          <div className="flex gap-2">
            <button className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100 flex items-center gap-2">
              <FaFilter />
              Filter
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 flex items-center gap-2">
              <FaFileExport />
              Export
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {overviewStats.map((stat, idx) => (
            <OverViewCard key={idx} {...stat} />
          ))}
        </div>

        {/* License Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {licenseCards.map((product, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h2 className="text-base font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
                <div className="text-blue-600 text-lg">{product.icon}</div>
              </div>

              {/* Utilization */}
              <p className="text-sm text-gray-500 mb-1">License Utilization</p>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${product.utilization}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {product.utilization}%
              </p>

              {/* Totals */}
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <span>
                  <strong>Total:</strong> {product.total}
                </span>
                <span>
                  <strong>Assigned:</strong> {product.assigned}
                </span>
              </div>

              <button className="text-sm text-blue-600 hover:underline font-medium">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
