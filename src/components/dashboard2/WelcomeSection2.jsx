import React from "react";

const WelcomeSection2 = () => {
  return (
    <section className="px-20 py-8 bg-[linear-gradient(90deg,#EFF6FF_0%,#FFF_100%)] max-md:px-10 max-sm:px-5">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex gap-6 items-center p-6 bg-white rounded-xl shadow-sm max-sm:flex-col">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d39914e84d85c37858a537a0b4cd258af7aa1008"
            alt="User avatar"
            className="w-[80px] h-[80px] rounded-[9999px]"
          />
          <div className="flex-1">
            <h1 className="mb-4 text-2xl font-bold text-gray-800">
              Welcome to Realize
            </h1>
            <p className="text-base text-gray-600">
              Browse our collection of AI agents or use the search bar to find
              specific capabilities. Each agent is ready to be deployed to help
              streamline your operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection2;
