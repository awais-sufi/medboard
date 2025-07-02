"use client";

import React, { useRef, useState } from "react";

export default function Otp1() {
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.findIndex((ref) => ref === e.target);
      if (index > 0) {
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index - 1] = "";
          return newOtp;
        });
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const index = inputRefs.current.findIndex((ref) => ref === e.target);

    if (/^[0-9]{1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pasted)) return;

    const digits = pasted.slice(0, otp.length).split("");
    setOtp(digits);

    digits.forEach((digit, i) => {
      const ref = inputRefs.current[i];
      if (ref) ref.value = digit;
    });

    if (inputRefs.current[digits.length - 1]) {
      inputRefs.current[digits.length - 1]?.focus();
    }
  };

  return (
    <section className="bg-white pt-10 mb-2 dark:bg-dark">
      <div className="container">
        <form id="otp-form" className="flex gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onPaste={handlePaste}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className="w-12 border-b-2 border-green-500 text-gareen bg-transparent text-center text-2xl font-bold outline-none focus:border-b-4 transition-all duration-200"
            />
          ))}
        </form>
      </div>
    </section>
  );
}
