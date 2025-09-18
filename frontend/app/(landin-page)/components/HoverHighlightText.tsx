'use client'

import React, { useCallback, useRef } from 'react'

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(' ')
}

interface HoverHighlightTextProps {
  children: React.ReactNode
  className?: string
  // Diameter of the highlight circle in pixels
  size?: number
  // Base color for text when not highlighted
  baseColor?: string
  // Highlight color
  highlightColor?: string
}

/**
 * HoverHighlightText
 * - Renders its children as text with a circular, mouse-follow white highlight.
 * - Outside the small circle, the text appears as a slightly dark gray.
 *
 * How it works:
 * We apply a background radial-gradient to the text and use background-clip:text
 * so the gradient becomes the fill color of the glyphs. The gradient
 * transitions from highlightColor in the small circle to baseColor outside.
 * We update CSS variables for the gradient position on mouse move.
 */
export default function HoverHighlightText({
  children,
  className,
  size = 140,
  baseColor = '#9ca3af', // Tailwind gray-400
  highlightColor = '#ffffff',
}: HoverHighlightTextProps) {
  const ref = useRef<HTMLSpanElement | null>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    // Move the circle off-element so it falls back to baseColor.
    el.style.setProperty('--x', `-9999px`)
    el.style.setProperty('--y', `-9999px`)
  }, [])

  const radius = Math.max(20, Math.floor(size / 2))

  return (
    <span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cx('inline', className)}
      style={{
        // Larger, stronger highlight: keep pure white until ~85% of the radius, then transition to baseColor.
        backgroundImage: `radial-gradient(circle ${radius}px at var(--x, -9999px) var(--y, -9999px), ${highlightColor} 0, ${highlightColor} ${(radius * 0.85).toFixed(0)}px, ${baseColor} ${(radius * 0.85 + 1).toFixed(0)}px)`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        // Improve rendering on some browsers
        WebkitTextFillColor: 'transparent',
        transition: 'background-position 0.05s linear',
        cursor: 'default',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  )
}
