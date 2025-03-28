"use client";
import AgentGrid from "@/components/dashboard/AgentGrid";
import Footer from "@/components/dashboard/Footer";
import Pagination from "@/components/dashboard/Pagination";
import SearchSection from "@/components/dashboard/SearchSection";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import Header from "@/components/header/Header";
import * as React from "react";


function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <WelcomeSection />
          <SearchSection />
          <AgentGrid />
          <Pagination />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default InputDesign;
