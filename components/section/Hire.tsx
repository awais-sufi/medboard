"use client";
import Image from "next/image";
import React, { useState } from "react";

const Hire = () => {
  const [isFilled, setIsFilled] = useState(true);
  const toggleDot = () => setIsFilled(!isFilled);

  return (
    <section className="bg-white py-26">
      <div className="w-full container px-8 mx-auto">
        {/* Header Row with Clickable Dot and Divider */}
        <div
          className="flex flex-wrap items-center mb-14 cursor-pointer"
          onClick={toggleDot}
        >
          <span
            className={`w-10 h-10 rounded-full border-2 border-green-500 mr-2 transition-all duration-300 ${
              isFilled ? "bg-green-500" : "bg-transparent"
            }`}
          ></span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mr-4">
            Why hire through us
          </h2>
          <div className="flex-grow border-t border-gray-200 mt-4 md:mt-0 w-full md:w-auto"></div>
        </div>

        {/* Grid Layout for Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div>
            <div className="mb-8 ">
              <h3 className="text-3xl font-bold mb-3">
                Reach the right candidate
              </h3>
              <p className="text-gray font-semibold font-ubuntu text-2xl">
                Medbord exclusively designed for healthcare professionals.
                Posted jobs will be automatically targeted to the right
                candidate.
              </p>
            </div>

            <div className="mb-8 mt-15">
              <h3 className="text-3xl font-bold mb-3">
                One dashboard to control all candidates
              </h3>
              <p className="text-gray font-semibold font-ubuntu text-2xl">
                Control all your candidates and applications in one place. Talk
                to any candidates with our secured messages.
              </p>
            </div>

            <div className="mt-15">
              <h3 className="text-3xl font-bold mb-3">
                We’re Here For You 24/7
              </h3>
              <p className="text-gray font-semibold font-ubuntu text-2xl">
                Our team of experts are here for you, anything from answering
                any questions to resolving any issues, at any time.
              </p>
            </div>
          </div>

          {/* Image Block */}
          <div className="flex justify-center">
            <Image
              src="/images/hire.svg"
              alt="Doctor Illustration"
              style={{ width: "100%", height: "auto" }} // must override both
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
