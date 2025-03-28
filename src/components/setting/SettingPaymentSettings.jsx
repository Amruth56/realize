import React from "react";
import SettingToggleSwitch from "./SettingToggleSwitch";

function SettingPaymentSettings() {
  const settings = [
    {
      title: "Email Notifications",
      description: "Receive notifications for transactions",
      enabled: true,
    },
    {
      title: "Low Balance Alert",
      description: "Get notified when balance is below 500 coins",
      enabled: true,
    },
  ];

  return (
    <section className="bg-white rounded-lg border border shadow-sm mt-6">
      <header className="p-6 text-lg font-semibold text-black border border">
        Payment Settings
      </header>
      <div className="gap-y-6 p-6">
        {settings.map((setting, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-6 last:mb-0"
          >
            <div>
              <h3 className="text-base font-medium text-black">
                {setting.title}
              </h3>
              <p className="text-sm text-gray-500">{setting.description}</p>
            </div>
            <SettingToggleSwitch isOn={setting.enabled} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SettingPaymentSettings;
