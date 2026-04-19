'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
// FIXED: Corrected path and variable name to match news.tsx
import { todayNews } from '../../../data/news';

export default function ArticlePage() {
  const params = useParams();
  
  // Find the specific article based on the URL ID
  const article = todayNews.find((a) => a.id === params.id);

  // Error handling if article ID doesn't exist
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-black dark:text-white font-sans">
        <h1 className="text-4xl font-black mb-8 tracking-tighter uppercase">Intelligence Gap</h1>
        <Link href="/" className="px-10 py-4 bg-red-600 text-white font-black rounded-3xl uppercase text-xs tracking-widest shadow-lg hover:bg-red-700 transition-colors">
          Return to Hub
        </Link>
      </div>
    );
  }

  // Logic for related articles at the bottom
  const relatedArticles = todayNews.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white font-sans transition-colors duration-500 pb-32">
      {/* ARTICLE NAVIGATION */}
      <nav className="p-8 sticky top-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl z-50 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-black text-xs uppercase tracking-[0.4em] hover:text-red-600 transition-colors flex items-center gap-3">
            <div className="w-6 h-6 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] rounded-sm italic">S</div>
            SIGNAL NEWS HUB
          </Link>
          <div className="px-6 py-2 border-2 border-red-600 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-3xl">
            {article.category}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-12">
        {/* MAIN VISUAL */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border border-zinc-100 dark:border-zinc-900">
          <img src={article.image} alt={article.title} className="w-full h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute top-8 left-8 bg-white/90 dark:bg-black/80 text-[10px] font-black px-5 py-2 rounded-3xl backdrop-blur-md flex items-center gap-2">
            <span className="text-red-600">VERIFIED HUB REPORT • {article.date}</span>
          </div>
        </div>

        {/* HEADLINE SECTION */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-[-2px] mb-8 uppercase italic">{article.title}</h1>
          <div className="flex items-center gap-8 text-[11px] font-black tracking-widest text-zinc-400 border-y border-zinc-100 dark:border-zinc-800 py-8 uppercase">
            <span className="text-black dark:text-white">Author: {article.author}</span>
            <span className="text-red-600">/</span>
            <span>Ref: {article.date}</span>
            <span className="text-red-600">/</span>
            <span>Time: {article.time}</span>
          </div>
        </header>

        {/* BODY CONTENT */}
        <article className="prose prose-lg dark:prose-invert max-w-none text-zinc-800 dark:text-zinc-200 font-serif text-[21px] leading-relaxed italic">
          {article.content}
        </article>

        {/* RELATED INTELLIGENCE SECTION */}
        <div className="mt-28 border-t border-zinc-100 dark:border-zinc-800 pt-16">
          <h3 className="uppercase font-black text-xs tracking-[4px] text-red-600 mb-12">Related Intelligence</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {relatedArticles.map((related) => (
              <Link key={related.id} href={`/article/${related.id}`} className="group">
                <div className="rounded-2xl overflow-hidden mb-6 border border-zinc-100 dark:border-zinc-900 shadow-xl">
                  <img src={related.image} alt="" className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <p className="text-[10px] font-black uppercase text-red-600 mb-2 tracking-widest">{related.category}</p>
                <p className="font-black leading-tight text-lg group-hover:text-red-600 transition-colors line-clamp-3 uppercase italic tracking-tighter">{related.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* EXECUTIVE FOOTER */}
        <footer className="mt-32">
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-14 rounded-[42px] border border-zinc-100 dark:border-zinc-800 relative">
            <h4 className="text-[10px] font-black uppercase tracking-[3px] text-red-600 mb-6">Signal News Hub Disclaimer</h4>
            <p className="text-2xl italic text-zinc-600 dark:text-zinc-400 max-w-2xl leading-snug font-serif">
              "Our mission is to bypass the noise and deliver high-fidelity signals. Intelligence is the ultimate leverage."
            </p>
            <div className="mt-14 flex flex-wrap gap-6">
              <Link href="/" className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                Return to Briefing
              </Link>
              <button onClick={() => window.print()} className="px-10 py-5 border-2 border-zinc-200 dark:border-zinc-800 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-red-600 hover:border-red-600 transition-all">
                Print for Archive
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}