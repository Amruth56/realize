"use client";
import React, { useState, useRef, useEffect } from "react";

function OTPInput() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(55);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if current input is filled
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text/plain")
      .slice(0, 6)
      .split("");

    const newOtp = [...otp];
    pastedData.forEach((value, index) => {
      if (index < 6) {
        newOtp[index] = value;
      }
    });

    setOtp(newOtp);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex((val) => !val);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex].focus();
    } else if (pastedData.length > 0) {
      inputRefs.current[5].focus();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="otp-1" className="text-sm font-medium text-gray-700">
        OTP
      </label>
      <div className="flex gap-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index + 1}`}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            className={`text-center rounded-xl border border-solid ${
              index === 0 ? "border-blue-800" : "border-zinc-300"
            } h-[50px] w-[50px]`}
          />
        ))}
      </div>
      <div className="mt-2 text-sm font-medium text-blue-800">
        {timeLeft > 0
          ? `0:${timeLeft.toString().padStart(2, "0")} Seconds left`
          : "Time expired"}
      </div>
    </div>
  );
}

export default OTPInput;
