"use client";
import React, { useState } from "react";
import ChatbotChatMessage from "./ChatbotChatMessage";

function ChatbotChatAssistant() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <aside className="flex flex-col self-end py-6 pr-6 pl-12 mt-96 max-w-full bg-opacity-0 w-[458px] max-md:px-5 max-md:mt-10">
      <div className="bg-white rounded-xl shadow-[0px_25px_50px_rgba(0,0,0,0.25)]">
        <header className="flex flex-col justify-center p-4 w-full leading-none bg-blue-600 rounded-xl">
          <div className="flex gap-3 pr-16 bg-opacity-0 max-md:pr-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/0bb0b3fae333c99ec6686579fff8bfd5a59083be?placeholderIfAbsent=true"
              className="object-contain shrink-0 my-auto w-10 rounded-full aspect-square"
              alt="Assistant avatar"
            />
            <div className="flex flex-col pt-0.5 pb-2 bg-opacity-0">
              <h2 className="text-base font-semibold text-white">
                Realize Assistant
              </h2>
              <p className="self-start mt-3 text-sm text-blue-100">Online</p>
            </div>
          </div>
        </header>

        <div className="overflow-hidden px-4 pt-4 pb-12 w-full text-base text-gray-800 bg-opacity-0">
          <ChatbotChatMessage
            sender="Assistant"
            avatar="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/0a2102332d1c5a6aaa945b58587dad712f741aff?placeholderIfAbsent=true"
            messages={[
              "Hello! I'm here to help you",
              "navigate through your insights.",
              "What would you like to know?",
            ]}
          />

          <div className="flex flex-col items-start px-12 mt-4 text-white bg-opacity-0 max-md:pl-5">
            <ChatbotChatMessage
              sender="User"
              messages={["Can you explain the revenue", "trends?"]}
              isUser={true}
            />
          </div>

          <ChatbotChatMessage
            sender="Assistant"
            avatar="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/1ec4a78933aea0670ac6db3d5b6e398c0af40c0f?placeholderIfAbsent=true"
            messages={[
              "Your revenue has increased by",
              "8% compared to last month.",
              "Would you like to see a detailed",
              "breakdown of this growth?",
            ]}
          />
        </div>

        <footer className="flex flex-col justify-center px-4 py-4 w-full text-base text-gray-400 bg-opacity-0">
          <div className="flex gap-2 bg-opacity-0">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="grow shrink-0 px-2 py-3.5 bg-white rounded-lg border border-solid basis-0 w-fit max-md:pr-5"
            />
            <button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/6bb6188308b4041e6724bf14e354466366b49146?placeholderIfAbsent=true"
                className="object-contain shrink-0 my-auto w-8 rounded-lg aspect-square"
                alt="Send message"
              />
            </button>
          </div>
        </footer>
      </div>

      <button className="self-end mt-7">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/3fdb551c1950785e4d5aedd89a822ff9b6744484?placeholderIfAbsent=true"
          className="object-contain rounded-full aspect-square shadow-[0px_4px_6px_rgba(0,0,0,0.1)] w-[52px]"
          alt="Toggle chat"
        />
      </button>
    </aside>
  );
}

export default ChatbotChatAssistant;
