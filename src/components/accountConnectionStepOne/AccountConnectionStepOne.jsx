import React, { useState } from 'react';
import Image from 'next/image';

const AccountConnectionStepOne = ({
  defaultCompanyName = '',
  defaultIndustry = '',
  defaultCompanySize = '',
  defaultCurrentCoverage = '',
  defaultAnnualPremium = ''
}) => {
  const [companyName, setCompanyName] = useState(defaultCompanyName);
  const [industry, setIndustry] = useState(defaultIndustry);
  const [companySize, setCompanySize] = useState(defaultCompanySize);
  const [currentCoverage, setCurrentCoverage] = useState(defaultCurrentCoverage);
  const [annualPremium, setAnnualPremium] = useState(defaultAnnualPremium);

  return (
    <div className="max-w-[1280px] mx-auto py-8 px-4">
      {/* Progress Section */}
      <div className="w-full mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Manual Questionnaire Assessment
          </h1>
          <span className="text-blue-600">Step 1 of 5</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full">
          <div className="w-1/5 h-full bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-xl border border-gray-100 p-8">
        <h2 className="text-xl font-semibold mb-6">Company & Policy Basics</h2>
        
        <div className="space-y-6">
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="w-full h-[42px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                className="w-full h-[42px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 appearance-none bg-white"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="">Select Industry</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>
          </div>

          {/* Company Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size
            </label>
            <div className="flex gap-6">
              {['1-50', '51-200', '201-1000', '1000+'].map((size) => (
                <label key={size} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="companySize"
                    value={size}
                    checked={companySize === size}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="ml-2">{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Last Row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Coverage Limit
              </label>
              <input
                type="text"
                className="w-full h-[42px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g. $1,000,000"
                value={currentCoverage}
                onChange={(e) => setCurrentCoverage(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Premium
              </label>
              <input
                type="text"
                className="w-full h-[42px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g. $25,000"
                value={annualPremium}
                onChange={(e) => setAnnualPremium(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button className="flex items-center bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Previous
          </button>
          <button className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountConnectionStepOne;

