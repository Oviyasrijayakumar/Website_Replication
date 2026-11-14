"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "@/components/FAQ";

interface SolutionTab {
  tab_image: string;
  tab_title: string;
  tab_description: string;
  main_image: string;
  main_title: string;
  main_description: string;
  slider_key: number;
}

const solutionsData: SolutionTab[] = [
  {
    tab_image: "/images/enterprise/icon-1.6f948bd2.svg",
    tab_title: "AI-Powered Voice Agents",
    tab_description:
      "Automate complex customer service tasks with natural, human-like conversations.",
    main_image: "/images/enterprise/image-1.40739d93.svg",
    main_title: "Transform your phone interactions with our AI Phone Agent.",
    main_description:
      "Whether it’s for providing information, taking orders, or conducting surveys, Ruth® delivers a smooth and efficient experience.",
    slider_key: 0,
  },
  {
    tab_image: "/images/enterprise/icon-2.23c4f6b7.svg",
    tab_title: "Intelligent Chatbot",
    tab_description:
      "Achieve a 27% or higher increase in your Customer Satisfaction (CSAT) in just days with superior customer experiences.",
    main_image: "/images/enterprise/image-2.53badb03.svg",
    main_title: "Interact with our intelligent AI Chatbot for instant support.",
    main_description:
      "Available 24/7, it enhances user experience with quick, accurate, and human-like responses that meet your needs.",
    slider_key: 1,
  },
  {
    tab_image: "/images/enterprise/icon-3.bf451e6d.svg",
    tab_title: "Conversational SMS",
    tab_description:
      "Enhance customer engagement with our advanced SMS solutions. Deliver personalized messages, promotions, and updates directly to your customers' mobile devices for a more tailored and effective communication strategy.",
    main_image: "/images/enterprise/image-3.8b040be0.svg",
    main_title: "Streamline your communications with our SMS Service.",
    main_description:
      "Send and receive messages seamlessly to improve customer engagement and support with our reliable SMS Service.",
    slider_key: 2,
  },
  {
    tab_image: "/images/enterprise/icon-4.cf1d2375.svg",
    tab_title: "Text to Speech",
    tab_description:
      "Deliver lifelike, natural-sounding voices for announcements, notifications, and personalized messages, creating a more engaging and accessible experience for your audience.",
    main_image: "/images/enterprise/image-4.9095928f.svg",
    main_title: "Enhance your outreach with our Text to Speech service.",
    main_description:
      "Transform written content into captivating audio to reach a broader audience, improve accessibility, and create memorable experiences.",
    slider_key: 3,
  },
  {
    tab_image: "/images/enterprise/icon-5.9d57da43.svg",
    tab_title: "Integration",
    tab_description: "Connect to Integrate with Your Favorite Tools",
    main_image: "/images/enterprise/image-5.a1b7bbb2.svg",
    main_title: "Seamlessly integrate with your favorite tools.",
    main_description:
      "Connect with your favorite tools to streamline workflows and boost productivity with our seamless integration features.",
    slider_key: 4,
  },
];

interface UseCaseItem {
  image: string;
  title: string;
  description: string;
  isLight: boolean;
}

