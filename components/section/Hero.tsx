import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-white pt-20">
      <div className="w-full container px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
            One Healthcare
            <br />
            One network. <span className="text-gareen">Medbord</span>
          </h1>
          <p className="text-gray text-xl font-semibold leading-relaxed">
            A trusted platform for hiring the best healthcare professionals.
            Entering our vast, global network of top-tier talents begins with
            creating an account. Let’s build a healthier future, together.
          </p>
          <Link href="/account">
            <button className="bg-gareen text-white px-6 py-3 text-lg hover:bg-green-700 transition cursor-pointer">
              Create account
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/1hero.svg"
            alt="hero"
            width={700}
            height={900}
            priority
            className="object-contain w-full h-auto max-w-[700px] lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
