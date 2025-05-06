"use client";


export default function CybersecurityPostureControls() {
  return (
    <>
      <div className="px-4 py-8 max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-blue-600 font-medium">Step 3 of 5</span>
            <h1 className="text-lg font-semibold text-gray-800">
              Cybersecurity Posture & Controls
            </h1>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div className="w-3/5 h-full bg-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Security Solutions Deployment */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-4">🔐 Security Solutions Deployment</h2>
            <div className="space-y-3 text-sm text-gray-700">
              {["Firewall Solutions", "Endpoint Protection", "SIEM Solutions", "Intrusion Detection Systems"].map((item) => (
                <label key={item} className="block">
                  <input type="checkbox" className="mr-2" />
                  {item}
                </label>
              ))}
            </div>
          </section>

          {/* Security Audits & Testing */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-4">🛡 Security Audits & Testing</h2>
            <p className="mb-2">Does your organization conduct regular security audits?</p>
            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="audits" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="audits" />
                No
              </label>
            </div>
            <label className="block mb-1 text-sm font-medium">Audit Frequency</label>
            <select className="w-full border border-gray-200 rounded-md p-3 text-sm">
              <option>Select frequency</option>
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </select>
          </section>

          {/* Incident Response & Disaster Recovery */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-4">📦 Incident Response & Disaster Recovery</h2>
            <p className="mb-2">Do you have an incident response plan in place?</p>
            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="incidentPlan" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="incidentPlan" />
                No
              </label>
            </div>
            <label className="block mb-1 text-sm font-medium">Key Elements & Testing Frequency (Optional)</label>
            <textarea
              className="w-full border border-gray-200 rounded-md p-3 text-sm"
              placeholder="Describe key areas and test intervals..."
              rows={3}
            />
          </section>

          {/* Security Policies & Training */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-4">📘 Security Policies & Training</h2>
            <p className="mb-2">Do employees receive regular security training?</p>
            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="training" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="training" />
                No
              </label>
            </div>
            <label className="block mb-1 text-sm font-medium">Training Effectiveness Rating</label>
            <select className="w-full border border-gray-200 rounded-md p-3 text-sm">
              <option>Select rating</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Poor</option>
            </select>
          </section>

          {/* Additional Comments */}
          <section className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-semibold text-gray-800 mb-4">💬 Additional Comments</h2>
            <textarea
              className="w-full border border-gray-200 rounded-md p-3 text-sm"
              placeholder="Any additional details about your cybersecurity posture..."
              rows={3}
            />
          </section>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
              ← Previous
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
