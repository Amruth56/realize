
"use client";
import SettingHeader from "@/components/setting/SettingHeader";
import SettingPaymentMethods from "@/components/setting/SettingPaymentMethods";
import SettingPaymentSettings from "@/components/setting/SettingPaymentSettings";
import SettingTransactionHistory from "@/components/setting/SettingTransactionHistory";
import React from "react";
import OverViewCard from "@/resuable/overViewCard/OverViewCard";
import { FaCoins, FaArrowUp, FaBolt } from "react-icons/fa";



function PaymentDashboard() {
  return (
    <main className="flex w-full bg-gray-50 min-h-[screen]">
      <section className="flex flex-col flex-1">
        <SettingHeader />
        <div className="gap-y-6 p-6">
        <div className= "flex gap-4 my-4 justify-center">
          <OverViewCard
            title="Current Balance"
            value="2,450"
            percentage="Avaliable Coins"
            icon={<FaCoins />}
          />
          <OverViewCard
            title="Monthly Usage"
            value="1,280"
            percentage="Coins Used This Month"
            icon={<FaArrowUp />}
          />
          <OverViewCard
            title="Auto Top-Up"
            value=""
            percentage="Add More Coins"
            icon={<FaBolt />}
          />
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

