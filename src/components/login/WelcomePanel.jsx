import React from "react";

function WelcomePanel() {
  return (
    <aside className="flex relative flex-col justify-between p-12 rounded-2xl bg-[linear-gradient(90deg,#3B82F6_0%,#2563EB_100%)] w-1/2 max-md:hidden">
      <div className="flex flex-col mt-auto">
        <h2 className="mb-6 text-4xl font-bold leading-9 text-white">
          Welcome back!
        </h2>
        <p className="mb-7 text-lg leading-5 text-blue-100">
          Realize your tech investments with AI
        </p>
        <div className="flex gap-4 items-start p-4 rounded-xl bg-white bg-opacity-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f35ef9a22c15ab2a794261870d43425f41b2d5f3"
            alt="AI Assistant"
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col gap-1">
            <p className="text-sm text-blue-600">
              Hi there! I'm here to help you get the
            </p>
            <p className="text-sm text-blue-600">
              most out of your tech investments.
            </p>
            <p className="text-sm text-blue-600">Let's get started!</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default WelcomePanel;
