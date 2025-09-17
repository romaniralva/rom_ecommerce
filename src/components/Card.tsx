import React from "react"

import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

type Tone = "red" | "orange" | "green" | "neutral"

export interface CardProps {
  imageSrc?: string
  imageAlt?: string
  title: string
  description?: string
  price?: number | string
  badge?: { text: string; tone?: Tone }
  footer?: ReactNode
  href?: string
  className?: string
}

const toneClass: Record<Tone, string> = {
  red: "bg-[color:--color-red]/10 text-[color:--color-red]",
  orange: "bg-[color:--color-orange]/10 text-[color:--color-orange]",
  green: "bg-[color:--color-green]/10 text-[color:--color-green]",
  neutral: "bg-[--color-light-300]/40 text-[--color-dark-900]"
}

export default function Card({
  imageSrc = "/vercel.svg",
  imageAlt = "",
  title,
  description,
  price,
  badge,
  footer,
  href,
  className
}: CardProps) {
  return (
    <div
      className={`bg-[--color-light-100] rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow ${className ?? ""}`}
    >
      <div className="relative w-full aspect-square bg-[--color-light-200]">
        {badge ? (
          <span
            className={`absolute left-3 top-3 text-[length:--text-caption] px-3 py-1 rounded-full ${toneClass[badge.tone ?? "neutral"]}`}
          >
            {badge.text}
          </span>
        ) : null}
        <Image src={imageSrc} alt={imageAlt || title} fill className="object-contain" />
      </div>

      <div className="p-4">
        {href ? (
          <Link href={href} className="block">
            <h3 className="text-[length:--text-heading-3] leading-[--text-heading-3--line-height] font-medium text-[--color-dark-900]">
              {title}
            </h3>
          </Link>
        ) : (
          <div className="block">
            <h3 className="text-[length:--text-heading-3] leading-[--text-heading-3--line-height] font-medium text-[--color-dark-900]">
              {title}
            </h3>
          </div>
        )}

        {description ? (
          <p className="mt-1 text-[length:--text-body] leading-[--text-body--line-height] text-[--color-dark-700]">
            {description}
          </p>
        ) : null}

        <div className="mt-3 flex items-center justify-between">
          {price !== undefined ? (
            <span className="text-2xl font-semibold text-[--color-dark-900]">
              {typeof price === "number" ? `$${price}` : price}
            </span>
          ) : (
            <span />
          )}
          {footer ? <div className="text-[length:--text-caption]">{footer}</div> : null}
        </div>
      </div>
    </div>
  )
}
