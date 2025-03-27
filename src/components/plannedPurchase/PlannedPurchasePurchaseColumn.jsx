import React from "react";
import PlannedPurchaserPurchaseCard from "./PlannedPurchasePurchaseCard";

function PlannedPurchasePurchaseColumn({ title, purchases }) {
  return (
    <article className="flex-1 p-4 bg-white rounded-lg">
      <h2 className="mb-4 text-base font-bold text-gray-700">{title}</h2>
      {purchases.map((purchase, index) => (
        <PlannedPurchaserPurchaseCard key={index} purchase={purchase} />
      ))}
    </article>
  );
}

export default PlannedPurchasePurchaseColumn;
