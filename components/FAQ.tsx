"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    id: "1",
    question: "What is AI call service?",
    answer:
      "An AI call service is a technology that uses artificial intelligence to automate and enhance various aspects of phone calls, such as customer service, sales calls, appointment scheduling, and more. It can handle tasks like answering queries, providing information, routing calls, and even conducting conversations with human-like interactions.",
  },
  {
    id: "2",
    question: "How does AI call service work?",
    answer:
      "AI call services work by leveraging technologies such as natural language processing (NLP), speech recognition, and machine learning to analyze and understand spoken language during phone calls. They can interpret caller queries, extract relevant information, and respond appropriately using pre-defined responses or by generating human-like speech in real-time.",
  },
  {
    id: "3",
    question: "What are the benefits of using AI call service?",
    answer:
      "Some benefits of using AI call services include improved customer satisfaction through faster response times and personalized interactions, increased efficiency and productivity by automating repetitive tasks, reduced operational costs by replacing human agents for routine tasks, and scalability to handle large call volumes effectively.",
  },
  {
    id: "4",
    question: "What is AI text-to-speech (TTS)?",
    answer:
      "AI text-to-speech (TTS) is a technology that converts written text into spoken language using artificial intelligence algorithms. It synthesizes human-like speech from text input, enabling applications to generate natural-sounding audio content for various purposes, such as voice assistants, audiobooks, accessibility features, and more.",
  },
  {
    id: "5",
    question: "How does AI text-to-speech work?",
    answer:
      "AI text-to-speech systems work by processing written text input through multiple stages, including text analysis, linguistic processing, and speech synthesis. These systems use neural networks and other machine learning techniques to generate speech waveforms that mimic human speech patterns, intonations, and accents.",
  },
  {
    id: "6",
    question: "What are the advantages of using AI text-to-speech?",
    answer:
      "Some advantages of using AI text-to-speech include the ability to create natural-sounding audio content quickly and efficiently, enhance accessibility for visually impaired individuals, enable multi-language support in applications, and personalize user experiences through voice interactions.",
  },
  {
    id: "7",
    question: "What are the applications of AI text-to-speech?",
    answer:
      "AI text-to-speech technology has various applications, including voice-enabled virtual assistants, interactive voice response (IVR) systems for customer service, audiobook narration, language translation services, assistive technologies for people with disabilities, and more.",
  },
  {
    id: "8",
    question: "How can businesses benefit from AI text-to-speech?",
    answer:
      "Businesses can benefit from AI text-to-speech technology by improving customer engagement and satisfaction through voice-enabled services, enhancing brand identity with custom voice branding, automating voice-based tasks to streamline operations, and expanding reach with multilingual audio content.",
  },
  {
    id: "9",
    question: "What are the challenges of AI text-to-speech?",
    answer:
      "Some challenges of AI text-to-speech include achieving natural-sounding speech synthesis across different languages and accents, handling complex linguistic features like intonation and prosody, minimizing synthetic voice fatigue for long-duration audio content, and ensuring data privacy and security in voice interactions.",
  },
  {
    id: "10",
    question: "How can AI text-to-speech be used for content creation?",
    answer:
      "AI text-to-speech can be used for content creation by converting written articles, blog posts, or scripts into engaging audio content. This empowers content creators to reach audiences who prefer consuming content through audio channels, such as podcasts, audiobooks, or voice-activated devices.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("1");
  const [showAll, setShowAll] = useState(false);

  const displayedList = showAll ? faqList : faqList.slice(0, 6);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#f9f9f9] py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-fit rounded-full border border-gray-200 bg-white px-5 py-1 text-base font-semibold text-gray-800 shadow-xs">
            FAQ
          </div>
          <div className="pt-6" />
          <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="pt-4" />
          <p className="text-center font-normal text-base md:text-xl text-gray-600">
            Got any unanswered questions? Feel free to reach us.
          </p>
          <div className="pt-8" />
          <Link
            href="#faq"
            className="rounded-full bg-dark px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-black"
          >
            Contact us
          </Link>
        </div>

        <div className="pt-14" />

        {/* Accordion Container */}
        <div className="mx-auto w-full lg:max-w-3xl">
          <div className="rounded-2xl bg-white p-4 sm:p-8 shadow-sm border border-gray-100 divide-y divide-gray-100">
            {displayedList.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="flex w-full items-center justify-between text-left text-lg md:text-xl font-medium text-gray-900 transition-colors hover:text-primary py-2"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`size-5 text-gray-600 transition-transform duration-300 ml-4 shrink-0 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 pb-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Show More / Show Less Toggle Button */}
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="flex w-full items-center justify-center gap-2 pt-8 group cursor-pointer"
          >
            <span className="font-semibold text-lg text-primary group-hover:underline">
              {showAll ? "Show Less" : "Show More"}
            </span>
            <ChevronDown
              className={`size-5 text-[#BB8FF2] transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
