"use client";
import React from "react";
import LoginForm from "@/components/login/LoginForm";
import LoginWelcomePanel from "@/components/login/LoginWelcomePanel";

function LoginPage() {
  return (
    <section className="
    flex 
    items-center 
    justify-center 
    min-h-screen 
    bg-gradient-to-r 
    from-[#f8fafc] 
    to-white 
    p-4
  ">
      <main className="
          flex
          overflow-hidden
          rounded-2xl
          shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)]
          w-[1152px]
          h-[800px] /* adjust as needed */
          bg-white
          max-md:flex-col
          max-md:w-full
          max-md:h-auto
          max-md:max-w-[991px]
          max-sm:max-w-screen-sm
          max-sm:shadow-none
        ">
        <div className="flex justify-between w-full" >
          <LoginForm />
          <LoginWelcomePanel />
        </div>
      </main>
    </section>
  );
}

export default LoginPage;
