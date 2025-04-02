"use client";
import AgentGrid from "@/components/dashboard/AgentGrid";
import AiBot from "@/components/dashboard/AiBot";
import Footer from "@/resuable/footer/Footer";
import SearchSection from "@/components/dashboard/SearchSection";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import Header from "@/resuable/header/Header";
import * as React from "react";
import AgentCard from "@/resuable/agentCard/AgentCard";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen bg-gray-50 ">
        <Header />
        <main>         
          <WelcomeSection />
          <SearchSection />
          <AgentGrid />
        </main>
        <AiBot />
        <Footer />
      </div>
    </>
  );
}

export default InputDesign;
