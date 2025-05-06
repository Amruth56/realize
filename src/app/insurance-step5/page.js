"use client";

export default function RegulatoryCompliancePlans() {
  return (
    <>
      <main className="px-4 py-8 max-w-4xl mx-auto">
        {/* Step Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg font-semibold text-gray-800">
              Step 5 of 5: Regulatory Compliance & Future Plans
            </h1>
            <span className="text-sm text-blue-600">100%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div className="w-full h-full bg-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Regulatory Requirements */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-2">Regulatory Requirements</h2>
            <p className="text-sm text-gray-600 mb-4">
              Select all regulations that apply to your organization. This helps us understand your compliance landscape.
            </p>
            <div className="space-y-3 text-sm text-gray-700">
              {[
                "GDPR (General Data Protection Regulation)",
                "HIPAA (Health Insurance Portability and Accountability Act)",
                "SOC 2",
                "PCI DSS",
              ].map((item) => (
                <label key={item} className="block">
                  <input type="checkbox" className="mr-2" />
                  {item}
                </label>
              ))}
            </div>
          </section>

          {/* Compliance Measures */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-4">Compliance Measures</h2>
            <p className="text-sm text-gray-600 mb-2">
              Rate how well your current policies meet regulatory requirements
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {["Poor", "Fair", "Good", "Excellent"].map((rating, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 text-sm border rounded-md ${
                    rating === "Excellent"
                      ? "border-blue-600 text-blue-600"
                      : "border-gray-300 text-gray-700"
                  } hover:bg-gray-50`}
                >
                  {rating}
                </button>
              ))}
            </div>
            <textarea
              className="w-full border border-gray-200 rounded-md p-3 text-sm"
              placeholder="Additional comments about your compliance measures..."
              rows={3}
            />
          </section>

          {/* Future Plans */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-4">Future Plans & Policy Enhancements</h2>

            <label className="block text-sm font-medium mb-1 text-gray-700">
              Planned Improvements
            </label>
            <textarea
              className="w-full border border-gray-200 rounded-md p-3 text-sm mb-4"
              placeholder="Outline your planned policy improvements..."
              rows={3}
            />

            <label className="block text-sm font-medium mb-1 text-gray-700">
              Policy Review Timeline
            </label>
            <input
              type="date"
              className="w-full border border-gray-200 rounded-md p-3 text-sm"
              placeholder="mm/dd/yyyy"
            />
          </section>

          {/* Additional Info */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-4">Additional Information</h2>
            <textarea
              className="w-full border border-gray-200 rounded-md p-3 text-sm"
              placeholder="Any other information you'd like to share..."
              rows={3}
            />
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
              ← Previous
            </button>

            <div className="flex gap-4">
              <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                Save & Exit
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                Submit Assessment →
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
