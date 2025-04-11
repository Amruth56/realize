import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faChartLine,
  faUsers,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

function EnterpriseFeatures() {
  const features = [
    { icon: faShieldAlt, text: "Enterprise-grade security" },
    { icon: faChartLine, text: "Advanced analytics" },
    { icon: faUsers, text: "Team collaboration" },
    { icon: faRobot, text: "AI-powered insights" },
  ];

  return (
    <section className="text-white">
      <h2 className="mb-7 text-2xl font-semibold">Enterprise-ready platform</h2>
      <ul className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3 items-center text-base">
            <FontAwesomeIcon icon={feature.icon} className=" text-black" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EnterpriseFeatures;