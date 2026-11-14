"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "@/components/FAQ";

interface IntegrationItem {
  image: string;
  vendor: string;
  title: string;
  content: string;
  categories: string[];
}

const categories = [
  { label: "All", value: "all" },
  { label: "Calendars", value: "calendars" },
  { label: "Automation", value: "automation" },
  { label: "CRM", value: "crm" },
  { label: "Analytics", value: "analytics" },
  { label: "Messaging", value: "messaging" },
  { label: "Conferencing", value: "conferencing" },
];

const integrationsData: IntegrationItem[] = [
  {
    image: "/images/ruth-connect/apple-calendar.svg",
    vendor: "Apple",
    title: "iCloud Calendar",
    content:
      "Sync your iCloud calendar with Ruth® Connect to seamlessly manage and update your events, ensuring.",
    categories: ["calendars", "automation", "crm"],
  },
  {
    image: "/images/ruth-connect/google-calendar.svg",
    vendor: "Google",
    title: "Google Calendar",
    content:
      "Integrate your Google Calendar with Ruth® Connect for a streamlined management of your events across both platforms.",
    categories: ["calendars", "conferencing", "messaging"],
  },
  {
    image: "/images/ruth-connect/calendly.svg",
    vendor: "Calendly",
    title: "Calendly",
    content:
      "Connect your Calendly with Ruth® Connect for a unified scheduling experience across both platforms.",
    categories: ["analytics", "automation", "crm"],
  },
  {
    image: "/images/ruth-connect/outlook.svg",
    vendor: "Microsoft",
    title: "Outlook Calendar",
    content:
      "Link your Outlook calendar with Ruth® Connect for a consolidated view and management of your events across both platforms.",
    categories: ["calendars", "crm", "messaging"],
  },
  {
    image: "/images/ruth-connect/teams.svg",
    vendor: "Microsoft",
    title: "Teams",
    content:
      "Link your Outlook calendar with Ruth® Connect for a consolidated view and management of your events across both platforms.",
    categories: ["calendars", "automation", "analytics"],
  },
  {
    image: "/images/ruth-connect/google-drive.svg",
    vendor: "Google",
    title: "Google Drive",
    content:
      "Link your Outlook calendar with Ruth® Connect for a consolidated view and management of your events across both platforms.",
    categories: ["calendars", "conferencing", "crm"],
  },
  {
    image: "/images/ruth-connect/yahoo.svg",
    vendor: "Yahoo",
    title: "Yahoo Calendar",
    content:
      "Sync your iCloud calendar with Ruth® Connect to seamlessly manage and update your events, ensuring.",
    categories: ["calendars", "messaging", "automation"],
  },
  {
    image: "/images/ruth-connect/jira.svg",
    vendor: "Jira",
    title: "Jira Board",
    content:
      "Integrate your Google Calendar with Ruth® Connect for a streamlined management of your events across both platforms.",
    categories: ["calendars", "analytics", "crm"],
  },
  {
    image: "/images/ruth-connect/zapier.svg",
    vendor: "Zapier",
    title: "Zapier Automation",
    content:
      "Connect your Calendly with Ruth® Connect for a unified scheduling experience across both platforms.",
    categories: ["calendars", "automation", "messaging"],
  },
  {
    image: "/images/ruth-connect/clickup.svg",
    vendor: "ClickUp",
    title: "ClickUp Task Management",
    content:
      "Link your Outlook calendar with Ruth® Connect for a consolidated view and management of your events across both platforms.",
    categories: ["calendars", "conferencing", "analytics"],
  },
  {
    image: "/images/ruth-connect/hubspot.svg",
    vendor: "HubSpot",
    title: "HubSpot Calendar",
    content:
      "Link your Outlook calendar with Ruth® Connect for a consolidated view and management of your events across both platforms.",
    categories: ["calendars", "crm", "messaging"],
  },
];

const syncTools = [
  { name: "Outlook", src: "/images/ruth-connect/sync-outlook.svg" },
  { name: "Zapier", src: "/images/ruth-connect/sync-zapier.svg" },
  { name: "Calendly", src: "/images/ruth-connect/sync-calendly.svg" },
  { name: "Google Calendar", src: "/images/ruth-connect/sync-google-calendar.svg" },
  { name: "Jira", src: "/images/ruth-connect/sync-jira.svg" },
  { name: "Apple Calendar", src: "/images/ruth-connect/sync-apple-calendar.svg" },
];

export default function RuthConnectPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = useMemo(() => {
    return integrationsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.categories.includes(selectedCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.vendor.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(134.29deg, #6E5DED 7.18%, #B18EED 46.31%, #CDB6D1 91.85%)",
        }}
        className="pt-32 pb-20 lg:pt-48 lg:pb-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center xl:px-8">
          {/* Badge */}
          <div className="w-fit rounded-full border border-white/20 bg-white px-5 py-1.5 font-semibold text-sm lg:text-base text-gray-900 shadow-sm">
            RUTH® Connect Integration
          </div>

          <div className="pt-8" />

          {/* Heading */}
          <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl">
            Integrations without Boundaries
          </h1>

          <div className="pt-6" />

          {/* Subtitle */}
          <p className="max-w-3xl text-center text-base sm:text-lg text-white/95 leading-relaxed font-normal">
            Transform your business processes with cutting-edge AI integration, delivering seamless connectivity and smarter solutions for a brighter future.
          </p>

          <div className="pt-10 w-full max-w-xl" />

          {/* Search Box */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search apps, guides and more"
              className="w-full rounded-full bg-white px-6 py-4 pr-12 text-gray-800 text-sm sm:text-base shadow-xl outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white/40"
            />
            <div className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-400">
              <Search size={22} />
            </div>
          </div>
        </div>
      </section>

      {/* Apps Integration Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 xl:px-8">
        {/* Title and Category Filters Header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-gray-100 pb-8">
          <h2 className="text-nowrap font-bold text-2xl sm:text-3xl text-gray-900">
            Apps Integration
          </h2>

          {/* Filter Pills */}
          <div className="flex w-full items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none lg:w-auto lg:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`rounded-lg px-4 py-2 font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-gray-100 text-gray-900 border border-gray-300/80 shadow-xs"
                      : "border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-10" />

        {/* Integration Cards Grid */}
        {filteredIntegrations.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredIntegrations.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between rounded-2xl border border-gray-200 p-6 shadow-xs hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="relative size-12 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-xs text-gray-400">
                        {item.vendor}
                      </h3>
                      <h4 className="font-bold text-base md:text-lg text-gray-900 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <p className="pt-4 text-sm text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="https://app.puretalk.ai"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-sm text-primary hover:underline"
                  >
                    See Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500 font-medium">
              No integrations found matching &quot;{searchQuery}&quot;
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 rounded-full bg-dark px-6 py-2 text-sm font-semibold text-white hover:bg-black"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Sync With Your Tools Section */}
      <section className="bg-white py-20 border-t border-gray-100">
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

          {/* App Icons Row */}
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

      {/* Frequently Asked Questions */}
      <FAQ />
    </div>
  );
}
