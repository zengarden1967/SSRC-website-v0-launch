import Image from 'next/image'
import { MobileNav } from '@/components/mobile-nav'
import { MobileFooter } from '@/components/mobile-footer'

type Hotspot = {
  label: string
  href: string
  left: number
  top: number
  width: number
  height: number
}

function ImageSection({
  src,
  alt,
  width,
  height,
  hotspots = [],
  priority = false,
  id,
}: {
  src: string
  alt: string
  width: number
  height: number
  hotspots?: Hotspot[]
  priority?: boolean
  id?: string
}) {
  return (
    <div id={id} className="relative w-full scroll-mt-4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
  sizes="(max-width: 772px) 100vw, 772px"
  className="block h-auto w-full max-w-full"
      />
      {hotspots.map((spot) => (
        <a
          key={spot.label}
          href={spot.href}
          aria-label={spot.label}
          className="absolute rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          style={{
            left: `${spot.left}%`,
            top: `${spot.top}%`,
            width: `${spot.width}%`,
            height: `${spot.height}%`,
          }}
        />
      ))}
    </div>
  )
}

const navHotspots: Hotspot[] = [
  { label: 'Home', href: '#top', left: 22.5, top: 10, width: 6.5, height: 80 },
  { label: 'Shop', href: '#shop', left: 29.5, top: 10, width: 5.5, height: 80 },
  { label: '3D Cockpits', href: '#shop', left: 36, top: 10, width: 10, height: 80 },
  { label: 'Remote Wraps', href: '#shop', left: 47, top: 10, width: 12.5, height: 80 },
  { label: 'About', href: '#quality', left: 60.5, top: 10, width: 7.5, height: 80 },
  {
    label: 'Contact',
    href: 'mailto:support@stickyscalerc.com',
    left: 68.5,
    top: 10,
    width: 9.5,
    height: 80,
  },
]

const heroHotspots: Hotspot[] = [
  { label: 'Shop King Cat wraps', href: '#shop', left: 7, top: 60, width: 15.5, height: 13 },
]

const footerHotspots: Hotspot[] = [
  {
    label: 'Email support@stickyscalerc.com',
    href: 'mailto:support@stickyscalerc.com',
    left: 67,
    top: 37,
    width: 19,
    height: 5,
  },
]

const products = [
  {
    src: '/site/05-card-electric-purple.png',
    name: 'Original Electric Purple',
    height: 214,
  },
  {
    src: '/site/06-card-acid-green-lava.png',
    name: 'Acid Green Lava',
    height: 214,
  },
  {
    src: '/site/07-card-electric-orange-lava.png',
    name: 'Electric Orange Lava',
    height: 182,
  },
  {
    src: '/site/08-card-blue-teal-lava.png',
    name: 'Blue Teal Lava',
    height: 182,
  },
]

export function StickyScaleHome() {
  return (
    <div id="top" className="mx-auto flex w-full max-w-3xl flex-col bg-background max-md:overflow-x-hidden">
      <MobileNav
        links={navHotspots.map(({ label, href }) => ({ label, href }))}
        cartHref="#shop"
      />
      <header className="flex flex-col">
        <h1 className="sr-only">StickyScale RC: vinyl wraps that dominate</h1>
  <div className="relative md:hidden">
  <Image
  src="/site/mobile-banner-1170x217.png"
  alt="Free shipping on orders over $125"
  width={1170}
  height={217}
  sizes="100vw"
  priority
  className="block h-auto w-full"
  />
  <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-b from-transparent to-[#000]"
  />
  </div>
        <div className="hidden md:flex">
          <div className="w-1/2">
            <ImageSection
              src="/site/01-header-logo.png"
              alt="StickyScale RC logo, a crowned lion with the tagline Vinyl Wraps That Dominate"
              width={386}
              height={137}
              priority
            />
          </div>
          <div className="w-1/2">
            <ImageSection
              src="/site/02-header-free-shipping.png"
              alt="Free shipping on orders over $125"
              width={386}
              height={137}
              priority
            />
          </div>
        </div>
        <nav aria-label="Main" className="hidden md:block">
          <ImageSection
            src="/site/03-nav-bar.png"
            alt="Home, Shop, 3D Cockpits, Remote Wraps, About, Contact"
            width={772}
            height={39}
            hotspots={navHotspots}
            priority
          />
        </nav>
      </header>

      <main className="flex flex-col">
        <ImageSection
          src="/site/04-hero.png"
          alt="King Cat vinyl wraps for the Traxxas X-Maxx. Same truck, whole new attitude. 11 pieces, 4 colorways, free shipping over $125, self-install."
          width={772}
          height={207}
          hotspots={heroHotspots}
          priority
        />

        <section id="shop" aria-labelledby="shop-heading" className="scroll-mt-4">
          <h2 id="shop-heading" className="sr-only">
            Shop X-Maxx vinyl wraps, $109 each
          </h2>
          <ul className="grid grid-cols-2">
            {products.map((product) => (
              <li key={product.name} className="flex">
                <Image
                  src={product.src}
                  alt={`${product.name} X-Maxx vinyl wrap, $109 USD`}
                  width={386}
                  height={product.height}
                  sizes="(max-width: 772px) 50vw, 386px"
                  className="block h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </section>

        <section id="quality" aria-labelledby="quality-heading">
          <h2 id="quality-heading" className="sr-only">
            Our quality
          </h2>
          <ImageSection
            src="/site/09-our-quality.png"
            alt="Our Quality: premium, UV-protected, high-resolution, scratch-resistant vinyl wraps. Vibrant long-lasting colors, precision-cut for a perfect fit, easy installation, built for real RC action."
            width={772}
            height={262}
          />
        </section>
      </main>

      <footer>
        <MobileFooter />
        <div className="hidden md:block">
        <ImageSection
          src="/site/11-footer.png"
          alt="StickyScale RC. Custom vinyl wraps for RC vehicles. Printed to order, ships in 5 to 7 business days. Free shipping on orders over $125. Contact support@stickyscalerc.com. StickyScale RC is not affiliated with Traxxas."
          width={772}
          height={386}
          hotspots={footerHotspots}
        />
        </div>
      </footer>
    </div>
  )
}
