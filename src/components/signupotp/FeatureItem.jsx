import React from "react";

function FeatureItem({ icon, text }) {
  return (
    <div className="flex gap-3 items-center text-base text-white">
      <i className={`ti ti-${icon} text-base text-white`} />
      <span>{text}</span>
    </div>
  );
}

export default FeatureItem;
