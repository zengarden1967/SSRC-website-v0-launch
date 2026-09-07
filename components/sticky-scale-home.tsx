type Hotspot = {
  label: string
  href: string
  /** all values are percentages (0-100) relative to the slice */
  left: number
  top: number
  width: number
  height: number
}

type Slice = {
  src: string
  alt: string
  /** intrinsic pixel dimensions, used to reserve correct aspect ratio */
  width: number
  height: number
  hotspots?: Hotspot[]
}

/*
 * Each slice was exported from the original 2046px-wide mock-up.
 * Hotspots are positioned as percentages so they scale with the image.
 * Point the `href` values at real routes when those pages exist.
 */
const slices: Slice[] = [
  {
    src: '/sections/header.png',
    alt: 'Sticky Scale RC logo with Built For Bashing headline and main navigation',
    width: 2046,
    height: 690,
    hotspots: [
      { label: 'Search', href: '#search', left: 85.5, top: 2, width: 5, height: 11 },
      { label: 'Cart', href: '#cart', left: 92.5, top: 1, width: 6.5, height: 12 },
      { label: 'Home', href: '/', left: 5.8, top: 85, width: 27, height: 14 },
      { label: 'About', href: '#about', left: 38.5, top: 85, width: 20.5, height: 14 },
      { label: 'Sticky Seats', href: '#sticky-seats', left: 68, top: 85, width: 27.5, height: 14 },
    ],
  },
  {
    src: '/sections/products.png',
    alt: 'Four featured Traxxas X-Maxx King Cat vinyl wraps with prices',
    width: 2046,
    height: 1090,
    hotspots: [
      { label: 'Shop King Cat X-Max Wrap — $109', href: '#shop-kingcat-1', left: 4.3, top: 86, width: 18.5, height: 10 },
      { label: 'Shop King Cat X-Max Wrap — $109', href: '#shop-kingcat-2', left: 28.5, top: 86, width: 18.5, height: 10 },
      { label: 'Shop King Cat X-Max Wrap — $109', href: '#shop-kingcat-3', left: 51.5, top: 86, width: 18.5, height: 10 },
      { label: 'Shop 3D Cockpit X-Maxx — $41', href: '#shop-cockpit', left: 79, top: 86, width: 18.5, height: 10 },
    ],
  },
  {
    src: '/sections/quality.png',
    alt: 'Our Quality — premium vinyl, UV protected, high-resolution print, perfect fit, built to last',
    width: 2046,
    height: 526,
  },
  {
    src: '/sections/vinyl.png',
    alt: 'Rolled vinyl wrap featuring the crowned tiger. Same passion, higher standards.',
    width: 2046,
    height: 590,
  },
  {
    src: '/sections/footer.png',
    alt: 'Sticky Scale RC — RC Graphics That Dominate, with social links and copyright',
    width: 2046,
    height: 504,
    hotspots: [
      { label: 'Instagram', href: '#instagram', left: 77.5, top: 28, width: 5, height: 22 },
      { label: 'YouTube', href: '#youtube', left: 82.7, top: 28, width: 5, height: 22 },
      { label: 'Facebook', href: '#facebook', left: 87.9, top: 28, width: 4, height: 22 },
      { label: 'TikTok', href: '#tiktok', left: 91.5, top: 28, width: 4.5, height: 22 },
    ],
  },
]

export function StickyScaleHome() {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto w-full max-w-[1300px]">
        {slices.map((slice) => (
          <section
            key={slice.src}
            className="relative"
            style={{ aspectRatio: `${slice.width} / ${slice.height}` }}
          >
            <img
              src={slice.src || '/placeholder.svg'}
              alt={slice.alt}
              width={slice.width}
              height={slice.height}
              className="block w-full h-auto select-none"
              draggable={false}
            />
            {slice.hotspots?.map((spot) => (
              <a
                key={spot.href}
                href={spot.href}
                aria-label={spot.label}
                title={spot.label}
                className="absolute rounded-md ring-2 ring-transparent transition-shadow duration-150 hover:ring-fuchsia-400/80 focus-visible:outline-none focus-visible:ring-fuchsia-400"
                style={{
                  left: `${spot.left}%`,
                  top: `${spot.top}%`,
                  width: `${spot.width}%`,
                  height: `${spot.height}%`,
                }}
              >
                <span className="sr-only">{spot.label}</span>
              </a>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}
