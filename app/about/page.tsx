// app/about/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white font-sans transition-colors duration-500">
      <nav className="p-8 sticky top-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl z-50 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-black text-xs uppercase tracking-[0.4em] hover:text-red-600 transition-colors flex items-center gap-3">
            <span className="w-6 h-6 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xs rounded-2xl">S</span>
            SIGNAL NEWS HUB
          </Link>
          <div className="px-6 py-2 border-2 border-red-600 text-red-600 text-xs font-black uppercase tracking-widest rounded-3xl">
            ABOUT
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-6xl md:text-8xl font-black tracking-[-4px] leading-none mb-8 uppercase">The Signal</h1>
        
        <div className="prose prose-2xl dark:prose-invert max-w-none text-zinc-800 dark:text-zinc-200 font-serif leading-relaxed">
          <p className="text-3xl italic mb-16">We cut through the noise. We deliver only what matters.</p>
          
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Founder & Lead Editor</h2>
          <p className="text-2xl mb-12">Mehedi Redoy</p>
          
          <p className="mb-12">Every story and every update is crafted with one goal — to deliver clean, verified global intelligence.</p>
          
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">How the Site Works</h2>
          <ul className="list-none space-y-8 text-xl">
            <li className="flex gap-6"><span className="font-black text-red-600 text-4xl">01</span> New news is added daily with today’s date and appears on the homepage.</li>
            <li className="flex gap-6"><span className="font-black text-red-600 text-4xl">02</span> Old news automatically moves to the Archive section.</li>
            <li className="flex gap-6"><span className="font-black text-red-600 text-4xl">03</span> In Archive, click any date button to view news from that day.</li>
            <li className="flex gap-6"><span className="font-black text-red-600 text-4xl">04</span> History articles stay available forever in the Archive.</li>
          </ul>
        </div>

        <div className="mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-16">
          <Link href="/" className="inline-flex px-12 py-6 bg-black dark:bg-white text-white dark:text-black rounded-3xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform">
            RETURN TO TODAY'S SIGNAL
          </Link>
        </div>
      </main>
    </div>
  );
}