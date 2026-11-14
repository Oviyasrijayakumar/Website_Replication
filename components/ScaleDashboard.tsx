"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScaleItem {
  label: string;
  description: string;
  image: string;
}

const scaleItems: ScaleItem[] = [
  {
    label: "Effortless Campaign Calling",
    description:
      "Automate outreach at scale with AI-powered batch calling, optimized for performance, conversion, and control",
    image: "/images/landing/batchcall.svg",
  },
  {
    label: "Massive Scale, Minimal Effort",
    description:
      "Monitor, manage, and optimize millions of concurrent calls through one streamlined, intuitive dashboard.",
    image: "/images/landing/Dash.png",
  },
  {
    label: "Enterprise-Grade Compliance",
    description:
      "Built with data security in mind—fully aligned with HIPAA, SOC 2, and GDPR to ensure safe, responsible AI communication.",
    image: "/images/landing/batchcall.svg",
  },
];

export default function ScaleDashboard() {
  const [selectedLabel, setSelectedLabel] = useState(scaleItems[0].label);

  const selectedItem =
    scaleItems.find((item) => item.label === selectedLabel) || scaleItems[0];

  return (
    <section id="scale-dashboard" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 xl:px-8">
        {/* Scale Badge */}
        <div className="w-fit rounded-full border border-gray-200 px-4 py-1 font-medium text-base lg:font-semibold text-gray-800">
          Scale
        </div>

        <div className="pt-6" />

        <div className="flex flex-col gap-12 lg:flex-row items-center">
          {/* Left Column: Heading and Cards Grid */}
          <div className="flex-1">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-tight">
              Control Millions of Calls from One Dashboard
            </h2>

            <p className="max-w-xl pt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Our infrastructure is scalable by default- meaning zero unneeded effort on your part. Easily manage campaigns with millions of calls from a single dashboard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {scaleItems.map((item) => {
                const isSelected = selectedLabel === item.label;
                return (
                  <div
                    key={item.label}
                    onClick={() => setSelectedLabel(item.label)}
                    className={cn(
                      "cursor-pointer rounded-2xl border p-5 transition-all duration-200 shadow-sm",
                      isSelected
                        ? "border-primary ring-2 ring-primary/30 bg-primary/5"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                    )}
                  >
                    <div className="font-semibold text-gray-900 text-base">
                      {item.label}
                    </div>
                    <p className="pt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Graphic and Caption */}
          <div className="flex flex-1 flex-col items-center justify-center w-full">
            <div className="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60 p-4 shadow-xl flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.label}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full flex items-center justify-center"
                >
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.label}
                    fill
                    className="rounded-xl object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="max-w-md pt-6 text-center text-gray-600 text-sm">
              {selectedItem.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
