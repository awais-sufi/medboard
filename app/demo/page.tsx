import Button from "@/components/ui/Button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DemoPage = () => {
  return (
    <>
      <div className="container pt-10 px-4 sm:px-6 md:px-12 mx-auto">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="MedBoard Logo"
            width={174}
            height={32}
            priority
          />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 md:py-25">
          {/* Left Section */}
          <div className="justify-center text-center md:text-left">
            <Image
              src="/images/demopic.svg"
              alt="Doctor Illustration"
              width={350}
              height={350}
              className="mx-auto md:mx-0 max-w-full h-auto"
            />
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 mt-6">
              <span className="text-gareen">Welcome</span> Back.
            </h3>
            <p className="text-gray font-semibold font-ubuntu text-base sm:text-lg">
              Login to access the resumes of thousands of healthcare{" "}
              <br className="hidden sm:block" />
              professionals, post job vacancies and start interviewing{" "}
              <br className="hidden sm:block" />
              promising candidates right away.
            </p>
          </div>

          {/* Right Section */}
          <div className="mb-8 px-2 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Welcome Back.
            </h3>
            <p className="text-gray font-semibold font-ubuntu text-base sm:text-lg">
              Enter your registered phone number to log back{" "}
              <br className="hidden sm:block" /> to your account, we will send
              you a <br className="hidden sm:block" /> one-time password
            </p>
            <p className="text-gray py-4 font-semibold font-ubuntu text-base sm:text-lg">
              Can’t access your phone?
              <Link href="/">
                <span className="text-gareen hover:underline ml-2 sm:ml-3 cursor-pointer">
                  Email
                </span>
              </Link>
            </p>
            <div className="flex w-full border border-gray-300 mb-5 text-center max-w-md mt-2 mx-auto sm:mx-0 sm:justify-start">
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="px-4 sm:px-7 py-4 sm:py-5 text-base sm:text-lg font-semibold bg-white w-full outline-none"
              />
            </div>

            <Button text="Continue" href="/demo/1" />
            <p className="text-gray py-4 font-semibold font-ubuntu text-base sm:text-xl">
              Don’t have an account?
              <Link href="/account">
                <span className="text-gareen hover:underline ml-1 cursor-pointer">
                  Create an account
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
