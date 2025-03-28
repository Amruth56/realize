import React from "react";

function SettingPaymentMethods() {
  return (
    <section className="bg-white rounded-lg border border shadow-sm mt-6">
      <header className="flex justify-between items-center p-6 border border">
        <h2 className="text-lg font-semibold text-black">Payment Methods</h2>
        <button className="flex gap-2 items-center px-4 py-2.5 rounded-lg border border">
          <PlusIcon />
          <span>Add New</span>
        </button>
      </header>
      <div className="p-6">
        <div className="flex justify-between items-center p-4 rounded-lg border border">
          <div className="flex gap-4 items-center">
            <VisaCardIcon />
            <div>
              <p className="text-base font-medium text-black">
                Visa ending in 4242
              </p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
            </div>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
            Default
          </span>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[14px] h-[16px]"
    >
      <g clipPath="url(#clip0_31_302)">
        <path
          d="M8.57812 2.5C8.57812 1.94687 8.13125 1.5 7.57812 1.5C7.025 1.5 6.57812 1.94687 6.57812 2.5V7H2.07812C1.525 7 1.07812 7.44688 1.07812 8C1.07812 8.55312 1.525 9 2.07812 9H6.57812V13.5C6.57812 14.0531 7.025 14.5 7.57812 14.5C8.13125 14.5 8.57812 14.0531 8.57812 13.5V9H13.0781C13.6313 9 14.0781 8.55312 14.0781 8C14.0781 7.44688 13.6313 7 13.0781 7H8.57812V2.5Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_302">
          <path d="M0.578125 0H14.5781V16H0.578125V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function VisaCardIcon() {
  return (
    <svg
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[27px] h-[24px]"
    >
      <path d="M0 0H27V24H0V0Z" stroke="#E5E7EB" />
      <path
        d="M22.0359 10.8422C22.0359 10.8422 22.3922 12.5859 22.4719 12.9516H20.9062C21.0609 12.5344 21.6562 10.9125 21.6562 10.9125C21.6469 10.9266 21.8109 10.4859 21.9047 10.2141L22.0359 10.8422ZM27 3.75V20.25C27 21.4922 25.9922 22.5 24.75 22.5H2.25C1.00781 22.5 0 21.4922 0 20.25V3.75C0 2.50781 1.00781 1.5 2.25 1.5H24.75C25.9922 1.5 27 2.50781 27 3.75ZM7.14844 15.525L10.1109 8.25H8.11875L6.27656 13.2188L6.075 12.2109L5.41875 8.86406C5.31094 8.4 4.97813 8.26875 4.56563 8.25H1.53281L1.5 8.39531C2.24062 8.58281 2.90156 8.85469 3.47812 9.19687L5.15625 15.525H7.14844ZM11.5734 15.5344L12.7547 8.25H10.8703L9.69375 15.5344H11.5734ZM18.1312 13.1531C18.1406 12.3234 17.6344 11.6906 16.5516 11.1703C15.8906 10.8375 15.4875 10.6125 15.4875 10.2703C15.4969 9.96094 15.8297 9.64219 16.5703 9.64219C17.1844 9.62813 17.6344 9.77344 17.9719 9.91875L18.1406 9.99844L18.3984 8.42344C18.0281 8.27812 17.4375 8.11406 16.7109 8.11406C14.85 8.11406 13.5422 9.10781 13.5328 10.5234C13.5188 11.5688 14.4703 12.15 15.1828 12.5016C15.9094 12.8578 16.1578 13.0922 16.1578 13.4062C16.1484 13.8938 15.5672 14.1188 15.0281 14.1188C14.2781 14.1188 13.875 14.0016 13.2609 13.7297L13.0125 13.6125L12.75 15.2484C13.1906 15.45 14.0062 15.6281 14.85 15.6375C16.8281 15.6422 18.1172 14.6625 18.1312 13.1531ZM24.75 15.5344L23.2313 8.25H21.7734C21.3234 8.25 20.9813 8.38125 20.7891 8.85469L17.9906 15.5344H19.9688C19.9688 15.5344 20.2922 14.6344 20.3625 14.4422H22.7812C22.8375 14.7 23.0062 15.5344 23.0062 15.5344H24.75Z"
        fill="black"
      />
    </svg>
  );
}

export default SettingPaymentMethods;
