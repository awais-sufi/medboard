"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderB() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow">
      {/* Navbar */}
      <div className="container px-6 md:px-8 mx-auto flex p-5 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="relative w-[154px] h-[32px]">
            <Image
              src="/images/logo.svg"
              alt="MedBoard Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-end gap-x-6 xl:gap-x-10 text-base font-medium text-gray-700">
          <Link href="/admin" className="hover:text-green-500">
            Dashboard
          </Link>
          <Link href="/admin/feeds" className="hover:text-green-500">
            Feeds
          </Link>
          <Link href="/admin/my-jobs" className="hover:text-green-500">
            My Jobs
          </Link>
          <Link href="/admin/message" className="hover:text-green-500">
            Message
          </Link>
          <Link href="/admin/account" className="hover:text-green-500">
            Account
          </Link>
          <Link href="/admin/post-a-job" className="hover:text-green-500">
            Post a Job
          </Link>
          <div className="hidden lg:flex lg:ml-8 xl:ml-12 space-x-3">
            <Link href="/admin/dashboard">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <div className="relative w-5 h-5">
                  <Image
                    src="/images/admin/Icon ionic-md-notifications-outline.svg"
                    alt="notification"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
            <Link href="/admin/dashboard">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <div className="relative w-5 h-5">
                  <Image
                    src="/images/admin/hex-lab.svg"
                    alt="profile"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>
        </nav>

        {/* Desktop Icons */}

        {/* Hamburger (Visible <lg) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-900 z-50"
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
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
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
            <nav className="flex flex-col gap-y-4 text-gray-800 text-base font-medium">
              <Link
                href="/admin/dashboard"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/admin/feeds"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Feeds
              </Link>
              <Link
                href="/admin/my-jobs"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                My Jobs
              </Link>
              <Link
                href="/admin/message"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Message
              </Link>
              <Link
                href="/admin/account"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Account
              </Link>
              <Link
                href="/admin/post-a-job"
                className="hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Post a Job
              </Link>
            </nav>

            {/* Mobile Icons */}
            <div className="flex mt-8 space-x-4">
              <Link href="/admin/dashboard" onClick={() => setMenuOpen(false)}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/images/admin/Icon ionic-md-notifications-outline.svg"
                      alt="notification"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </Link>
              <Link href="/admin/dashboard" onClick={() => setMenuOpen(false)}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/images/admin/hex-lab.svg"
                      alt="profile"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
