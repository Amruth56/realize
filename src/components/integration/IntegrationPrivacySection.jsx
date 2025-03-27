import React from "react";

function IntegrationPrivacySection() {
  return (
    <section className="px-6 py-5 mt-8 bg-white rounded-xl border border border-solid max-md:px-5 max-md:max-w-full">
      <h3 className="py-1.5 text-lg font-semibold text-gray-900 bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        Data Access & Privacy
      </h3>
      <div className="mt-4 w-full bg-opacity-0 max-md:max-w-full">
        <ul className="space-y-4">
          <li className="flex flex-wrap gap-3 py-1 w-full bg-opacity-0 max-md:max-w-full">
            <figure className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/9ae4b88bb23439b314a3b1173dd1d95265b30830?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-4 aspect-square"
                alt="Security icon"
              />
            </figure>
            <p className="flex-auto text-base leading-none text-gray-600 w-[1135px] max-md:max-w-full">
              Your data is encrypted and secured using industry-standard
              protocols
            </p>
          </li>
          <li className="flex flex-wrap gap-3 py-1 w-full bg-opacity-0 max-md:max-w-full">
            <figure className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/984b465bd29fde949523cac1d0f4622c93999dde?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-3.5 aspect-[0.87]"
                alt="Data access icon"
              />
            </figure>
            <p className="flex-auto text-base leading-none text-gray-600 w-[1137px] max-md:max-w-full">
              We only access the data necessary for platform functionality
            </p>
          </li>
          <li className="flex flex-wrap gap-3 py-1 w-full bg-opacity-0 max-md:max-w-full">
            <figure className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/8fa50ea05e487a1ead4c821ff8150ea8b4dffc0f?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-4 aspect-square"
                alt="Revoke access icon"
              />
            </figure>
            <p className="flex-auto text-base leading-none text-gray-600 w-[1135px] max-md:max-w-full">
              You can revoke access at any time through your dashboard
            </p>
          </li>
        </ul>
      </div>
      <a
        href="#"
        className="inline-block py-1 mt-4 max-w-full text-base text-blue-600 bg-opacity-0 w-[218px] max-md:pr-5 hover:underline"
      >
        View detailed privacy policy →
      </a>
    </section>
  );
}

export default IntegrationPrivacySection;
