"use client";
import React from "react";
import ChatbotNavigationBar from "./ChatbotNavigationBar";
import ChatbotWelcomeSection from "./ChatbotWelcomeSection";
import ChatbotAnalyticsOverview from "./ChatbotAnalyticsOverview";
import ChatbotChatAssistant from "./ChatbotChatAssistant";

function ChatbotDashboardPage() {
  return (
    <div className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="w-full bg-opacity-0">
        <div className="flex flex-col w-full bg-gray-50">
          <div className="flex flex-col w-full bg-opacity-0">
            <ChatbotNavigationBar />
            <main className="self-center px-3.5 pt-8 pb-16 w-full max-w-screen-xl bg-opacity-0 max-md:max-w-full">
              <ChatbotWelcomeSection />
              <ChatbotAnalyticsOverview />
            </main>
          </div>
          <ChatbotChatAssistant />
        </div>
      </div>
    </div>
  );
}

export default ChatbotDashboardPage;
