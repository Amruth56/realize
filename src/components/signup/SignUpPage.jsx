"use client";
import React from "react";
import SignUpForm from "./SignUpForm";
import EnterpriseFeatures from "./EnterpriseFeatures";
import SupportSection from "./SupportSection";
// import Logo from "./Logo";

function SignUpPage() {
  return (
    <main className="flex overflow-hidden mx-auto max-w-none bg-white rounded-2xl h-[928px] shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)] w-[1152px] max-md:flex-col max-md:w-full max-md:h-auto max-md:max-w-[991px] max-sm:max-w-screen-sm max-sm:shadow-none">
      <section className="flex flex-col gap-16 p-12 w-[560px] max-md:w-full max-sm:p-6">
        <header className="h-12">
          {/* <Logo /> */}
        </header>
        <SignUpForm />
      </section>

      <section className="flex flex-col justify-between p-12 bg-blue-600 w-[560px] max-md:w-full max-sm:p-6">
        <EnterpriseFeatures />
        <SupportSection />
      </section>
    </main>
  );
}

export default SignUpPage;
