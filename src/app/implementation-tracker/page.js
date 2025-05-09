"use client";
import ImplementationTrackerImplementationTimeline from "@/components/ImplementationTrackerHeader.jsx/ImplementationTimeline";
import ImplementationTrackerProfileSummary from "@/components/ImplementationTrackerHeader.jsx/ImplementationTrackerProfileSummary";
import ImplementationTrackerProjectBoard from "@/components/ImplementationTrackerHeader.jsx/ImplementationTrackerProjectBoard";
import React from "react";



function ImplementationTracker() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen bg-gray-50">

        <div>
              <h1 className="text-2xl font-semibold text-gray-800 m-2">
                Implementation Tracker
              </h1>
            </div>

        <section className="px-20 py-6 max-md:p-6 max-sm:p-4">
          <ImplementationTrackerProfileSummary />
        </section>
        <ImplementationTrackerProjectBoard />
        <ImplementationTrackerImplementationTimeline />
      </main>
    </>
  );
}

export default ImplementationTracker;
