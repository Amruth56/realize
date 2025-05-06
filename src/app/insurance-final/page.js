"use client";

export default function CoverageOverview() {
  return (
    <>
      <main className="px-4 py-8 max-w-6xl mx-auto">
        {/* Summary stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Coverage Limit</p>
            <p className="text-2xl font-semibold text-gray-800">$10,000,000</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Annual Premium</p>
            <p className="text-2xl font-semibold text-gray-800">$125,000</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Next Renewal</p>
            <p className="text-2xl font-semibold text-gray-800">Mar 15, 2025</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Overall Threat Rating</p>
            <p className="text-2xl font-semibold text-orange-600">Moderate 🔺</p>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-blue-900 mb-2">AI Assistant Insights</h3>
          <ul className="space-y-2 text-sm text-red-600">
            <li>⚠️ Your Data Breach coverage is $500K below the industry average</li>
            <li>⚠️ Consider increasing Business Interruption coverage based on your company growth</li>
          </ul>
        </div>

        {/* Risk & Industry Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Top Cyber Risks</h4>
            <div className="space-y-4 text-sm">
              {[
                { label: "Ransomware", color: "bg-red-500" },
                { label: "Data Breach", color: "bg-orange-400" },
                { label: "Social Engineering", color: "bg-yellow-400" },
              ].map((risk) => (
                <div key={risk.label}>
                  <p className="mb-1">{risk.label}</p>
                  <div className="w-full h-2 rounded bg-gray-100">
                    <div className={`h-full w-3/4 rounded ${risk.color}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Coverage vs. Industry Average</h4>
            <p className="text-sm text-gray-700 mb-2">Your Coverage</p>
            <div className="w-full h-2 bg-blue-500 rounded mb-4"></div>
            <p className="text-sm text-gray-700 mb-2">Industry Average</p>
            <div className="w-full h-2 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Coverage Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Card: Data Breach */}
          <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-semibold text-gray-800">Data Breach Response</h5>
              <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded">High Risk</span>
            </div>
            <p className="text-sm text-gray-600">Coverage Limit</p>
            <p className="text-lg font-medium text-gray-900">$2,500,000</p>
            <p className="text-sm text-gray-600 mt-2">Deductible</p>
            <p className="text-base font-medium text-gray-700">$50,000</p>
            <p className="text-xs mt-2 text-red-600">Coverage gap: $500K below recommended</p>
          </div>

          {/* Card: Cyber Liability */}
          <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-semibold text-gray-800">Cyber Liability</h5>
              <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">Low Risk</span>
            </div>
            <p className="text-sm text-gray-600">Coverage Limit</p>
            <p className="text-lg font-medium text-gray-900">$5,000,000</p>
            <p className="text-sm text-gray-600 mt-2">Deductible</p>
            <p className="text-base font-medium text-gray-700">$100,000</p>
            <p className="text-xs mt-2 text-green-600">Coverage meets recommendations</p>
          </div>

          {/* Card: Business Interruption */}
          <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-semibold text-gray-800">Business Interruption</h5>
              <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-600 rounded">Moderate Risk</span>
            </div>
            <p className="text-sm text-gray-600">Coverage Limit</p>
            <p className="text-lg font-medium text-gray-900">$2,000,000</p>
            <p className="text-sm text-gray-600 mt-2">Deductible</p>
            <p className="text-base font-medium text-gray-700">$75,000</p>
            <p className="text-xs mt-2 text-orange-600">Review recommended due to growth</p>
          </div>
        </div>

        {/* Policy Summary */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-800 mb-4">Policy Summary</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
            <div>
              <p className="text-gray-500">Policy Number</p>
              <p className="font-medium">CYB-2025-89321</p>
            </div>
            <div>
              <p className="text-gray-500">Claims to Date</p>
              <p className="font-medium">1</p>
            </div>
            <div>
              <p className="text-gray-500">Renewal Date</p>
              <p className="font-medium">Mar 15, 2025</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="font-medium text-orange-600">Renewal due in 45 days</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            🗎 Export Report
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            📋 Review Recommendations
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            ✎ Adjust Coverage
          </button>
        </div>
      </main>
    </>
  );
}
