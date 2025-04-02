"use client";
import React from "react";
import CyberInsuranceStatCard from "@/components/cyberInsurance/CyberInsuranceStatCard";
import CyberInsuranceButton from "@/components/cyberInsurance/CyberInsuranceFormButton";
import CyberInsuranceFormField from "@/components/cyberInsurance/CyberInsuranceFormField";
import CyberInsuranceChatMessage from "@/components/cyberInsurance/CyberInsuranceChatMessage";
import CyberInsuranceStepIndicator from "@/components/cyberInsurance/CyberInsuranceStepIndicator";
import Header from "@/resuable/header/Header";
import Footer from "@/resuable/footer/Footer";

const CyberInsuranceForm = () => {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <Header />

      <section className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="flex justify-center">
          <div className="w-full max-w-screen-md">
            <CyberInsuranceStepIndicator />

            <article className="p-8 bg-white rounded-xl shadow-md">
              <CyberInsuranceChatMessage
                message="Hello! I'm your Cyber Insurance Advisor. Let's start by gathering some basic information about your business."
                imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f756691076387d759daf1cb47c92d7f46458565c"
              />

              <form className="gap-y-6">
                <CyberInsuranceFormField label="Company Name" type="text" />

                <CyberInsuranceFormField
                  label="Industry"
                  type="select"
                  placeholder="Select your industry"
                />

                <CyberInsuranceFormField label="Number of Employees" type="text" />

                <div className="flex justify-end mt-8">
                  <CyberInsuranceButton
                    text="Next Step"
                    icon={
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0H14V16H0V0Z" stroke="#E5E7EB"></path>
                        <path
                          d="M13.7063 8.70615C14.0969 8.31553 14.0969 7.68115 13.7063 7.29053L8.70625 2.29053C8.31563 1.8999 7.68125 1.8999 7.29063 2.29053C6.9 2.68115 6.9 3.31553 7.29063 3.70615L10.5875 6.9999H1C0.446875 6.9999 0 7.44678 0 7.9999C0 8.55303 0.446875 8.9999 1 8.9999H10.5844L7.29375 12.2937C6.90312 12.6843 6.90312 13.3187 7.29375 13.7093C7.68437 14.0999 8.31875 14.0999 8.70938 13.7093L13.7094 8.70928L13.7063 8.70615Z"
                          fill="black"
                        ></path>
                      </svg>
                    }
                  />
                </div>
              </form>
            </article>
          </div>
        </div>
      </section>

      <section className="flex  gap-6 justify-center px-4 mx-auto mt-8 max-w-[992px]">
        <CyberInsuranceStatCard
          title="Coverage Score"
          value="72%"
          color="blue"
          icon={
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_1726)">
                <path
                  d="M3.15625 2.5C3.15625 1.80859 2.59766 1.25 1.90625 1.25C1.21484 1.25 0.65625 1.80859 0.65625 2.5V15.625C0.65625 17.3516 2.05469 18.75 3.78125 18.75H19.4062C20.0977 18.75 20.6562 18.1914 20.6562 17.5C20.6562 16.8086 20.0977 16.25 19.4062 16.25H3.78125C3.4375 16.25 3.15625 15.9688 3.15625 15.625V2.5ZM19.0391 5.88281C19.5273 5.39453 19.5273 4.60156 19.0391 4.11328C18.5508 3.625 17.7578 3.625 17.2695 4.11328L13.1562 8.23047L10.9141 5.98828C10.4258 5.5 9.63281 5.5 9.14453 5.98828L4.76953 10.3633C4.28125 10.8516 4.28125 11.6445 4.76953 12.1328C5.25781 12.6211 6.05078 12.6211 6.53906 12.1328L10.0312 8.64453L12.2734 10.8867C12.7617 11.375 13.5547 11.375 14.043 10.8867L19.043 5.88672L19.0391 5.88281Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_17_1726">
                  <path
                    d="M0.65625 0H20.6562V20H0.65625V0Z"
                    fill="white"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          }
        />

        <CyberInsuranceStatCard
          title="Risk Level"
          value="Medium"
          valueColor="text-amber-500"
          color="amber"
          icon={
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_1736)">
                <path
                  d="M10.3281 1.25C10.8828 1.25 11.3946 1.54297 11.6758 2.02344L20.1133 16.3984C20.3985 16.8828 20.3985 17.4805 20.1211 17.9648C19.8438 18.4492 19.3242 18.75 18.7656 18.75H1.89065C1.33205 18.75 0.812523 18.4492 0.535179 17.9648C0.257836 17.4805 0.261742 16.8789 0.542992 16.3984L8.98049 2.02344C9.26174 1.54297 9.77346 1.25 10.3281 1.25ZM10.3281 6.25C9.80862 6.25 9.39065 6.66797 9.39065 7.1875V11.5625C9.39065 12.082 9.80862 12.5 10.3281 12.5C10.8477 12.5 11.2656 12.082 11.2656 11.5625V7.1875C11.2656 6.66797 10.8477 6.25 10.3281 6.25ZM11.5781 15C11.5781 14.6685 11.4465 14.3505 11.212 14.1161C10.9776 13.8817 10.6597 13.75 10.3281 13.75C9.99663 13.75 9.67869 13.8817 9.44426 14.1161C9.20984 14.3505 9.07815 14.6685 9.07815 15C9.07815 15.3315 9.20984 15.6495 9.44426 15.8839C9.67869 16.1183 9.99663 16.25 10.3281 16.25C10.6597 16.25 10.9776 16.1183 11.212 15.8839C11.4465 15.6495 11.5781 15.3315 11.5781 15Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_17_1736">
                  <path
                    d="M0.328125 0H20.3281V20H0.328125V0Z"
                    fill="white"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          }
        />

        <CyberInsuranceStatCard
          title="Recommendations"
          value="4"
          color="emerald"
          icon={
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.484375 0H15.4844V20H0.484375V0Z"
                stroke="#E5E7EB"
              ></path>
              <path
                d="M11.1094 15C11.4844 13.7539 12.2617 12.6914 13.0312 11.6328C13.2344 11.3555 13.4375 11.0781 13.6328 10.7969C14.4062 9.68359 14.8594 8.33594 14.8594 6.87891C14.8594 3.07812 11.7812 0 7.98438 0C4.1875 0 1.10938 3.07812 1.10938 6.875C1.10938 8.33203 1.5625 9.68359 2.33594 10.793C2.53125 11.0742 2.73438 11.3516 2.9375 11.6289C3.71094 12.6875 4.48828 13.7539 4.85938 14.9961H11.1094V15ZM7.98438 20C9.71094 20 11.1094 18.6016 11.1094 16.875V16.25H4.85938V16.875C4.85938 18.6016 6.25781 20 7.98438 20ZM4.85938 6.875C4.85938 7.21875 4.57812 7.5 4.23438 7.5C3.89062 7.5 3.60938 7.21875 3.60938 6.875C3.60938 4.45703 5.56641 2.5 7.98438 2.5C8.32812 2.5 8.60938 2.78125 8.60938 3.125C8.60938 3.46875 8.32812 3.75 7.98438 3.75C6.25781 3.75 4.85938 5.14844 4.85938 6.875Z"
                fill="black"
              ></path>
            </svg>
          }
        />
      </section>
      <Footer></Footer>
    </main>
  );
};

export default CyberInsuranceForm;
