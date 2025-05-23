import React from "react";

const OemStatusBar = () => {
  return (
    <section className="p-4 mx-6 mt-18 bg-white rounded-xl border border-gray-100 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col py-1 leading-none bg-opacity-0">
          <h2 className="self-start text-lg font-semibold text-gray-800">
            Integration Status
          </h2>
          <p className="mt-1 text-base text-gray-500">
            2 of 4 integrations active
          </p>
        </div>
        <button className="px-4 pt-1 pb-4 my-auto text-sm text-center text-blue-600 rounded-lg bg-opacity-0">
          View Details
        </button>
      </div>
      <div className="flex flex-col items-start mt-4 bg-gray-100 rounded-full max-md:pr-5 max-md:max-w-full">
        <div className="flex shrink-0 max-w-full h-2 bg-blue-600 rounded-full w-[671px]" />
      </div>
    </section>
  );
};

export default OemStatusBar;
