"use client";
import React from "react";

function ChatbotChatMessage({ sender, avatar, messages, isUser = false }) {
  return (
    <div className="flex gap-3 pr-7 mt-4 first:mt-0 bg-opacity-0 max-md:pr-5">
      {!isUser && (
        <img
          src={avatar}
          className="object-contain shrink-0 self-start w-8 rounded-full aspect-square"
          alt={`${sender} avatar`}
        />
      )}
      <div
        className={`flex flex-col ${
          isUser ? "" : "grow shrink-0"
        } justify-center p-3 ${
          isUser ? "bg-blue-600" : "bg-gray-100"
        } rounded-lg ${!isUser && "basis-0 w-fit"}`}
      >
        <div
          className={`flex flex-col items-start ${
            isUser ? "pt-0.5 pr-12 pb-2.5" : "py-1.5 pr-7"
          } bg-opacity-0 max-md:pr-5`}
        >
          {messages.map((message, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-2.5" : ""} ${
                isUser ? "text-white" : "text-gray-800"
              }`}
            >
              {message}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatbotChatMessage;
