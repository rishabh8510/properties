"use client";

import Image from "next/image";

const stats = [
  { value: "25+", label: "Years London Market Expertise" },
  { value: "500k+", label: "Sq Ft Managed Portfolio" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "£150M+", label: "Transactions Facilitated" },
];

export default function HeroSection() {

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image — apni image public/images/london-hero.jpg me rakho */}
      <Image
        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="London skyline aerial view"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Dark overlay + green tint on top-left */}
      <div className="absolute inset-0 -z-10 bg-slate-900/70" />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-green-700/40 via-transparent to-transparent" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-16 pt-14 text-center sm:px-8 sm:pb-20 sm:pt-16 lg:pt-20">
        {/* Badge */}
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-green-400 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Premier Commercial Agency in Greater London
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Commercial Property
          <span className="block bg-linear-to-r from-green-500 via-green-400 to-green-100 bg-clip-text text-transparent">
            Solutions in London
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
          Tailored offices, industrial units, retail locations, and high-yielding investment
          opportunities designed for businesses scaling across London.
        </p>


        {/* Stats */}
        <div className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-sm border border-white/10 bg-white/10 px-3 py-5 text-center backdrop-blur-md"
            >
              <div className="text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-gray-200 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}