import { Building2, MapPin, Truck, Warehouse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Zone = {
  id: number;
  tag: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  points: string[];
};

const zones: Zone[] = [
  {
    id: 1,
    tag: "Zone 2 & 3",
    icon: MapPin,
    title: "South East London",
    subtitle: "Lewisham, Greenwich, Deptford",
    points: ["Direct DLR & Rail connections", "Mixed office & high street retail"],
  },
  {
    id: 2,
    tag: "Industrial Belt",
    icon: Warehouse,
    title: "Belvedere & Erith",
    subtitle: "DA17 / Mulberry Way Corridor",
    points: ["Heavy industrial & open yards", "Easy access to A2016 & M25"],
  },
  {
    id: 3,
    tag: "M25 Border",
    icon: Truck,
    title: "Epping & Essex",
    subtitle: "Commercial Complexes & Workshops",
    points: ["Showrooms & flexible storage", "Central Line access"],
  },
  {
    id: 4,
    tag: "Core Financial",
    icon: Building2,
    title: "Canary Wharf & City",
    subtitle: "E14 / Shoreditch Tech Hubs",
    points: ["Grade A Corporate Headquarters", "Premium client facilities"],
  },
];

export default function LondonZones() {
  return (
    <section className="bg-gray-900 py-16 sm:py-24 transition-colors duration-200 dark:bg-slate-950 dark:border-y dark:border-slate-850">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Strategic Locations
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Prime London Commercial Hubs
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Explore our core operational zones spanning Greater London, South East transport
            corridors, and industrial belts.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {zones.map((z) => {
            const Icon = z.icon;
            return (
              <article
                key={z.id}
                className="group rounded-sm border border-white/10 bg-slate-800/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-slate-800"
              >
                {/* Tag + Icon row — now vertically centered */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-sm border border-green-500/40 bg-green-900/40 px-3.5 py-1.5 text-sm font-semibold leading-none text-green-400">
                    {z.tag}
                  </span>
                  <Icon
                    size={24}
                    className="shrink-0 text-green-400 transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">{z.title}</h3>
                <p className="mt-2 text-[15px] text-slate-400">{z.subtitle}</p>

                <ul className="mt-6 space-y-2 text-[15px] text-slate-300">
                  {z.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}