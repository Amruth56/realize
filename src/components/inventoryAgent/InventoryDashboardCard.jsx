import React from "react";
import { useRouter } from "next/navigation"; // If using React Router, use `useNavigate` from 'react-router-dom'

function InventoryDashboardCard({
  icon,
  tags,
  title,
  description,
  content,
  stats,
  buttonText,
  buttonColor,
  route,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route); // Navigate to the specified route
    }
  };

  return (
    <article className="flex flex-col p-6 bg-white rounded-xl shadow-md h-full">
      <header className="flex justify-between items-center mb-4">
      <div className="flex justify-between w-[100%]">
        <div>{icon}</div>
        <div className="flex gap-2 w-[100%] ml-auto justify-end">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs ${tag.textColor} ${tag.bgColor} rounded-full`}
            >
              {tag.text}
            </span>
          ))}
        </div>
        </div>
      </header>
      <h3 className="mb-2 text-xl text-black">{title}</h3>
      <p className="mb-4 text-base text-gray-600">{description}</p>

      <div className="mb-6 flex-grow">{content}</div>

      <div className="mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-base text-gray-600">{stat.label}</span>
            <span className="text-base text-black">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <button
          className={`py-2.5 w-full text-base text-white ${buttonColor} rounded-lg`}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
}

export default InventoryDashboardCard;
