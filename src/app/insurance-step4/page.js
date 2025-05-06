"use client";


export default function CoverageRiskAssessment() {
  return (
    <>
      <main className="px-4 py-8 max-w-4xl mx-auto">
        {/* Step Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg font-semibold text-gray-800">
              Step 4 of 5: Coverage & Risk Assessment
            </h1>
            <span className="text-sm text-blue-600">80% Complete</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div className="w-4/5 h-full bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Section: Data Breach Response */}
        <section className="border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="font-semibold text-gray-800 mb-1">Data Breach Response</h2>
          <p className="text-sm text-gray-600 mb-4">
            Coverage for costs associated with responding to a data breach, including notification,
            credit monitoring, and crisis management.
          </p>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Coverage Rating:</p>
            <div className="flex gap-6 text-sm text-gray-700">
              {["Low", "Medium", "High"].map((level) => (
                <label key={level} className="flex items-center gap-2">
                  <input type="radio" name="breach_rating" />
                  {level}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Additional Notes
            </label>
            <textarea
              className="w-full border border-gray-200 rounded-md p-3 text-sm"
              placeholder="Enter any concerns or gaps in coverage..."
              rows={3}
            />
          </div>
        </section>

        {/* Section: Cyber Liability */}
        <section className="border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-800 mb-1">Cyber Liability</h2>
          <p className="text-sm text-gray-600 mb-4">
            Protection against claims arising from data breaches, privacy violations, and network
            security failures.
          </p>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Coverage Rating:</p>
            <div className="flex gap-6 text-sm text-gray-700">
              {["Low", "Medium", "High"].map((level) => (
                <label key={level} className="flex items-center gap-2">
                  <input type="radio" name="liability_rating" />
                  {level}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Additional Notes
            </label>
            <textarea
              className="w-full border border-gray-200 rounded-md p-3 text-sm"
              placeholder="Enter any concerns or gaps in coverage..."
              rows={3}
            />
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
            ← Previous
          </button>

          <div className="flex gap-4">
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
              Save & Exit
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
              Next →
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
