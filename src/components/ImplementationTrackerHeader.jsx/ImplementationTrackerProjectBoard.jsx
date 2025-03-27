import React from "react";
import ImplementationTrackerProjectColumn from "./ImplementationTrackerProjectColumn";

function ImplementationTrackerProjectBoard() {
  const notStartedProjects = [
    {
      title: "CRM Integration",
      description: "Pending kickoff meeting",
      dueDate: "Mar 15, 2025",
    },
  ];

  const inProgressProjects = [
    {
      title: "Data Migration",
      description: "",
      dueDate: "Feb 28, 2025",
      progress: 65,
    },
    {
      title: "API Configuration",
      description: "",
      dueDate: "Mar 5, 2025",
      progress: 45,
    },
  ];

  const completedProjects = [
    {
      title: "User Authentication",
      description: "Completed on Jan 15, 2025",
      dueDate: "",
      isCompleted: true,
    },
    {
      title: "Database Setup",
      description: "Completed on Jan 30, 2025",
      dueDate: "",
      isCompleted: true,
    },
  ];

  return (
    <section className="flex gap-6 px-20 py-6 max-md:flex-col max-md:p-6 max-sm:p-4">
      <ImplementationTrackerProjectColumn title="Not Started" projects={notStartedProjects} />
      <ImplementationTrackerProjectColumn title="In Progress" projects={inProgressProjects} />
      <ImplementationTrackerProjectColumn title="Completed" projects={completedProjects} />
    </section>
  );
}

export default ImplementationTrackerProjectBoard;
