"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeaderA() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 pt-8 left-0 w-full bg-white z-50">
      {/* Main navbar container */}
      <div className="container px-8 mx-auto flex p-5 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="MedBoard Logo"
            width={174}
            height={32}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 text-xl font-medium items-center justify-end gap-x-10">
          <Link href="/" className="hover:text-gray-900 text-black">
            About us
          </Link>
          <Link href="/" className="hover:text-gray-900 text-black">
            Healthcare professionals
          </Link>
          <Link href="/" className="hover:text-gray-900 text-[#31C137]">
            Employer Login
          </Link>
        </nav>
        <div className="hidden md:block ml-12">
          <Button text="Book a Demo" href="/demo" />
        </div>

        {/* Hamburger Button (always visible and above everything) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 z-50"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // Close (X)
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger
            )}
          </svg>
        </button>
      </div>

      {/* Fullscreen Mobile Nav */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 overflow-y-auto">
          <div className="container mx-auto px-6 pt-10 pb-6 flex flex-col">
            {/* Mobile Logo */}
            <div className="mb-8">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/images/logo.svg"
                  alt="MedBoard Logo"
                  width={174}
                  height={32}
                  priority
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </div>

            {/* Mobile Nav */}
            <nav className="flex flex-col space-y-6 text-lg w-full">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-900"
              >
                About us
              </Link>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-900"
              >
                Healthcare professionals
              </Link>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-900 text-[#31C137]"
              >
                Employer Login
              </Link>
              <div className="ml-2">
                <Button text="Book a Demo" href="/demo" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
