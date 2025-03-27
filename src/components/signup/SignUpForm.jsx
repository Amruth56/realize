"use client";
import React from "react";

function SignUpForm() {
  return (
    <div className="flex flex-col gap-6">
      <header className="mb-4">
        <h1 className="mb-2.5 text-3xl font-bold leading-9 text-gray-900">
          Create your Realize account
        </h1>
        <p className="text-base leading-5 text-gray-600">
          Start realizing your tech investments with AI
        </p>
      </header>

      <form className="flex flex-col gap-4">
        <div className="flex gap-4 max-sm:flex-col">
          <div className="flex flex-col flex-1 gap-1">
            <label
              htmlFor="firstName"
              className="text-sm font-medium leading-5 text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              className="px-4 py-3.5 text-base text-gray-900 rounded-lg border border-gray-300 border-solid"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label
              htmlFor="lastName"
              className="text-sm font-medium leading-5 text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              className="px-4 py-3.5 text-base text-gray-900 rounded-lg border border-gray-300 border-solid"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-1">
          <label
            htmlFor="emailPhone"
            className="text-sm font-medium leading-5 text-gray-700"
          >
            Email or Phone Number
          </label>
          <input
            id="emailPhone"
            type="text"
            placeholder="john@company.com or 9111111111"
            className="px-4 py-3.5 text-base text-gray-900 rounded-lg border border-gray-300 border-solid"
          />
        </div>
      </form>

      <button
        type="submit"
        className="p-3.5 mt-6 text-base font-medium text-white bg-blue-600 rounded-lg cursor-pointer border-none"
      >
        Send OTP
      </button>

      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 no-underline">
          Sign in
        </a>
      </p>
    </div>
  );
}

export default SignUpForm;
