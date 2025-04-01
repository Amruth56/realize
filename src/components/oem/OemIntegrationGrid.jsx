import React from "react";
import OemIntegrationTile from "./OemIntegrationTile";

const OemIntegrationGrid = () => {
  const integrations = [
    {
      id: 1,
      logo: "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/81cd8e4ee2c304688abda8d33fb553531e272ef6?placeholderIfAbsent=true",
      name: "Microsoft",
      isConnected: true,
      connectionDate: "Connected since Jan 15, 2025",
      lastSyncTime: "Last sync: 5 mins ago",
      refreshIcon:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/8c56ef310362d7696bf26512095a91305f615d64?placeholderIfAbsent=true",
    },
    {
      id: 2,
      logo: "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/5af763cd2510c3b7e8fc7e250c744047161ceb23?placeholderIfAbsent=true",
      name: "Salesforce",
      isConnected: true,
      connectionDate: "Connected since Mar 1, 2025",
      lastSyncTime: "Last sync: 12 mins ago",
      refreshIcon:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/294dde25d2d76b6f9223fb85df8f8ec25764056d?placeholderIfAbsent=true",
    },
    {
      id: 3,
      logo: "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/65abc4a56477dc3064e06334edd3615319858f3a?placeholderIfAbsent=true",
      name: "SAP",
      isConnected: false,
      connectionDate: "",
      lastSyncTime: "",
    },
    {
      id: 4,
      logo: "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/2ab8a02cef01d59332dca1519e9b690685eb4c00?placeholderIfAbsent=true",
      name: "Oracle",
      isConnected: false,
      connectionDate: "",
      lastSyncTime: "",
    },
    {
      id: 5,
      logo: "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/1981edc2df7d4e1db91dcd28763edbbb93660d61?placeholderIfAbsent=true",
      name: "AWS",
      isConnected: true,
      connectionDate: "Connected since Feb 20, 2025",
      lastSyncTime: "Last sync: 3 mins ago",
      refreshIcon:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/973072562b4cae3c886e6fb87bdd91bc901758f7?placeholderIfAbsent=true",
    },
    {
      id: 6,
      logo: "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/6d9b86759c5e8a0f09298e24f0bb2f5caf3d3841?placeholderIfAbsent=true",
      name: "Google Cloud",
      isConnected: true,
      connectionDate: "Connected since Jan 5, 2025",
      lastSyncTime: "Last sync: 8 mins ago",
      refreshIcon:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/78b8174f1cffb6a4372399f2313d7854ba172c85?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="p-0.5 mx-6 mt-8 bg-opacity-0 max-md:mr-2.5 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {integrations.slice(0, 3).map((integration) => (
            <div
              key={integration.id}
              className="w-[33%] max-md:ml-0 max-md:w-full"
            >
              <OemIntegrationTile
                logo={integration.logo}
                name={integration.name}
                isConnected={integration.isConnected}
                connectionDate={integration.connectionDate}
                lastSyncTime={integration.lastSyncTime}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {integrations.slice(3, 6).map((integration) => (
            <div
              key={integration.id}
              className="w-[33%] max-md:ml-0 max-md:w-full"
            >
              <OemIntegrationTile
                logo={integration.logo}
                name={integration.name}
                isConnected={integration.isConnected}
                connectionDate={integration.connectionDate}
                lastSyncTime={integration.lastSyncTime}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OemIntegrationGrid;
