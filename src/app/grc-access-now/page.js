"use client";


import InfoBanner from "@/resuable/infoBanner/InfoBanner";
import AssessmentCard from "@/resuable/assessmentCard/AssessmentCard";

import {
  faUserShield,
  faGlobeEurope,
  faLock,
  faShieldAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export default function GrcAccessNow() {
  const assessments = [
    {
      icon: faUserShield,
      heading: "HIPAA",
      description:
        "Health Insurance Portability and Accountability Act compliance assessment for healthcare data protection and privacy.",
    },
    {
      icon: faGlobeEurope,
      heading: "GDPR",
      description:
        "General Data Protection Regulation compliance assessment for European Union data protection requirements.",
    },
    {
      icon: faLock,
      heading: "SOC 1",
      description:
        "Service Organization Control 1 assessment for financial reporting controls and compliance.",
    },
    {
      icon: faShieldAlt,
      heading: "SOC 2",
      description:
        "Service Organization Control 2 assessment for security, availability, and confidentiality controls.",
    },
    {
      icon: faCreditCard,
      heading: "PCI DSS",
      description:
        "Payment Card Industry Data Security Standard assessment for payment card data security.",
    },
  ];

  return (
    <>

      <main className="px-6 lg:px-20 py-10 bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">
          Home &gt; Assessment Agent &gt; GRC Agent
        </div>

        {/* Page title */}
        <h1 className="text-2xl font-semibold text-gray-900 my-6">
          Select Regulatory Assessment
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-10 ">
          Choose a compliance framework to evaluate your organization's
          regulatory adherence. Our assessment tools will guide you through the
          process and provide actionable insights.
        </p>

        {/* InfoBanner */}
        <div className="mb-8">
          <InfoBanner
            title="Need Help Choosing?"
            message="I can help you select the most relevant assessment based on your industry and requirements."
          />
        </div>

        {/* Assessment Cards */}
        <div className="mx-0 w-[1152px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((card, index) => (
              <AssessmentCard
                key={index}
                icon={card.icon}
                heading={card.heading}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </main>

    </>
  );
}
