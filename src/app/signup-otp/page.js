"use client";
import React from "react";
import SignUpFormOtp from "@/components/signupotp/SignUpFormOtp";
import EnterpriseFeatures from "@/components/signup/EnterpriseFeatures";
import SupportSection from "@/components/signup/SupportSection";

export default function SignUpPageOtp() {
  return (
    <div className="
      flex 
      items-center 
      justify-center 
      min-h-screen 
      bg-gradient-to-r 
      from-[#f8fafc] 
      to-white 
      p-4
    ">
      <main
        className="
          flex 
          overflow-hidden 
          rounded-2xl 
          shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)]
          w-[1152px]
          h-[800px]
          max-md:flex-col 
          max-md:w-full 
          bg-white
        "
      >
        {/* Left (white) section */}
        <section className="flex flex-col p-12 w-[560px] max-md:w-full max-sm:p-6">
          {/* Logo (optional) */}
          {/* <header className="h-12 mb-4">
            <Logo />
          </header> */}

          {/* OTP form component */}
          <SignUpFormOtp />
        </section>

        {/* Right (blue) section */}
        <section className="
          flex 
          flex-col 
          justify-between 
          p-12 
          bg-blue-600 
          w-[560px] 
          max-md:w-full 
          max-sm:p-6
        ">
          <EnterpriseFeatures />
          <SupportSection />
        </section>
      </main>
    </div>
  );
}
