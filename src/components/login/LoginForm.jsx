"use client";
import React, { useState } from "react";
// import Logo from "./Logo";

function LoginForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Sending OTP to:", email);
  };

  return (
    <div className="flex flex-col p-12 w-1/2 max-md:w-full">
      {/* <Logo /> */}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-20">
        <header className="flex flex-col gap-2.5 mb-11">
          <h1 className="text-2xl font-bold leading-6 text-gray-900">
            Sign in to your Realize account
          </h1>
          <p className="text-base leading-6 text-gray-500">
            Enter your credentials to access your dashboard
          </p>
        </header>

        <div className="flex flex-col gap-2 mb-6">
          <label
            htmlFor="email-phone"
            className="text-sm font-medium text-gray-700"
          >
            Email or Phone Number
          </label>
          <div className="flex items-center px-4 w-full bg-white rounded-lg border border-gray-300 h-[50px]">
            <input
              id="email-phone"
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="john@company.com or 9111111111"
              className="text-base text-gray-400 bg-transparent border-none w-full outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-12 text-base text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send OTP
        </button>

        <div className="mt-6 text-sm text-center">
          <span className="text-gray-500">Don't have an account? </span>
          <button
            type="button"
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
