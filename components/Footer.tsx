"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#15161c] text-white pt-24 pb-12 overflow-hidden">
      {/* Wave Transition from FAQ */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-full fill-[#f9f9f9]"
          preserveAspectRatio="none"
          width="1440"
          height="86"
          viewBox="0 0 1440 86"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 85.662C240 29.1253 480 0.857 720 0.857C960 0.857 1200 29.1253 1440 85.662V0H0V85.662Z" />
        </svg>
      </div>

      {/* Main Radial Gradient Background Area */}
      <div
        className="flex items-center justify-center pt-8 pb-10"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(161, 42, 145, 0.4), rgba(33, 13, 123, 0.5), transparent 70%)",
        }}
      >
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 xl:px-8">
          {/* Overlapping Call-to-Action Card */}
          <div className="z-10 -mt-28 md:-mt-36 grid max-w-full place-items-center rounded-3xl border border-gray-100 bg-white px-6 py-10 md:py-16 lg:max-w-5xl lg:px-24 shadow-2xl text-dark text-center">
            <div className="w-fit rounded-full border border-gray-200 px-5 py-1 font-medium text-sm md:text-base text-gray-800">
              Begin Your AI Journey
            </div>

            <div className="pt-6" />

            <h2 className="text-center font-bold text-3xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-tight max-w-3xl">
              Unlock a World of Possibilities with Our Free Trial
            </h2>

            <div className="pt-8" />

            <a
              href="https://app.puretalk.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="rounded-full bg-dark px-10 py-3.5 font-bold text-base md:text-lg text-white shadow-xl hover:bg-black transition-all hover:scale-105 cursor-pointer"
              >
                Join Puretalk AI Now
              </button>
            </a>
          </div>

          <div className="pt-16" />

          {/* Navigation Columns */}
          <div className="grid w-full grid-cols-2 justify-between gap-10 sm:grid-cols-4">
            {/* Logo and Tagline */}
            <div className="flex flex-col gap-4 text-gray-400 col-span-2 sm:col-span-1">
              <div className="relative w-36 h-10">
                <Image
                  src="/logo.svg"
                  alt="Puretalk AI Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex flex-col gap-1 text-sm tracking-wide text-gray-300 font-medium">
                <span>The Voice of AI®</span>
                <span>HUMANIZING AI®</span>
              </div>
            </div>

            {/* Products */}
            <div className="flex flex-col gap-3 text-base">
              <span className="font-bold text-lg text-white">Products</span>
              <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                Text to Speech
              </Link>
              <Link href="#agent-creation" className="text-gray-400 hover:text-white transition-colors text-sm">
                AI Assistant
              </Link>
              <Link href="#scale-dashboard" className="text-gray-400 hover:text-white transition-colors text-sm">
                Enterprise
              </Link>
            </div>

            {/* Docs */}
            <div className="flex flex-col gap-3 text-base">
              <span className="font-bold text-lg text-white">Docs</span>
              <Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                FAQ
              </Link>
              <Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 text-base">
              <span className="font-bold text-lg text-white">Legal</span>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Information Security Policy
              </Link>
            </div>
          </div>

          <div className="w-full border-t border-gray-800 my-4" />

          {/* Bottom Bar: Copyright & Socials */}
          <div className="flex w-full flex-col items-center justify-between gap-4 text-sm sm:flex-row text-gray-400">
            <span>© 2026 Puretalk. All rights reserved.</span>

            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="https://x.com/PuretalkA"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span>Twitter</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/meca-technologies"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span>Github</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/puretalkai"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span>Linkedin</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
