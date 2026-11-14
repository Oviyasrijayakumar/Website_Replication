"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Mic,
  Sparkles,
  PhoneCall,
  Calendar,
  Clock,
  PlusSquare,
  Briefcase,
  Dog,
  Scale,
  Shield,
  Building2,
  Car,
  Utensils,
  Dumbbell,
  Scissors,
  Activity,
  ClipboardList,
  HeartPulse,
  Users,
  Video,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

interface SolutionsMegaMenuProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onItemClick: () => void;
}

const products = [
  {
    Icon: Bot,
    label: "AI Assistant: Build, Test & Launch",
    description: "Create and deploy voice AI agents",
    href: "#agent-creation",
  },
  {
    Icon: Mic,
    label: "Text to Speech (Creators)",
    description: "Lifelike voice generation at scale",
    href: "#how-it-works",
  },
];

const coreCapabilities = [
  {
    Icon: Sparkles,
    label: "Humanized Voice AI Agents",
    href: "#agent-creation",
  },
  {
    Icon: PhoneCall,
    label: "Inbound & Outbound Calling",
    href: "#scale-dashboard",
  },
  {
    Icon: Calendar,
    label: "Appointment Booking",
    href: "#agent-creation",
  },
  {
    Icon: Clock,
    label: "24/7 Digital Front Desk",
    href: "#how-it-works",
  },
];

const industryUseCases = [
  {
    Icon: PlusSquare,
    label: "Healthcare & Patient Engagement",
    href: "#how-it-works",
  },
  {
    Icon: Briefcase,
    label: "Dental & Chiropractic",
    href: "#how-it-works",
  },
  {
    Icon: Dog,
    label: "Veterinary Services",
    href: "#how-it-works",
  },
  {
    Icon: Scale,
    label: "Legal Intake & Qualification",
    href: "#how-it-works",
  },
  {
    Icon: Shield,
    label: "Insurance & Medicare",
    href: "#how-it-works",
  },
  {
    Icon: Building2,
    label: "Real Estate",
    href: "#how-it-works",
  },
  {
    Icon: Car,
    label: "Automotive & Dealerships",
    href: "#how-it-works",
  },
  {
    Icon: Utensils,
    label: "Restaurants & Hospitality",
    href: "#how-it-works",
  },
  {
    Icon: Dumbbell,
    label: "Gym & Fitness",
    href: "#how-it-works",
  },
  {
    Icon: Scissors,
    label: "Salons & Beauty",
    href: "#how-it-works",
  },
];

const enterpriseAi = [
  {
    Icon: Activity,
    label: "Digital Nurse Assistants",
    href: "/enterprise",
  },
  {
    Icon: ClipboardList,
    label: "Patient Intake Automation",
    href: "/enterprise",
  },
  {
    Icon: HeartPulse,
    label: "AI Healthcare Companions",
    href: "/enterprise",
  },
  {
    Icon: Users,
    label: "Employee Training & Role-Play",
    href: "/enterprise",
  },
  {
    Icon: Video,
    label: "Digital Interviews & Recruiting",
    href: "/enterprise",
  },
  {
    Icon: Headphones,
    label: "Internal Employee Support AI",
    href: "/enterprise",
  },
];

export default function SolutionsMegaMenu({
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}: SolutionsMegaMenuProps) {
  return (
    <motion.nav
      aria-label="Solutions mega menu"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 right-0 z-50 mt-2.5 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.22)]"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Column 1: Products & Core Capabilities */}
        <div className="w-full lg:w-64 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/50 p-6">
          <p className="mb-3 font-bold text-[10px] text-gray-400 uppercase tracking-widest">
            Products
          </p>

          <div className="flex flex-col gap-1.5">
            {products.map((item) => {
              const Icon = item.Icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onItemClick}
                  className="group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-purple-50/70"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100/70 text-purple-600 transition-colors duration-200 group-hover:bg-purple-200/80">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-[13px] text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-500 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="my-5 border-t border-gray-200/60" />

          <p className="mb-3 font-bold text-[10px] text-gray-400 uppercase tracking-widest">
            Core Capabilities
          </p>

          <div className="flex flex-col gap-1">
            {coreCapabilities.map((item) => {
              const Icon = item.Icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onItemClick}
                  className="group flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-gray-600 transition-all duration-200 hover:bg-purple-50/60 hover:text-purple-700"
                >
                  <Icon
                    size={14}
                    className="shrink-0 text-gray-400 group-hover:text-purple-600 transition-colors"
                  />
                  <span className="font-medium text-[12.5px]">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Column 2: Industry Use Cases */}
        <div className="flex-1 border-b lg:border-b-0 lg:border-r border-gray-100 p-6">
          <p className="mb-3 font-bold text-[10px] text-gray-400 uppercase tracking-widest">
            Industry Use Cases
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            {industryUseCases.map((item) => {
              const Icon = item.Icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onItemClick}
                  className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] text-gray-700 transition-all duration-200 hover:bg-purple-50/60 hover:text-purple-700"
                >
                  <Icon
                    size={14}
                    className="shrink-0 text-gray-400 group-hover:text-purple-600 transition-colors"
                  />
                  <span className="font-medium text-[12.5px] truncate">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="#how-it-works"
            onClick={onItemClick}
            className="mt-4 inline-flex items-center gap-1.5 px-2.5 font-semibold text-[13px] text-primary transition-all duration-200 hover:gap-2.5"
          >
            <span>View all industries</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Column 3: Enterprise AI */}
        <div className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100 p-6">
          <p className="mb-3 font-bold text-[10px] text-gray-400 uppercase tracking-widest">
            Enterprise AI
          </p>

          <div className="flex flex-col gap-1">
            {enterpriseAi.map((item) => {
              const Icon = item.Icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onItemClick}
                  className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] text-gray-700 transition-all duration-200 hover:bg-purple-50/60 hover:text-purple-700"
                >
                  <Icon
                    size={14}
                    className="shrink-0 text-gray-400 group-hover:text-purple-600 transition-colors"
                  />
                  <span className="font-medium text-[12.5px] whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/enterprise"
            onClick={onItemClick}
            className="mt-6 inline-flex items-center gap-1.5 px-2.5 font-semibold text-[13px] text-primary transition-all duration-200 hover:gap-2.5"
          >
            <span>View Enterprise AI</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Column 4: Vision Promotional Card */}
        <div className="w-full lg:w-64 shrink-0 p-5 flex flex-col justify-center">
          <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-[#6E5DED] via-[#8565f4] to-[#B18EED] p-5 text-white shadow-lg">
            <div>
              <p className="mb-2 font-bold text-[10px] text-white/70 uppercase tracking-widest">
                Vision
              </p>
              <h3 className="mb-3 font-bold text-base text-white leading-snug">
                Humanized AI Interface for Business
              </h3>
              <p className="text-[11.5px] text-white/85 leading-relaxed">
                Engage customers, patients, leads, and employees through natural conversational AI — phone, SMS, email, and web.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://app.puretalk.ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onItemClick}
                className="inline-flex w-fit items-center gap-1.5 rounded-xl bg-white/20 px-3.5 py-2 font-semibold text-[12px] text-white backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:scale-105"
              >
                <span>Get Started Free</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
