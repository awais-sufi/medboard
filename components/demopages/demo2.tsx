import React from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const demo2 = () => {
  return (
    <div className="container pt-10 px-4 sm:px-6 md:px-8 mx-auto">
      <div className="relative flex items-center justify-center py-4">
        {/* Back button on the left */}
        <button
          onClick={() => window.history.back()}
          className="absolute left-2 sm:left-4 text-black text-base sm:text-lg font-medium hover:underline cursor-pointer"
        >
          Back
        </button>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="MedBoard Logo"
            width={174}
            height={32}
            priority
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 md:py-25">
        {/* Left Side */}
        <div className="md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 mt-6">
            Introducing <span className="text-gareen">Medbord</span>
          </h3>
          <p className="text-gray font-semibold font-ubuntu text-base sm:text-lg leading-relaxed">
            Medbord is the world’s first healthcare professional{" "}
            <br className="hidden sm:block" />
            network, crafted exclusively for healthcare{" "}
            <br className="hidden sm:block" />
            professionals to connect, build relationships, and{" "}
            <br className="hidden sm:block" />
            unlock career opportunities, while providing{" "}
            <br className="hidden sm:block" />
            organizations with a platform to hire top{" "}
            <br className="hidden sm:block" />
            candidates —all in one place.
          </p>
          <p className="text-gray font-semibold my-4 font-ubuntu text-base sm:text-lg">
            Connecting healthcare professionals, advancing{" "}
            <br className="hidden sm:block" />
            careers, uniting top talent.
          </p>
          <p className="text-gray font-semibold font-ubuntu text-base sm:text-lg leading-relaxed">
            We’re excited to introduce our solution and show you{" "}
            <br className="hidden sm:block" />
            how it can simplify your daily recruitment tasks.{" "}
            <br className="hidden sm:block" />
            Additionally, you can share company news, industry{" "}
            <br className="hidden sm:block" />
            insights, and more on Medbord Feed to engage with{" "}
            <br className="hidden sm:block" />
            your targeted audience.
          </p>
          <span className="text-black font-bold font-ubuntu text-base sm:text-lg">
            Schedule your free demo today!
          </span>
        </div>

        {/* Right Side (Form) */}
        <div className="mb-8 px-2 sm:px-0">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Book a Demo</h3>

          {[
            "First Name",
            "Last Name",
            "Company Name",
            "Company Location",
            "Work Email",
            "Phone number",
            "Current position",
          ].map((placeholder) => (
            <div
              key={placeholder}
              className="flex w-full border border-gray-300 mb-3 text-center max-w-md mt-2 mx-auto sm:mx-0 sm:justify-start"
            >
              <input
                type="text"
                placeholder={placeholder}
                className="px-5 sm:px-7 text-base sm:text-lg font-semibold py-3 bg-white w-full outline-none"
              />
            </div>
          ))}

          <Button text="Submit" href="/demo/1/2" />
        </div>
      </div>
    </div>
  );
};

export default demo2;
