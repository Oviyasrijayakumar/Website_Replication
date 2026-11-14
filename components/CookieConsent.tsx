"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show after slight delay if not consented
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("puretalk-cookie-consent");
      if (!consent) {
        setIsOpen(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (agreed: boolean) => {
    localStorage.setItem("puretalk-cookie-consent", agreed ? "allowed" : "declined");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-x-0 bottom-4 z-50 mx-auto max-w-[95%] rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl lg:max-w-3xl"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/images/c-consent.svg"
                  alt="Cookies illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base">Cookies!</h4>
                <p className="text-sm text-gray-600 mt-0.5">
                  We use cookies in order to personalize your site experience. By using our site you consent cookies.{" "}
                  <Link href="#" className="text-primary hover:underline font-medium">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleConsent(true)}
                className="rounded-full border-2 border-green-500/30 px-5 py-1.5 font-medium text-green-600 hover:bg-green-50 transition-colors text-sm"
              >
                Allow
              </button>
              <button
                type="button"
                onClick={() => handleConsent(false)}
                className="rounded-full border-2 border-red-500/30 px-5 py-1.5 font-medium text-red-600 hover:bg-red-50 transition-colors text-sm"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
