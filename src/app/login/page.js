"use client";
import LoginForm from "@/components/login/LoginForm";
import WelcomePanel from "@/components/login/WelcomePanel";
import React from "react";

function LoginPage() {
  return (
    <section className="flex flex-col items-center w-full bg-[linear-gradient(90deg,#FFF_0%,#EFF6FF_100%)] min-h-screen">
      <main className="flex justify-center items-center my-96 bg-white rounded-2xl shadow-lg h-[686px] w-[896px] max-md:mx-5 max-md:my-10 max-md:w-full max-sm:mx-4 max-sm:my-5">
        <div className="flex justify-between size-full">
          <LoginForm />
          <WelcomePanel />
        </div>
      </main>
    </section>
  );
}

export default LoginPage;
