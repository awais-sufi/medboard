import Image from "next/image";
import Link from "next/link";

export default function FooterA() {
  return (
    <footer className="bg-black text-white">
      <div className="w-full container px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 py-10 ">
          {/* Left Section */}
          <div className="flex flex-col items-start ">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/footerlogo.svg"
                alt="MedBoard Logo"
                width={174}
                height={32}
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </Link>

            <p className="text-lg font-quicksand text-gray leading-relaxed mb-10">
              Medbord is a Healthcare staffing
              <br />
              And social media services, handled by
              <br />
              Medbord LLC.
            </p>

            <div className="flex flex-col md:flex-row w-full max-w-md mt-2 text-center md:text-left">
              <input
                type="text"
                placeholder="Email address"
                className="px-7 text-base py-3 text-black bg-white focus:outline-none w-full md:rounded-r-none md:border-r-0"
              />
              <button className="px-6 py-3 text-base bg-gareen text-white w-full md:w-auto md:rounded-l-none mt-3 md:mt-0">
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

          <nav className="flex text-left">
            <ul className="space-y-6">
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

        {/* Bottom Copyright */}
        <p className="font-poppins pb-4 text-center text-lg text-[#989898]">
          © Copyright 2021 Medbord LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
