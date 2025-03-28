
"use client";
import SettingAutoTopupCard from "@/components/setting/SettingAutoTopupCard";
import SettingBalanceCard from "@/components/setting/SettingBalanceCard";
import SettingHeader from "@/components/setting/SettingHeader";
import SettingPaymentMethods from "@/components/setting/SettingPaymentMethods";
import SettingPaymentSettings from "@/components/setting/SettingPaymentSettings";
import SettingTransactionHistory from "@/components/setting/SettingTransactionHistory";
import SettingUsageCard from "@/components/setting/SettingUsageCard";
import React from "react";


function PaymentDashboard() {
  return (
    <main className="flex w-full bg-gray-50 min-h-[screen]">
      <section className="flex flex-col flex-1">
        <SettingHeader />
        <div className="gap-y-6 p-6">
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            <SettingBalanceCard />
            <SettingUsageCard />
            <SettingAutoTopupCard />
          </div>
          <SettingTransactionHistory />
          <SettingPaymentMethods />
          <SettingPaymentSettings />
        </div>
      </section>
    </main>
  );
}

export default PaymentDashboard;

