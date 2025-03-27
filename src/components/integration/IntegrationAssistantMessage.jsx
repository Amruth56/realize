import React from "react";

function IntegrationAssistantMessage() {
  return (
    <article className="flex flex-wrap gap-4 py-6 pr-20 pl-6 text-base leading-none bg-blue-50 rounded-lg max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/cc8b803c88dd5ec7e37ad9f8f0efe5fbbf50a0a3?placeholderIfAbsent=true"
        className="object-contain shrink-0 self-start w-12 rounded-full aspect-square"
        alt="Assistant avatar"
      />
      <div className="flex flex-col grow shrink-0 py-1 pr-2.5 basis-0 bg-opacity-0 w-fit max-md:max-w-full">
        <h2 className="self-start font-medium text-blue-900">
          Hello! I'm here to help you with the integration process.
        </h2>
        <p className="mt-3.5 text-blue-700 max-md:max-w-full">
          This connection will securely link your tenant data with Realize for
          enhanced insights. Choose a provider below to begin the process.
        </p>
      </div>
    </article>
  );
}

export default IntegrationAssistantMessage;
