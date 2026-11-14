"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient-bg relative mb-16 md:mb-24">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 pt-32 pb-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 text-white max-w-5xl"
          >
            {/* Pill Banner */}
            <Link
              href="#agent-creation"
              className="flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white/25 px-3 py-1.5 text-sm md:text-base backdrop-blur-md transition-all hover:bg-white/35 shadow-sm"
            >
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs md:text-sm font-semibold tracking-wide">
                NEW
              </span>
              <span className="font-medium">Introducing Puretalk AI RUTH®</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-4 md:size-5 ml-0.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z" />
              </svg>
            </Link>

            {/* Main Headline */}
            <h1
              className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-tight md:leading-[1.15]"
              style={{
                backgroundImage: "linear-gradient(180deg, #ffffff 40%, rgba(255, 255, 255, 0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              All-in-One Conversational AI Solution.
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl px-2 text-center text-gray-200 text-base md:text-xl font-normal leading-relaxed">
              <strong>Engage Anywhere, Anytime :</strong> Our multi-modal platform ensures your business stays connected across all channels, 24/7. We are the Voice of AI®. We are Humanizing AI®.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="https://app.puretalk.ai"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 md:h-16 w-fit items-center gap-3 rounded-full bg-dark/20 hover:bg-dark/30 px-3 py-2 text-white transition-all backdrop-blur-md shadow-lg group border border-white/10"
              >
                <div className="flex size-10 md:size-11 items-center justify-center rounded-full bg-white text-dark shadow-md group-hover:scale-105 transition-transform">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="size-5 ml-0.5 text-dark"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z" />
                  </svg>
                </div>
                <span className="pr-5 font-semibold text-base md:text-lg">Get Started for Free</span>
              </a>

              <Link
                href="#faq"
                className="flex h-14 md:h-16 w-fit items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-8 font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-dark shadow-md text-base md:text-lg"
              >
                <span>Contact Us</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Smooth Curved Wave */}
        <div className="absolute bottom-[-0.15rem] z-10 w-full pointer-events-none">
          <svg
            className="h-auto w-full fill-white"
            width="1440"
            height="105"
            viewBox="0 0 1440 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
