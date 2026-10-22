"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Mail, MapPin, Phone, X } from "lucide-react";

export type Category = "offices" | "retail" | "industrial";

export type Property = {
  id: number;
  slug: string;
  badge: string;
  title: string;
  size: string;
  location: string;
  suitable: string;
  price: string;
  image: string;
  categories: Category[];
  description: string;
  features: string[];
  /** Unsplash photo ids, e.g. "photo-1684695749267-233af13276d0" */
  gallery: string[];
};

// TODO: apni asli agent details yahan daalo
const AGENT_EMAIL = "info@example.com";
const AGENT_PHONE = "+442000000000";

// Auto-slide kitne ms baad agli photo par jaye
const SLIDE_INTERVAL = 3500;

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop&ixlib=rb-4.1.0`;

type Props = {
  property: Property;
  onClose: () => void;
};

export default function PropertyModal({ property, onClose }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const gallery = property.gallery;

  // Esc se close + background scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  // Auto slide (hover par ruk jata hai)
  useEffect(() => {
    if (paused || gallery.length < 2) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % gallery.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(t);
  }, [paused, gallery.length]);

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + gallery.length) % gallery.length);

  const mailto = `mailto:${AGENT_EMAIL}?subject=${encodeURIComponent(
    `Viewing request: ${property.title}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={property.title}
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-sm bg-white shadow-2xl dark:border dark:border-slate-800 dark:bg-slate-900">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 text-white backdrop-blur transition hover:bg-slate-900"
        >
          <X size={20} />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          {/* Hero slider */}
          <div
            className="relative h-52 sm:h-64"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {gallery.map((id, i) => (
              <Image
                key={id}
                src={unsplash(id, 1400)}
                alt={`${property.title} photo ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 768px, 100vw"
                className={`object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/40"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/40"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 right-5 flex gap-1.5">
                  {gallery.map((id, i) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Show photo ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active ? "w-5 bg-green-400" : "w-1.5 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute bottom-4 left-5 right-24">
              <span className="inline-block rounded-full bg-green-600 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                {property.badge}
              </span>
              <h3 className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                {property.title}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-white/85">
                <MapPin size={16} className="text-green-400" fill="currentColor" />
                {property.location}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="px-5 py-6 sm:px-6">
            <div className="grid gap-6 md:grid-cols-[1fr_15rem]">
              {/* Left: overview + features */}
              <div>
                <h4 className="text-lg font-bold tracking-tight text-[#141b34] dark:text-white">
                  Property Overview
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {property.description}
                </p>

                <h5 className="mt-6 text-base font-bold text-[#141b34] dark:text-white">
                  Key Highlights &amp; Features
                </h5>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {property.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <Check size={16} className="shrink-0 text-green-600 dark:text-green-400" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: rent card */}
              <aside className="h-fit rounded-sm border border-gray-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Asking Rent
                </p>
                <p className="mt-1 text-xl font-extrabold text-green-600 dark:text-green-400">{property.price}</p>

                <div className="my-5 border-t border-gray-200 dark:border-slate-800" />

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Available Area
                </p>
                <p className="mt-1 text-base font-bold text-[#141b34] dark:text-white">{property.size}</p>

                <a
                  href={mailto}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition hover:bg-green-700"
                >
                  <Mail size={16} /> Schedule Viewing
                </a>
                <a
                  href={`tel:${AGENT_PHONE}`}
                  className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-sm bg-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <Phone size={16} /> Speak to Agent
                </a>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}