"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const integrationLogos = [
  { name: "Calendly", src: "/images/calendly.svg" },
  { name: "Jira", src: "/images/jira-logo.png" },
  { name: "Outlook", src: "/images/outlook-logo.svg" },
  { name: "Zapier", src: "/images/zapier-logo.png" },
  { name: "iCloud", src: "/images/icloud.png" },
  { name: "Google", src: "/images/google.png" },
  { name: "Google Calendar", src: "/images/google-calendar.svg" },
  { name: "Microsoft Teams", src: "/images/ruth-connect/teams.svg" },
  { name: "HubSpot", src: "/images/ruth-connect/hubspot.svg" },
  { name: "ClickUp", src: "/images/ruth-connect/clickup.svg" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative w-full overflow-hidden bg-gray-50/70 py-24 pb-52">
      {/* Waveform Background */}
      <div className="pointer-events-none absolute -bottom-28 left-0 z-0 w-full opacity-60">
        <Image
          src="/images/waveform.svg"
          alt="waveform background"
          width={1920}
          height={200}
          className="w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center xl:px-8">
        {/* Badge */}
        <div className="mx-auto w-fit rounded-full border border-gray-200 bg-white px-4 py-1 font-medium text-base lg:font-semibold text-gray-800 shadow-xs">
          Integrations
        </div>

        <div className="pt-6" />

        {/* Heading */}
        <h2 className="font-semibold text-4xl leading-tight sm:text-5xl md:text-6xl tracking-tight text-gray-900">
          Seamless Integrations
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-2xl pt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Easily integrate with your favorite booking tools, CRMs, workflow systems, calendars. Take more involved action through your existing stack.
        </p>

        <div className="pt-16" />

        {/* Floating Integration Icons */}
        <div className="relative w-full overflow-visible">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
            {integrationLogos.map((item, index) => {
              const distance = Math.abs(index - Math.floor(integrationLogos.length / 2));
              return (
                <motion.div
                  key={item.name}
                  className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-2xl bg-white p-3.5 shadow-md border border-gray-100 flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
                  animate={{
                    y: [-4, -20, 6],
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 3) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.25 * distance,
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
