import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 transition-colors duration-200 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 overflow-hidden rounded-sm border border-green-800/40 bg-gradient-to-r from-[#2a5530] via-[#1d3a30] to-[#16283a] p-8 shadow-2xl shadow-slate-400/40 sm:p-12 lg:flex-row lg:items-center lg:gap-12 lg:px-16 lg:py-14 dark:shadow-none">
          {/* Text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Looking for the right commercial space?
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Get in touch with our expert valuation and leasing team to discuss your customized
              business requirements today.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-sm bg-green-400 px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-green-500/20 transition hover:bg-green-300"
            >
              Get Free Consultation
              <ArrowUpRight size={20} />
            </Link>
            <a
              href="tel:+442012345678"
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-white/15 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <Phone size={20} fill="currentColor" />
              Call Agent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}