type FooterLink = { label: string; href: string }

const SUPPORT_EMAIL = 'support@stickyscalerc.com'

const ask = (subject: string) =>
  `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: 'Shop',
    links: [
      { label: 'The King Cat Kit', href: '#shop' },
      { label: 'Basher Edition', href: '#shop' },
      { label: '3D Cockpits', href: '#shop' },
      { label: 'Remote Wrap', href: '#shop' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'FAQ', href: ask('Question') },
      { label: 'Fit Guide', href: ask('Fit Guide') },
      { label: 'Install Guide', href: ask('Install Guide') },
      { label: 'Shipping Info', href: ask('Shipping Info') },
      { label: 'Returns & Refunds', href: ask('Returns & Refunds') },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#quality' },
      { label: 'Contact Us', href: `mailto:${SUPPORT_EMAIL}` },
      { label: 'Track Your Order', href: ask('Track My Order') },
      { label: 'Email Us', href: `mailto:${SUPPORT_EMAIL}` },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: ask('Privacy Policy') },
      { label: 'Terms of Service', href: ask('Terms of Service') },
      { label: 'Refund Policy', href: ask('Refund Policy') },
      { label: 'Shipping Policy', href: ask('Shipping Policy') },
      { label: 'Cookie Policy', href: ask('Cookie Policy') },
    ],
  },
]

const bottomLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: ask('Privacy Policy') },
  { label: 'Terms of Service', href: ask('Terms of Service') },
  { label: 'Sitemap', href: '#top' },
]

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-8 bg-background px-4 pb-8 pt-6 text-foreground md:hidden">
      <div className="flex flex-col items-start gap-3">
        <p className="font-menu text-2xl font-bold uppercase leading-none">StickyScale RC</p>
        <p className="text-pretty text-[0.9375rem] leading-relaxed text-foreground/80">
          Custom vinyl wraps for RC vehicles. Printed to order. Ships in 5 to 7 business days.
          Free shipping on orders over $125.
        </p>
      </div>

      <nav aria-label="Footer" className="grid grid-cols-2 gap-x-4 gap-y-6">
        {columns.map((column) => (
          <div key={column.heading} className="flex min-w-0 flex-col">
            <h2 className="border-b border-primary pb-2 font-menu text-base font-bold uppercase tracking-wider text-primary">
              {column.heading}
            </h2>
            <ul className="flex flex-col">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex min-h-11 items-center break-words text-[0.9375rem] leading-snug text-foreground focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="flex flex-col gap-2 border-t border-foreground/20 pt-6 text-[0.9375rem] leading-relaxed">
        <p>{'\u00A9 2026 StickyScale RC. All rights reserved.'}</p>
        <ul className="flex flex-col">
          {bottomLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex min-h-11 items-center text-foreground focus-visible:outline-2 focus-visible:outline-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-pretty text-sm leading-relaxed text-foreground/70">
          StickyScale RC is an independent company and is not affiliated with, sponsored by, or
          endorsed by Traxxas. Traxxas and X-Maxx are trademarks of their respective owners.
        </p>
      </div>
    </div>
  )
}
