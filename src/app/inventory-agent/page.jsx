"use client";
import Header from "@/components/header/Header";
import InventoryDashboardCards from "@/components/inventoryAgent/InventoryDashboardCards";
import InventoryFooter from "@/components/inventoryAgent/InventoryFooter";
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
      <InventoryFooter />
    </main>
  );
}

export default InventoryAgentOverview;
