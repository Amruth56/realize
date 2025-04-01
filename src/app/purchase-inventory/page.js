"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PurchaseInventoryAIInsights from "@/components/purchaseinventory/PurchaseInventoryAIInsights";
import PurchaseInventoryChartSection from "@/components/purchaseinventory/PurchaseInventoryChartSection";
import PurchaseInventoryFilterControls from "@/components/purchaseinventory/PurchaseInventoryFilterControls";
import PurchaseInventoryMetricsCards from "@/components/purchaseinventory/PurchaseInventoryMetricsCards";
import React from "react";


function PurchaseInventoryDashboard() {
  return (
    <div className="">
      <div className="flex flex-col w-full bg-gray-50 max-md:max-w-full">
        <Header />
        <div>
        <h1 className="text-2xl font-semibold text-gray-800 m-2">Purchase Inventory</h1>
      </div>
        <main className="flex flex-wrap gap-1.5 self-end pt-8 pb-5 pl-6  max-md:pl-5 max-md:mr-2.5">
          <div className="grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <PurchaseInventoryAIInsights />
            <PurchaseInventoryFilterControls />
            <PurchaseInventoryMetricsCards />
            <PurchaseInventoryChartSection />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/0c843ee053405cdb9a6cd5d3a42f0235e2a720de?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-end w-20 rounded-full aspect-square mt-[1240px] max-md:mt-10"
            alt="Support button"
          />
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PurchaseInventoryDashboard;
