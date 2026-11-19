'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Menu, ShoppingCart, X } from 'lucide-react'

export type NavLink = { label: string; href: string }

export function MobileNav({
  links,
  cartHref,
  cartCount = 0,
}: {
  links: NavLink[]
  cartHref: string
  cartCount?: number
}) {
  const [open, setOpen] = useState(false)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    const openButton = openButtonRef.current
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      openButton?.focus()
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className="sticky top-0 z-40 md:hidden">
      <div className="flex items-center justify-between gap-2 border-b-2 border-primary bg-background px-3 py-1.5">
        <a href="#top" aria-label="StickyScale RC home" className="flex shrink-0">
          <Image
            src="/site/logo-on-black.png"
            alt=""
            width={420}
            height={142}
            priority
            className="h-12 w-auto"
          />
        </a>
        <div className="flex items-center gap-1">
          <a
            href={cartHref}
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
            className="relative flex size-11 items-center justify-center text-foreground"
          >
            <ShoppingCart className="size-6" aria-hidden="true" />
            <span
              aria-hidden="true"
              className="absolute right-0.5 top-0.5 flex min-w-5 items-center justify-center rounded-full bg-primary px-1 font-menu text-xs font-bold leading-5 text-primary-foreground"
            >
              {cartCount}
            </span>
          </a>

          <button
            ref={openButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="flex min-h-11 min-w-11 flex-col items-center justify-center text-foreground"
          >
            <Menu className="size-7" aria-hidden="true" />
            <span className="font-menu text-[0.6875rem] font-bold uppercase leading-none tracking-wider">
              Menu
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background"
        >
          <div className="flex justify-end px-5 pt-5">
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex size-12 items-center justify-center text-foreground"
            >
              <X className="size-10" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8 pb-10">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.label} className="border-b border-primary">
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex min-h-14 items-center justify-center py-6 font-menu text-[2.5rem] font-bold uppercase leading-none text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={cartHref}
                  onClick={close}
                  className="flex min-h-14 items-center justify-center gap-4 py-6 font-menu text-[2.5rem] font-bold uppercase leading-none text-foreground"
                >
                  <ShoppingCart className="size-10" strokeWidth={1.75} aria-hidden="true" />
                  Cart
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
