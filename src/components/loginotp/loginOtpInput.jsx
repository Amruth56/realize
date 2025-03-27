"use client";
import React, { useRef, useState, useEffect } from "react";

function LoginOtpInput({ length = 6, onComplete }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow one digit
    if (value.length > 1) {
      return;
    }

    // Update OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Call onComplete callback if all fields are filled
    if (newOtp.every((digit) => digit !== "") && onComplete) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus to previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Move focus with arrow keys
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Only process if pasted content matches expected length
    if (pastedData.length === length && /^\d+$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp(digits);

      // Focus the last input
      inputRefs.current[length - 1].focus();

      // Call onComplete callback
      if (onComplete) {
        onComplete(pastedData);
      }
    }
  };

  return (
    <div className="flex gap-3 mb-6 max-sm:gap-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
          className="text-center rounded-xl border border-solid border-zinc-300 h-[50px] w-[50px] max-sm:w-10 max-sm:h-10"
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default LoginOtpInput;
