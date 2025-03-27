import React from "react";

function EnterpriseFeatures() {
  const features = [
    { icon: "ti-shield", text: "Enterprise-grade security" },
    { icon: "ti-chart-line", text: "Advanced analytics" },
    { icon: "ti-users", text: "Team collaboration" },
    { icon: "ti-robot", text: "AI-powered insights" },
  ];

  return (
    <section className="text-white">
      <h2 className="mb-7 text-2xl font-semibold">Enterprise-ready platform</h2>
      <ul className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3 items-center text-base">
            <i className={`ti ${feature.icon} text-xl`} />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EnterpriseFeatures;
