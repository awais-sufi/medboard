import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import Otp1 from "../ui/Otp";

export default function Demo1() {
  return (
    <div className="container pt-10 px-4 sm:px-6 md:px-8 mx-auto">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="MedBoard Logo"
          width={174}
          height={32}
          priority
        />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 md:py-25">
        {/* Left side (Image + text) */}
        <div className="text-center md:text-left">
          <Image
            src="/images/demopic.svg"
            alt="Doctor Illustration"
            width={350}
            height={350}
            className="mx-auto md:mx-0 max-w-full h-auto"
          />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 mt-6">
            <span className="text-gareen">Welcome</span> Back.
          </h3>
          <p className="text-gray font-semibold font-ubuntu text-base sm:text-lg leading-relaxed">
            Login to access the resumes of thousands of healthcare{" "}
            <br className="hidden sm:block" />
            professionals, post job vacancies and start interviewing{" "}
            <br className="hidden sm:block" />
            promising candidates right away.
          </p>
        </div>

        {/* Right side (OTP form) */}
        <div className="mb-8 px-2 sm:px-0">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Login</h3>
          <h3 className="text-lg sm:text-xl font-bold mb-3">
            Verify your phone number
          </h3>
          <p className="text-gray font-semibold font-ubuntu text-base sm:text-lg leading-7">
            A One-Time Password (OTP) has been sent to your phone number. <br />
            224-877-1045,{" "}
            <Link href="/">
              <span className="text-gareen hover:underline cursor-pointer">
                EDIT
              </span>
            </Link>
            <br />
            Having trouble receiving the OTP? <br />
            Why not{" "}
            <Link href="/">
              <span className="text-gareen hover:underline cursor-pointer">
                resend
              </span>
            </Link>{" "}
            it and give it another shot?
          </p>

          <div className="mt-4 mb-6">
            <Otp1 />
          </div>

          <Button text="Continue" href="/demo/1/2" />

          <p className="text-gray py-4 font-semibold font-ubuntu text-base sm:text-xl">
            Don’t have an account?
            <Link href="/account">
              <span className="text-gareen hover:underline cursor-pointer ml-1">
                Create an account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
