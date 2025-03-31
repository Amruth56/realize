import React from "react";

/**
 * Reusable card component for dashboard items
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - SVG icon for the card
 * @param {Array} props.tags - Array of tag objects with text and color information
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {React.ReactNode} props.content - Card main content (chart, progress bar, etc.)
 * @param {Array} props.stats - Array of stat objects with label and value
 * @param {string} props.buttonText - Text for the action button
 * @param {string} props.buttonColor - Color class for the button (e.g., "bg-blue-600")
 */
function InventoryDashboardCard({
  icon,
  tags,
  title,
  description,
  content,
  stats,
  buttonText,
  buttonColor,
}) {
  return (
    <article className="flex flex-col p-6 bg-white rounded-xl shadow-md">
      <header className="flex justify-between items-center mb-4">
        <div>{icon}</div>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs ${tag.textColor} ${tag.bgColor} rounded-full`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </header>

      <h3 className="mb-2 text-xl text-black">{title}</h3>
      <p className="mb-4 text-base text-gray-600">{description}</p>

      <div className="mb-6">{content}</div>

      <div className="flex flex-col gap-3 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-base text-gray-600">{stat.label}</span>
            <span className="text-base text-black">{stat.value}</span>
          </div>
        ))}
      </div>

      <button
        className={`py-2.5 w-full text-base text-white ${buttonColor} rounded-lg`}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default InventoryDashboardCard;
