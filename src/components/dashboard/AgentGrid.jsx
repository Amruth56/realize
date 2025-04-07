import AgentCard from "@/resuable/agentCard/AgentCard";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AgentGrid = () => {
  const agents = [
    {
      id: 1,
      name: "Assessment Agent",
      description: "Advanced financial forecasting and reporting automation",
      category: "Finance",
      imageUrl:
        "/agent1.png",
    },
    {
      id: 2,
      name: "Analytics Agent",
      description: "24/7 system monitoring and threat detection",
      category: "Security",
      imageUrl:
        "/agent2.png",
    },
    {
      id: 3,
      name: "Deployment Agent",
      description: "Streamline workflows and process optimization",
      category: "Operations",
      imageUrl:
        "/agent3.png",
    },
    {
      id: 4,
      name: "Finance Agent",
      description: "Advanced financial forecasting and reporting automation",
      category: "Finance",
      imageUrl:
        "/agent1.png",
    },
    {
      id: 5,
      name: "HR Agent",
      description: "24/7 system monitoring and threat detection",
      category: "Security",
      imageUrl:
        "/agent2.png",
    },
    {
      id: 6,
      name: "Legal & Compliance",
      description: "Streamline workflows and process optimization",
      category: "Operations",
      imageUrl:
        "/agent3.png",
    },
    {
      id: 7,
      name: "Customer Service Agent",
      description: "Advanced financial forecasting and reporting automation",
      category: "Finance",
      imageUrl:
        "/agent1.png",
    },
    {
      id: 8,
      name: "Sales Agent",
      description: "24/7 system monitoring and threat detection",
      category: "Security",
      imageUrl:
        "/agent2.png",
    },
    {
      id: 9,
      name: "Marketing Agent",
      description: "Streamline workflows and process optimization",
      category: "Operations",
      imageUrl:
        "/agent3.png",
    },
  ];

  return (
    <section className="relative w-full px-6 py-10 bg-gray-50">
    {/* Left Arrow */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
    </div>

    {/* Grid of AgentCards */}
    <div className="grid gap-6 px-14 grid-cols-[repeat(3,1fr)] max-md:px-10 max-md:grid-cols-[repeat(2,1fr)] max-sm:px-4 max-sm:grid-cols-[1fr]">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>

    {/* Right Arrow */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
    </div>
  </section>
  );
};

export default AgentGrid;
