"use client";
import AgentsGrid2 from "@/components/dashboard2/AgentsGrid2";
import Footer2 from "@/components/dashboard2/Footer2";
import Header2 from "@/components/dashboard2/Header2";
import SearchSection2 from "@/components/dashboard2/SearchSection2";
import WelcomeSection2 from "@/components/dashboard2/WelcomeSection2";
import React from "react";


const RealizeDashboard = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Header2 />
      <main className="flex-1">
        <WelcomeSection2 />
        <SearchSection2 />
        <AgentsGrid2 />
      </main>
      <Footer2 />
    </div>
  );
};

export default RealizeDashboard;
