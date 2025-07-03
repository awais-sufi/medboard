import React from "react";
import Link from "next/link";
import Image from "next/image";

const Account5 = () => {
  return (
    <div className="container px-4 sm:px-6 mx-auto">
      <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 md:p-16 shadow-2xl rounded-md my-10 sm:my-16 md:my-20 bg-white space-y-6">
        {/* Logo centered */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="MedBoard Logo"
              width={174}
              height={32}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>

        {/* Main text */}
        <div className="text-center space-y-3 px-2 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Hello <span className="text-gareen">Jaison Mathew </span>
          </h2>
          <p className="text-gray mb-4 mt-2 font-semibold font-ubuntu text-sm sm:text-md">
            You are a Healthcare Hero, Do you know that you can create an
            account on Medbord <br className="hidden sm:block" /> Mobile
            application designed for healthcare professionals, it won’t be
            merged with a company account
          </p>
          <p className="text-gray mb-4 mt-2 font-semibold font-ubuntu text-sm sm:text-md">
            Build your Network, Keep Connected
          </p>
        </div>

        {/* Input field */}
        <div className="flex w-full text-center max-w-md mx-auto sm:justify-start rounded">
          <input
            type="text"
            placeholder="Enter your Mobile number"
            className="px-4 text-sm sm:text-md font-semibold text-center py-3 bg-white w-full outline-none"
          />
        </div>

        <div className="bg-gareen text-white text-center py-3 max-w-md mx-auto cursor-pointer hover:opacity-90">
          <Link href="/">Send a link & Continue creating company account</Link>
        </div>

        {/* Bottom options */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-gray font-semibold font-ubuntu text-sm sm:text-md px-2 sm:px-0">
          <Link href="/" className="hover:underline">
            I already have an account
          </Link>
          <Link href="/" className="hover:underline">
            I’ll do it later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account5;
