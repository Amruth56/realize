import React from "react";
import InventoryDashboardCard from "./InventoryDashboardCard";


/**
 * Container for all dashboard cards
 */
function InventoryDashboardCards() {
  // Card 1 - Planned Purchases
  const plannedPurchasesIcon = (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<svg id=&quot;153:183&quot; layer-name=&quot;Frame&quot; width=&quot;21&quot; height=&quot;24&quot; viewBox=&quot;0 0 21 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[21px] h-[24px]&quot;> <g clip-path=&quot;url(#clip0_153_183)&quot;> <path d=&quot;M7.125 1.125C7.125 0.501562 6.62344 0 6 0C5.37656 0 4.875 0.501562 4.875 1.125V3H3C1.34531 3 0 4.34531 0 6V6.75V9V21C0 22.6547 1.34531 24 3 24H18C19.6547 24 21 22.6547 21 21V9V6.75V6C21 4.34531 19.6547 3 18 3H16.125V1.125C16.125 0.501562 15.6234 0 15 0C14.3766 0 13.875 0.501562 13.875 1.125V3H7.125V1.125ZM2.25 9H18.75V21C18.75 21.4125 18.4125 21.75 18 21.75H3C2.5875 21.75 2.25 21.4125 2.25 21V9Z&quot; fill=&quot;#2563EB&quot;></path> </g> <defs> <clipPath id=&quot;clip0_153_183&quot;> <path d=&quot;M0 0H21V24H0V0Z&quot; fill=&quot;white&quot;></path> </clipPath> </defs> </svg>",
      }}
    />
  );

  const plannedPurchasesTags = [
    { text: "Critical", textColor: "text-red-700", bgColor: "bg-red-100" },
    { text: "In Review", textColor: "text-amber-700", bgColor: "bg-amber-100" },
  ];

  const plannedPurchasesContent = (
    <div className="mb-6 h-2 bg-gray-200 rounded-full">
      <div className="w-6/12 h-full bg-blue-600 rounded-full" />
    </div>
  );

  const plannedPurchasesStats = [
    { label: "Items Planned", value: "6" },
    { label: "Q2 Schedule", value: "$93,000" },
    { label: "High-Priority", value: "2" },
  ];

  // Card 2 - Purchase Inventory
  const purchaseInventoryIcon = (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<svg id=&quot;153:197&quot; layer-name=&quot;Frame&quot; width=&quot;28&quot; height=&quot;24&quot; viewBox=&quot;0 0 28 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[27px] h-[24px]&quot;> <g clip-path=&quot;url(#clip0_153_197)&quot;> <path d=&quot;M14.9062 11.25V0.778125C14.9062 0.35625 15.2344 0 15.6562 0C21.4547 0 26.1562 4.70156 26.1562 10.5C26.1562 10.9219 25.8 11.25 25.3781 11.25H14.9062ZM2.15625 12.75C2.15625 7.06406 6.37969 2.35781 11.8594 1.60781C12.2906 1.54688 12.6562 1.89375 12.6562 2.32969V13.5L19.9922 20.8359C20.3062 21.15 20.2828 21.6656 19.9219 21.9188C18.0844 23.2313 15.8344 24 13.4062 24C7.19531 24 2.15625 18.9656 2.15625 12.75ZM26.8313 13.5C27.2672 13.5 27.6094 13.8656 27.5531 14.2969C27.1922 16.9172 25.9312 19.2469 24.0891 20.9672C23.8078 21.2297 23.3672 21.2109 23.0953 20.9344L15.6562 13.5H26.8313Z&quot; fill=&quot;#7C3AED&quot;></path> </g> <defs> <clipPath id=&quot;clip0_153_197&quot;> <path d=&quot;M0.65625 0H27.6562V24H0.65625V0Z&quot; fill=&quot;white&quot;></path> </clipPath> </defs> </svg>",
      }}
    />
  );

  const purchaseInventoryTags = [
    {
      text: "Top Vendors",
      textColor: "text-violet-700",
      bgColor: "bg-violet-100",
    },
    {
      text: "License Alerts",
      textColor: "text-orange-700",
      bgColor: "bg-orange-100",
    },
  ];

  const purchaseInventoryContent = (
    <div className="flex justify-center items-center mx-auto mb-6 w-24 h-24 rounded-full border-8 border-violet-500">
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<svg id=&quot;194:3&quot; layer-name=&quot;Frame&quot; width=&quot;27&quot; height=&quot;24&quot; viewBox=&quot;0 0 27 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[27px] h-[24px]&quot;> <path d=&quot;M0 0H27V24H0V0Z&quot; stroke=&quot;#E5E7EB&quot;></path> <path d=&quot;M14.25 11.25V0.778125C14.25 0.35625 14.5781 0 15 0C20.7984 0 25.5 4.70156 25.5 10.5C25.5 10.9219 25.1438 11.25 24.7219 11.25H14.25ZM1.5 12.75C1.5 7.06406 5.72344 2.35781 11.2031 1.60781C11.6344 1.54688 12 1.89375 12 2.32969V13.5L19.3359 20.8359C19.65 21.15 19.6266 21.6656 19.2656 21.9188C17.4281 23.2313 15.1781 24 12.75 24C6.53906 24 1.5 18.9656 1.5 12.75ZM26.175 13.5C26.6109 13.5 26.9531 13.8656 26.8969 14.2969C26.5359 16.9172 25.275 19.2469 23.4328 20.9672C23.1516 21.2297 22.7109 21.2109 22.4391 20.9344L15 13.5H26.175Z&quot; fill=&quot;#7C3AED&quot;></path> </svg>",
        }}
      />
    </div>
  );

  const purchaseInventoryStats = [
    { label: "Total Spend", value: "$1.2M" },
    { label: "Active Licenses", value: "847" },
    { label: "Vendors/Renewals", value: "32/14" },
  ];

  // Card 3 - ROI Dashboard
  const roiDashboardIcon = (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<svg id="153:211" layer-name="Frame" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <g clip-path="url(#clip0_153_211)"> <path d="M3.32812 3C3.32812 2.17031 2.65781 1.5 1.82812 1.5C0.998437 1.5 0.328125 2.17031 0.328125 3V18.75C0.328125 20.8219 2.00625 22.5 4.07812 22.5H22.8281C23.6578 22.5 24.3281 21.8297 24.3281 21C24.3281 20.1703 23.6578 19.5 22.8281 19.5H4.07812C3.66563 19.5 3.32812 19.1625 3.32812 18.75V3ZM22.3875 7.05938C22.9734 6.47344 22.9734 5.52188 22.3875 4.93594C21.8016 4.35 20.85 4.35 20.2641 4.93594L15.3281 9.87656L12.6375 7.18594C12.0516 6.6 11.1 6.6 10.5141 7.18594L5.26406 12.4359C4.67813 13.0219 4.67813 13.9734 5.26406 14.5594C5.85 15.1453 6.80156 15.1453 7.3875 14.5594L11.5781 10.3734L14.2687 13.0641C14.8547 13.65 15.8063 13.65 16.3922 13.0641L22.3922 7.06406L22.3875 7.05938Z" fill="#059669"></path> </g> <defs> <clipPath id="clip0_153_211"> <path d="M0.328125 0H24.3281V24H0.328125V0Z" fill="white"></path> </clipPath> </defs> </svg>',
      }}
    />
  );

  const roiDashboardTags = [
    {
      text: "High Yield",
      textColor: "text-emerald-700",
      bgColor: "bg-emerald-100",
    },
    {
      text: "Needs Attention",
      textColor: "text-red-700",
      bgColor: "bg-red-100",
    },
  ];

  const roiDashboardContent = (
    <div className="flex gap-2 items-end mb-6 h-24">
      <div className="flex-1 h-full bg-emerald-500 rounded-lg" />
      <div className="flex-1 h-3/4 bg-emerald-300 rounded-lg" />
      <div className="flex-1 h-3/6 bg-emerald-200 rounded-lg" />
      <div className="flex-1 h-1/4 bg-emerald-100 rounded-lg" />
    </div>
  );

  const roiDashboardStats = [
    { label: "Average ROI", value: "150%" },
    { label: "Total Returns", value: "$6M" },
    { label: "CRM ROI", value: "180%" },
  ];

  return (
    <section className="flex flex-1 justify-center px-20 py-12 max-md:px-10 max-sm:px-5">
      <div className="grid grid-cols-3 gap-8 w-full max-w-screen-xl max-md:grid-cols-2 max-sm:grid-cols-1">
      <InventoryDashboardCard
  icon={plannedPurchasesIcon}
  tags={plannedPurchasesTags}
  title="Planned Purchases"
  description="Schedule & Prioritize Tech Investments"
  content={plannedPurchasesContent}
  stats={plannedPurchasesStats}
  buttonText="View Timeline"
  buttonColor="bg-blue-600"
  route="planned-purchase"
/>

<InventoryDashboardCard
  icon={purchaseInventoryIcon}
  tags={purchaseInventoryTags}
  title="Purchase Inventory"
  description="Analyze Spend & Vendor Activity"
  content={purchaseInventoryContent}
  stats={purchaseInventoryStats}
  buttonText="View Inventory"
  buttonColor="bg-violet-600"
  route="purchase-inventory"
/>

<InventoryDashboardCard
  icon={roiDashboardIcon}
  tags={roiDashboardTags}
  title="ROI Dashboard"
  description="Evaluate Performance of Investments"
  content={roiDashboardContent}
  stats={roiDashboardStats}
  buttonText="Open Dashboard"
  buttonColor="bg-emerald-600"
  route="roidashboard"
/>

      </div>
    </section>
  );
}

export default InventoryDashboardCards;
