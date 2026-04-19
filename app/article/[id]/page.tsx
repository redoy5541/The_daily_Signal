'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { todayNews } from '../../data/news';

export default function ArticlePage() {
  const params = useParams();
  const article = todayNews.find((a) => a.id === params.id);

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

  // Related articles (excluding current)
  const relatedArticles = todayNews
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white font-sans transition-colors duration-500 pb-32">
      {/* Premium nav */}
      <nav className="p-8 sticky top-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl z-50 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-black text-xs uppercase tracking-[0.4em] hover:text-red-600 transition-colors flex items-center gap-3">
            <span className="w-6 h-6 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xs rounded-2xl">S</span>
            THE DAILY SIGNAL HUB
          </Link>
          <div className="px-6 py-2 border-2 border-red-600 text-red-600 text-xs font-black uppercase tracking-widest rounded-3xl">
            {article.category}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-12">
        {/* Hero image - large cinematic */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
          
          {/* Overlay badge */}
          <div className="absolute top-8 left-8 bg-white/90 dark:bg-black/80 text-xs font-black px-5 py-2 rounded-3xl backdrop-blur-md flex items-center gap-2">
            <span className="text-red-600">VERIFIED REPORT</span>
          </div>
        </div>

        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-[-2px] mb-8">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-8 text-sm font-semibold text-zinc-500 border-y border-zinc-100 dark:border-zinc-800 py-8">
            <span className="text-black dark:text-white">By {article.author}</span>
            <span className="text-red-600">•</span>
            <span>{article.date}</span>
            <span className="text-red-600">•</span>
            <span className="uppercase">{article.time}</span>
          </div>
        </header>

        {/* Article body - clean, readable, professional typography */}
        <article className="prose prose-lg dark:prose-invert max-w-none text-zinc-800 dark:text-zinc-200 font-serif text-[21px] leading-relaxed">
          {article.content}
        </article>

        {/* Related articles - dynamic liquid grid */}
        <div className="mt-28 border-t border-zinc-100 dark:border-zinc-800 pt-16">
          <h3 className="uppercase font-black text-xs tracking-[1px] text-red-600 mb-8">More Intelligence</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <Link key={related.id} href={`/article/${related.id}`} className="group">
                <div className="rounded-3xl overflow-hidden mb-4 border border-transparent group-hover:border-red-200 dark:group-hover:border-red-900 transition-colors">
                  <img src={related.image} alt="" className="w-full aspect-video object-cover" />
                </div>
                <p className="text-xs font-black uppercase text-red-600 mb-1">{related.category}</p>
                <p className="font-semibold leading-tight text-lg group-hover:text-red-600 transition-colors line-clamp-3">
                  {related.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Premium footer card */}
        <footer className="mt-32">
          <div className="bg-zinc-50 dark:bg-zinc-900 p-14 rounded-[42px] border border-zinc-100 dark:border-zinc-800 relative">
            <div className="absolute top-8 right-8 w-40 h-40 bg-red-600/5 blur-3xl rounded-full"></div>
            <h4 className="text-xs font-black uppercase tracking-[1.5px] text-red-600 mb-6">SIGNAL INTEL DISCLAIMER</h4>
            <p className="text-2xl italic text-zinc-600 dark:text-zinc-400 max-w-2xl leading-snug font-serif">
              "Our mission is to bypass the noise and deliver high-fidelity signals. Information is power; perspective is leverage."
            </p>
            
            <div className="mt-14 flex flex-wrap gap-6">
              <Link href="/" className="px-8 py-5 bg-black dark:bg-white text-white dark:text-black rounded-3xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">
                NEXT BRIEFING
              </Link>
              <button 
                onClick={() => window.print()} 
                className="px-8 py-5 border-2 border-zinc-300 dark:border-zinc-700 rounded-3xl text-sm font-black uppercase tracking-widest text-zinc-500 hover:text-red-600 transition-colors"
              >
                PRINT FOR RECORDS
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}