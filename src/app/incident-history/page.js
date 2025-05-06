"use client";
import { useState } from 'react';



function IncidentHistoryAndClaims() {
    const [severity, setSeverity] = useState('');

  return (
    <>
      <div className="m-4 max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Incident History & Claims
            </h1>
            <span className="text-blue-600">Step 2 of 5</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div className="w-2/5 h-full bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="space-y-6">
          {/* Past Cyber Incidents Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Past Cyber Incidents</h2>
            <div className="mb-6">
              <p className="font-medium mb-2">
                Have you experienced any cyber incidents in the past 12-24 months?
              </p>
              <div className="flex gap-4">
                {['Yes', 'No', 'Not Sure'].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input type="radio" name="incident_experience" className="h-4 w-4" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">E.g., 0.1% of users</p>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Please describe the incidents
              </label>
              <textarea
                className="w-full p-3 border border-gray-200 rounded-md h-32"
                placeholder="E.g., Ransomware attack in Q2: 2024"
              />
            </div>
          </div>

          {/* Impact & Financial Loss Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Impact & Financial Loss</h2>
            <label className="block font-medium mb-2">
              Approximate financial loss or operational impact
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-200 rounded-md"
              placeholder="E.g., $500,000 in disruption costs"
            />
            <label className="block font-medium my-2">
              Impact Severity
            </label>
            <select className="p-4 border border-gray-200 w-full rounded-lg">
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            <option value="">Select severity level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
            </select>
          </div>

        

          {/* Claims Experience Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Claims Experience</h2>
            <div className="mb-6">
              <p className="font-medium mb-2">
                Have you filed any claims under your existing cyber policy?
              </p>
              <div className="flex gap-4">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input type="radio" name="claims_experience" className="h-4 w-4" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Describe the claim process and coverage experience
              </label>
              <textarea
                className="w-full p-3 border border-gray-200 rounded-md h-32"
                placeholder="Please describe the claim process, coverage methods, and any gaps encountered"
              />
            </div>
          </div>

          {/* Support & Response Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Support & Response</h2>
            <div className="mb-6">
              <p className="font-medium mb-2">
                How satisfied were you with the insurer's response level?
              </p>
              <div className="flex gap-4">
                {['Very Dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'].map((level) => (
                  <button
                    key={level}
                    className="px-3 py-1.5 border border-gray-200 rounded-md hover:bg-gray-50 text-sm"
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Additional comments on insurer responsiveness
              </label>
              <textarea
                className="w-full p-3 border border-gray-200 rounded-md h-32"
                placeholder="Share any additional feedback on insurer response"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncidentHistoryAndClaims;