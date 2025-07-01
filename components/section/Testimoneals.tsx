import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Janise Mans",
    role: "Human Resources at Max Healthcare",
    text: "We designed platform \n Only for healthcare  professionals across\n the world.It's easy… and it's awesome\n  We designed the platform only for healthcare professionals \n across the world It's easy… and it's awesome",
  },

  {
    name: "Janise Mans",
    role: "Human Resources at Max Healthcare",
    text: "We designed platform \n Only for healthcare  professionals across\n the world.It's easy… and it's awesome\n  We designed the platform only for healthcare professionals \n across the world It's easy… and it's awesome",
  },
  {
    name: "Janise Mans",
    role: "Human Resources at Max Healthcare",
    text: "We designed platform \n Only for healthcare  professionals across\n the world.It's easy… and it's awesome\n  We designed the platform only for healthcare professionals \n across the world It's easy… and it's awesome",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="w-full container px-8 mx-auto">
        <h1 className="text-2xl px-4 mb-12 font-inter flex justify-center lg:justify-start">
          What people Say about us
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white mb-6 h-full px-3 py-4 text-center lg:text-left"
            >
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  alt="testimonial"
                  src="/images/testimo.svg"
                  width={80}
                  height={80}
                  className="w-20 h-20 mb-4 object-cover object-center"
                />
              </div>

              {/* Name and Role */}
              <h2 className="text-lg font-inter">{testimonial.name}</h2>
              <p className="text-sm font-inter text-[#848282] my-2">
                {testimonial.role}
              </p>

              {/* Star Rating */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  alt="star rating"
                  src="/images/testistar.svg"
                  width={160}
                  height={24}
                  className="mb-4"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-sm font-inter leading-relaxed whitespace-pre-line">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
