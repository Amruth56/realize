
"use client";
import React from "react";
import OTPInput from "./OTPInput";
// import Logo from "./Logo";

function SignUpFormOtp() {
  return (
    <section className="flex flex-col gap-36 px-12 pt-12 pb-40 w-[560px] max-md:w-full max-sm:px-6 max-sm:py-8">
      {/* <Logo /> */}

      <form className="flex flex-col gap-6">
        <div className="flex gap-4 mb-4 max-sm:flex-col">
          <div className="flex flex-col flex-1 gap-1">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              className="px-4 py-0 text-base rounded-lg border border-gray-300 border-solid h-[50px] text-neutral-900"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              className="px-4 py-0 text-base rounded-lg border border-gray-300 border-solid h-[50px] text-neutral-900"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-1 w-full">
          <label
            htmlFor="emailPhone"
            className="text-sm font-medium text-gray-700"
          >
            Email or Phone Number
          </label>
          <input
            id="emailPhone"
            type="text"
            placeholder="john@company.com or 9111111111"
            className="px-4 py-0 text-base rounded-lg border border-gray-300 border-solid h-[50px] text-neutral-900"
          />
        </div>

        <OTPInput />

        <button
          type="button"
          className="h-12 text-base font-medium text-white bg-blue-600 rounded-lg cursor-pointer border-[none]"
        >
          Resend OTP
        </button>

        <div className="flex gap-3 items-center mx-0 my-4">
          <div className="relative w-6 h-6">
            <input type="checkbox" id="terms" className="sr-only" />
            <label htmlFor="terms" className="cursor-pointer">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="checkbox-icon"
              >
                <path
                  d="M3.5 7.8C3.5 6.11984 3.5 5.27976 3.82698 4.63803C4.1146 4.07354 4.57354 3.6146 5.13803 3.32698C5.77976 3 6.61984 3 8.3 3H16.7C18.3802 3 19.2202 3 19.862 3.32698C20.4265 3.6146 20.8854 4.07354 21.173 4.63803C21.5 5.27976 21.5 6.11984 21.5 7.8V16.2C21.5 17.8802 21.5 18.7202 21.173 19.362C20.8854 19.9265 20.4265 20.3854 19.862 20.673C19.2202 21 18.3802 21 16.7 21H8.3C6.61984 21 5.77976 21 5.13803 20.673C4.57354 20.3854 4.1146 19.9265 3.82698 19.362C3.5 18.7202 3.5 17.8802 3.5 16.2V7.8Z"
                  stroke="#0047BD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
          </div>
          <label
            htmlFor="terms"
            className="text-base text-neutral-800 cursor-pointer"
          >
            I agree with the terms of use
          </label>
        </div>

        <button
          type="submit"
          className="h-12 text-base font-medium text-white bg-blue-600 rounded-lg cursor-pointer border-[none] w-[170px]"
        >
          Sign Up
        </button>
      </form>

      <footer className="mt-6 text-sm text-center text-gray-600">
        <span>Already have an account?</span>{" "}
        <a href="#" className="text-blue-600 no-underline">
          Sign in
        </a>
      </footer>
    </section>
  );
}

export default SignUpFormOtp;
