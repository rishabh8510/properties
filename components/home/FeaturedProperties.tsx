"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight, Building2, MapPin, MoveHorizontal } from "lucide-react";
import propertiesData from "@/data/properties.json";
import PropertyModal, { type Category, type Property } from "@/components/PropertyModal";

type Filter = "all" | Category;

const properties = propertiesData as Property[];

const filters: { label: string; value: Filter }[] = [
  { label: "All Properties", value: "all" },
  { label: "Offices", value: "offices" },
  { label: "Retail", value: "retail" },
  { label: "Industrial & Yard", value: "industrial" },
];

export default function FeaturedProperties() {
  const [active, setActive] = useState<Filter>("all");
  const [selected, setSelected] = useState<Property | null>(null);

  const visible = useMemo(
    () =>
      active === "all" ? properties : properties.filter((p) => p.categories.includes(active)),
    [active]
  );

  return (
    <section className="bg-slate-50 py-16 sm:py-20 transition-colors duration-200 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading + filters */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">
              Prime Portfolio
            </p>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-[#141b34] dark:text-white sm:text-4xl">
              Featured Commercial Properties
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((f) => {
              const isActive = active === f.value;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setActive(f.value)}
                  className={`rounded-sm border px-4 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "border-green-600 bg-green-600 text-white shadow-lg shadow-green-600/25"
                      : "border-gray-200 bg-white text-slate-700 hover:border-green-600 hover:text-green-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-green-500 dark:hover:text-green-400"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-sm border border-gray-100 bg-white shadow-md shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#1f3d36]/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-400 backdrop-blur-sm">
                  {p.badge}
                </span>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white">
                  <MoveHorizontal size={14} className="text-green-400" />
                  {p.size}
                </div>
              </div>

              {/* Body */}
              <div className="px-6 pb-5 pt-6">
                <h3 className="text-xl font-bold tracking-tight text-[#141b34] dark:text-white">{p.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <li className="flex items-center gap-2.5">
                    <MapPin size={15} className="shrink-0 text-green-600 dark:text-green-400" fill="currentColor" />
                    {p.location}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Building2 size={15} className="shrink-0 text-green-600 dark:text-green-400" />
                    {p.suitable}
                  </li>
                </ul>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 dark:border-slate-800">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Rent / Terms
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-green-600 dark:text-green-400">{p.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center gap-2 rounded-sm bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-green-600 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-green-600 dark:hover:text-white"
                >
                  View Details <ArrowUpRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-slate-500 dark:text-slate-400">
            Is category me abhi koi property nahi hai.
          </p>
        )}
      </div>

      {selected && (
        <PropertyModal key={selected.id} property={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}