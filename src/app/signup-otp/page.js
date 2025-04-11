"use client";

import React from "react";
import EnterpriseFeatures from "@/components/signup/EnterpriseFeatures";
import SupportSection from "@/components/signup/SupportSection";
import SignUpFormOtp from "@/components/signupotp/SignUpFormOtp";

export default function SignUpPageOtp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#f8fafc] to-white p-4">
      <main className="flex overflow-hidden rounded-2xl shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)] w-[1152px] h-[800px] max-md:flex-col max-md:w-full bg-white">
        {/* Left section - White */}
        <section className="flex flex-col p-12 w-[560px] max-md:w-full max-sm:p-6 justify-start">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/realizeLogo.png"
              alt="Realize Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* SignUp Form */}
          <SignUpFormOtp className="my-10" />
        </section>

        {/* Right section - Blue */}
        <section
          className="flex flex-col justify-between p-12 text-white w-[560px] max-md:w-full max-sm:p-6"
          style={{
            background:
              "linear-gradient(90deg, rgb(88, 131, 224) 0%, rgba(37, 99, 235, 1) 100%)",
          }}
        >
          <EnterpriseFeatures />
          <SupportSection />
        </section>
      </main>
    </div>
  );
}
