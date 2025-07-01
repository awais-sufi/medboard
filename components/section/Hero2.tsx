import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="md:py-36">
      <div className="w-full container px-8 mx-auto ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Block */}
          <div className="grid place-items-center">
            <Image
              src="/images/hero2.svg"
              alt="Doctor"
              width={700}
              height={500}
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Text Block */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
              One network to hire the best healthcare professionals
            </h1>
            <p className="mb-6 text-gray text-2xl font-semibold leading-relaxed">
              Login to access the resumes of thousands of healthcare
              professionals, post job vacancies, and start interviewing
              promising candidates right away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
