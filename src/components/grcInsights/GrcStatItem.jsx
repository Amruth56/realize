import React from "react";

function GrcStatItem({ label, value, color, isFirst, isLast }) {
  const marginClass = isFirst ? "" : "mt-4";
  const paddingClass = isLast ? "py-1" : isFirst ? "py-1" : "pt-0.5 pb-2";

  return (
    <div
      className={`flex gap-5 justify-between ${paddingClass} ${marginClass} bg-opacity-0`}
    >
      <div className="text-slate-600">{label}</div>
      <div className={`self-start font-semibold ${color}`}>{value}</div>
    </div>
  );
}

export default GrcStatItem;
