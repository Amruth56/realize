"use client";
import InventoryDashboardCards from "@/components/inventoryAgent/InventoryDashboardCards";
import InventoryFooter from "@/components/inventoryAgent/InventoryFooter";
import InventoryHeader from "@/components/inventoryAgent/InventoryHeader";
import InventoryInfoBanner from "@/components/inventoryAgent/InventoryInfoBanner";
import InventoryStatusNotification from "@/components/inventoryAgent/InventoryStatusNotification";
import React from "react";


/**
 * Main component for the Inventory Agent Overview dashboard
 */
function InventoryAgentOverview() {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      <InventoryHeader />
      <InventoryInfoBanner />
      <InventoryDashboardCards />
      <InventoryFooter />
      <InventoryStatusNotification />
    </main>
  );
}

export default InventoryAgentOverview;
