"use client";
import Footer from "@/resuable/footer/Footer";
import Header from "@/resuable/header/Header";
import OemInfoBanner from "@/components/oem/OemInfoBanner";
import OemIntegrationGrid from "@/components/oem/OemIntegrationGrid";
import OemStatusBar from "@/components/oem/OemStatusBar";
import React from "react";


const OEMIntegrations = () => {
  return (
    <section className="overflow-hidden bg-white rounded-lg ">
      <main className="w-full bg-opacity-0 max-md:max-w-full">
        <div className="pt-6 w-full  max-md:max-w-full">
          <Header />
          <OemInfoBanner />
          <OemIntegrationGrid />
          <OemStatusBar />
          <Footer></Footer>
        </div>
      </main>
    </section>
  );
};

export default OEMIntegrations;
