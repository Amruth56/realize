"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useRouter } from "next/navigation";

export default function ListOfPages() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-3 p-4">
        <Header></Header>
      <button
        className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition cursor-pointer"
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Home
      </button>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={() => {
          router.push("./cyber-insurance");
        }}
      >
        Cyber Insurance
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={() => {
          router.push("/grc-insights");
        }}
      >
        GRC Insights
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={() => {
          router.push("/implementation-tracker");
        }}
      >
        Implementation Tracker
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={() => {
          router.push("/integration");
        }}
      >
        Integration
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={() => {
          router.push("/inventory-agent");
        }}
      >
        Inventory Agent
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={() => {
          router.push("/oem");
        }}
      >
        OEM
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={() => {
          router.push("/peer-comparision");
        }}
      >
        Peer Comparison
      </button>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/planned-purchase");
        }}
      >
        Planned Purchase
      </button>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/purchase-assessment");
        }}
      >
        Purchase Assessment
      </button>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/purchase-inventory");
        }}
      >
        Purchase Inventory
      </button>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/roidashboard");
        }}
      >
        ROI Dashboard
      </button>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/setting");
        }}
      >
        Settings
      </button>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/system-status");
        }}
      >
        System Status
      </button>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/utilization");
        }}
      >
        Utilization
      </button>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/value-realization");
        }}
      >
        Value Realization
      </button>
      <Footer></Footer>
    </div>
  );
}
