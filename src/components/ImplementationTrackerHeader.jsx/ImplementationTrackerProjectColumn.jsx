import React from "react";
import ImplementationTrackerProjectCard from "./ImplementationTrackerProjectCard";

function ImplementationTrackerProjectColumn({ title, projects }) {
  return (
    <div className="flex-1 p-4 bg-gray-50 rounded-xl">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">{title}</h3>
      {projects.map((project, index) => (
        <ImplementationTrackerProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ImplementationTrackerProjectColumn;
