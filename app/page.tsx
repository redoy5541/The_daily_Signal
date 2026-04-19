'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { todayNews, stockMarket } from './data/news';

const categories = ['All', 'World', 'Politics', 'Business', 'Tech', 'History', 'Sports', 'Entertainment'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [votes, setVotes] = useState<Record<string, 'up' | 'down' | null>>({});

  const handleVote = (id: string, type: 'up' | 'down') => {
    setVotes(prev => {
      const current = prev[id];
      if (current === type) {
        // Double click on same button → deselect
        return { ...prev, [id]: null };
      } else {
        // Select new vote (like or dislike)
        return { ...prev, [id]: type };
      }
    });
  };

  const filteredNews = todayNews.filter(news => 
    selectedCategory === 'All' || news.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans transition-colors duration-500 overflow-x-hidden">
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        
        .liquid-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .liquid-card:hover {
          transform: translateY(-8px) scale(1.04);
          box-shadow: 0 30px 60px -15px rgb(0 0 0 / 0.2);
        }
      `}</style>

      {/* SIDE CONTROLS */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 hidden lg:flex">
        <button onClick={() => window.history.back()} className="w-12 h-12 bg-black/90 hover:bg-red-600 text-white rounded-3xl flex items-center justify-center font-black text-2xl shadow-2xl border border-white/10 backdrop-blur-xl transition-all">←</button>
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-12 h-12 bg-black/90 hover:bg-red-600 text-white rounded-3xl flex items-center justify-center font-black text-2xl shadow-2xl border border-white/10 backdrop-blur-xl transition-all">↑</button>
      </div>

      {/* TICKER */}
      <div className="bg-black text-white py-3 overflow-hidden border-b border-white/10 flex sticky top-0 z-[60]">
        <div className="animate-marquee whitespace-nowrap flex">
          {stockMarket.concat(stockMarket).map((stock, i) => (
            <div key={i} className="flex items-center gap-4 mx-12 text-xs font-black uppercase tracking-[0.15em]">
              <span className="opacity-60">{stock.symbol}</span>
              <span className="font-mono text-base">{stock.price}</span>
              <span className={stock.trend === 'up' ? 'text-emerald-400' : 'text-red-500'}>{stock.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav className="border-b border-zinc-100 dark:border-zinc-900 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl sticky top-[39px] z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 border-4 border-black dark:border-white rounded-3xl flex items-center justify-center font-black text-3xl group-hover:bg-red-600 group-hover:text-white transition-all">S</div>
            <h1 className="text-3xl font-black tracking-[-2px] text-black dark:text-white uppercase">THE DAILY SIGNAL</h1>
          </Link>
          <div className="text-right">
            <p className="text-xs font-black uppercase text-red-600 tracking-widest">Mehedi Redoy</p>
            <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">Lead Editor • Verified</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pb-6 flex gap-2 overflow-x-auto no-scrollbar border-t border-zinc-100 dark:border-zinc-900">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-7 py-2.5 text-xs font-black uppercase tracking-[0.5px] rounded-3xl transition-all whitespace-nowrap ${
                selectedCategory === cat 
                  ? 'bg-red-600 text-white shadow-inner' 
                  : 'bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* HERO - Big Cinematic */}
        {selectedCategory === 'All' && todayNews[0] && (
          <header className="relative group mb-20 overflow-hidden rounded-[42px] border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-950">
            <div className="grid lg:grid-cols-2 min-h-[560px]">
              <div className="p-12 lg:p-20 flex flex-col justify-center text-white relative z-10 bg-gradient-to-r from-black/70 to-transparent">
                <h2 className="text-5xl lg:text-7xl font-black tracking-[-2px] leading-none mb-8 text-white">{todayNews[0].title}</h2>
                <p className="text-xl text-white/80 max-w-md mb-10">{todayNews[0].excerpt}</p>
                <Link href={`/article/${todayNews[0].id}`} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-3xl uppercase text-sm tracking-widest hover:bg-red-600 hover:text-white transition-all">READ FULL BRIEFING →</Link>
              </div>
              <img src={todayNews[0].image} alt="" className="absolute lg:relative inset-0 w-full h-full object-cover lg:col-span-1 group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </header>
        )}

        {/* TOP STORIES - Mixed Big & Smaller Cards */}
        <div className="mb-20">
          <h2 className="text-2xl font-black tracking-[-1px] uppercase mb-10 text-black dark:text-white">Top Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Extra Large Card */}
            {filteredNews[0] && (
              <div className="lg:col-span-8 liquid-card group">
                <Link href={`/article/${filteredNews[0].id}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-zinc-200 dark:border-zinc-800 shadow-2xl">
                    <img src={filteredNews[0].image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <span className="px-5 py-2 bg-white/90 text-black text-xs font-black rounded-3xl">{filteredNews[0].category}</span>
                      <h3 className="text-4xl font-black mt-6 leading-none tracking-tighter">{filteredNews[0].title}</h3>
                      <p className="text-sm mt-4 opacity-80 line-clamp-2">{filteredNews[0].excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Two Medium Cards */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {filteredNews.slice(1, 3).map((news) => (
                <div key={news.id} className="liquid-card group flex gap-6">
                  <Link href={`/article/${news.id}`} className="flex-1">
                    <span className="text-xs font-black text-red-600">{news.category}</span>
                    <h3 className="text-2xl font-semibold leading-tight mt-3 line-clamp-3 text-black dark:text-white group-hover:text-red-600 transition-colors">{news.title}</h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-6">{news.time}</p>
                  </Link>
                  <div className="w-44 h-44 flex-shrink-0 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                    <img src={news.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest News - Smaller Cards Grid */}
        <div>
          <h2 className="text-2xl font-black tracking-[-1px] uppercase mb-10 text-black dark:text-white">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredNews.slice(3, 15).map((news) => {
              const userVote = votes[news.id];
              return (
                <div key={news.id} className="liquid-card group">
                  <Link href={`/article/${news.id}`}>
                    <div className="aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-5">
                      <img src={news.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </Link>
                  <span className="text-xs font-black text-red-600 uppercase">{news.category}</span>
                  <h3 className="text-xl font-semibold tracking-tight mt-3 leading-tight line-clamp-3 text-black dark:text-white group-hover:text-red-600 transition-colors">{news.title}</h3>
                  
                  {/* Single Select Like / Dislike */}
                  <div className="flex gap-3 mt-6">
                    <button 
                      onClick={(e) => { e.preventDefault(); handleVote(news.id, 'up'); }}
                      className={`flex-1 flex items-center justify-center gap-2 text-sm font-semibold px-6 py-4 rounded-3xl border transition-all ${
                        userVote === 'up' 
                          ? 'bg-emerald-600 text-white border-emerald-600' 
                          : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-600'
                      }`}
                    >
                      👍 {userVote === 'up' ? 'Liked' : ''}
                    </button>
                    
                    <button 
                      onClick={(e) => { e.preventDefault(); handleVote(news.id, 'down'); }}
                      className={`flex-1 flex items-center justify-center gap-2 text-sm font-semibold px-6 py-4 rounded-3xl border transition-all ${
                        userVote === 'down' 
                          ? 'bg-red-600 text-white border-red-600' 
                          : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 hover:border-red-300 hover:text-red-600'
                      }`}
                    >
                      👎 {userVote === 'down' ? 'Disliked' : ''}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-32 bg-zinc-50 dark:bg-zinc-900/70 border-t border-zinc-200 dark:border-zinc-800 py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h4 className="text-4xl font-black tracking-[-1px] text-black dark:text-white mb-6">THE DAILY SIGNAL.</h4>
            <p className="text-lg max-w-md text-zinc-600 dark:text-zinc-400 leading-relaxed">Founded by Mehedi Redoy. Unfiltered intelligence at the intersection of conflict, finance, technology, and human progress.</p>
          </div>
          <div className="flex flex-col items-end justify-between text-xs font-black uppercase tracking-widest text-zinc-400">
            <div>
              <p className="mb-1 text-red-600">Lead Editor: Mehedi Redoy</p>
              <p>© 2026 THE SIGNAL NETWORK • ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}