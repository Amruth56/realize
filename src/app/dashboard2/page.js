"use client";
import SearchSection from "@/components/dashboard/SearchSection";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import AgentsGrid2 from "@/components/dashboard2/AgentsGrid2";
import Header from "@/components/header/Header";
import Footer from "@/components/ImplementationTrackerHeader.jsx/Footer";
import React from "react";


const RealizeDashboard = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Header />
      <main className="flex-1">
        <WelcomeSection />
        <SearchSection />
        <AgentsGrid2 />
      </main>
      <Footer />
    </div>
  );
};

export default RealizeDashboard;
