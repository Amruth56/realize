"use client";

import InventoryDashboardCards from "@/components/inventoryAgent/InventoryDashboardCards";
import InventoryInfoBanner from "@/components/inventoryAgent/InventoryInfoBanner";
import React from "react";


/**
 * Main component for the Inventory Agent Overview dashboard
 */
function InventoryAgentOverview() {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      <InventoryInfoBanner />
      <InventoryDashboardCards />
    </main>
  );
}

export default InventoryAgentOverview;
