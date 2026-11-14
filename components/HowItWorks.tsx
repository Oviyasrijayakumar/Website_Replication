"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="bg-dark py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 xl:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-4 text-left"
        >
          <div className="w-fit rounded-full border border-gray-400/30 bg-white/5 px-4 py-1 font-medium text-base text-gray-300">
            Steps
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white">
            How It Works
          </h2>
        </motion.div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Create */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1c1d25] p-6 shadow-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl"
          >
            <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl bg-black/40 border border-white/5 flex items-center justify-center">
              <video
                src="/images/landing/multitask.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="mt-auto">
              <h3 className="font-bold text-white text-2xl tracking-tight">Create</h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Use our intuitive agent builder and API first architecture to streamline your agent creation.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Deploy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1c1d25] p-6 shadow-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl"
          >
            <div className="relative mb-6 h-52 w-full overflow-hidden flex items-center justify-center">
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Left Card */}
                <div
                  className="absolute overflow-hidden rounded-2xl transition-all"
                  style={{
                    filter: "brightness(0.75)",
                    zIndex: 0,
                    transform: "translateX(-28%) scale(0.8)",
                  }}
                >
                  <Image
                    src="/images/landing/puretalk-products/image-1.svg"
                    alt="Product image 1"
                    width={220}
                    height={220}
                    className="rounded-2xl object-contain shadow-lg"
                  />
                </div>

                {/* Center Phone Card */}
                <div
                  className="absolute overflow-hidden rounded-2xl transition-all"
                  style={{
                    filter: "brightness(1)",
                    zIndex: 2,
                    transform: "scale(1)",
                  }}
                >
                  <Image
                    src="/images/landing/puretalk-products/image-2.svg"
                    alt="Product image 2 - Puretalk SMS"
                    width={220}
                    height={220}
                    className="rounded-2xl object-contain shadow-2xl ring-1 ring-white/10"
                  />
                </div>

                {/* Right Card */}
                <div
                  className="absolute overflow-hidden rounded-2xl transition-all"
                  style={{
                    filter: "brightness(0.75)",
                    zIndex: 0,
                    transform: "translateX(28%) scale(0.8)",
                  }}
                >
                  <Image
                    src="/images/landing/puretalk-products/image-3.svg"
                    alt="Product image 3"
                    width={220}
                    height={220}
                    className="rounded-2xl object-contain shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="font-bold text-white text-2xl tracking-tight">Deploy</h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Deploy Omnichannel, Multimodal AI agents across phone, web, SMS. Integrate your favorite apps and telephony
              </p>
            </div>
          </motion.div>

          {/* Card 3: Scale */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1c1d25] p-6 shadow-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl"
          >
            <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl flex items-center justify-center p-2">
              <Image
                src="/images/landing/agent-dashboard/macbook-pro.svg"
                alt="Scale Analytics Dashboard"
                width={360}
                height={220}
                className="h-auto w-full object-contain filter drop-shadow-md"
              />
            </div>
            <div className="mt-auto">
              <h3 className="font-bold text-white text-2xl tracking-tight">Scale</h3>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Handle millions of concurrent calls, quickly qualify leads, and manage large scale call campaigns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
