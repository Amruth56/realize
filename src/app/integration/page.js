"use client";
import Footer from "@/resuable/footer/Footer";
import Header from "@/resuable/header/Header";
import IntegrationAssistantMessage from "@/components/integration/IntegrationAssistantMessage";
import IntegrationIntegrationCard from "@/components/integration/IntegrationIntegrationCard";
import IntegrationPrivacySection from "@/components/integration/IntegrationPrivacySection";
import IntegrationProgressIndicator from "@/components/integration/IntegrationProgressIndicator";
import React from "react";


function IntegrationPage() {
  return (
    <main className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="w-full bg-opacity-0">
        <div className="w-full bg-gray-50">
          <Header />

          <div>
              <h1 className="text-2xl font-semibold text-gray-800 m-2">
                Integration
              </h1>
            </div>
          <div className="flex mr-6 ml-5 max-md:mr-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/253267076ef97d426eba5807917a93781543f5ed?placeholderIfAbsent=true"
              className="object-contain z-10 shrink-0 my-auto aspect-[1.51] w-[68px] max-md:-mr-2"
              alt="Decorative element"
            />
            <section className="px-8 py-12 bg-opacity-0 max-md:px-5 max-md:max-w-full">
              <IntegrationAssistantMessage />
              <div className="mt-8 w-full bg-opacity-0 max-md:max-w-full">
                <section className="flex flex-col items-start pr-20 pb-2 leading-none bg-opacity-0 max-md:pr-5 max-md:max-w-full">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Connect Your Services
                  </h1>
                  <p className="mt-6 text-lg text-gray-600 max-md:max-w-full">
                    Securely integrate your systems with Realize platform to
                    unlock advanced analytics and insights.
                  </p>
                </section>

                <IntegrationProgressIndicator />

                <div className="mt-1 bg-opacity-0 max-md:max-w-full" space={24}>
                  <div className="flex gap-5 justify-center max-md:flex-col">
                    <div className="w-6/12 max-md:ml-0 max-md:w-full">
                      <IntegrationIntegrationCard
                        type="microsoft"
                        title="Microsoft Integration"
                        description="Connect with Microsoft Azure to enable seamless data synchronization and advanced analytics."
                        buttonText="Connect with Microsoft"
                        recommended={true}
                        imageSrc="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/847e90f8d280c84a76f52ea71f1b84400cb8fe39?placeholderIfAbsent=true"
                      />
                    </div>
                    
                  </div>
                </div>

                <IntegrationPrivacySection />
              </div>
            </section>
            {/* <aside className="self-start mt-96 max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/b58f93941a5e874cd79482c78a349940bb1c6c46?placeholderIfAbsent=true"
                className="object-contain ml-4 aspect-[1.51] w-[68px] max-md:ml-2.5"
                alt="Decorative element"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/4c3a8c0464b7c9354e93ec5e89b2fabf76373474?placeholderIfAbsent=true"
                className="object-contain mt-80 w-20 rounded-full aspect-square max-md:mt-10 max-md:mr-1"
                alt="Decorative element"
              />
            </aside> */}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default IntegrationPage;
