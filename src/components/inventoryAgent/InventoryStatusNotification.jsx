import React from "react";

/**
 * Fixed status notification component
 */
function InventoryStatusNotification() {
  return (
    <aside className="fixed right-4 bottom-4">
      <div className="flex gap-2 items-center px-4 py-2 text-white bg-emerald-500 rounded-full shadow-md">
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;153:130&quot; layer-name=&quot;Frame&quot; width=&quot;17&quot; height=&quot;16&quot; viewBox=&quot;0 0 17 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[16px] h-[16px]&quot;> <g clip-path=&quot;url(#clip0_153_130)&quot;> <path d=&quot;M8.8125 16C10.9342 16 12.9691 15.1571 14.4694 13.6569C15.9696 12.1566 16.8125 10.1217 16.8125 8C16.8125 5.87827 15.9696 3.84344 14.4694 2.34315C12.9691 0.842855 10.9342 0 8.8125 0C6.69077 0 4.65594 0.842855 3.15565 2.34315C1.65535 3.84344 0.8125 5.87827 0.8125 8C0.8125 10.1217 1.65535 12.1566 3.15565 13.6569C4.65594 15.1571 6.69077 16 8.8125 16ZM12.3438 6.53125L8.34375 10.5312C8.05 10.825 7.575 10.825 7.28438 10.5312L5.28438 8.53125C4.99063 8.2375 4.99063 7.7625 5.28438 7.47188C5.57812 7.18125 6.05312 7.17813 6.34375 7.47188L7.8125 8.94063L11.2812 5.46875C11.575 5.175 12.05 5.175 12.3406 5.46875C12.6312 5.7625 12.6344 6.2375 12.3406 6.52812L12.3438 6.53125Z&quot; fill=&quot;white&quot;></path> </g> <defs> <clipPath id=&quot;clip0_153_130&quot;> <path d=&quot;M0.8125 0H16.8125V16H0.8125V0Z&quot; fill=&quot;white&quot;></path> </clipPath> </defs> </svg>",
          }}
        />
        <span className="text-base">Integration Active</span>
      </div>
    </aside>
  );
}

export default InventoryStatusNotification;

