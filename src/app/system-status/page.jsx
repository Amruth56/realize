"use client";
import RecentActivity from "@/components/systemStatus/ActivityItem";
import AlertCategories from "@/components/systemStatus/AlertCategories";
import EventLog from "@/components/systemStatus/EventLog";
import StatusCards from "@/components/systemStatus/StatusCard";
import StatusFooter from "@/components/systemStatus/StatusFooter";
import StatusHeader from "@/components/systemStatus/StatusHeader";
import StatusMonitor from "@/components/systemStatus/StatusMonitor";
import StatusSystemHealthChart from "@/components/systemStatus/StatusSystemHealthChart";
import React from "react";


function SystemStatusDashboard() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen bg-white">
        <StatusHeader />
        <section className="px-20 py-8 bg-white max-md:p-4">
          <StatusMonitor />
          <StatusCards />

          <section className="flex gap-6 mb-8 max-md:flex-col max-sm:gap-4">
            <StatusSystemHealthChart />
            <AlertCategories />
            <RecentActivity />
          </section>

          <EventLog />
        </section>
        <StatusFooter />
      </main>
    </>
  );
}

export default SystemStatusDashboard;
