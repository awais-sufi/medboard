import Button from "@/components/ui/Button";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AccountPage = () => {
  return (
    <div className="container pt-10 px-4 sm:px-6 md:px-12 mx-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 md:py-25">
        {/* Left Section */}
        <div className="justify-center text-center md:text-left">
          <Image
            src="/images/demopic.svg"
            alt="Doctor Illustration"
            width={150}
            height={150}
            style={{ height: "auto", width: "auto" }}
            className="mx-auto md:mx-0 max-w-full"
            priority
          />

          <h3 className="text-2xl sm:text-3xl font-bold mb-3 mt-6">
            One network to hire <br className="hidden sm:block" /> the best
            healthcare professionals
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
          <h3 className="text-2xl sm:text-3xl font-bold">Create an account</h3>
          <p className="text-gray mb-4 mt-2 font-semibold font-ubuntu text-sm sm:text-md">
            Already have an account?
            <Link href="/account">
              <span className="text-gareen ml-1 hover:underline cursor-pointer">
                Sign in
              </span>
            </Link>
          </p>
          <h3 className="text-md sm:text-lg font-bold">Company information</h3>

          {[
            "Company name *",
            "Industry type *",
            "Founded *",
            "Headquarters",
            "Company size *",
          ].map((placeholder, index) => (
            <div
              key={index}
              className="flex w-full border border-gray-300 mb-3 text-center max-w-md mt-2 sm:mx-0 sm:justify-start"
            >
              <input
                type="text"
                placeholder={placeholder}
                className="px-4 sm:px-7 text-sm sm:text-lg font-semibold py-3 bg-white w-full outline-none"
              />
            </div>
          ))}

          <p className="text-gray mb-4 mt-2 font-semibold font-ubuntu text-sm sm:text-md">
            By creating an account you agree{" "}
            <Link href="/account">
              <span className="text-gareen hover:underline cursor-pointer">
                terms and conditions
              </span>
            </Link>{" "}
            and the <br className="hidden sm:block" />
            <Link href="/account">
              <span className="text-gareen hover:underline cursor-pointer">
                privacy policy
              </span>
            </Link>{" "}
            of Medbord innovations.LLC
          </p>
          <Button text="Continue" href="/account/1" />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
