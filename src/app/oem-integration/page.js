"use client";

import Header from "@/resuable/header/Header";
import Footer from "@/resuable/footer/Footer";
import OEMCard from "@/resuable/oemCard/OEMCard";

import { faMicrosoft, faOracle } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

export default function OEMIntegration() {
  const oems = [
    {
      name: "Microsoft",
      description:
        "Comprehensive enterprise solutions with deep Azure integration capabilities.",
      icon: faMicrosoft,
      tags: ["Enterprise", "Cloud-Native"],
    },
    {
      name: "SAP",
      description:
        "Leading ERP and business process management solutions.",
      icon: faServer,
      tags: ["Financial Services", "ERP"],
    },
    {
      name: "Oracle",
      description:
        "Database and enterprise software solutions with cloud capabilities.",
      icon: faOracle,
      tags: ["Database", "Enterprise"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-gray-800">
            Select Your OEM for Integration
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Choose the OEM that best aligns with your industry and integration needs to begin your
            implementation assessment.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-10">
          <input
            type="text"
            placeholder="Search OEM providers..."
            className="flex-1 border border-gray-300 rounded-md p-3 text-sm"
          />
          <select className="w-full sm:w-60 border border-gray-300 rounded-md p-3 text-sm">
            <option>All Industries</option>
            <option>Cloud</option>
            <option>ERP</option>
            <option>Database</option>
          </select>
        </div>

        {/* OEM Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {oems.map((oem, index) => (
            <OEMCard key={index} {...oem} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
