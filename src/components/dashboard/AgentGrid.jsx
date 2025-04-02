import AgentCard from "@/resuable/agentCard/AgentCard";
import React from "react";

const AgentGrid = () => {
  const agents = [
    {
      id: 1,
      name: "Financial Analyst AI",
      description: "Advanced financial forecasting and reporting automation",
      category: "Finance",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a83df02b3919f713577cb7cd16e1f7137dda3089",
    },
    {
      id: 2,
      name: "Security Monitor AI",
      description: "24/7 system monitoring and threat detection",
      category: "Security",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7486da5efb35d27bd3fb7e9331578702fc01da",
    },
    {
      id: 3,
      name: "Operations Assistant",
      description: "Streamline workflows and process optimization",
      category: "Operations",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7fdfe9d1083da4dbd41dc0929fe9738e99f39",
    },
    {
      id: 4,
      name: "Financial Analyst AI",
      description: "Advanced financial forecasting and reporting automation",
      category: "Finance",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a83df02b3919f713577cb7cd16e1f7137dda3089",
    },
    {
      id: 5,
      name: "Security Monitor AI",
      description: "24/7 system monitoring and threat detection",
      category: "Security",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7486da5efb35d27bd3fb7e9331578702fc01da",
    },
    {
      id: 6,
      name: "Operations Assistant",
      description: "Streamline workflows and process optimization",
      category: "Operations",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7fdfe9d1083da4dbd41dc0929fe9738e99f39",
    },
    {
      id: 7,
      name: "Financial Analyst AI",
      description: "Advanced financial forecasting and reporting automation",
      category: "Finance",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a83df02b3919f713577cb7cd16e1f7137dda3089",
    },
    {
      id: 8,
      name: "Security Monitor AI",
      description: "24/7 system monitoring and threat detection",
      category: "Security",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7486da5efb35d27bd3fb7e9331578702fc01da",
    },
    {
      id: 9,
      name: "Operations Assistant",
      description: "Streamline workflows and process optimization",
      category: "Operations",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7fdfe9d1083da4dbd41dc0929fe9738e99f39",
    },
  ];

  return (
    <section className="grid gap-6 px-20 py-8 bg-gray-50 grid-cols-[repeat(3,1fr)] max-md:px-10 max-md:py-8 max-md:grid-cols-[repeat(2,1fr)] max-sm:p-4 max-sm:grid-cols-[1fr]">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </section>
  );
};

export default AgentGrid;
