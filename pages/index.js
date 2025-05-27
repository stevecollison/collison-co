// Collison & Co - Next.js Website with Supabase

import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

// Move env values directly into the file for sandbox testing
const supabaseUrl = 'https://dnwmggbxbijefgkcjkam.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRud21nZ2J4YmlqZWZna2Nqa2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNjAwMTAsImV4cCI6MjA2MzkzNjAxMH0.hvVX8B1PxpIWn_eCiTMCiAlXkS8qiuePGcIK5Yd-OdQ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('leads').insert({ name, email, message });
    if (!error) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F7] text-[#333333] p-6 font-inter">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-playfair mb-4 text-[#000]">Collison & Co</h1>
        <p className="mb-6 text-[#B1AA99]">Design. Craft. Precision.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-[#B1AA99] rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-[#B1AA99] rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-[#B1AA99] rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#000] text-white px-4 py-2 rounded uppercase tracking-wider font-poppins"
            >
              Send Quote Request
            </button>
          </form>
        ) : (
          <div className="text-green-600 font-semibold">Thank you! Your request has been submitted.</div>
        )}
      </div>
    </main>
  );
}
