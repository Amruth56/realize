"use client";
import React from "react";
import ChatbotAnalyticsCard from "./ChatbotAnalyticsCard";

function ChatbotAnalyticsOverview() {
  return (
    <section className="p-0.5 mt-8 bg-opacity-0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[33%] max-md:ml-0 max-md:w-full">
          <ChatbotAnalyticsCard
            title="Active Users"
            value="2,453"
            icon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/8190e686d9f2a3f6af88cdd4707d627667ff3251?placeholderIfAbsent=true"
            trend="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/54195849a5f75f50a7fa4ea1e50cfe966361b15b?placeholderIfAbsent=true"
            trendValue="12% from last week"
          />
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <ChatbotAnalyticsCard
            title="Revenue"
            value="$84,232"
            icon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/b2b6c334e2bc9445c91a42247e5106b77ca6aa2e?placeholderIfAbsent=true"
            trend="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/4ef2b727951b4dd18ade9702be9158ad93b64a1b?placeholderIfAbsent=true"
            trendValue="8% from last month"
          />
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <ChatbotAnalyticsCard
            title="Projects"
            value="16"
            icon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/1e586cd31e667786b04261d563db689a41d7c94e?placeholderIfAbsent=true"
            additionalInfo="4 in progress"
          />
        </div>
      </div>
    </section>
  );
}

export default ChatbotAnalyticsOverview;
