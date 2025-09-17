"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

export interface NavbarLink {
  label: string
  href: string
}

export interface NavbarProps {
  logoSrc?: string
  links?: NavbarLink[]
  showSearch?: boolean
  cartCount?: number
  className?: string
}

export default function Navbar({
  logoSrc = "/globe.svg",
  links = [
    { label: "Men", href: "#" },
    { label: "Women", href: "#" },
    { label: "Kids", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Contact", href: "#" }
  ],
  showSearch = true,
  cartCount = 0,
  className
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav
      aria-label="Primary"
      className={`bg-[--color-light-100] text-[--color-dark-900] border-b border-[--color-light-300] ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logoSrc} alt="Logo" width={28} height={28} />
          </Link>

          <button
            type="button"
            aria-controls="primary-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[--color-dark-900] hover:bg-[--color-light-200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>

          <ul className="hidden md:flex items-center gap-8 text-[length:--text-body]">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-[--color-dark-700]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            {showSearch && (
              <button className="text-sm hover:text-[--color-dark-700]">Search</button>
            )}
            <a href="#" className="text-sm hover:text-[--color-dark-700]">
              My Cart{cartCount ? ` (${cartCount})` : ""}
            </a>
          </div>
        </div>

        <div id="primary-nav" className={`${open ? "block" : "hidden"} md:hidden pb-4`}>
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="block py-2 hover:text-[--color-dark-700]">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-2 border-t border-[--color-light-300] mt-2">
              {showSearch && <button className="text-sm">Search</button>}
              <a href="#" className="text-sm">
                My Cart{cartCount ? ` (${cartCount})` : ""}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
