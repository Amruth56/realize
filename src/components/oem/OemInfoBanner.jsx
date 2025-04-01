import React from "react";

const OemInfoBanner = () => {
  return (
    <section className="flex flex-wrap gap-4 py-4 pr-20 pl-4 mx-6 mt-8 text-base text-blue-700 bg-blue-50 rounded-lg max-md:pr-5 max-md:mr-2.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/cc8b803c88dd5ec7e37ad9f8f0efe5fbbf50a0a3?placeholderIfAbsent=true"
        alt="Information icon"
        className="object-contain shrink-0 w-12 rounded-full aspect-square"
      />
      <p className="py-1 my-auto bg-opacity-0 max-md:max-w-full">
        Click on any integration tile to view detailed connection information or
        manage consent settings.
      </p>
    </section>
  );
};

export default OemInfoBanner;
