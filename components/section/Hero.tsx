import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center min-h-screen px-5 py-12">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2 items-start text-left justify-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
              One Healthcare
              <br />
              One network. <span className="text-gareen">Medbord</span>
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              A trusted platform for hiring the best healthcare professionals.
              Entering our vast, global network of top-tier talents begins with
              creating an account. Let’s build a healthier future, together.
            </p>
            <button className="bg-gareen text-white px-6 py-3 text-lg rounded-md hover:bg-green-700 transition">
              Create account
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 w-full mt-10 md:mt-0">
            <Image
              className="object-cover object-center rounded"
              height={1000}
              width={1000}
              alt="hero"
              src="/images/1hero.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
