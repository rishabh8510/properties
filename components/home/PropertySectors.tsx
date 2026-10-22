import Link from "next/link";
import { ArrowRight, Building2, Store, TrendingUp, Warehouse } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import sectorsData from "@/data/sectors.json";

type IconKey = "office" | "industrial" | "retail" | "investment";

type Sector = {
  id: number;
  icon: IconKey;
  title: string;
  description: string;
  cta: string;
  href: string;
};

const icons: Record<IconKey, LucideIcon> = {
  office: Building2,
  industrial: Warehouse,
  retail: Store,
  investment: TrendingUp,
};

const sectors = sectorsData as Sector[];

export default function PropertySectors() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 transition-colors duration-200 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
            Tailored Solutions
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#141b34] dark:text-white sm:text-5xl">
            Explore Property Sectors
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg sm:leading-8">
            Whether you are a startup scaling up or an enterprise seeking distribution hubs, we
            provide strategic real estate spaces.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => {
            const Icon = icons[s.icon];
            return (
              <article
                key={s.id}
                className="group flex flex-col rounded-sm border border-gray-100 bg-white p-7 shadow-md shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600 transition duration-300 group-hover:bg-green-600 group-hover:text-white dark:bg-green-950/60 dark:text-green-400 dark:group-hover:bg-green-600 dark:group-hover:text-white">
                  <Icon size={26} strokeWidth={2} />
                </span>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#141b34] dark:text-white">
                  {s.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-500 dark:text-slate-400">
                  {s.description}
                </p>

                <Link
                  href={s.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                >
                  {s.cta}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}