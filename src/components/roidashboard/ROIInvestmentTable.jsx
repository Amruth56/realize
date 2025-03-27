import React from "react";
import ROITableRow from "./ROITableRow";

function ROIInvestmentTable() {
  const investments = [
    {
      project: "CRM Software",
      icon: "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/68a7088999c5512e870777f323eba492afa31b28?placeholderIfAbsent=true",
      investment: "$450,000",
      roi: "180%",
      roiColor: "text-emerald-500",
      status: "Active",
      statusColor: "text-emerald-600",
      statusBg: "bg-emerald-100",
      trendIcon:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/b4d1b04ab77057fca47578c39800368348edd58c?placeholderIfAbsent=true",
    },
    {
      project: "Cloud Storage",
      icon: "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/6cc0d5f2ee85b8291dbab88d3bf51d35a7d52156?placeholderIfAbsent=true",
      investment: "$280,000",
      roi: "75%",
      roiColor: "text-red-500",
      status: "At Risk",
      statusColor: "text-amber-600",
      statusBg: "bg-amber-100",
      trendIcon:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/6f0d295ba9f1e00555ac93484a189f4639759a39?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="p-px mt-32 ml-7 bg-white rounded-xl border border-solid max-md:mt-10 max-md:-mr-0.5 max-md:max-w-full">
      <header className="px-6 py-8 text-base font-semibold leading-none text-gray-800 border border-b max-md:px-5 max-md:max-w-full">
        Investment Details
      </header>
      <div className="overflow-hidden max-md:max-w-full">
        <table className="w-full max-md:max-w-full">
          <thead className="w-full text-xs font-semibold text-gray-500 whitespace-nowrap bg-gray-50 max-md:max-w-full">
            <tr className="flex flex-wrap max-md:max-w-full">
              <th className="px-6 py-4 text-left max-md:px-5">Project</th>
              <th className="px-6 py-4 text-left max-md:px-5">Investment</th>
              <th className="px-6 py-4 text-left max-md:px-5">ROI</th>
              <th className="px-6 py-4 text-left max-md:px-5">Status</th>
              <th className="px-6 py-4 text-left max-md:px-5">Trend</th>
            </tr>
          </thead>
          <tbody className="w-full max-md:max-w-full">
            {investments.map((investment, index) => (
              <ROITableRow key={index} investment={investment} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ROIInvestmentTable;
