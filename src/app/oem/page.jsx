"use client";
import OemFooter from "@/components/oem/OemFooter";
import OemHeader from "@/components/oem/OemHeader";
import OemInfoBanner from "@/components/oem/OemInfoBanner";
import OemIntegrationGrid from "@/components/oem/OemIntegrationGrid";
import OemStatusBar from "@/components/oem/OemStatusBar";
import React from "react";


const OEMIntegrations = () => {
  return (
    <section className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <main className="w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="pt-6 w-full bg-gray-50 max-md:max-w-full">
          <OemHeader />
          <OemInfoBanner />
          <OemIntegrationGrid />
          <OemStatusBar />
          <OemFooter />
        </div>
      </main>
    </section>
  );
};

export default OEMIntegrations;
