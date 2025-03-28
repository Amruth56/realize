import React from "react";

function SettingToggleSwitch({ isOn = true }) {
  return (
    <div className="relative w-12 h-6">
      <div
        className={`absolute inset-0 ${isOn ? "bg-blue-600" : "bg-gray-300"} rounded-full transition-colors`}
      />
      <div
        className={`absolute top-1 ${isOn ? "right-1" : "left-1"} w-4 h-4 bg-white rounded-full transition-transform`}
      />
    </div>
  );
}

export default SettingToggleSwitch;
