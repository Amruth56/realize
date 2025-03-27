import React from "react";
import ValueRealizationRecommendationItem from "./ValueRealizationRecommendationItem";

function ValueRealizationStrategicRecommendations() {
  const recommendations = [
    {
      title: "Increase Cloud Investment",
      description:
        "Based on current ROI trends, increasing cloud infrastructure investment could yield 20% more value.",
      icon: (
        <svg
          id="17:1880"
          layer-name="Frame"
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[12px] h-[16px] mt-[4px]"
        >
          <g clipPath="url(#clip0_17_1880)">
            <path
              d="M8.5 12C8.8 11.0031 9.42188 10.1531 10.0375 9.30625C10.2 9.08437 10.3625 8.8625 10.5188 8.6375C11.1375 7.74687 11.5 6.66875 11.5 5.50313C11.5 2.4625 9.0375 0 6 0C2.9625 0 0.5 2.4625 0.5 5.5C0.5 6.66563 0.8625 7.74687 1.48125 8.63437C1.6375 8.85938 1.8 9.08125 1.9625 9.30313C2.58125 10.15 3.20312 11.0031 3.5 11.9969H8.5V12ZM6 16C7.38125 16 8.5 14.8813 8.5 13.5V13H3.5V13.5C3.5 14.8813 4.61875 16 6 16ZM3.5 5.5C3.5 5.775 3.275 6 3 6C2.725 6 2.5 5.775 2.5 5.5C2.5 3.56562 4.06562 2 6 2C6.275 2 6.5 2.225 6.5 2.5C6.5 2.775 6.275 3 6 3C4.61875 3 3.5 4.11875 3.5 5.5Z"
              fill="black"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_17_1880">
              <path d="M0 0H12V16H0V0Z" fill="white"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Security Enhancement",
      description:
        "Consider upgrading security measures to protect increasing digital assets.",
      icon: (
        <svg
          id="17:1887"
          layer-name="Frame"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px] mt-[4px]"
        >
          <g clipPath="url(#clip0_17_1887)">
            <path
              d="M8.32814 0C8.47189 0 8.61564 0.03125 8.74689 0.090625L14.6313 2.5875C15.3188 2.87813 15.8313 3.55625 15.8281 4.375C15.8125 7.475 14.5375 13.1469 9.15314 15.725C8.63126 15.975 8.02501 15.975 7.50314 15.725C2.11876 13.1469 0.843764 7.475 0.828139 4.375C0.825014 3.55625 1.33751 2.87813 2.02501 2.5875L7.91251 0.090625C8.04064 0.03125 8.18439 0 8.32814 0Z"
              fill="black"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_17_1887">
              <path d="M0.328125 0H16.3281V16H0.328125V0Z" fill="white"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "AI Integration",
      description:
        "Expand AI capabilities across more business units to maximize efficiency gains.",
      icon: (
        <svg
          id="17:1894"
          layer-name="Frame"
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[16px] mt-[4px]"
        >
          <g clipPath="url(#clip0_17_1894)">
            <path
              d="M10.6562 0C11.2094 0 11.6562 0.446875 11.6562 1V3H15.4062C16.65 3 17.6562 4.00625 17.6562 5.25V13.75C17.6562 14.9937 16.65 16 15.4062 16H5.90625C4.6625 16 3.65625 14.9937 3.65625 13.75V5.25C3.65625 4.00625 4.6625 3 5.90625 3H9.65625V1C9.65625 0.446875 10.1031 0 10.6562 0ZM7.15625 12C6.88125 12 6.65625 12.225 6.65625 12.5C6.65625 12.775 6.88125 13 7.15625 13H8.15625C8.43125 13 8.65625 12.775 8.65625 12.5C8.65625 12.225 8.43125 12 8.15625 12H7.15625ZM10.1562 12C9.88125 12 9.65625 12.225 9.65625 12.5C9.65625 12.775 9.88125 13 10.1562 13H11.1562C11.4312 13 11.6562 12.775 11.6562 12.5C11.6562 12.225 11.4312 12 11.1562 12H10.1562ZM13.1562 12C12.8813 12 12.6562 12.225 12.6562 12.5C12.6562 12.775 12.8813 13 13.1562 13H14.1562C14.4312 13 14.6562 12.775 14.6562 12.5C14.6562 12.225 14.4312 12 14.1562 12H13.1562ZM8.90625 8C8.90625 7.66848 8.77455 7.35054 8.54013 7.11612C8.30571 6.8817 7.98777 6.75 7.65625 6.75C7.32473 6.75 7.00679 6.8817 6.77237 7.11612C6.53795 7.35054 6.40625 7.66848 6.40625 8C6.40625 8.33152 6.53795 8.64946 6.77237 8.88388C7.00679 9.1183 7.32473 9.25 7.65625 9.25C7.98777 9.25 8.30571 9.1183 8.54013 8.88388C8.77455 8.64946 8.90625 8.33152 8.90625 8ZM13.6562 9.25C13.9878 9.25 14.3057 9.1183 14.5401 8.88388C14.7746 8.64946 14.9062 8.33152 14.9062 8C14.9062 7.66848 14.7746 7.35054 14.5401 7.11612C14.3057 6.8817 13.9878 6.75 13.6562 6.75C13.3247 6.75 13.0068 6.8817 12.7724 7.11612C12.5379 7.35054 12.4062 7.66848 12.4062 8C12.4062 8.33152 12.5379 8.64946 12.7724 8.88388C13.0068 9.1183 13.3247 9.25 13.6562 9.25ZM2.15625 7H2.65625V13H2.15625C1.32812 13 0.65625 12.3281 0.65625 11.5V8.5C0.65625 7.67188 1.32812 7 2.15625 7ZM19.1562 7C19.9844 7 20.6562 7.67188 20.6562 8.5V11.5C20.6562 12.3281 19.9844 13 19.1562 13H18.6562V7H19.1562Z"
              fill="black"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_17_1894">
              <path d="M0.65625 0H20.6562V16H0.65625V0Z" fill="white"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="p-6 bg-white rounded-xl shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">
        Strategic Recommendations
      </h3>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        {recommendations.map((recommendation, index) => (
          <ValueRealizationRecommendationItem
            key={index}
            title={recommendation.title}
            description={recommendation.description}
            icon={recommendation.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default ValueRealizationStrategicRecommendations;
