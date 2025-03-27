"use client";
import React from "react";
import SignUpFormOtp from "@/components/signupotp/SignUpFormOtp";
import EnterpriseFeaturesOtp from "@/components/signupotp/EnterpriseFeaturesOtp";

function SignUpPageOtp() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <main className="flex justify-center items-center px-36 py-64 mx-auto w-full max-w-none min-h-screen max-md:px-6 max-md:py-12 max-md:max-w-[991px] max-sm:px-4 max-sm:py-6 max-sm:max-w-screen-sm">
        <SignUpFormOtp />
        <EnterpriseFeaturesOtp />
      </main>
    </>
  );
}

export default SignUpPageOtp;

