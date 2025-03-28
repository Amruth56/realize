import React from "react";
import SettingToggleSwitch from "./SettingToggleSwitch";

function SettingAutoTopupCard () {
  return (
    <article className="p-6 bg-white rounded-lg border border shadow-sm">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Auto Top-up</h2>
        <SettingToggleSwitch isOn={true} />
      </header>
      <p className="text-sm text-gray-500">Threshold: 500 coins</p>
      <p className="text-sm text-gray-500">Add: 1000 coins</p>
    </article>
  );
}

export default SettingAutoTopupCard;
