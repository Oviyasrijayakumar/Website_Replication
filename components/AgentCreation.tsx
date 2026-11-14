"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  key: string;
  title: string;
  description: string;
  video?: string;
  image?: string;
}

const features: Feature[] = [
  {
    key: "humanized-conversational-ai",
    title: "Humanized Conversational AI®",
    description:
      "Create with the only state-of-the-art AI agent that adaptively learns from interacting with your customers—both securely and fully compliant.",
    video: "/images/landing/humanizedai.mp4",
  },
  {
    key: "stateful-multi-task-agents",
    title: "Stateful Multi-Task Agents®",
    description:
      "Intuitively build agents that can update a CRM, book appointments, and handle complex transfers—all in one workflow.",
    video: "/images/landing/multitask2.mp4",
  },
  {
    key: "knowledge-base-syncing",
    title: "Knowledge Base Syncing",
    description:
      "Seamlessly integrate your knowledge base with your agents in real-time, with no manual updates required.",
    image: "/images/landing/SingleTaskAgent.svg",
  },
  {
    key: "premade-templates",
    title: "Premade Templates",
    description:
      "Choose from our library of pre-built templates to quickly create agents for common industry use cases.",
    image: "/images/landing/templates.svg",
  },
];

export default function AgentCreation() {
  const [activeIndex, setActiveIndex] = useState(1); // default to Stateful Multi-Task Agents as seen in Screenshot 4
  const [keyCounter, setKeyCounter] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setKeyCounter((k) => k + 1);
    }, 7000);
  }, []);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setKeyCounter((k) => k + 1);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const currentFeature = features[activeIndex];

  return (
    <section id="agent-creation" className="bg-white py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-12 px-4 md:flex-row md:gap-16 xl:px-8">
        {/* Left Column: Title and Interactive Tabs */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="w-fit rounded-full border border-gray-200 px-4 py-1 font-medium text-base lg:font-semibold text-gray-800">
            Create
          </div>

          <div className="pt-6" />

          <h2 className="font-semibold text-4xl leading-tight sm:text-5xl md:text-6xl text-gray-900 tracking-tight">
            Agent Creation Features
          </h2>

          <div className="pt-10" />

          <div className="flex flex-1 flex-col gap-3">
            {features.map((feature, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "rounded-xl p-6 text-left transition-all duration-300 relative",
                    isActive
                      ? "border-l-4 border-primary bg-white shadow-md ring-1 ring-black/5"
                      : "hover:bg-gray-50/80 text-gray-700"
                  )}
                >
                  <h3 className="font-semibold text-gray-900 text-xl tracking-tight">
                    {feature.title}
                  </h3>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="pt-2 text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>

                      <div className="relative mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                          key={`progress-${activeIndex}-${keyCounter}`}
                          className="absolute top-0 left-0 animate-gradient-progress"
                        />
                      </div>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Preview (Video or Diagram) */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative h-full min-h-[380px] md:min-h-[480px] w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-4 shadow-xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.key}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="h-full w-full flex items-center justify-center"
              >
                {currentFeature.video ? (
                  <video
                    key={currentFeature.video}
                    src={currentFeature.video}
                    className="h-full w-full rounded-xl object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="relative h-full w-full flex items-center justify-center p-4">
                    <Image
                      src={currentFeature.image!}
                      alt={currentFeature.title}
                      width={520}
                      height={400}
                      className="rounded-xl object-contain max-h-[440px] drop-shadow-md"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
