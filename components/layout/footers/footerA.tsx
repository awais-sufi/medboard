import Image from "next/image";
import Link from "next/link";

export default function FooterA() {
  return (
    <footer className="bg-black text-white">
      <div className="w-full container px-8 mx-auto">
        <div className="flex flex-col md:flex-row pt-14">
          {/* Left Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/footerlogo.svg"
                alt="MedBoard Logo"
                width={174}
                height={32}
                priority
                style={{ height: "auto" }} // ✅ Maintain aspect ratio
              />
            </Link>

            <p className="text-sm font-quicksand text-gray leading-relaxed mb-10">
              Medbord is a Healthcare staffing
              <br />
              And social media services, handled by
              <br />
              Medbord LLC.
            </p>

            <div className="flex w-full text-center max-w-md mt-2 mx-auto justify-center sm:mx-0 sm:justify-start">
              <input
                type="text"
                placeholder="Email address"
                className="px-7 text-xs py-3 text-black bg-white focus:outline-none"
              />
              <button className="px-6 py-3 text-xs bg-gareen text-white">
                Subscribe
              </button>
            </div>

            <div className="flex space-x-4 mt-6">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook"
                  fill
                  className="object-contain"
                  sizes="24px"
                />
              </div>

              <Link href="/">
                <Image
                  src="/images/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/google.svg"
                  alt="Google"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex  justify-center md:justify-end">
            <nav className="text-center  md:text-left">
              <ul className="space-y-4 ">
                <li>
                  <Link href="/" className="hover:text-gray-400">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-400 ">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-400">
                    Investors Center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-400">
                    Help
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright */}
        <p className="mt-12 font-poppins pb-2 text-center text-sm text-[#989898]">
          © Copyright 2021 Medbord LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
