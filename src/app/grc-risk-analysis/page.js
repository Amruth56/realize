"use client";

import Footer from "@/resuable/footer/Footer";
import Header from "@/resuable/header/Header";
import CustomStepper from "@/resuable/stepper/Stepper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faChartLine, faShieldAlt, faCircleCheck } from "@fortawesome/free-solid-svg-icons";


export default function GrcRiskAnalysis() {
  const steps = ["Connect", "Configure", "Complete"];

  return (
    <>
      <Header />
      <main className="bg-white px-6 lg:px-32 py-10 min-h-screen">
        {/* Stepper */}
        <CustomStepper currentStep={0} steps={steps} />

        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
          {/* Header Row */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Connect to Microsoft Compliance Manager
              </h1>
              <p className="text-gray-600 text-sm max-w-xl">
                Enhance your compliance monitoring by connecting to Microsoft’s GRC assessment
                framework
              </p>
            </div>
            <FontAwesomeIcon icon={faMicrosoft} className="text-blue-600 text-3xl" />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-lg" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">Automated Assessments</h2>
                <p className="text-sm text-gray-600">
                  Continuous compliance monitoring and real-time updates
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-lg" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">Risk Insights</h2>
                <p className="text-sm text-gray-600">
                  Detailed analytics and compliance scoring
                </p>
              </div>
            </div>
          </div>

          {/* Permissions Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-800 mb-4">Required Permissions</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
                Access to compliance assessment data
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
                Read Microsoft 365 security scores
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
                View compliance recommendations
              </li>
            </ul>
          </div>

          {/* Help Banner */}
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex gap-4 items-start mb-6">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Support"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-medium text-blue-700 mb-1">Need help?</h4>
              <p className="text-sm text-blue-600">
                I can guide you through the connection process and answer any questions about
                permissions and security.
              </p>
            </div>
          </div>

          {/* Footer Row */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-sm text-gray-400">
              By connecting, you agree to grant Realize access to your Microsoft Compliance
              Manager data
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2.5 text-sm rounded-md font-medium">
              Connect Now →
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
