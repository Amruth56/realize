import React from "react";

function PlannedPurchaserPurchaseCard({ purchase }) {
  const { status, dueDate, title, description, amount, priority } = purchase;

  return (
    <article className="p-4 mb-4 rounded-lg border border border-solid max-sm:p-3">
      <div className="flex justify-between items-center mb-2">
        <span className={`px-2 py-1.5 text-xs rounded ${status ==="In Review"? "bg-yellow-300 text-brown-600": status === "Approved"? "bg-emerald-300 text-emerald-800": status==="Scheduled"? "bg-blue-300 text-blue-800": ""}`}>{status}</span>
        <span className="text-sm text-gray-500">{dueDate}</span>
      </div>
      <h3 className="mb-1 text-base text-gray-800">{title}</h3>
      <p className="mb-3 text-sm text-gray-600">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-base text-blue-600">{amount}</span>
        <span className="text-sm text-gray-500">{priority}</span>
      </div>
    </article>
  );
}

export default PlannedPurchaserPurchaseCard;
