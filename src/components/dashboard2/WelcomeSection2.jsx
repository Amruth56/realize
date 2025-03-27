import React from "react";

function WelcomeSection2() {
  return (
    <section className="px-20 py-8 mt-16 max-md:px-10 max-md:py-8 max-sm:p-4">
      <article className="p-6 mx-auto my-0 max-w-screen-xl bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div className="flex gap-6 items-center max-sm:flex-col max-sm:text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d39914e84d85c37858a537a0b4cd258af7aa1008"
            alt="Welcome avatar"
            className="w-20 h-20 rounded-full max-sm:mb-4"
          />
          <div className="flex-1">
            <h1 className="mb-4 text-2xl font-bold text-gray-800">
              Welcome to Realize
            </h1>
            <p className="text-base text-gray-600">
              Browse our collection of AI agents or use the search bar to find
              specific capabilities. Each agent is ready to be deployed to
              help streamline your operations.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default WelcomeSection2;
