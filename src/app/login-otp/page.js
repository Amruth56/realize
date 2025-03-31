"use client";
import BackgroundIcon from "@/components/loginotp/BackgroundIcon";
import OTPInput from "@/components/signupotp/OTPInput";
import React from "react";
import { useRouter } from "next/navigation";

function LoginFormOtp() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResendOtp = () => {
    // Implementation for resending OTP
    console.log("Resending OTP for:", email);
  };

  const handleSignIn = () => {
    // Implementation for sign in
    router.push("/dashboard");
    console.log("Signing in");
  };

  return (
    <main
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
      <section
        className="
          flex 
          gap-8
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
        {/* Left Section - Form */}
        <div className="relative px-12 py-8 w-6/12 max-md:p-8 max-md:w-full max-sm:p-5">
          <div className="mt-12 max-w-[355px]">
            <header className="mb-11">
              <h1 className="mb-2.5 text-2xl font-bold leading-6 text-gray-900">
                Sign in to your Realize account
              </h1>
              <p className="text-base leading-6 text-gray-500">
                Enter your credentials to access your dashboard
              </p>
            </header>

            <form>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-700 block "
                >
                  Email or Phone Number
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="john@company.com or 9111111111"
                    className="px-4 py-0 w-full text-base text-gray-900 rounded-lg border border-gray-300 border-solid h-[50px] mb-6"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label
                  htmlFor="otp"
                  className="px-1 py-0 mb-2 text-sm font-medium text-gray-700 bg-white block"
                ></label>
                <OTPInput length={6} />
              </div>

<div>
              <button
                type="button"
                onClick={handleResendOtp}
                className="mb-6 w-full h-12 text-base font-medium text-white bg-blue-600 rounded-lg cursor-pointer border-none max-sm:w-full"
              >
                Resend OTP
              </button>
              </div>
              <button
                type="button"
                onClick={handleSignIn}
                className="mx-auto my-0 h-12 text-base font-medium text-white bg-blue-600 rounded-lg cursor-pointer border-none w-[170px] max-sm:w-full block"
              >
                Sign In
              </button>

              <div className="mt-9 text-sm text-center text-gray-500">
                <span>Don't have an account? </span>
                <a href="#" className="text-blue-500 no-underline">
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section - Welcome */}
        <div className="relative p-12 w-6/12 text-white bg-blue-600 max-md:p-8 max-md:w-full max-md:h-[400px] max-sm:p-5">
          <div className="absolute bottom-12 max-md:relative max-md:bottom-auto">
            <h2 className="mb-6 text-4xl font-bold leading-9">Welcome back!</h2>
            <p className="mb-7 text-lg text-blue-100">
              Realize your tech investments with AI
            </p>
            <div className="flex gap-4 items-center p-4 rounded-xl bg-white bg-opacity-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f35ef9a22c15ab2a794261870d43425f41b2d5f3"
                alt="Profile avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-sm leading-5">
                <p className="mb-1 text-blue-600">
                  Hi there! I'm here to help you get the
                </p>
                <p className="mb-1 text-blue-600">
                  most out of your tech investments.
                </p>
                <p className="mb-1 text-blue-600">
                  Let's get started!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-[-50px] top-0">
            <BackgroundIcon />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginFormOtp;
