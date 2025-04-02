"use client";
import Footer from "@/resuable/footer/Footer";
import Header from "@/resuable/header/Header";
import PurchaseInventoryAIInsights from "@/components/purchaseinventory/PurchaseInventoryAIInsights";
import PurchaseInventoryChartSection from "@/components/purchaseinventory/PurchaseInventoryChartSection";
import PurchaseInventoryFilterControls from "@/components/purchaseinventory/PurchaseInventoryFilterControls";
import React from "react";

import OverViewCard from "@/resuable/overViewCard/OverViewCard";
import { FaDollarSign, FaKey, FaBuilding, FaClock } from "react-icons/fa";


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
            <div className= "flex gap-4 my-4 justify-center">
          <OverViewCard
            title="Total Spend"
            value="2,322"
            percentage="+12% from last week"
            icon={<FaDollarSign />}
          />
          <OverViewCard
            title="Active Licenses"
            value="$84,232"
            percentage="+8% from last month"
            icon={<FaKey />}
          />
          <OverViewCard
            title="Vendores"
            value="16"
            percentage="4 in progress"
            icon={<FaBuilding />}
          />
          <OverViewCard
          title="Renewal Due"
          value="14"
          percentage="In next 30 days"
          icon ={<FaClock/>}
          />
          </div>
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
