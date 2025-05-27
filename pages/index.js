import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="bg-[#f9f7f2] text-[#222]">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <Image src="/collison.jpg" alt="Collison & Co Logo" width={48} height={48} />
          <div className="text-sm font-semibold leading-tight">
            <div className="text-lg font-bold">COLLISON & CO</div>
            <div className="text-xs tracking-wide uppercase">Design. Craft. Precision.</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 font-semibold text-sm">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button className="ml-4">Get Quote</Button>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-20">
        <h1 className="text-5xl font-black leading-tight">Refined Renovations<br />Built to Endure</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
          Design-led craftsmanship meets modern project management. Serving Burlington & Halton with precision, honesty, and elevated results.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button>Start Your Project</Button>
          <Button variant="outline">View Our Work</Button>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            ['Design-Led', 'SketchUp visualizations and thoughtful planning for every project'],
            ['Modern Process', 'CRM systems, digital quotes, and transparent communication'],
            ['Trusted Results', 'Finance & PM background ensures projects delivered on time, on budget']
          ].map(([title, desc]) => (
            <div key={title} className="rounded-lg border p-6 text-center">
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700">
          From concept to completion, we deliver precision craftsmanship across every aspect of residential renovation.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ['Bathroom Renovations', 'Complete bathroom transformations with custom vanities, waterproofing, and luxury finishes', ['Custom vanity installs', 'Waterproofing & tile showers', 'Plumbing fixture updates', 'Lighting upgrades']],
            ['Built-ins & Custom Cabinetry', 'Precision-crafted storage solutions that maximize space and showcase design excellence', ['Floating shelves', 'Fireplace built-ins', 'Entryway storage', 'Custom media walls']],
            ['Flooring Installation', 'Professional flooring services from hardwood to luxury vinyl with expert subfloor preparation', ['Hardwood installation', 'Vinyl plank & SPC', 'Subfloor prep & leveling', 'Stair transitions']],
            ['Finish Carpentry', 'Detailed trim work and finishing touches that elevate your space with premium craftsmanship', ['Baseboards & trim', 'Door casing installation', 'Crown molding', 'Wainscoting features']],
            ['Drywall & Wall Repair', 'Smooth, clean walls with expert mudding, taping, and paint preparation', ['Mudding & taping', 'Ceiling patches', 'Large float work', 'Paint preparation']],
            ['Electrical & Plumbing Fixtures', 'Light fixture and plumbing replacements to complete your renovation', ['Light fixtures & potlights', 'Switches and dimmers', 'Faucet installations', 'Toilet & sink swaps']]
          ].map(([title, desc, bullets]) => (
            <div key={title} className="rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-700 mb-2">{desc}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-6">Recent Projects</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700">
          Every project reflects our commitment to design excellence and precision craftsmanship.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden border bg-white">
            <Image src="/IMG_1638.JPG" alt="Dining Room" width={800} height={600} className="w-full h-auto" />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Interior Renovation</p>
              <h3 className="font-bold text-lg">Modern Dining Room</h3>
              <p className="text-sm text-gray-700">Complete dining room transformation featuring custom built-ins, elegant lighting, and premium finishes</p>
            </div>
          </div>
          <div className="rounded-lg border border-dashed p-6 text-center flex flex-col items-center justify-center">
            <span className="text-3xl">📸</span>
            <h3 className="font-bold text-lg mt-2">More Projects Coming</h3>
            <p className="text-sm text-gray-700">We&apos;re documenting our latest work. Check back soon for more stunning transformations.</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Button>Request Full Portfolio</Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">Start Your Project</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700">
          Ready to transform your space? Let&apos;s discuss your vision and create something extraordinary together.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <form className="md:col-span-2 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Your Name" className="border rounded px-4 py-2" />
              <input placeholder="Email Address" className="border rounded px-4 py-2" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Phone Number" className="border rounded px-4 py-2" />
              <select className="border rounded px-4 py-2">
                <option>Bathroom Renovation</option>
                <option>Flooring Installation</option>
                <option>Finish Carpentry</option>
                <option>Custom Cabinetry</option>
              </select>
            </div>
            <textarea rows={4} placeholder="Tell us about your project..." className="border rounded px-4 py-2"></textarea>
            <Button type="submit">Request Free Consultation</Button>
          </form>
          <div className="space-y-6">
            <div className="border p-4 rounded">
              <h4 className="font-bold mb-1">Service Area</h4>
              <p className="text-sm text-gray-700">
                <strong>Primary:</strong> Burlington & Halton Region<br />We proudly serve the area with exceptional renovation services.
              </p>
            </div>
            <div className="border p-4 rounded">
              <h4 className="font-bold mb-1">Why Choose Collison & Co?</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li><strong>Design-Forward:</strong> Thoughtful design and 3D visualization</li>
                <li><strong>Modern Systems:</strong> CRM tracking and transparency</li>
                <li><strong>Financial Discipline:</strong> Delivered on time & budget</li>
                <li><strong>Comprehensive Service:</strong> From planning to walkthrough</li>
              </ul>
            </div>
            <div className="bg-black text-white p-4 rounded">
              <h4 className="font-bold mb-1">Ready to Get Started?</h4>
              <p className="text-sm">We respond in 24 hours and can book consultations within a week.<br />Currently accepting new projects for 2024.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <Image src="/collison.jpg" alt="Logo" width={48} height={48} />
            <p className="text-sm mt-4 max-w-xs">
              Refined renovations built to endure. Serving Burlington & Halton with design-led craftsmanship and modern project management.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Services</h5>
            <ul className="text-sm space-y-1">
              <li>Bathroom Renovations</li>
              <li>Built-ins & Cabinetry</li>
              <li>Flooring Installation</li>
              <li>Finish Carpentry</li>
              <li>Drywall & Repairs</li>
              <li>Design & Planning</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Contact</h5>
            <p className="text-sm">
              Burlington & Halton Region<br />Ontario, Canada<br /><br />
              Ready to start your project?<br />
              <a href="#contact" className="underline">Get Your Free Consultation</a>
            </p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          © 2024 Collison & Co. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
