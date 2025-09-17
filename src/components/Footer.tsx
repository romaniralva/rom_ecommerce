import React from "react"

import Image from "next/image"

export interface FooterLink {
  label: string
  href: string
  iconSrc?: string
}

export interface FooterProps {
  locationLabel?: string
  links?: FooterLink[]
  year?: number
  company?: string
  className?: string
  socials?: FooterLink[]
}

export default function Footer({
  locationLabel = "Croatia",
  links = [
    { label: "Guides", href: "#" },
    { label: "Terms of Sale", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Nike Privacy Policy", href: "#" }
  ],
  year = new Date().getFullYear(),
  company = "Nike, Inc.",
  className,
  socials = [
    { label: "Vercel", href: "#", iconSrc: "/vercel.svg" },
    { label: "Next", href: "#", iconSrc: "/next.svg" },
    { label: "Window", href: "#", iconSrc: "/window.svg" }
  ]
}: FooterProps) {
  return (
    <footer className={`bg-[--color-dark-900] text-[--color-light-400] ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-[--color-light-100]">
          <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[--color-light-100] text-[--color-dark-900]">
            <Image src="/globe.svg" alt="" width={14} height={14} />
          </span>
          <span className="text-[length:--text-body]">{locationLabel}</span>
          <span className="text-[--color-light-400]">© {year} {company}. All Rights Reserved</span>
        </div>

        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-[--color-light-100] text-[length:--text-caption]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="opacity-80 hover:opacity-100 transition-opacity">
              {s.iconSrc ? (
                <Image src={s.iconSrc} alt="" width={20} height={20} />
              ) : (
                <span className="block w-5 h-5 bg-[--color-light-400] rounded" />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
