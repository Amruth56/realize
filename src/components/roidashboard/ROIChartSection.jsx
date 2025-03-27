import React from "react";
import ROIChartContainer from "./ROIChartContainer";

function ROIChartSection() {
  return (
    <section className="mt-8 mr-6 max-md:mr-2.5 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ROIChartContainer title="ROI by Category" />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ROIChartContainer title="Monthly Returns" />
          </div>
        </div>
      </div>
      <div className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ROIChartContainer title="Investment Distribution" />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ROIChartContainer title="Performance Heatmap" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ROIChartSection;
