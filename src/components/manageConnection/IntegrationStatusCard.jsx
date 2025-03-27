"use client";
import React from "react";
import IntegrationItem from "./IntegrationItem";
import ManageConnectionsButton from "./ManageConnectionsButton";

const IntegrationStatusCard = () => {
  const integrations = [
    {
      provider: "Microsoft",
      isConnected: true,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/ee27ca08634d8e6bdf04a860066725197158bb0d?placeholderIfAbsent=true",
    },
    {
      provider: "Google Cloud",
      isConnected: false,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/59a749df5f6d75a372d467ec761f060028ef39a4?placeholderIfAbsent=true",
    },
    {
      provider: "AWS",
      isConnected: true,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/5dc4b4857c74a7bbc3970eacb5245a4fc2f15e5e?placeholderIfAbsent=true",
    },
  ];

  return (
    <article className="p-4 max-w-xs bg-white rounded-lg border border-solid shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
      <header className="flex gap-5 justify-between py-0.5 text-sm font-medium leading-none text-gray-700">
        <h2>Integration Status</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/1e2f2b3474a525c387de17b4a93a2d0fb3db1044?placeholderIfAbsent=true"
          alt="Status icon"
          className="object-contain shrink-0 self-start w-3.5 aspect-[0.87]"
        />
      </header>

      <section className="mt-3">
        {integrations.map((integration, index) => (
          <IntegrationItem
            key={index}
            provider={integration.provider}
            isConnected={integration.isConnected}
            imageUrl={integration.imageUrl}
          />
        ))}
      </section>

      <footer className="flex flex-col items-start pt-3.5 mt-3 w-full">
        <ManageConnectionsButton />
      </footer>
    </article>
  );
};

export default IntegrationStatusCard;
