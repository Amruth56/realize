import React from "react";
import AgentCard2 from "./AgentCard2";
import Link from "next/link";

const AgentsGrid2 = () => {
  const agents = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a83df02b3919f713577cb7cd16e1f7137dda3089",
      title: "Inventory Agent",
      description: "Advanced Inventory forecasting and reporting automation",
      category: "Finance",
      route: "inventory-agent", // Add your route here
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7486da5efb35d27bd3fb7e9331578702fc01da",
      title: "Utilization Agent",
      description: "24/7 system monitoring and threat detection",
      category: "Security",
      route: "/agents/utilization", // Add your route here
    },
  ];

  return (
    <section className="px-20 py-8 bg-gray-50 max-md:px-10 max-sm:px-5">
      <div className="mx-auto">
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {agents.map((agent) => (
            <Link key={agent.id} href={agent.route}>
              <AgentCard2
                image={agent.image}
                title={agent.title}
                description={agent.description}
                category={agent.category}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsGrid2;
