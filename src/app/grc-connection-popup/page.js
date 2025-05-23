"use client";


import InfoBanner from "@/resuable/infoBanner/InfoBanner";
import { FaUser, FaFile, FaClock,  FaMicrosoft } from "react-icons/fa";

function MicrosoftAccountCreation() {
  return (
    <>
      
      <div className="m-6">
        <div className="flex gap-4 items-center">
        <FaMicrosoft className="text-blue-400 text-2xl"/>
        <p className="text-2xl font-semibold">Microsoft Account Creation</p>
        </div>
        <InfoBanner className="mt-4" />
        <button className="bg-gray-900 text-white rounded-lg w-full p-4 my-6">
          Sign In With Microsoft
        </button>
        <h1 className="text-2xl font-bold my-4">Requested Permissions</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 bg-gray-50 p-4 rounded-md">
            <FaFile className="mt-2 text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold">Read Directory Data</h2>
              <p className="text-gray-600">
                Access to view organization directory data
              </p>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-50 p-4 rounded-md">
            <FaClock className="mt-2 text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold">Maintain Access To Data</h2>
              <p className="text-gray-600">
                Maintain access to data you have given it access to
              </p>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-50 p-4 rounded-md">
            <FaUser className="mt-2 text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold">View User Profiles</h2>
              <p className="text-gray-600">
                View basic profile information of users in your organization
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-2xl font-bold my-4">Access Justification</h1>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md mb-4 h-32"
            placeholder="Please provide a brief explanation for requesting these permissions..."
          />
          <div className="flex gap-4">
            <button className="p-4 border border-gray-300 rounded-md w-[50%] cursor-pointer hover:bg-gray-100 ">
              Cancel
            </button>
            <button className="p-4 border border-gray-300 rounded-md w-[50%] bg-blue-700 text-white cursor-pointer hover:bg-blue-900">
              Request Approval
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MicrosoftAccountCreation;
