"use client";
import React from "react";
import SignUpFormOtp from "@/components/signupotp/SignUpFormOtp";
// import EnterpriseFeaturesOtp from "@/components/signupotp/EnterpriseFeaturesOtp";
import EnterpriseFeatures from "@/components/signup/EnterpriseFeatures";
import SupportSection from "@/components/signup/SupportSection";
// If you have a "Need help?" section, import it here:
// import SupportSection from "@/components/signupotp/SupportSection";

export default function SignUpPageOtp() {
  return (
    // Outer wrapper: gradient background, centered content
    <div
      className="
        flex
        items-center
        justify-center
        min-h-screen
        bg-gradient-to-r
        from-[#f8fafc]
        to-white
        p-4
      "
    >
      {/* Main card: white background, 2 columns, same style as your first page */}
      <main
        className="
          flex
          overflow-hidden
          rounded-2xl
          shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)]
          w-[1152px]
          h-[928px] /* adjust as needed */
          bg-white
          max-md:flex-col
          max-md:w-full
          max-md:h-auto
          max-md:max-w-[991px]
          max-sm:max-w-screen-sm
          max-sm:shadow-none
        "
      >
        {/* LEFT SIDE (White) */}
        <section
          className="
            flex
            flex-col
            gap-16F
            w-[560px]
            max-md:w-full
            max-sm:p-6
          "
        >
          {/* Optional Logo */}
          <header className="h-12">{/* <Logo /> */}</header>

          {/* Your OTP Sign-Up Form */}
          <SignUpFormOtp />
        </section>

        {/* RIGHT SIDE (Blue) */}
        <section
          className="
            flex
            flex-col
            justify-between
            p-12
            bg-blue-600
            w-[560px]
            max-md:w-full
            max-sm:p-6
          "
        >
          <EnterpriseFeatures />
          <SupportSection />
        </section>
      </main>
    </div>
  );
}
