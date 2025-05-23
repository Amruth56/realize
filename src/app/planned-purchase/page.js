"use client";
import React from "react";
import PlannedPurchaseStatusIndicator from "@/components/plannedPurchase/PlannedPurchaseStatusIndicator";
import PlannedPurchaseChatAvatar from "@/components/plannedPurchase/PlannedPurchaseChatAvatar";
import PlannedPurchasePurchaseColumn from "@/components/plannedPurchase/PlannedPurchasePurchaseColumn";
import PlannedPurchaseQuarterlyProgress from "@/components/plannedPurchase/PlannedPurchaseQuarterlyProgress";
import PlannedPurchaseAIRecommendation from "@/components/plannedPurchase/PlannedPurchaseAIRecommendation";


function PlannedPurchases() {
  // In Review purchases data
  const inReviewPurchases = [
    {
      status: "In Review",
      dueDate: "Due Q1",
      title: "Cloud Storage Upgrade",
      description: "Additional 500TB storage for dev environment",
      amount: "$12,000",
      priority: "Priority: High",
    },

    {
      status: "In Review",
      dueDate: "Due Q2",
      title: "Developer Licenses",
      description: "25 new IDE licenses for new team members",
      amount: "$8,750",
      priority: "Priority: Medium",
    },
  ];

  // Approved purchases data
  const approvedPurchases = [
    {
      status: "Approved",
      dueDate: "Due Q1",
      title: "Security Suite Renewal",
      description: "Annual enterprise security suite license",
      amount: "$45,000",
      priority: "Priority: Critical",
    },
  ];

  // Scheduled purchases data
  const scheduledPurchases = [
    {
      status: "Scheduled",
      dueDate: "Due Q2",
      title: "Database Servers",
      description: "2x High-performance database servers",
      amount: "$28,000",
      priority: "Priority: High",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 m-2">Planned Purchase</h1>
      </div>

      <PlannedPurchaseAIRecommendation />
      <PlannedPurchaseQuarterlyProgress />

      <section className="flex gap-6 p-6 mb-6 max-md:flex-col">
        <PlannedPurchasePurchaseColumn
          title="In Review (2)"
          purchases={inReviewPurchases}
        />
        <PlannedPurchasePurchaseColumn
          title="Approved (1)"
          purchases={approvedPurchases}
        />
        <PlannedPurchasePurchaseColumn
          title="Scheduled (1)"
          purchases={scheduledPurchases}
        />
      </section>

      <PlannedPurchaseChatAvatar />
      <PlannedPurchaseStatusIndicator />
    </main>
  );
}

export default PlannedPurchases;
