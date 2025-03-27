import React from "react";

const WelcomeSection = () => {
  return (
    <section className="px-20 py-8 mt-16 max-md:px-10 max-md:py-8 max-sm:p-4">
      <article className="flex gap-6 p-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] max-sm:flex-col max-sm:items-center max-sm:text-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d39914e84d85c37858a537a0b4cd258af7aa1008"
          alt="Welcome avatar"
          className="w-20 h-20 rounded-full"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome to Realize
          </h1>
          <p className="text-base text-gray-600">
            Browse our collection of AI agents or use the search bar to find
            specific capabilities. Each agent is ready to be deployed to help
            streamline your operations.
          </p>
        </div>
      </article>
    </section>
  );
};

export default WelcomeSection;
