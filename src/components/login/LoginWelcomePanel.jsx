import React from "react";
import BackgroundIcon from "../loginotp/BackgroundIcon";

function LoginWelcomePanel() {
  return (
    <div
      className="
        relative
        p-12
        w-6/12
        max-md:p-8
        max-md:w-full
        max-md:h-[400px]
        max-sm:p-5
        text-white
      "
      style={{
        background:
          "linear-gradient(90deg, rgb(88, 131, 224) 0%, rgba(37, 99, 235, 1) 100%)",
      }}
    >
      {/* Main content block */}
      <div className="absolute bottom-12 max-md:relative max-md:bottom-auto w-4/5">
        <h2 className="mb-6 text-4xl font-bold leading-9">
          Welcome back!
        </h2>
        <p className="mb-7 text-lg text-blue-100">
          Realize your tech investments with AI
        </p>

        {/* Speech bubble */}
        <div
          className="
            flex
            items-start
            gap-4
            p-6
            rounded-xl
            w-full
          "
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f35ef9a22c15ab2a794261870d43425f41b2d5f3"
            alt="Profile avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-sm leading-5 text-white">
            <p className="mb-1">Hi there! I’m here to help you get the</p>
            <p className="mb-1">most out of your tech investments.</p>
            <p>Let’s get started!</p>
          </div>
        </div>
      </div>

      {/* Decorative background icon */}
      <div className="absolute bottom-0 right-[-50px]">
        <BackgroundIcon />
      </div>
    </div>
  );
}

export default LoginWelcomePanel;
