"use client";

export default function Microsoft365E3Details() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-grow mx-auto px-6 py-8 space-y-8">
        {/* Header Title & Summary */}
        <div className="bg-white p-6 rounded-lg flex justify-between items-center shadow-sm">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Microsoft 365 E3</h1>
            <p className="text-sm text-gray-600">
              Complete solution including Office apps, Windows, and Enterprise Mobility + Security
            </p>
          </div>
          <div className="flex gap-6 text-right text-sm">
            <div>
              <p className="text-gray-500">Total Licenses</p>
              <p className="font-semibold text-gray-900">500</p>
            </div>
            <div>
              <p className="text-gray-500">Assigned</p>
              <p className="font-semibold text-green-600">382</p>
            </div>
            <div>
              <p className="text-gray-500">Available</p>
              <p className="font-semibold text-blue-600">118</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Features & Implementation */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-semibold text-gray-800 mb-4">Features & Implementation Status</h2>

              {/* Feature: Advanced Threat Protection */}
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Advanced Threat Protection</span>
                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                    Enabled
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Implementation Progress: 85%</p>
              </div>

              {/* Feature: Conditional Access */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Conditional Access</span>
                  <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
                    Partial
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Implementation Progress: 60%</p>
              </div>
            </div>

            {/* Usage Analytics */}
            <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Adoption by Department */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Adoption Rate by Department</h3>
                {[
                  { dept: "IT Department", rate: 92 },
                  { dept: "Marketing", rate: 78 },
                  { dept: "Sales", rate: 85 },
                ].map((item, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{item.dept}</span>
                      <span>{item.rate}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${item.rate}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Top Used Features */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Top Used Features</h3>
                {[
                  { name: "Teams", percent: 98 },
                  { name: "OneDrive", percent: 92 },
                  { name: "Outlook", percent: 89 },
                ].map((f, idx) => (
                  <div key={idx} className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>{f.name}</span>
                    <span>{f.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Cost & ROI */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Cost & ROI</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Monthly Cost</p>
                <p className="text-lg font-semibold text-gray-900">$12,500</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimated Savings</p>
                <p className="text-lg font-semibold text-green-600">$45,000/year</p>
              </div>
            </div>

            {/* Realize Assistant */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Realize Assistant</h3>
              <p className="text-sm text-gray-600 mb-2">
                Conditional Access is partially enabled. Want to learn how to fully implement it?
              </p>
              <button className="text-sm text-blue-600 hover:underline mb-4">Show me how</button>
              <h4 className="font-medium text-sm text-gray-700 mb-2">Recommendations</h4>
              <ul className="text-sm list-disc pl-5 text-gray-600 space-y-1">
                <li>
                  <span className="text-gray-800">Roll out MFA to remaining 20% of users</span>
                </li>
                <li>
                  <span className="text-gray-800">
                    Optimize license allocation in <span className="text-blue-600">Marketing</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
