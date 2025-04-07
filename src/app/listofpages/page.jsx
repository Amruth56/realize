"use client";
import Footer from "@/resuable/footer/Footer";
import Header from "@/resuable/header/Header";
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
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/grc-access-now");
        }}
      >
        grc-access-now
      </button>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/grc-risk-analysis");
        }}
      >
        grc-risk-analysis
      </button>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/grc-connection-popup");
        }}
      >
        grc-connection-popup
      </button>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={() => {
          router.push("/grc-final-outcome");
        }}
      >
        grc-final-outcome
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
      <button
        className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/insurance");
        }}
      >
        insurance
      </button>

      <button
        className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/manual-assessment");
        }}
      >
        manual assessment
      </button>
      <button
        className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/incident-history");
        }}
      >
        incident history
      </button>
      <button
        className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/insurance-step3");
        }}
      >
        insurance-step3
      </button>
      <button
        className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/insurance-step4");
        }}
      >
        insurance-step4
      </button>
      <button
        className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/insurance-step5");
        }}
      >
        insurance-step5
      </button>
      <button
        className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/insurance-final");
        }}
      >
        insurance-final
      </button>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/assessment-agents");
        }}
      >
        assessment-agents
      </button>
      <button
        className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/oem-integration");
        }}
      >
        oem-integration
      </button>
      <button
        className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/products-inventory");
        }}
      >
        products-inventory
      </button>
      <button
        className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/implementation-status");
        }}
      >
        implementation-status
      </button>
      <button
        className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        onClick={() => {
          router.push("/analytic-agent");
        }}
      >
        analytic-agent
      </button>
      <Footer></Footer>
    </div>
  );
}
