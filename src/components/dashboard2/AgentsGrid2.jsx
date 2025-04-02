import React from "react";
import Link from "next/link";
import AgentCard from "@/resuable/agentCard/AgentCard";

const AgentsGrid2 = () => {
  const agents = [
    {
      id: 1,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a83df02b3919f713577cb7cd16e1f7137dda3089",
        name: "Inventory Agent",
      description: "Advanced Inventory forecasting and reporting automation",
      category: "Finance",
      route: "inventory-agent", // Add your route here
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7486da5efb35d27bd3fb7e9331578702fc01da",
        name: "Utilization Agent",
      description: "24/7 system monitoring and threat detection",
      category: "Security",
      route: "utilization",
    },
  ];

  return (
    <section className="grid gap-6 px-20 py-8 bg-gray-50 grid-cols-[repeat(3,1fr)] max-md:px-10 max-md:py-8 max-md:grid-cols-[repeat(2,1fr)] max-sm:p-4 max-sm:grid-cols-[1fr]">
      {agents.map((agent) => (
        <Link key={agent.id} href={agent.route}>
          <AgentCard key={agent.id} agent={agent} />
        </Link>
      ))}
    </section>
  );
};

export default AgentsGrid2;
