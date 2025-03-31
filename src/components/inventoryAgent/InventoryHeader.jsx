import React from "react";

/**
 * Header component with logo, title and user profile
 */
function InventoryHeader() {
  return (
    <header className="flex justify-center items-center px-20 border border-gray-100 h-[73px] max-md:px-10 max-sm:px-5">
      <div className="flex justify-between items-center w-full max-w-screen-xl">
        <div className="flex gap-2 items-center">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;153:150&quot; layer-name=&quot;Frame&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[24px] h-[24px]&quot;> <g clip-path=&quot;url(#clip0_153_150)&quot;> <path d=&quot;M10.9922 0.267578C11.6438 0.0332031 12.3563 0.0332031 13.0125 0.267578L22.0125 3.4832C23.2031 3.90977 24 5.03945 24 6.30977V17.691C24 18.9566 23.2031 20.091 22.0078 20.5176L13.0078 23.7332C12.3562 23.9676 11.6437 23.9676 10.9875 23.7332L1.9875 20.5176C0.796875 20.091 0 18.9613 0 17.691V6.30977C0 5.04414 0.796875 3.90977 1.99219 3.4832L10.9922 0.267578ZM12 3.09414L3.85781 6.00039L12 8.90664L20.1422 6.00039L12 3.09414ZM13.5 20.3723L21 17.6957V8.8832L13.5 11.5598V20.3723Z&quot; fill=&quot;#2563EB&quot;></path> </g> <defs> <clipPath id=&quot;clip0_153_150&quot;> <path d=&quot;M0 0H24V24H0V0Z&quot; fill=&quot;white&quot;></path> </clipPath> </defs> </svg>",
            }}
          />
          <h1 className="text-xl text-black">Realize</h1>
        </div>

        <h2 className="text-xl text-black">Inventory Agent Overview</h2>

        <div className="flex gap-4 items-center">
          <button
            className="flex justify-center items-center p-2 w-8 h-8 rounded-lg"
            aria-label="Help"
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;153:228&quot; layer-name=&quot;Frame&quot; width=&quot;17&quot; height=&quot;16&quot; viewBox=&quot;0 0 17 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[16px] h-[16px]&quot;> <g clip-path=&quot;url(#clip0_153_228)&quot;> <path d=&quot;M15.4844 8C15.4844 6.27609 14.7996 4.62279 13.5806 3.40381C12.3616 2.18482 10.7083 1.5 8.98438 1.5C7.26047 1.5 5.60717 2.18482 4.38818 3.40381C3.16919 4.62279 2.48438 6.27609 2.48438 8C2.48438 9.72391 3.16919 11.3772 4.38818 12.5962C5.60717 13.8152 7.26047 14.5 8.98438 14.5C10.7083 14.5 12.3616 13.8152 13.5806 12.5962C14.7996 11.3772 15.4844 9.72391 15.4844 8ZM0.984375 8C0.984375 5.87827 1.82723 3.84344 3.32752 2.34315C4.82781 0.842855 6.86264 0 8.98438 0C11.1061 0 13.1409 0.842855 14.6412 2.34315C16.1415 3.84344 16.9844 5.87827 16.9844 8C16.9844 10.1217 16.1415 12.1566 14.6412 13.6569C13.1409 15.1571 11.1061 16 8.98438 16C6.86264 16 4.82781 15.1571 3.32752 13.6569C1.82723 12.1566 0.984375 10.1217 0.984375 8ZM6.29063 5.16563C6.5375 4.46875 7.2 4 7.94063 4H9.7625C10.8531 4 11.7344 4.88438 11.7344 5.97188C11.7344 6.67813 11.3562 7.33125 10.7437 7.68437L9.73438 8.2625C9.72812 8.66875 9.39375 9 8.98438 9C8.56875 9 8.23438 8.66562 8.23438 8.25V7.82812C8.23438 7.55937 8.37813 7.3125 8.6125 7.17812L9.99687 6.38438C10.1438 6.3 10.2344 6.14375 10.2344 5.975C10.2344 5.7125 10.0219 5.50313 9.7625 5.50313H7.94063C7.83438 5.50313 7.74063 5.56875 7.70625 5.66875L7.69375 5.70625C7.55625 6.09688 7.125 6.3 6.7375 6.1625C6.35 6.025 6.14375 5.59375 6.28125 5.20625L6.29375 5.16875L6.29063 5.16563ZM7.98438 11C7.98438 10.7348 8.08973 10.4804 8.27727 10.2929C8.4648 10.1054 8.71916 10 8.98438 10C9.24959 10 9.50395 10.1054 9.69148 10.2929C9.87902 10.4804 9.98438 10.7348 9.98438 11C9.98438 11.2652 9.87902 11.5196 9.69148 11.7071C9.50395 11.8946 9.24959 12 8.98438 12C8.71916 12 8.4648 11.8946 8.27727 11.7071C8.08973 11.5196 7.98438 11.2652 7.98438 11Z&quot; fill=&quot;#4B5563&quot;></path> </g> <defs> <clipPath id=&quot;clip0_153_228&quot;> <path d=&quot;M0.984375 0H16.9844V16H0.984375V0Z&quot; fill=&quot;white&quot;></path> </clipPath> </defs> </svg>",
              }}
            />
          </button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/538388a73a3173bc6ff27aeb0eef75715635a4e9"
            alt="User profile"
            className="w-[40px] h-[40px] rounded-[9999px]"
          />
        </div>
      </div>
    </header>
  );
}

export default InventoryHeader;
