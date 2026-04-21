// app/archive/page.tsx
'use client';
import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import Link from 'next/link';
import { allNews, stockMarket } from '../data/news';

const categories = ['World', 'Politics', 'Business', 'Tech', 'History', 'Sports', 'Entertainment'];

export default function ArchivePage() {
  const [selectedArchiveDate, setSelectedArchiveDate] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [votes, setVotes] = useState<Record<string, 'up' | 'down' | null>>({});
  const [counters, setCounters] = useState<Record<string, { up: number, down: number }>>({});
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const todayDateStr = useMemo(() => {
    return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }, []);

  const archiveDates = useMemo(() => {
    return Array.from(new Set(allNews.map(n => n.date)))
      .filter(d => d !== todayDateStr)
      .sort((a, b) => b.localeCompare(a));
  }, [todayDateStr]);

  const archiveNewsForSelectedDate = useMemo(() => {
    if (!selectedArchiveDate) return [];
    return allNews.filter(n => n.date === selectedArchiveDate);
  }, [selectedArchiveDate]);

  const filteredArchiveNews = useMemo(() => {
    if (activeCategory === 'All') return archiveNewsForSelectedDate;
    return archiveNewsForSelectedDate.filter(n => n.category === activeCategory);
  }, [activeCategory, archiveNewsForSelectedDate]);

  // Dark mode
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('signal_theme') as 'dark' | 'light' | null;
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initial = savedTheme || (systemPrefersLight ? 'light' : 'dark');

    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
    document.body.style.backgroundColor = initial === 'dark' ? '#000000' : '#fafafa';
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const savedVotes = localStorage.getItem('signal_votes');
    if (savedVotes) {
      try { setVotes(JSON.parse(savedVotes)); } catch (e) { console.error(e); }
    }

    const initialCounters: Record<string, { up: number, down: number }> = {};
    allNews.forEach(news => {
      initialCounters[news.id] = { up: Math.floor(Math.random() * 500) + 100, down: Math.floor(Math.random() * 50) + 5 };
    });
    setCounters(initialCounters);
  }, []);

  const handleVote = (id: string, type: 'up' | 'down') => {
    setVotes(prev => {
      const current = prev[id];
      const newVote = current === type ? null : type;
      setCounters(prevCount => {
        const counts = { ...prevCount[id] };
        if (current === type) counts[type]--;
        else {
          counts[type]++;
          if (current) counts[current]--;
        }
        return { ...prevCount, [id]: counts };
      });
      const updatedVotes = { ...prev, [id]: newVote };
      localStorage.setItem('signal_votes', JSON.stringify(updatedVotes));
      return updatedVotes;
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('signal_theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.body.style.backgroundColor = newTheme === 'dark' ? '#000000' : '#fafafa';
  };

  if (!isMounted) return <div className="min-h-screen bg-black" />;

  const Logo = () => (
    <div className="relative group cursor-pointer">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative w-10 h-10 bg-black rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-600 to-blue-500 opacity-90"></div>
        <span className="relative font-black text-2xl italic text-white tracking-[-3px] drop-shadow-md">S</span>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-red-600 overflow-x-hidden ${theme === 'dark' ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* TICKER */}
      <div className={`${theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-zinc-200'} py-2 overflow-hidden border-b flex sticky top-0 z-[60] w-full`}>
        <div className="animate-marquee whitespace-nowrap flex">
          {stockMarket.concat(stockMarket).map((stock, i) => (
            <div key={i} className="flex items-center gap-3 mx-8 text-[10px] font-black uppercase tracking-[0.15em]">
              <span className="opacity-60">{stock.symbol}</span>
              <span className="font-mono text-sm">{stock.price}</span>
              <span className={stock.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}>{stock.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav className={`${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-xl sticky top-[37px] z-50 w-full`}>
        <div className="w-full px-[5%] py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group text-left">
            <Logo />
            <h1 className={`text-xl lg:text-2xl font-black tracking-[-2px] uppercase transition-all duration-300 ${theme === 'dark' ? 'group-hover:text-zinc-400' : 'group-hover:text-red-600'}`}>
              SIGNAL NEWS HUB
            </h1>
          </Link>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className={`relative w-10 h-5 rounded-full cursor-pointer p-0.5 transition-all border flex items-center ${theme === 'dark' ? 'bg-white border-white' : 'bg-black border-black'}`}
            >
              <div className={`w-3.5 h-3.5 rounded-full transition-all duration-500 ${theme === 'dark' ? 'translate-x-5 bg-black' : 'translate-x-0 bg-white'}`}></div>
            </button>
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase text-red-600 tracking-widest">Mehedi Redoy</p>
              <p className="text-[8px] font-semibold text-zinc-500 uppercase tracking-tighter">Founder & Lead Editor</p>
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full px-[5%] py-8">
        {selectedArticle ? (
          <article className="w-full max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <button onClick={() => setSelectedArticle(null)} className="mb-8 group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-red-600 transition-all">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Archive
            </button>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl mb-12 aspect-video max-h-[60vh]">
              <img src={selectedArticle.image} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <span className="text-red-600 font-black uppercase text-[10px] tracking-[0.4em] block mb-4">{selectedArticle.category} // INTEL</span>
              <h1 className={`text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{selectedArticle.title}</h1>
              <div className={`h-px w-full mb-8 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}`}></div>
              <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} text-xl leading-relaxed font-medium mb-6 italic`}>"{selectedArticle.excerpt}"</p>
              <p className={`${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-700'} text-base leading-relaxed mb-8`}>{selectedArticle.content}</p>
            </div>
          </article>
        ) : (
          <section className="animate-in fade-in slide-in-from-bottom-12 duration-1000 w-full">
            {/* Archive Header */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <h2 className={`text-5xl lg:text-7xl font-black uppercase tracking-[-4px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  ARCHIVE
                </h2>
                <div className="h-px w-32 bg-gradient-to-r from-red-600 to-transparent hidden md:block"></div>
              </div>
              <Link 
                href="/" 
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all border shadow-md ${theme === 'dark' ? 'bg-zinc-900 border-white/5 hover:bg-white hover:text-black' : 'bg-white border-zinc-200 hover:bg-black hover:text-white'}`}
              >
                ← BACK TO TODAY
              </Link>
            </div>

            {/* Selected Date Content */}
            {selectedArchiveDate && archiveNewsForSelectedDate.length > 0 ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      INTELLIGENCE FROM • {selectedArchiveDate}
                    </p>
                  </div>
                  <p className={`text-[8px] font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {archiveNewsForSelectedDate.length} ARTICLES
                  </p>
                </div>

                {/* Category Navigation */}
                <div className="w-full mb-8 flex gap-2 overflow-x-auto no-scrollbar pb-2">
                  <button 
                    onClick={() => setActiveCategory('All')}
                    className={`px-5 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-full transition-all whitespace-nowrap ${activeCategory === 'All' ? 'bg-red-600 text-white shadow-md shadow-red-600/20' : (theme === 'dark' ? 'bg-zinc-900 text-zinc-500 hover:text-white' : 'bg-zinc-200 text-zinc-500 hover:text-black')}`}
                  >
                    All
                  </button>
                  {categories.map(cat => {
                    const hasArticles = archiveNewsForSelectedDate.some(n => n.category === cat);
                    if (!hasArticles) return null;
                    return (
                      <button 
                        key={cat} 
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-full transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-red-600 text-white shadow-md shadow-red-600/20' : (theme === 'dark' ? 'bg-zinc-900 text-zinc-500 hover:text-white' : 'bg-zinc-200 text-zinc-500 hover:text-black')}`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* News Grid */}
                <div className={`${theme === 'dark' ? 'bg-zinc-900/20 border-white/10' : 'bg-white border-zinc-200'} rounded-[50px] p-6 lg:p-10 shadow-xl border w-full`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
                    {filteredArchiveNews.map((news) => {
                      const userVote = votes[news.id];
                      const count = counters[news.id] || { up: 0, down: 0 };
                      return (
                        <div key={news.id} onClick={() => setSelectedArticle(news)} className="flex flex-col group cursor-pointer">
                          <div className="block mb-3 overflow-hidden rounded-[30px] aspect-[16/10] bg-zinc-800 shadow-lg">
                            <img src={news.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]" />
                          </div>
                          <span className="text-[8px] font-black text-red-600 uppercase tracking-[0.3em] mb-2">{news.category}</span>
                          <h3 className={`text-lg lg:text-xl font-black leading-[1.1] mb-3 uppercase group-hover:text-red-500 transition-colors line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            {news.title.length > 50 ? news.title.substring(0, 50) + '...' : news.title}
                          </h3>
                          <div className="flex gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
                            <button 
                              onClick={() => handleVote(news.id, 'up')} 
                              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-2xl text-[8px] font-black tracking-widest transition-all border ${userVote === 'up' ? 'bg-emerald-600 border-emerald-600 text-white' : (theme === 'dark' ? 'bg-transparent border-white/10 text-zinc-500 hover:text-white' : 'bg-transparent border-zinc-200 text-zinc-400 hover:text-black')}`}
                            >
                              LIKE <span className={`text-[9px] px-1.5 py-0.5 rounded-md ${userVote === 'up' ? 'bg-white/20' : 'bg-zinc-800'}`}>{count.up}</span>
                            </button>
                            <button 
                              onClick={() => handleVote(news.id, 'down')} 
                              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-2xl text-[8px] font-black tracking-widest transition-all border ${userVote === 'down' ? 'bg-red-600 border-red-600 text-white' : (theme === 'dark' ? 'bg-transparent border-white/10 text-zinc-500 hover:text-white' : 'bg-transparent border-zinc-200 text-zinc-400 hover:text-black')}`}
                            >
                              DISLIKE <span className={`text-[9px] px-1.5 py-0.5 rounded-md ${userVote === 'down' ? 'bg-white/20' : 'bg-zinc-800'}`}>{count.down}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : null}

            {/* Empty State - Shows when NO date is selected (ABOVE the date buttons) */}
            {!selectedArchiveDate && (
              <div className={`${theme === 'dark' ? 'bg-zinc-900/20 border-white/10' : 'bg-white border-zinc-200'} rounded-[50px] p-12 shadow-xl border w-full text-center mb-8`}>
                <p className={`text-2xl font-black uppercase tracking-tighter ${theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  SELECT A DATE BELOW
                </p>
                <p className={`text-xs mt-3 ${theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  Click on any red date button to view archived intelligence
                </p>
              </div>
            )}

            {/* Show message when date has no articles */}
            {selectedArchiveDate && archiveNewsForSelectedDate.length === 0 && (
              <div className={`${theme === 'dark' ? 'bg-zinc-900/20 border-white/10' : 'bg-white border-zinc-200'} rounded-[50px] p-12 shadow-xl border w-full text-center mb-8`}>
                <p className={`text-xl font-black uppercase tracking-tighter ${theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  NO INTELLIGENCE FOUND
                </p>
                <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  No articles available for {selectedArchiveDate}
                </p>
              </div>
            )}

            {/* Date Selection Section - At the BOTTOM with larger buttons */}
            <div className={`mt-4 pt-6 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
              <div className="text-center mb-5">
                <p className={`text-[11px] font-black uppercase tracking-[0.4em] ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  BROWSE BY DATE
                </p>
                <div className={`w-12 h-px bg-red-600 mx-auto mt-2 ${theme === 'dark' ? 'opacity-50' : ''}`}></div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {archiveDates.map((date) => {
                  // Check if this is April 19, 2026 to make it bigger
                  const isApril19 = date === "April 19, 2026";
                  return (
                    <button
                      key={date}
                      onClick={() => {
                        setSelectedArchiveDate(date);
                        setActiveCategory('All');
                        setSelectedArticle(null);
                      }}
                      className={`
                        font-black uppercase tracking-wider rounded-full 
                        transition-all duration-300 border whitespace-nowrap
                        ${isApril19 
                          ? 'px-8 py-3 text-base shadow-md' 
                          : 'px-5 py-2 text-sm'
                        }
                        ${selectedArchiveDate === date 
                          ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/30 scale-105' 
                          : theme === 'dark' 
                            ? 'bg-transparent border-red-600/40 text-red-400 hover:bg-red-600/20 hover:border-red-600 hover:scale-105' 
                            : 'bg-transparent border-red-500/50 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-105'
                        }
                      `}
                    >
                      {date}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className={`${theme === 'dark' ? 'bg-black border-white/5' : 'bg-zinc-100 border-zinc-200'} py-16 px-[5%] border-t mt-12 w-full`}>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6"><Logo /><h4 className={`text-xl lg:text-2xl font-black tracking-[-2px] uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>SIGNAL NEWS HUB.</h4></div>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">The global standard for unfiltered intelligence, providing deep-sector analysis at the frontier of human civilization.</p>
          </div>
          <div className="text-right">
            <div className="mb-8 space-y-2">
              <p className="text-red-600 font-black text-[9px] uppercase tracking-[0.4em]">FOUNDER & LEAD EDITOR: MEHEDI REDOY</p>
              <p className="text-zinc-800 font-bold text-[8px] uppercase tracking-tighter">© 2026 SIGNAL NEWS HUB • ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}