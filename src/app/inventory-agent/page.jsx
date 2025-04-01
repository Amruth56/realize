"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InventoryDashboardCards from "@/components/inventoryAgent/InventoryDashboardCards";
import InventoryInfoBanner from "@/components/inventoryAgent/InventoryInfoBanner";
import React from "react";


/**
 * Main component for the Inventory Agent Overview dashboard
 */
function InventoryAgentOverview() {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      <Header />
      <InventoryInfoBanner />
      <InventoryDashboardCards />
      <Footer />
    </main>
  );
}

export default InventoryAgentOverview;
