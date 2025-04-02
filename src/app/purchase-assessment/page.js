"use client";
import Footer from "@/resuable/footer/Footer";
import Header from "@/resuable/header/Header";
import PurchaseAIReviewSection from "@/components/purchaseAssessment/PurchaseAIReviewSection";
import PurchaseBeforeAfterMetricsSection from "@/components/purchaseAssessment/PurchaseBeforeAfterMetricsSection";
import PurchaseMetricsSection from "@/components/purchaseAssessment/PurchaseMetricsSection";
import PurchaseSurveyInsightsSection from "@/components/purchaseAssessment/PurchaseSurveyInsightsSection";
import React from "react";


function PurchaseAssessment() {
  return (
    <article className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="w-full  bg-opacity-0 max-md:max-w-full">
        <section className="pb-16 w-full bg-gray-50 max-md:max-w-full">
          <Header />
          <div>
        <h1 className="text-2xl font-semibold text-gray-800 m-2"> Purchase Assessment</h1>
      </div>
          <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
            <main className="px-6 py-8 mr-8 bg-opacity-0 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
              <PurchaseAIReviewSection />
              <PurchaseMetricsSection />
              <div className="p-0.5 mt-7 bg-opacity-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-6/12 max-md:ml-0 max-md:w-full">
                    <PurchaseSurveyInsightsSection />
                  </div>
                  <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <PurchaseBeforeAfterMetricsSection />
                  </div>
                </div>
              </div>
            </main>
            
          </div>
        </section>
        <div className="flex flex-col py-px w-full rounded-none max-md:max-w-full">
          <div className="flex flex-col justify-center items-end self-end px-16 py-0.5 max-w-full text-sm font-medium leading-none text-white rounded-xl bg-opacity-0 w-[286px] max-md:pl-5 max-md:mr-2.5">
            <div className="gap-3.5 w-[120px]">Integration Status</div>
          </div>
          <Footer />
        </div>
      </div>
    </article>
  );
}

export default PurchaseAssessment;
