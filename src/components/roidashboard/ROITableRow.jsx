import React from "react";

function ROITableRow({ investment }) {
  const {
    project,
    icon,
    investment: investmentAmount,
    roi,
    roiColor,
    status,
    statusColor,
    statusBg,
    trendIcon,
  } = investment;

  return (
    <tr className="flex flex-wrap max-md:max-w-full">
      <td className="flex flex-col justify-center px-6 py-4 max-md:px-5">
        <div className="flex gap-3 py-px w-full">
          <span className="flex overflow-hidden justify-center items-center self-start min-h-4">
            <img
              src={icon}
              className="object-contain self-stretch my-auto w-5 aspect-[1.25]"
              alt={`${project} icon`}
            />
          </span>
          <span className="flex-auto text-base leading-none text-black w-[313px]">
            {project}
          </span>
        </div>
      </td>
      <td className="px-6 py-5 text-base text-black whitespace-nowrap max-md:px-5">
        {investmentAmount}
      </td>
      <td
        className={`px-6 py-5 text-base ${roiColor} whitespace-nowrap max-md:px-5`}
      >
        {roi}
      </td>
      <td className="flex flex-col justify-center items-start px-6 py-4 text-xs whitespace-nowrap max-md:px-5">
        <span className={`px-2 py-2 ${statusBg} rounded-full ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="flex flex-col justify-center items-start px-6 py-5 max-md:px-5">
        <span className="flex overflow-hidden justify-center items-center min-h-4">
          <img
            src={trendIcon}
            className="object-contain self-stretch my-auto aspect-[1.12] w-[18px]"
            alt="Trend indicator"
          />
        </span>
      </td>
    </tr>
  );
}

export default ROITableRow;
