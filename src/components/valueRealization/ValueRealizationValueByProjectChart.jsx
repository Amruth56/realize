import React from "react";

function ValueRealizationValueByProjectChart() {
  const projects = [
    {
      name: "Data Analytics",
      value: "$5.2M",
      color: "bg-blue-600",
    },
    {
      name: "Cloud Migration",
      value: "$4.0M",
      color: "bg-blue-500",
    },
    {
      name: "Security Suite",
      value: "$3.3M",
      color: "bg-blue-400",
    },
    {
      name: "AI Implementation",
      value: "$3.0M",
      color: "bg-blue-300",
      multiline: true,
    },
  ];

  return (
    <section className="p-6 bg-white rounded-xl shadow-md">
      <h3 className="mb-6 text-xl font-semibold text-gray-900">
        Value by Project
      </h3>
      <div className="flex flex-col gap-y-4">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center">
            <div className="w-32 text-sm text-gray-600">
              {project.multiline ? (
                <div className="flex flex-col">
                  <span>{project.name.split(" ")[0]}</span>
                  <span>{project.name.split(" ")[1]}</span>
                </div>
              ) : (
                project.name
              )}
            </div>
            <div className={`flex-1 h-4 ${project.color} rounded-full`} />
            <div className="w-20 text-sm font-medium text-right text-black">
              {project.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValueRealizationValueByProjectChart;
