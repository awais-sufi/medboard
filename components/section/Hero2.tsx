import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Block */}
        <div className="grid place-items-center">
          <Image
            src="/images/hero2.svg"
            alt="Doctor"
            width={600}
            height={400}
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Text Block */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            One network to hire the best healthcare professionals
          </h1>
          <p className="mb-6 text-gray-700 text-lg leading-relaxed">
            Login to access the resumes of thousands of healthcare
            professionals, post job vacancies, and start interviewing promising
            candidates right away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
