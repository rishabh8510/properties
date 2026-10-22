"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Award, Phone } from "lucide-react";

const tabs = [
  {
    id: "expert",
    label: "Expert Guidance",
    title: "In-depth Market Insights",
    text: "We provide tailored market evaluations, lease negotiation, planning advise, and zoning compliance guidance across all boroughs.",
  },
  {
    id: "portfolio",
    label: "Wide Portfolio",
    title: "Spaces For Every Business",
    text: "From compact studio offices to large-scale distribution warehouses, our portfolio covers offices, retail, industrial and investment assets across London and the South East.",
  },
  {
    id: "client",
    label: "Client First",
    title: "A Partnership, Not Just A Transaction",
    text: "Every brief is handled by a dedicated advisor who stays with you from the first viewing to completion, with transparent terms and honest advice at every step.",
  },
];

export default function AboutSection() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-24 transition-colors duration-200 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: image + floating card */}
        <div className="relative pb-10 lg:pb-12">
          <div className="relative h-85 overflow-hidden rounded-sm shadow-2xl shadow-slate-300/70 sm:h-110 lg:h-125">
            {/* Image ko public/images/about-london.jpg me rakho */}
            <Image
              src="https://images.unsplash.com/photo-1565953522043-baea26b83b7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="London commercial skyscrapers"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-3 w-[88%] max-w-md rounded-sm border border-gray-100 bg-white p-6 shadow-2xl shadow-slate-300/80 sm:right-6 lg:-right-6 lg:w-3/4 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-950/60 dark:text-green-400">
                <Award size={26} />
              </span>
              <div>
                <p className="text-lg font-bold leading-tight text-[#141b34] dark:text-white">
                  Commercial Specialists
                </p>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">London &amp; South East</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              &quot;Over 25 years connecting growing businesses with optimal strategic
              properties.&quot;
            </p>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
            About Hanif Properties
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#141b34] dark:text-white sm:text-5xl">
            Your Trusted Commercial Property Partner in London
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg sm:leading-8">
            Hanif Properties London specializes in commercial property lettings, sales, and
            acquisitions across Greater London. With deeply rooted market intelligence, we deliver
            flexible property solutions for startups, established corporations, and investors
            alike.
          </p>

          {/* Tabs */}
          <div className="mt-8 flex gap-6 overflow-x-auto border-b border-gray-200 dark:border-slate-800 sm:gap-8">
            {tabs.map((t) => {
              const isActive = t.id === activeId;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveId(t.id)}
                  className={`-mb-px shrink-0 border-b-2 pb-3 text-base font-semibold transition sm:text-lg ${
                    isActive
                      ? "border-green-600 text-green-600 dark:border-green-400 dark:text-green-400"
                      : "border-transparent text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 min-h-30">
            <h3 className="text-xl font-bold text-[#141b34] dark:text-white">{active.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-500 dark:text-slate-400">{active.text}</p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="rounded-sm bg-green-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/25 transition hover:bg-green-700"
            >
              Speak to an Advisor
            </Link>
            <a
              href="tel:+442012345678"
              className="flex items-center gap-2.5 text-lg font-semibold text-slate-700 transition hover:text-green-600 dark:text-slate-200 dark:hover:text-green-400"
            >
              <Phone size={20} className="text-green-600 dark:text-green-400" fill="currentColor" />
              +44 (0) 20 1234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}