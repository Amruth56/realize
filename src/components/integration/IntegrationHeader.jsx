import React from "react";

function IntegrationHeader() {
  return (
    <header className="w-full text-base leading-none text-gray-600 whitespace-nowrap bg-white border border-b max-md:max-w-full">
      <div className="flex flex-col justify-center px-20 py-px w-full bg-white border border-b max-md:px-5 max-md:max-w-full">
        <div className="bg-opacity-0 max-md:max-w-full">
          <div className="px-8 bg-opacity-0 max-md:px-5 max-md:max-w-full">
            <div className="w-full bg-opacity-0 max-md:max-w-full">
              <div className="flex gap-10 pt-5 pb-3 bg-opacity-0 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/3f9f83dfcea5e44355d5dc531b0a348c947485fc?placeholderIfAbsent=true"
                  className="object-contain shrink-0 max-w-full aspect-[3.47] w-[111px]"
                  alt="Company logo"
                />
                <nav className="flex-1 self-start bg-opacity-0">
                  <ul className="flex gap-5 px-px py-1.5 bg-opacity-0">
                    <li className="self-start">
                      <a href="#" className="z-10 hover:text-blue-600">
                        Help
                      </a>
                      <div className="mt-0">Help</div>
                    </li>
                    <li>
                      <a href="#" className="z-10 hover:text-blue-600">
                        Settings
                      </a>
                      <div className="mt-0">Settings</div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default IntegrationHeader;
