import React from "react";

function StatusSystemHealthChart() {
  return (
    <article className="flex-1 p-6 bg-white rounded-xl border border-gray-100 border-solid max-md:w-full">
      <h3 className="mb-4 text-lg font-bold text-gray-800">System Health</h3>
      <div className="flex relative justify-center items-center h-32">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;17:1974&quot; layer-name=&quot;svg&quot; width=&quot;138&quot; height=&quot;138&quot; viewBox=&quot;0 0 138 138&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;chart-svg&quot;> <path d=&quot;M69.3281 133C104.674 133 133.328 104.346 133.328 69C133.328 33.6538 104.674 5 69.3281 5C33.9819 5 5.32812 33.6538 5.32812 69C5.32812 104.346 33.9819 133 69.3281 133Z&quot; stroke=&quot;#EEF2FF&quot; stroke-width=&quot;9.14286&quot;></path> <path d=&quot;M69.3281 133C104.674 133 133.328 104.346 133.328 69C133.328 33.6538 104.674 5 69.3281 5C33.9819 5 5.32812 33.6538 5.32812 69C5.32812 104.346 33.9819 133 69.3281 133Z&quot; stroke=&quot;#3B82F6&quot; stroke-width=&quot;9.14286&quot; stroke-dasharray=&quot;402.12 402.12&quot;></path> </svg>",
            }}
          />
        </div>
        <div className="absolute text-2xl font-bold text-blue-600">92%</div>
      </div>
    </article>
  );
}

export default StatusSystemHealthChart;
