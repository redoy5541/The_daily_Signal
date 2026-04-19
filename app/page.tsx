// app/page.tsx
'use client';
import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import { allNews, stockMarket } from './data/news';

const categories = ['World', 'Politics', 'Business', 'Tech', 'History', 'Sports', 'Entertainment'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [votes, setVotes] = useState<Record<string, 'up' | 'down' | null>>({});
  const [counters, setCounters] = useState<Record<string, { up: number, down: number }>>({});
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [viewMode, setViewMode] = useState<'today' | 'archive'>('today');
  const [selectedArchiveDate, setSelectedArchiveDate] = useState<string | null>(null);

  const todayDateStr = useMemo(() => {
    return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }, []);

  const todaysNews = useMemo(() => {
    const matched = allNews.filter(n => n.date === todayDateStr);
    return matched.length > 0 ? matched : allNews.filter(n => n.date === "April 19, 2026");
  }, [todayDateStr]);

  const archiveDates = useMemo(() => {
    return Array.from(new Set(allNews.map(n => n.date)))
      .filter(d => d !== todayDateStr)
      .sort((a, b) => b.localeCompare(a));
  }, [todayDateStr]);

  const todaysBest = useMemo(() => {
    return todaysNews.filter(n => n.featured).slice(0, 3);
  }, [todaysNews]);

  // FIXED DARK/LIGHT MODE
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

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('signal_theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.body.style.backgroundColor = newTheme === 'dark' ? '#000000' : '#fafafa';
  };

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

  const filteredNews = useMemo(() => {
    if (activeCategory === 'All') return todaysNews;
    return todaysNews.filter(n => n.category === activeCategory);
  }, [activeCategory, todaysNews]);

  if (!isMounted) return <div className="min-h-screen bg-black" />;

  const Logo = () => (
    <div className="relative group cursor-pointer">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative w-12 h-12 bg-black rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-600 to-blue-500 opacity-90"></div>
        <span className="relative font-black text-3xl italic text-white tracking-[-3px] drop-shadow-md">S</span>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-red-600 overflow-x-hidden ${theme === 'dark' ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .glass-panel { background: ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}; backdrop-filter: blur(40px); border: 1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}; }
        
        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.15) translate(-1%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-kenburns { animation: kenburns 25s ease-in-out infinite; }
      `}</style>

      {/* TICKER */}
      <div className={`${theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-zinc-200'} py-3 overflow-hidden border-b flex sticky top-0 z-[60] w-full`}>
        <div className="animate-marquee whitespace-nowrap flex">
          {stockMarket.concat(stockMarket).map((stock, i) => (
            <div key={i} className="flex items-center gap-4 mx-12 text-xs font-black uppercase tracking-[0.15em]">
              <span className="opacity-60">{stock.symbol}</span>
              <span className="font-mono text-base">{stock.price}</span>
              <span className={stock.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}>{stock.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav className={`${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-xl sticky top-[39px] z-50 w-full`}>
        <div className="w-full px-[5%] py-8 flex items-center justify-between">
          <button onClick={() => { setViewMode('today'); setActiveCategory('All'); setSelectedArticle(null); }} className="flex items-center gap-5 group text-left">
            <Logo />
            <h1 className={`text-2xl lg:text-3xl font-black tracking-[-2px] uppercase transition-all duration-300 ${theme === 'dark' ? 'group-hover:text-zinc-400' : 'group-hover:text-red-600'}`}>
              SIGNAL NEWS HUB
            </h1>
          </button>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={toggleTheme} 
              className={`relative w-14 h-7 rounded-full cursor-pointer p-1 transition-all border-2 flex items-center ${theme === 'dark' ? 'bg-white border-white shadow-lg' : 'bg-black border-black shadow-lg'}`}
            >
              <div className={`w-5 h-5 rounded-full transition-all duration-500 shadow-lg ${theme === 'dark' ? 'translate-x-7 bg-black' : 'translate-x-0 bg-white'}`}></div>
            </button>
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black uppercase text-red-600 tracking-widest">Mehedi Redoy</p>
              <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-tighter">Founder & Lead Editor • Verified</p>
            </div>
          </div>
        </div>

        <div className="w-full px-[5%] pb-6 flex gap-3 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => { setViewMode('today'); setActiveCategory('All'); setSelectedArticle(null); }}
            className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-full transition-all ${activeCategory === 'All' && viewMode === 'today' && !selectedArticle ? (theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white') : (theme === 'dark' ? 'bg-zinc-900 text-zinc-500 hover:text-white' : 'bg-zinc-200 text-zinc-500 hover:text-black')}`}
          >
            Intelligence
          </button>
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => { setViewMode('today'); setActiveCategory(cat); setSelectedArticle(null); }}
              className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-full transition-all whitespace-nowrap ${activeCategory === cat && viewMode === 'today' && !selectedArticle ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : (theme === 'dark' ? 'bg-zinc-900 text-zinc-500 hover:text-white' : 'bg-zinc-200 text-zinc-500 hover:text-black')}`}
            >
              {cat}
            </button>
          ))}
          <button 
            onClick={() => { 
              setViewMode('archive'); 
              if (archiveDates.length > 0) setSelectedArchiveDate(archiveDates[0]);
              setSelectedArticle(null); 
            }}
            className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-full transition-all whitespace-nowrap ${viewMode === 'archive' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : (theme === 'dark' ? 'bg-zinc-900 text-zinc-500 hover:text-white' : 'bg-zinc-200 text-zinc-500 hover:text-black')}`}
          >
            Archive
          </button>
        </div>
      </nav>

      <main className="w-full px-[5%] py-12">
        {selectedArticle ? (
          <article className="w-full max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <button onClick={() => setSelectedArticle(null)} className="mb-12 group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-red-600 transition-all">
              <span className="group-hover:-translate-x-2 transition-transform">←</span> Return to Briefings
            </button>
            <div className="relative rounded-[56px] overflow-hidden shadow-2xl mb-16 aspect-video max-h-[70vh]">
              <img src={selectedArticle.image} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <span className="text-red-600 font-black uppercase text-xs tracking-[0.4em] block mb-6">{selectedArticle.category} // INTEL</span>
              <h1 className={`text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{selectedArticle.title}</h1>
              <div className={`h-px w-full mb-12 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}`}></div>
              <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} text-2xl leading-relaxed font-medium mb-8 italic`}>"{selectedArticle.excerpt}"</p>
              <p className={`${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-700'} text-lg leading-relaxed mb-12`}>{selectedArticle.content}</p>
            </div>
          </article>
        ) : viewMode === 'archive' ? (
          <section className="animate-in fade-in slide-in-from-bottom-12 duration-1000 w-full">
            <div className="flex flex-wrap items-center justify-between gap-10 mb-24">
              <div className="flex items-center gap-10">
                <h2 className={`text-6xl lg:text-9xl font-black uppercase tracking-[-6px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>ARCHIVE</h2>
              </div>
              <button onClick={() => { setViewMode('today'); setActiveCategory('All'); }} className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all border shadow-2xl ${theme === 'dark' ? 'bg-zinc-900 border-white/5 hover:bg-white hover:text-black' : 'bg-white border-zinc-200 hover:bg-black hover:text-white'}`}>← Back to Today</button>
            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar mb-16 pb-4">
              {archiveDates.map(date => (
                <button
                  key={date}
                  onClick={() => setSelectedArchiveDate(date)}
                  className={`px-8 py-3 text-sm font-black uppercase tracking-widest rounded-3xl whitespace-nowrap transition-all border ${selectedArchiveDate === date ? 'bg-red-600 text-white border-red-600' : (theme === 'dark' ? 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white' : 'bg-white border-zinc-200 text-zinc-500 hover:text-black')}`}
                >
                  {date}
                </button>
              ))}
            </div>

            <div className={`${theme === 'dark' ? 'bg-zinc-900/10 border-white/5' : 'bg-white border-zinc-200'} rounded-[80px] p-8 lg:p-20 shadow-2xl border w-full`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 lg:gap-16">
                {allNews.filter(n => n.date === selectedArchiveDate).map((news) => {
                  const userVote = votes[news.id];
                  const count = counters[news.id] || { up: 0, down: 0 };
                  return (
                    <div key={news.id} onClick={() => setSelectedArticle(news)} className="flex flex-col group cursor-pointer">
                      <div className="block mb-10 overflow-hidden rounded-[40px] aspect-[16/10] bg-zinc-800 shadow-2xl">
                        <img src={news.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]" />
                      </div>
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-4">{news.category}</span>
                      <h3 className={`text-2xl lg:text-3xl font-black leading-[0.9] mb-6 uppercase group-hover:text-red-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{news.title}</h3>
                      <div className="flex gap-4 mt-auto" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => handleVote(news.id, 'up')} className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[20px] text-[10px] font-black tracking-widest transition-all border ${userVote === 'up' ? 'bg-emerald-600 border-emerald-600 text-white' : (theme === 'dark' ? 'bg-transparent border-white/10 text-zinc-500 hover:text-white' : 'bg-transparent border-zinc-200 text-zinc-400 hover:text-black')}`}>LIKE <span className={`text-xs px-2 py-0.5 rounded-md ${userVote === 'up' ? 'bg-white/20' : 'bg-zinc-800'}`}>{count.up}</span></button>
                        <button onClick={() => handleVote(news.id, 'down')} className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[20px] text-[10px] font-black tracking-widest transition-all border ${userVote === 'down' ? 'bg-red-600 border-red-600 text-white' : (theme === 'dark' ? 'bg-transparent border-white/10 text-zinc-500 hover:text-white' : 'bg-transparent border-zinc-200 text-zinc-400 hover:text-black')}`}>DISLIKE <span className={`text-xs px-2 py-0.5 rounded-md ${userVote === 'down' ? 'bg-white/20' : 'bg-zinc-800'}`}>{count.down}</span></button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : activeCategory === 'All' ? (
          <div className="animate-in fade-in duration-1000">
            <header 
              onClick={() => setSelectedArticle(todaysNews[0])}
              className="relative group mb-40 overflow-hidden rounded-[60px] bg-zinc-900 shadow-2xl cursor-pointer w-full min-h-[600px] lg:h-[85vh]"
            >
              <img src="https://picsum.photos/id/1015/1920/1080" alt="" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
              <div className="relative h-full flex items-end p-8 lg:p-20">
                <div className="glass-panel p-8 lg:p-16 rounded-[48px] max-w-5xl shadow-2xl transition-all group-hover:translate-y-[-10px]">
                  <span className="inline-block bg-red-600 text-white text-[10px] font-black px-5 py-2 rounded-full mb-8 uppercase tracking-[0.3em]">Breaking Intelligence • {todayDateStr}</span>
                  <h2 className="text-4xl lg:text-8xl font-black tracking-[-5px] leading-[0.8] mb-10 uppercase text-white">Today's Signal</h2>
                  <div className="flex flex-wrap items-center gap-10">
                    <p className="text-lg lg:text-xl text-white/50 font-bold tracking-tight uppercase">Live • Verified • Updated automatically</p>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 group-hover:text-white transition-colors">Launch Briefing +</span>
                  </div>
                </div>
              </div>
            </header>

            {todaysBest.length > 0 && (
              <div className="mb-40 w-full">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] mb-12 text-zinc-500">Today's Best Intelligence</h2>
                <div className="grid lg:grid-cols-3 gap-10">
                  {todaysBest.map(news => (
                    <div key={news.id} onClick={() => setSelectedArticle(news)} className={`${theme === 'dark' ? 'bg-zinc-900/20 border-white/5' : 'bg-white border-zinc-200'} p-8 rounded-[40px] shadow-xl flex flex-col cursor-pointer group hover:scale-[1.02] transition-all border`}>
                      <span className="text-[9px] font-black text-red-600 uppercase mb-3 block tracking-[0.3em]">{news.category}</span>
                      <h4 className={`text-2xl font-black leading-tight uppercase transition-colors ${theme === 'dark' ? 'group-hover:text-white' : 'group-hover:text-red-600'}`}>{news.title}</h4>
                      <div className="mt-8 w-full h-48 rounded-3xl overflow-hidden shadow-2xl"><img src={news.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" /></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-40 w-full">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] mb-12 text-zinc-500">Urgent Flashpoints</h2>
              <div className="grid lg:grid-cols-12 gap-10">
                <div onClick={() => setSelectedArticle(todaysNews[1] || allNews[1])} className="lg:col-span-8 bg-zinc-900 rounded-[48px] overflow-hidden shadow-2xl relative group min-h-[400px] cursor-pointer">
                   <img src="https://picsum.photos/id/1016/1200/800" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1s]" alt=""/>
                   <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black via-transparent">
                      <span className="text-white/40 text-[9px] font-black mb-4 uppercase tracking-[0.4em]">Tech Intelligence // 02</span>
                      <h3 className="text-4xl lg:text-6xl font-black uppercase leading-[0.9] text-white group-hover:text-red-500 transition-colors">Quantum Intelligence Transition</h3>
                   </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-10">
                  {todaysNews.slice(2, 4).map(news => (
                    <div key={news.id} onClick={() => setSelectedArticle(news)} className={`${theme === 'dark' ? 'bg-zinc-900/20 border-white/5' : 'bg-white border-zinc-200'} p-8 rounded-[40px] shadow-xl flex gap-8 items-center cursor-pointer group hover:scale-[1.02] transition-all border flex-1`}>
                      <div className="flex-1">
                        <span className="text-[9px] font-black text-red-600 uppercase mb-3 block tracking-[0.3em]">{news.category}</span>
                        <h4 className={`text-xl font-black leading-tight uppercase transition-colors ${theme === 'dark' ? 'group-hover:text-white' : 'group-hover:text-red-600'}`}>{news.title}</h4>
                      </div>
                      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden shadow-2xl"><img src={news.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt=""/></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-40 w-full">
              {categories.map((category) => {
                const categoryNews = todaysNews.filter(n => n.category === category).slice(0, 4);
                if (categoryNews.length === 0) return null;
                return (
                  <section key={category} className="w-full">
                     <div className="flex items-center justify-between mb-12 px-4">
                       <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-500">{category} Sector Analytics</h2>
                       <button onClick={() => setActiveCategory(category)} className="text-[10px] font-black uppercase text-red-600 hover:text-red-500 transition-all underline underline-offset-[12px] decoration-zinc-800">Enter Detailed View</button>
                     </div>
                     <div onClick={() => setActiveCategory(category)} className={`${theme === 'dark' ? 'bg-zinc-950 border-white/5 shadow-black' : 'bg-white border-zinc-200'} rounded-[70px] p-10 lg:p-16 shadow-2xl cursor-pointer transition-all duration-700 hover:scale-[1.01] border group/object`}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {categoryNews.map((news) => (
                          <div key={news.id} className="flex flex-col group/item">
                            <div className="block mb-8 overflow-hidden rounded-[36px] aspect-square bg-zinc-800 shadow-2xl relative">
                              <img src={news.image} alt="" className="w-full h-full object-cover opacity-50 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-1000 grayscale group-hover/item:grayscale-0" />
                            </div>
                            <h3 className={`text-xl lg:text-2xl font-black leading-none mb-3 uppercase transition-colors ${theme === 'dark' ? 'text-zinc-600 group-hover/item:text-white' : 'text-zinc-400 group-hover/item:text-black'}`}>{news.title}</h3>
                            <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.2em]">Read Report +</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        ) : (
          <section className="animate-in fade-in slide-in-from-bottom-12 duration-1000 w-full">
            <div className="flex flex-wrap items-center justify-between gap-10 mb-24">
              <div className="flex items-center gap-10">
                <h2 className={`text-6xl lg:text-9xl font-black uppercase tracking-[-6px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{activeCategory}</h2>
                <div className="h-px w-48 bg-gradient-to-r from-red-600 to-transparent hidden md:block"></div>
              </div>
              <button onClick={() => { setActiveCategory('All'); }} className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all border shadow-2xl ${theme === 'dark' ? 'bg-zinc-900 border-white/5 hover:bg-white hover:text-black' : 'bg-white border-zinc-200 hover:bg-black hover:text-white'}`}>← Back to Core</button>
            </div>
            <div className={`${theme === 'dark' ? 'bg-zinc-900/10 border-white/5' : 'bg-white border-zinc-200'} rounded-[80px] p-8 lg:p-20 shadow-2xl border w-full`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 lg:gap-16">
                {filteredNews.map((news) => {
                  const userVote = votes[news.id];
                  const count = counters[news.id] || { up: 0, down: 0 };
                  return (
                    <div key={news.id} onClick={() => setSelectedArticle(news)} className="flex flex-col group cursor-pointer">
                      <div className="block mb-10 overflow-hidden rounded-[40px] aspect-[16/10] bg-zinc-800 shadow-2xl">
                        <img src={news.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]" />
                      </div>
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-4">{news.category}</span>
                      <h3 className={`text-2xl lg:text-3xl font-black leading-[0.9] mb-6 uppercase group-hover:text-red-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{news.title}</h3>
                      
                      <div className="flex gap-4 mt-auto" onClick={(e) => e.stopPropagation()}>
                        <button 
                          onClick={() => handleVote(news.id, 'up')} 
                          className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[20px] text-[10px] font-black tracking-widest transition-all border ${userVote === 'up' ? 'bg-emerald-600 border-emerald-600 text-white' : (theme === 'dark' ? 'bg-transparent border-white/10 text-zinc-500 hover:text-white' : 'bg-transparent border-zinc-200 text-zinc-400 hover:text-black')}`}
                        >
                          LIKE <span className={`text-xs px-2 py-0.5 rounded-md ${userVote === 'up' ? 'bg-white/20' : 'bg-zinc-800'}`}>{count.up}</span>
                        </button>
                        <button 
                          onClick={() => handleVote(news.id, 'down')} 
                          className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[20px] text-[10px] font-black tracking-widest transition-all border ${userVote === 'down' ? 'bg-red-600 border-red-600 text-white' : (theme === 'dark' ? 'bg-transparent border-white/10 text-zinc-500 hover:text-white' : 'bg-transparent border-zinc-200 text-zinc-400 hover:text-black')}`}
                        >
                          DISLIKE <span className={`text-xs px-2 py-0.5 rounded-md ${userVote === 'down' ? 'bg-white/20' : 'bg-zinc-800'}`}>{count.down}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className={`${theme === 'dark' ? 'bg-black border-white/5' : 'bg-zinc-100 border-zinc-200'} py-40 px-[5%] border-t mt-60 w-full`}>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-10"><Logo /><h4 className={`text-3xl lg:text-4xl font-black tracking-[-3px] uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>SIGNAL NEWS HUB.</h4></div>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium">The global standard for unfiltered intelligence, providing deep-sector analysis at the frontier of human civilization.</p>
          </div>
          <div className="text-right">
            <div className="mb-20 space-y-4">
              <p className="text-red-600 font-black text-xs uppercase tracking-[0.4em]">FOUNDER & LEAD EDITOR: MEHEDI REDOY</p>
              <p className="text-zinc-800 font-bold text-[10px] uppercase tracking-tighter mt-10">© 2026 SIGNAL NEWS HUB • ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}