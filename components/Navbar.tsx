"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, Menu, X, FlaskConical, BookOpen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SolutionsMegaMenu from "./SolutionsMegaMenu";

interface SearchResultItem {
  title: string;
  description: string;
  href: string;
  category: "Features" | "Solutions" | "Enterprise" | "Docs" | "General";
}

const searchIndex: SearchResultItem[] = [
  {
    title: "AI Assistant: Build, Test & Launch",
    description: "Create and deploy autonomous voice AI agents",
    href: "#agent-creation",
    category: "Features",
  },
  {
    title: "Text to Speech (Creators)",
    description: "Lifelike voice generation at scale",
    href: "#how-it-works",
    category: "Features",
  },
  {
    title: "Integrations (RUTH® Connect)",
    description: "Connect Calendly, Google, Outlook, Zapier, Jira and more",
    href: "/ruth-connect",
    category: "Solutions",
  },
  {
    title: "Enterprise Scalability",
    description: "10X Your Customer Experience with Puretalk RUTH®",
    href: "/enterprise",
    category: "Enterprise",
  },
  {
    title: "Batch Campaign Calling",
    description: "Control millions of concurrent calls from one dashboard",
    href: "#scale-dashboard",
    category: "Features",
  },
  {
    title: "Explore Playground",
    description: "Test and interact with puretalk agents live",
    href: "https://app.puretalk.ai",
    category: "Docs",
  },
  {
    title: "Official Documentation",
    description: "API references, guides, and integration tutorials",
    href: "https://docs.puretalk.ai",
    category: "Docs",
  },
  {
    title: "Digital Nurse & Patient Intake",
    description: "Healthcare and HIPAA compliant conversational AI",
    href: "/enterprise",
    category: "Enterprise",
  },
  {
    title: "Frequently Asked Questions",
    description: "Common questions about voice AI and capabilities",
    href: "#faq",
    category: "General",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const docsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Pages with a dark/gradient hero have white text; pages with a white hero (like /enterprise) have dark text
  const isDarkHero = pathname === "/" || pathname === "/ruth-connect";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard shortcut '/' to open and 'Escape' to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      } else if (
        e.key === "/" &&
        !isSearchOpen &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        openSearch();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const openSearch = () => {
    setIsSearchOpen(true);
    setSolutionsOpen(false);
    setDocsOpen(false);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 50);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  // Solutions hover handlers
  const handleSolutionsMouseEnter = () => {
    if (isSearchOpen) return;
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
      solutionsTimeoutRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  // Docs hover handlers
  const handleDocsMouseEnter = () => {
    if (isSearchOpen) return;
    if (docsTimeoutRef.current) {
      clearTimeout(docsTimeoutRef.current);
      docsTimeoutRef.current = null;
    }
    setDocsOpen(true);
  };

  const handleDocsMouseLeave = () => {
    if (docsTimeoutRef.current) {
      clearTimeout(docsTimeoutRef.current);
    }
    docsTimeoutRef.current = setTimeout(() => {
      setDocsOpen(false);
    }, 150);
  };

  const handleItemClick = () => {
    setSolutionsOpen(false);
    setDocsOpen(false);
    setIsSearchOpen(false);
    setMobileMenuOpen(false);
  };

  // Filter search results
  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full items-center transition-all duration-300 ${
        isDarkHero
          ? scrolled
            ? "bg-dark/85 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent border-b border-white/10 py-5"
          : scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-gray-200 py-3 shadow-xs"
          : "bg-transparent border-b border-gray-100 py-5"
      }`}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 xl:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="relative w-32 h-9">
            <Image
              src="/logo.svg"
              alt="Puretalk AI Logo"
              fill
              className={`object-contain transition-all duration-200 ${
                isDarkHero ? "filter brightness-0 invert" : ""
              }`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Hidden when search is open) */}
        <nav
          className={`hidden items-center gap-1 font-semibold text-base transition-opacity duration-200 xl:flex ${
            isDarkHero ? "text-white" : "text-gray-900"
          } ${isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          {/* Solutions Menu Trigger (Hover) */}
          <div
            className="relative"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <button
              type="button"
              className={`cursor-pointer rounded-3xl px-4 py-2 transition-all duration-200 flex items-center gap-2 ${
                isDarkHero
                  ? solutionsOpen
                    ? "bg-white/30 text-white shadow-sm"
                    : "hover:bg-white/30 text-white"
                  : solutionsOpen
                  ? "bg-gray-100 text-gray-900 shadow-xs"
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Integrations Link */}
          <Link
            href="/ruth-connect"
            className={`cursor-pointer rounded-3xl px-4 py-2 duration-200 ${
              isDarkHero
                ? "hover:bg-white/30 text-white"
                : "hover:bg-gray-100 text-gray-900"
            }`}
          >
            Integrations
          </Link>

          {/* Enterprise Link */}
          <Link
            href="/enterprise"
            className={`cursor-pointer rounded-3xl px-4 py-2 duration-200 ${
              isDarkHero
                ? "hover:bg-white/30 text-white"
                : "hover:bg-gray-100 text-gray-900"
            }`}
          >
            Enterprise
          </Link>

          {/* Docs Dropdown Trigger (Hover) */}
          <div
            className="relative"
            onMouseEnter={handleDocsMouseEnter}
            onMouseLeave={handleDocsMouseLeave}
          >
            <button
              type="button"
              className={`cursor-pointer rounded-3xl px-4 py-2 transition-all duration-200 ${
                isDarkHero
                  ? docsOpen
                    ? "bg-white/30 text-white shadow-sm"
                    : "hover:bg-white/30 text-white"
                  : docsOpen
                  ? "bg-gray-100 text-gray-900 shadow-xs"
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <span>Docs</span>
            </button>

            {/* Docs Dropdown Popover */}
            <AnimatePresence>
              {docsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl border border-gray-100 z-50 text-gray-800"
                  onMouseEnter={handleDocsMouseEnter}
                  onMouseLeave={handleDocsMouseLeave}
                >
                  <a
                    href="https://app.puretalk.ai"
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleItemClick}
                    className="flex cursor-pointer items-center gap-3.5 rounded-xl px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 group"
                  >
                    <FlaskConical
                      size={20}
                      className="text-gray-500 group-hover:text-primary transition-colors shrink-0"
                    />
                    <span className="font-medium text-sm sm:text-base">
                      Explore Playground
                    </span>
                  </a>

                  <a
                    href="https://docs.puretalk.ai"
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleItemClick}
                    className="flex cursor-pointer items-center gap-3.5 rounded-xl px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 group"
                  >
                    <BookOpen
                      size={20}
                      className="text-gray-500 group-hover:text-primary transition-colors shrink-0"
                    />
                    <span className="font-medium text-sm sm:text-base">
                      Official Documentation
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Trigger Button */}
          <button
            type="button"
            onClick={openSearch}
            className={`cursor-pointer rounded-3xl px-4 py-2 duration-200 flex items-center gap-2 ${
              isDarkHero
                ? "hover:bg-white/30 text-white"
                : "hover:bg-gray-100 text-gray-900"
            }`}
          >
            <Search
              size={16}
              className={isDarkHero ? "text-white" : "text-gray-800"}
            />
            <span>Search</span>
            <div
              className={`flex h-5 w-4 items-center justify-center rounded-[5px] border text-[11px] font-mono ${
                isDarkHero
                  ? "border-gray-400 text-gray-300"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              /
            </div>
          </button>
        </nav>

        {/* Right Action Icons & Buttons (Hidden when search is open) */}
        <div
          className={`hidden items-center gap-5 transition-opacity duration-200 xl:flex ${
            isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Discord Icon */}
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className={`hover:scale-110 transition-transform p-1 ${
              isDarkHero ? "text-white" : "text-gray-700 hover:text-black"
            }`}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
            </svg>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/meca-technologies"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={`hover:scale-110 transition-transform p-1 ${
              isDarkHero ? "text-white" : "text-gray-700 hover:text-black"
            }`}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>

          {/* Login Button */}
          <a
            href="https://app.puretalk.ai"
            target="_blank"
            rel="noreferrer"
            className={`flex h-10 items-center justify-center rounded-lg px-5 font-semibold text-base transition-all ${
              isDarkHero
                ? "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 shadow-xs"
            }`}
          >
            Login
          </a>

          {/* Dashboard Button */}
          <a
            href="https://app.puretalk.ai"
            target="_blank"
            rel="noreferrer"
            className={`flex h-10 items-center justify-center rounded-lg px-5 font-semibold text-base transition-all ${
              isDarkHero
                ? "bg-white/30 text-white backdrop-blur-sm hover:bg-white/40 shadow-sm"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-xs"
            }`}
          >
            Dashboard
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div
          className={`flex xl:hidden transition-opacity ${
            isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1 focus:outline-none ${
              isDarkHero ? "text-white" : "text-gray-900"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Solutions Mega Menu (Rendered on Hover) */}
        <AnimatePresence>
          {solutionsOpen && (
            <SolutionsMegaMenu
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
              onItemClick={handleItemClick}
            />
          )}
        </AnimatePresence>
      </div>

      {/* INLINE SEARCH BAR - Centered relative to the full header width */}
      {isSearchOpen && (
        <div
          ref={searchContainerRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-full max-w-[500px] z-50 px-2 sm:px-0"
        >
          <div className="relative w-full">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search Puretalk…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-lg px-4 py-3 pr-11 text-base outline-none transition-all ${
                isDarkHero
                  ? "bg-white/30 text-white placeholder:text-gray-200 backdrop-blur-md"
                  : "bg-[#e5e7eb] text-gray-800 placeholder:text-gray-500"
              }`}
            />

            {/* Close Button X */}
            <button
              type="button"
              onClick={closeSearch}
              className={`absolute top-1/2 right-4 -translate-y-1/2 transition-colors cursor-pointer p-1 ${
                isDarkHero
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              aria-label="Close search"
            >
              <X size={20} />
            </button>

            {/* Search Results Dropdown */}
            {searchQuery.trim() && (
              <div className="absolute top-full left-0 mt-2 w-full overflow-hidden rounded-2xl bg-white p-3 shadow-2xl border border-gray-100 z-50 text-gray-800 max-h-[70vh] overflow-y-auto">
                {filteredSearchResults.length > 0 ? (
                  <div className="flex flex-col gap-1">
                    {filteredSearchResults.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={handleItemClick}
                        className="flex items-start justify-between gap-3 rounded-xl p-3 text-left transition-colors hover:bg-gray-100 group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-gray-900 group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                            <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-primary">
                              {item.category}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-gray-500 leading-normal">
                            {item.description}
                          </p>
                        </div>
                        <ExternalLink
                          size={14}
                          className="text-gray-400 group-hover:text-primary transition-colors mt-1 shrink-0"
                        />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-sm text-gray-500">
                    No pages found for &ldquo;{searchQuery}&rdquo;
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full max-h-[85vh] overflow-y-auto bg-dark/95 border-b border-white/10 px-6 py-6 backdrop-blur-xl flex flex-col gap-4 text-white xl:hidden shadow-2xl">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
            <span className="font-bold text-xs uppercase tracking-wider text-primary">
              Solutions & Use Cases
            </span>
            <Link
              href="#agent-creation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-base font-medium text-gray-200 hover:text-white"
            >
              AI Assistant: Build, Test & Launch
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-base font-medium text-gray-200 hover:text-white"
            >
              Text to Speech (Creators)
            </Link>
            <Link
              href="/enterprise"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-base font-medium text-gray-200 hover:text-white"
            >
              Enterprise Healthcare & Intake
            </Link>
          </div>

          <Link
            href="/ruth-connect"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-lg font-medium border-b border-white/10"
          >
            Integrations
          </Link>
          <Link
            href="/enterprise"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-lg font-medium border-b border-white/10"
          >
            Enterprise
          </Link>

          <div className="flex flex-col gap-1 border-b border-white/10 pb-3">
            <span className="font-bold text-xs uppercase tracking-wider text-primary">
              Documentation
            </span>
            <a
              href="https://app.puretalk.ai"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-base font-medium text-gray-200 hover:text-white flex items-center gap-2"
            >
              <FlaskConical size={16} />
              <span>Explore Playground</span>
            </a>
            <a
              href="https://docs.puretalk.ai"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-base font-medium text-gray-200 hover:text-white flex items-center gap-2"
            >
              <BookOpen size={16} />
              <span>Official Documentation</span>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://app.puretalk.ai"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2.5 rounded-lg border border-white/30 bg-white/10 font-semibold text-white"
            >
              Login
            </a>
            <a
              href="https://app.puretalk.ai"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2.5 rounded-lg bg-white/30 font-semibold text-white"
            >
              Dashboard
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