const useCasesData: UseCaseItem[] = [
  {
    image: "/images/enterprise/use-case-image-1.5cbcce12.svg",
    title: "Customer service/support",
    description: "Deliver exceptional customer service with AI-powered support.",
    isLight: false,
  },
  {
    image: "/images/enterprise/use-case-image-2.7f0e246c.svg",
    title: "AI Phone Answering Assistant",
    description: "Let AI handle incoming calls with intelligent phone answering.",
    isLight: true,
  },
  {
    image: "/images/enterprise/use-case-image-3.a5a32eaa.svg",
    title: "Membership updates (sms)",
    description: "Keep members informed and engaged with automated SMS updates.",
    isLight: false,
  },
  {
    image: "/images/enterprise/use-case-image-4.db896e9d.svg",
    title: "Interactive Documentation",
    description:
      "Make your documentation interactive and user-friendly with voice assistance.",
    isLight: true,
  },
  {
    image: "/images/enterprise/use-case-image-5.24b0496a.svg",
    title: "App setter (AI)",
    description:
      "Automate inbound inquiries and qualify leads at the front desk.",
    isLight: true,
  },
  {
    image: "/images/enterprise/use-case-image-6.fa8398a8.svg",
    title: "Survey (voice)",
    description: "Gather valuable feedback through SMS or voice surveys.",
    isLight: false,
  },
  {
    image: "/images/enterprise/use-case-image-7.a9e72087.svg",
    title: "Restaurant",
    description: "Allow customers to easily make reservations at your restaurant.",
    isLight: true,
  },
  {
    image: "/images/enterprise/use-case-image-8.81ec3e64.svg",
    title: "FAQ chat/voice/sms",
    description:
      "Provide quick answers to frequently asked questions via chat, voice, or SMS.",
    isLight: false,
  },
  {
    image: "/images/enterprise/use-case-image-9.3e99441a.svg",
    title: "Answer 24/7 (AI)",
    description:
      "Use voice AI to schedule appointments simple and efficiently. With inbound answer 24/7",
    isLight: false,
  },
  {
    image: "/images/enterprise/use-case-image-10.e1c0f685.svg",
    title: "Home services",
    description:
      "Enhance home services with callbacks, 24/7 availability, and personalized AI assistance.",
    isLight: true,
  },
  {
    image: "/images/enterprise/use-case-image-11.e21358c0.svg",
    title: "Voice Assistant Web",
    description:
      "Empower your website visitors to interact with a voice assistant for inquiries and callbacks.",
    isLight: false,
  },
  {
    image: "/images/enterprise/use-case-image-12.92a36694.svg",
    title: "Real Estate",
    description:
      "Facilitate property showings and provide information to prospective buyers in real estate.",
    isLight: true,
  },
  {
    image: "/images/enterprise/use-case-image-13.f9170351.svg",
    title: "B2B qualifier Inbound /outbound",
    description:
      "Qualify leads and prospects efficiently for B2B interactions, both inbound and outbound.",
    isLight: false,
  },
  {
    image: "/images/enterprise/use-case-image-14.85c036f8.svg",
    title: "Front Desk Collections Inbound",
    description:
      "Ensure customers get assistance round-the-clock with AI-powered inbound call answering.",
    isLight: true,
  },
  {
    image: "/images/enterprise/use-case-image-15.76c77f2c.svg",
    title: "Interactive Voice Conversation",
    description:
      "Create engaging and interactive voice conversations on your website.",
    isLight: false,
  },
];

const syncTools = [
  { name: "Outlook", src: "/images/enterprise/outlook.f893a638.svg" },
  { name: "Zapier", src: "/images/enterprise/zapier.477228c1.svg" },
  { name: "Calendly", src: "/images/enterprise/calendly.01cd2d9f.svg" },
  { name: "Google Calendar", src: "/images/enterprise/google-calendar.d1158839.svg" },
  { name: "Jira", src: "/images/enterprise/jira.a6ca84d2.svg" },
  { name: "Apple Calendar", src: "/images/enterprise/apple-calendar.3677b093.svg" },
];

