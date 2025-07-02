import React from "react";
import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <button className="bg-gareen cursor-pointer text-white text-2xl px-10 py-3">
        {text}
      </button>
    </Link>
  );
};

export default Button;
