// Collison & Co - Next.js Website with Tailwind Only (No shadcn/ui)

import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Collison & Co</title>
        <meta name="description" content="Design. Craft. Precision." />
      </Head>
      <main className="min-h-screen bg-[#FAF9F7] text-[#333333] font-inter">
        {/* Hero Section */}
        <section className="px-6 py-12 md:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Using an external placeholder image so the build doesn't fail if a local image is missing */}
            <Image
              src="https://via.placeholder.com/160"
              alt="Collison & Co logo"
              width={160}
              height={160}
              className="mx-auto mb-4"
            />
            <h1 className="text-5xl font-bold font-playfair mb-2">Collison & Co</h1>
            <p className="text-[#B1AA99] text-lg mb-6">Design. Craft. Precision.</p>
            <button className="px-6 py-3 bg-black text-white rounded font-semibold tracking-wider">Start Your Project</button>
          </div>
        </section>

        {/* Photo / Showcase */}
        <section className="px-6">
          <div className="max-w-5xl mx-auto shadow-md rounded overflow-hidden">
            {/* External placeholder in place of a local photo */}
            <Image
              src="https://via.placeholder.com/1200x800"
              alt="Dining Room Renovation"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-16 text-center bg-white">
          <h2 className="text-3xl font-playfair mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div><h3 className="font-bold mb-2">Interior Painting</h3><p className="text-sm text-[#666]">Crisp lines, perfect prep, zero mess.</p></div>
            <div><h3 className="font-bold mb-2">Hardwood & Flooring</h3><p className="text-sm text-[#666]">Flawless installs, engineered or solid.</p></div>
            <div><h3 className="font-bold mb-2">Drywall & Repairs</h3><p className="text-sm text-[#666]">Patches, taping, texturing.</p></div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-16 bg-[#F4F1EC] text-center">
          <h2 className="text-3xl font-playfair mb-8">Our Process</h2>
          <ol className="space-y-4 max-w-2xl mx-auto">
            <li><strong>1. Consult</strong> – We'll meet, measure, and understand your goals.</li>
            <li><strong>2. Quote</strong> – Transparent, detailed pricing in writing.</li>
            <li><strong>3. Build</strong> – On time, on budget, no cut corners.</li>
            <li><strong>4. Wrap-Up</strong> – Clean handoff, photos, and a follow-up check-in.</li>
          </ol>
        </section>

        {/* Quote Form */}
        <section className="px-6 py-16 bg-white text-center">
          <h2 className="text-3xl font-playfair mb-8">Request a Free Quote</h2>
          <form className="space-y-4 max-w-md mx-auto">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded" required></textarea>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded">Send</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-[#777] py-8">
          &copy; {new Date().getFullYear()} Collison & Co. All rights reserved.
        </footer>
      </main>
    </>
  );
}