export default function EnterprisePage() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSolution = solutionsData[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-32 pb-20 lg:pt-44 lg:pb-28 xl:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="w-fit rounded-full border border-gray-200 bg-white px-3.5 py-1.5 shadow-xs inline-flex items-center gap-2">
              <span className="rounded-full bg-purple-50 px-2 py-0.5 text-xs font-semibold italic text-primary">
                New
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-800">
                RUTH® Enterprise.Ready for ultimate scalability.
              </span>
            </div>

            <div className="pt-6" />

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.12]">
              10X Your Customer Experience with Puretalk RUTH®
            </h1>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-dark px-8 py-3.5 font-bold text-base text-white shadow-md hover:bg-black transition-all hover:scale-105"
              >
                Contact Sales
              </Link>
              <Link
                href="#solutions"
                className="rounded-full bg-gray-100 px-8 py-3.5 font-bold text-base text-gray-800 hover:bg-gray-200 transition-all"
              >
                How it works
              </Link>
            </div>

            <div className="pt-10">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                Some of the world&apos;s most innovative companies trust Puretalk to deliver exceptional customer experiences.{" "}
                <Link
                  href="#contact"
                  className="text-primary font-medium hover:underline block sm:inline"
                >
                  Learn how we can help you.
                </Link>
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Chatbot Preview Card */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                <Image
                  src="/images/enterprise/hero-image-1.9354a26e.svg"
                  alt="Interact with our intelligent AI Chatbot"
                  width={680}
                  height={320}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Bottom Left Card: Convert text */}
              <div className="col-span-1 relative overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                <Image
                  src="/images/enterprise/hero-image-2.7c38ea69.svg"
                  alt="Convert written text into natural-sounding speech"
                  width={340}
                  height={240}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Bottom Right Card: 100% Calls Pickup */}
              <div className="col-span-1 relative overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                <Image
                  src="/images/enterprise/hero-image-3.bb6ef35b.svg"
                  alt="100% Calls Pickup"
                  width={340}
                  height={240}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive AI Solutions Section */}
      <section id="solutions" className="bg-[#FEFEFE] py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 xl:px-8">
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-start lg:gap-12">
            <div className="w-25 lg:w-28 shrink-0">
              <div className="w-fit rounded-full border border-gray-200 px-4 py-1 font-medium text-base lg:font-semibold lg:text-lg text-gray-800">
                Feature
              </div>
            </div>
            <div className="flex-1">
              <div className="max-w-4xl text-center font-semibold text-4xl leading-10 sm:text-5xl md:text-6xl lg:max-w-3xl lg:text-start lg:leading-tight">
                <span className="text-gray-900">Comprehensive AI Solutions</span>{" "}
                <span className="text-gray-400 font-normal">for Every Conversation</span>
              </div>
            </div>
            <div className="flex-1 text-center lg:pt-5 lg:text-start">
              <p className="max-w-3xl text-base text-gray-600 md:text-xl lg:max-w-md leading-relaxed">
                Experience the future of customer engagement. RUTH® is designed to deliver seamless interactions and unparalleled operational efficiency, transforming customer interactions and maximizing your business potential.
              </p>
            </div>
          </div>

          <div className="pt-20 lg:pt-28" />

          {/* Interactive 2-Column Showcase */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
            {/* Left 5 Solution Cards (2-column grid matching puretalk.ai) */}
            <div className="scrollbar-hidden flex grid-cols-2 gap-x-4 gap-y-6 overflow-auto lg:grid lg:gap-x-6 xl:gap-x-8">
              {solutionsData.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={item.tab_title}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`min-w-72 rounded-2xl border p-5 sm:p-6 text-left lg:min-w-full transition-all duration-200 cursor-pointer flex flex-col justify-start ${
                      isActive
                        ? "border-[#B89DDD] shadow-[0px_12px_20.4px_0px_#BAA0DC1A] bg-white ring-1 ring-[#B89DDD]/40"
                        : "border-[#0000001A] bg-white hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={item.tab_image}
                      alt={item.tab_title}
                      width={50}
                      height={50}
                      className="size-12 object-contain"
                    />
                    <div className="pt-4" />
                    <div className="font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
                      {item.tab_title}
                    </div>
                    <div className="pt-4" />
                    <div className="text-[#888888] text-sm sm:text-base leading-relaxed">
                      {item.tab_description}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Display Card Preview */}
            <div className="rounded-2xl border border-[#0000001A] p-6 lg:p-8 bg-white flex flex-col justify-between">
              <div>
                <Image
                  src={solutionsData[activeTab].main_image}
                  alt={solutionsData[activeTab].main_title}
                  width={495}
                  height={388}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority
                />
                <div className="pt-9" />
                <h2 className="font-semibold text-2xl sm:text-3xl text-gray-900 leading-snug">
                  {solutionsData[activeTab].main_title}
                </h2>
                <div className="pt-8" />
                <p className="text-[#888888] text-lg sm:text-xl leading-relaxed">
                  {solutionsData[activeTab].main_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Enterprise Ready Tools (Purple Grid Background) */}
      <section
        className="py-24 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #7A5AF8 0%, #8F66FF 45%, #B18EED 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 text-center xl:px-8">
          <div className="w-fit rounded-full bg-white px-5 py-1.5 font-semibold text-sm text-gray-900 shadow-sm mx-auto">
            Tackle all your uses cases
          </div>

          <div className="pt-8" />

          <h2 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Enterprise Ready Tools to Elevate Mission Critical Processes
          </h2>

          <div className="pt-16" />

          {/* 15 Use Cases Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {useCasesData.map((item) => (
              <div
                key={item.title}
                className={`w-full rounded-2xl p-6 text-left transition-all duration-200 md:w-[48%] lg:w-[23%] flex flex-col gap-4 shadow-sm hover:scale-105 hover:shadow-lg ${
                  item.isLight
                    ? "bg-white text-gray-900"
                    : "bg-white/10 text-white backdrop-blur-md border border-white/15"
                }`}
              >
                <div className="relative size-12 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  className={`font-bold text-lg leading-snug ${
                    item.isLight ? "text-gray-900" : "text-white"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    item.isLight ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sync With Your Tools Section */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center xl:px-8">
          <div className="w-fit rounded-full border border-gray-200 px-4 py-1 font-medium text-sm md:text-base text-gray-800">
            Integrate with RUTH® Connect
          </div>

          <div className="pt-6" />

          <h2 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-tight">
            Sync With Your Tools
          </h2>

          <div className="pt-4" />

          <p className="max-w-2xl text-center text-base sm:text-lg text-gray-500 font-normal">
            We make it easy to integrate with top property management systems and CRMs, so you can get your AI assistant deployed quickly.
          </p>

          <div className="pt-12 w-full" />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 w-full max-w-4xl mx-auto">
            {syncTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 aspect-square"
              >
                <div className="relative size-16">
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Hear From Our Customers (Testimonials) */}
      <section className="bg-gray-50/60 py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 xl:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Header */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="w-fit rounded-full border border-gray-200 bg-white px-4 py-1 font-medium text-sm text-gray-800 shadow-xs">
                  Enterprise Success Stories
                </div>
                <div className="pt-6" />
                <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-tight max-w-md">
                  Hear From Our Customers
                </h2>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-4 pt-10">
                <button
                  type="button"
                  aria-label="Previous Testimonial"
                  className="rounded-full border border-gray-300 p-3 text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                >
                  <Image
                    src="/images/enterprise/slider-button-left.24693607.svg"
                    alt="Previous"
                    width={24}
                    height={24}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Next Testimonial"
                  className="rounded-full border border-gray-300 p-3 text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                >
                  <Image
                    src="/images/enterprise/slider-button-right.10ce93c9.svg"
                    alt="Next"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            {/* Right Testimonial Image Card with Floating Review */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-3xl shadow-xl">
              <div className="relative h-[480px] sm:h-[560px] w-full">
                <Image
                  src="/images/enterprise/client-1.77afa09d.png"
                  alt="Client Testimonial - Mira Schleifer"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Floating Testimonial Review Box */}
                <div className="absolute bottom-6 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl bg-white p-6 shadow-2xl md:bottom-8 md:p-8">
                  <div className="relative h-6 w-32 mb-4">
                    <Image
                      src="/images/enterprise/five-star.1ce43bdb.svg"
                      alt="5 Stars Rating"
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    <p>
                      Alpha Business Consulting integrated an AI-driven phone and SMS communication system to enhance client interactions and appointment scheduling.
                    </p>
                    <p>
                      The AI assistant has proven to be highly efficient, managing a large volume of calls and messages seamlessly, which has notably decreased the workload on our consultants.
                    </p>
                    <p>
                      Our clients appreciate the 24/7 availability and rapid response times.
                    </p>
                  </div>

                  <div className="my-4 border-t border-gray-100" />

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base text-gray-900">
                      Mira Schleifer
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      — Alpha Business Consulting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <FAQ />
    </div>
  );
}
