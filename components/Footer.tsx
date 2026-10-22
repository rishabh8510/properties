import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home Page", href: "/" },
  { name: "About Us", href: "/" },
  { name: "Featured Lettings", href: "/" },
  { name: "Commercial Sectors", href: "/" },
  { name: "London Locations", href: "/" },
];

const propertyTypes = [
  { name: "Office Spaces", href: "/" },
  { name: "Retail Units", href: "/" },
  { name: "Industrial & Storage", href: "/" },
  { name: "Investment Assets", href: "/" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/" },
  { name: "Terms & Conditions", href: "/" },
  { name: "Sitemap", href: "/" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1.01 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.14v5.86h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V13h2.7v8h3.1Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

const socials = [
  { name: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { name: "Facebook", href: "#", Icon: FacebookIcon },
  { name: "Instagram", href: "#", Icon: InstagramIcon },
];

const headingClass = "text-lg font-bold uppercase tracking-wide text-white";
const linkClass = "text-base text-slate-400 transition hover:text-green-400";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-2xl font-bold text-white">
                H
              </span>
              <span className="text-[26px] font-extrabold tracking-tight">
                HANIF <span className="text-green-400">PROPERTIES</span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
              Your trusted, independent commercial real estate advisory across London &amp; South
              East England. Specializing in offices, industrial logistics, and high-street retail
              spaces.
            </p>

            <div className="mt-8 flex gap-4">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-13 w-13 items-center justify-center rounded-xl bg-slate-800 text-slate-200 transition hover:bg-green-600 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className={headingClass}>Quick Links</h2>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property types */}
          <div>
            <h2 className={headingClass}>Property Types</h2>
            <ul className="mt-6 space-y-4">
              {propertyTypes.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Head office */}
          <div>
            <h2 className={headingClass}>Head Office</h2>
            <ul className="mt-6 space-y-5 text-base text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-green-400" fill="currentColor" />
                124 City Road, London, EC1V 2NX, United Kingdom
              </li>
              <li>
                <a
                  href="tel:+442012345678"
                  className="flex items-center gap-3 transition hover:text-green-400"
                >
                  <Phone size={18} className="shrink-0 text-green-400" fill="currentColor" />
                  +44 (0) 20 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hanifproperties.co.uk"
                  className="flex items-center gap-3 break-all transition hover:text-green-400"
                >
                  <Mail size={18} className="shrink-0 text-green-400" />
                  info@hanifproperties.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Clock size={18} className="shrink-0 text-slate-400" />
                Mon - Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Hanif Properties London. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="transition hover:text-green-400">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}