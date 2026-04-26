// app/page.tsx
'use client';
import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { allNews, stockMarket } from './data/news';
import Link from 'next/link';

const categories = ['World', 'Politics', 'Business', 'Tech', 'History', 'Sports', 'Entertainment'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [votes, setVotes] = useState<Record<string, 'up' | 'down' | null>>({});
  const [counters, setCounters] = useState<Record<string, { up: number, down: number }>>({});
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Dynamic date - shows actual today's date
  const todayDateStr = useMemo(() => {
    return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }, []);

  const todaysNews = useMemo(() => {
    const matched = allNews.filter(n => n.date === todayDateStr);
    return matched.length > 0 ? matched : allNews.filter(n => n.date === "April 22, 2026");
  }, [todayDateStr]);

  const todaysBest = useMemo(() => {
    return todaysNews.filter(n => n.featured).slice(0, 3);
  }, [todaysNews]);

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
      <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-700"></div>
      <div className="relative w-10 h-10 bg-gradient-to-br from-zinc-900 to-black rounded-xl flex items-center justify-center border border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/50 via-purple-600/50 to-blue-500/50 opacity-80"></div>
        <span className="relative font-black text-2xl italic text-white tracking-[-3px] drop-shadow-md">S</span>
      </div>
    </div>
  );

  const getCategoryImage = (category: string) => {
    const images: Record<string, string> = {
      'World': 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=600',
      'Politics': 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
      'Business': 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      'Tech': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      'History': 'https://images.pexels.com/photos/5665104/pexels-photo-5665104.jpeg?auto=compress&cs=tinysrgb&w=600',
      'Sports': 'https://images.pexels.com/photos/2403049/pexels-photo-2403049.jpeg?auto=compress&cs=tinysrgb&w=600',
      'Entertainment': 'https://images.pexels.com/photos/1191860/pexels-photo-1191860.jpeg?auto=compress&cs=tinysrgb&w=600',
    };
    return images[category] || images['World'];
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 font-sans selection:bg-red-600/30 overflow-x-hidden ${theme === 'dark' ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <style jsx global>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes glow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes slowZoom { 0% { transform: scale(1); } 100% { transform: scale(1.08); } }
        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.15) translate(-1%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slow-zoom { animation: slowZoom 25s ease-in-out infinite alternate; }
        .animate-kenburns { animation: kenburns 25s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        
        .glass-card {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.7)'};
          backdrop-filter: blur(20px);
          border: 1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .glass-card:hover {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)'};
          transform: translateY(-4px);
          border-color: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'};
        }
        
        .category-card {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .category-card:hover {
          transform: translateY(-8px);
        }
        
        .category-card:hover .category-image {
          transform: scale(1.1);
        }
        
        .category-image {
          transition: transform 0.6s ease-out;
        }
        
        .liquid-glass-hero {
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(0,0,0,0.6), rgba(0,0,0,0.3));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #ff0000, #ff6600, #ffcc00, #ff6600, #ff0000);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 3s linear infinite;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Animated Background - Full Screen */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* NAV - Full Width */}
      <nav className={`backdrop-blur-xl sticky top-0 z-50 w-full transition-all duration-300 ${theme === 'dark' ? 'bg-black/50 border-white/5' : 'bg-white/50 border-zinc-200/50'} border-b`}>
        <div className="w-full px-[5%] py-4 flex items-center justify-between flex-wrap gap-4">
          <button onClick={() => { setActiveCategory('All'); setSelectedArticle(null); }} className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
            <Logo />
            <h1 className={`text-xl lg:text-2xl font-black tracking-[-2px] uppercase transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'} group-hover:tracking-[-1px]`}>
              SIGNAL NEWS HUB
            </h1>
          </button>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleTheme} 
              className={`relative w-12 h-6 rounded-full cursor-pointer p-0.5 transition-all duration-500 flex items-center shadow-lg ${theme === 'dark' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-gray-700 to-gray-900'}`}
            >
              <div className={`w-5 h-5 rounded-full transition-all duration-500 shadow-md flex items-center justify-center ${theme === 'dark' ? 'translate-x-6 bg-white' : 'translate-x-0 bg-white'}`}>
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </button>
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase text-red-500 tracking-widest shimmer-text">Mehedi Redoy</p>
              <p className="text-[8px] font-semibold text-zinc-500 uppercase tracking-tighter">Founder & Lead Editor</p>
            </div>
          </div>
        </div>

        <div className="w-full px-[5%] pb-4 flex gap-2 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => { setActiveCategory('All'); setSelectedArticle(null); }}
            className={`px-5 py-2 text-[9px] font-black uppercase tracking-widest rounded-full transition-all duration-300 whitespace-nowrap min-w-[90px] ${activeCategory === 'All' && !selectedArticle ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105' : (theme === 'dark' ? 'glass-card text-zinc-400 hover:text-white hover:scale-105' : 'glass-card text-zinc-600 hover:text-black hover:scale-105')}`}
          >
            Intelligence
          </button>
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => { setActiveCategory(cat); setSelectedArticle(null); }}
              className={`px-5 py-2 text-[9px] font-black uppercase tracking-widest rounded-full transition-all duration-300 whitespace-nowrap min-w-[90px] ${activeCategory === cat && !selectedArticle ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105' : (theme === 'dark' ? 'glass-card text-zinc-400 hover:text-white hover:scale-105' : 'glass-card text-zinc-600 hover:text-black hover:scale-105')}`}
            >
              {cat}
            </button>
          ))}
          <Link 
            href="/about"
            className={`px-5 py-2 text-[9px] font-black uppercase tracking-widest rounded-full transition-all duration-300 whitespace-nowrap min-w-[90px] ${theme === 'dark' ? 'glass-card text-zinc-400 hover:text-white hover:scale-105' : 'glass-card text-zinc-600 hover:text-black hover:scale-105'}`}
          >
            About
          </Link>
        </div>
      </nav>

      <main className="w-full min-h-screen">
        {selectedArticle ? (
          <article className="w-full max-w-[1400px] mx-auto px-[5%] py-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <button onClick={() => setSelectedArticle(null)} className="mb-8 group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-red-600 transition-all duration-300">
              <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> Return to Briefings
            </button>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 aspect-video max-h-[70vh] group">
              <img src={selectedArticle.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <span className="text-red-500 font-black uppercase text-[10px] tracking-[0.4em] block mb-4">{selectedArticle.category} // INTEL</span>
              <h1 className={`text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{selectedArticle.title}</h1>
              <div className={`h-px w-full mb-8 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}`}></div>
              <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} text-xl leading-relaxed font-medium mb-6 italic border-l-4 border-red-500 pl-6`}>"{selectedArticle.excerpt}"</p>
              <p className={`${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-700'} text-base leading-relaxed mb-8`}>{selectedArticle.content}</p>
              <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                <button onClick={() => handleVote(selectedArticle.id, 'up')} className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold transition ${votes[selectedArticle.id] === 'up' ? 'bg-emerald-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white'}`}>👍 Like ({counters[selectedArticle.id]?.up || 0})</button>
                <button onClick={() => handleVote(selectedArticle.id, 'down')} className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold transition ${votes[selectedArticle.id] === 'down' ? 'bg-red-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 hover:bg-red-600 hover:text-white'}`}>👎 Dislike ({counters[selectedArticle.id]?.down || 0})</button>
              </div>
            </div>
          </article>
        ) : activeCategory === 'All' ? (
          <div className="w-full">
            {/* Hero Section - Original Style with New Image */}
            <div 
              ref={heroRef}
              className="relative group w-full min-h-screen lg:min-h-[90vh] flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => setSelectedArticle(todaysNews[0])}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty('--x', `${x}%`);
                e.currentTarget.style.setProperty('--y', `${y}%`);
              }}
              style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
            >
              {/* NEW Hero Background Image - Different from before */}
              <div className="absolute inset-0">
                <img src="https://wallpaperaccess.com/full/449814.jpg" className="w-full h-full object-cover animate-kenburns" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              {/* Hero Content - Original Style */}
              <div className="relative z-10 w-full px-[5%] py-20 flex items-center justify-center">
                <div className="liquid-glass-hero rounded-3xl p-10 lg:p-20 max-w-5xl text-center transition-all duration-500 group-hover:scale-105">
                  <span className="inline-block bg-red-600/80 backdrop-blur-sm text-white text-xs lg:text-sm font-black px-6 py-2 rounded-full mb-8 uppercase tracking-[0.3em] animate-pulse">
                    LIVE • BREAKING INTELLIGENCE
                  </span>
                  <h2 className="text-6xl lg:text-9xl xl:text-[8rem] font-black tracking-[-4px] leading-[0.85] mb-8 uppercase text-white drop-shadow-2xl">
                    TODAY'S <span className="shimmer-text">SIGNAL</span>
                  </h2>
                  <p className="text-white/70 text-base lg:text-lg font-medium max-w-2xl mx-auto mb-10">
                    Verified reports from the frontlines of global change. Intelligence you can trust.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-red-400 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                    Launch Briefing <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Today's Best - Full Width */}
            {todaysBest.length > 0 && (
              <div className="w-full px-[5%] py-20">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-[11px] font-black uppercase tracking-[0.5em] mb-8 text-zinc-500 text-center">Today's Best Intelligence</h2>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {todaysBest.map((news, idx) => {
                      const userVote = votes[news.id];
                      const count = counters[news.id] || { up: 0, down: 0 };
                      return (
                        <div key={news.id} onClick={() => setSelectedArticle(news)} className="glass-card rounded-2xl p-6 cursor-pointer group animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                          <span className="text-[8px] font-black text-red-500 uppercase mb-3 block tracking-[0.3em]">{news.category}</span>
                          <h4 className={`text-xl font-black leading-tight uppercase transition-colors duration-300 mb-4 ${theme === 'dark' ? 'text-white group-hover:text-red-500' : 'text-black group-hover:text-red-600'}`}>{news.title}</h4>
                          <div className="w-full h-52 rounded-xl overflow-hidden">
                            <img src={news.image} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" alt="" />
                          </div>
                          <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => handleVote(news.id, 'up')} className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-[8px] font-black transition ${userVote === 'up' ? 'bg-emerald-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white'}`}>👍 {count.up}</button>
                            <button onClick={() => handleVote(news.id, 'down')} className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-[8px] font-black transition ${userVote === 'down' ? 'bg-red-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 hover:bg-red-600 hover:text-white'}`}>👎 {count.down}</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Explore by Sector - Full Width */}
            <div className="w-full px-[5%] py-20 bg-black/20">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-red-600 text-sm font-bold uppercase tracking-wider">Categories</span>
                  <h2 className="text-4xl md:text-5xl font-black mt-3">Explore by Sector</h2>
                  <p className="text-zinc-500 mt-3">Deep dive into specific areas of global intelligence</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(showAllCategories ? categories : categories.slice(0, 4)).map((category) => {
                    const categoryNews = todaysNews.filter(n => n.category === category);
                    const articleCount = categoryNews.length;
                    const categoryImage = getCategoryImage(category);
                    
                    return (
                      <div 
                        key={category} 
                        onClick={() => { setActiveCategory(category); setShowAllCategories(false); }}
                        className="category-card group cursor-pointer rounded-2xl overflow-hidden glass-card"
                      >
                        <div className="relative h-52 overflow-hidden">
                          <img src={categoryImage} className="category-image w-full h-full object-cover" alt={category} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">{articleCount} stories</span>
                            <h3 className="text-2xl font-bold text-white mt-1">{category}</h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {categoryNews.slice(0, 2).map((news) => (
                              <div 
                                key={news.id} 
                                onClick={(e) => { e.stopPropagation(); setSelectedArticle(news); }}
                                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-red-600 transition line-clamp-1 cursor-pointer"
                              >
                                • {news.title.substring(0, 35)}...
                              </div>
                            ))}
                          </div>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setActiveCategory(category); }}
                            className="mt-4 text-red-600 text-sm font-bold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                          >
                            View all {category} articles →
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {!showAllCategories && categories.length > 4 && (
                  <div className="text-center mt-10">
                    <button 
                      onClick={() => setShowAllCategories(true)}
                      className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-full text-sm font-bold hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      View All Categories
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Category Detail View */}
            {activeCategory !== 'All' && (
              <div className="w-full px-[5%] py-20">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
                    <div>
                      <span className="text-red-600 text-sm font-bold uppercase tracking-wider">{activeCategory}</span>
                      <h2 className="text-4xl md:text-5xl font-black mt-2">All {activeCategory} News</h2>
                    </div>
                    <button 
                      onClick={() => setActiveCategory('All')}
                      className="px-6 py-2 border border-red-600 text-red-600 rounded-full text-sm font-bold hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      ← Back to All
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.map((news) => {
                      const userVote = votes[news.id];
                      const count = counters[news.id] || { up: 0, down: 0 };
                      return (
                        <div 
                          key={news.id} 
                          onClick={() => setSelectedArticle(news)}
                          className="group cursor-pointer rounded-2xl overflow-hidden glass-card hover:-translate-y-2 transition-all duration-300"
                        >
                          <div className="h-52 overflow-hidden">
                            <img src={news.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="" />
                          </div>
                          <div className="p-5">
                            <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-red-600 transition">{news.title}</h3>
                            <p className="text-zinc-500 text-sm line-clamp-2 mb-3">{news.excerpt}</p>
                            <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                              <button 
                                onClick={() => handleVote(news.id, 'up')} 
                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition ${userVote === 'up' ? 'bg-emerald-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 hover:bg-emerald-600 hover:text-white'}`}
                              >
                                ↑ {count.up}
                              </button>
                              <button 
                                onClick={() => handleVote(news.id, 'down')} 
                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition ${userVote === 'down' ? 'bg-red-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 hover:bg-red-600 hover:text-white'}`}
                              >
                                ↓ {count.down}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full min-h-[80vh] px-[5%] py-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
                <div>
                  <h2 className={`text-6xl lg:text-8xl font-black uppercase tracking-[-4px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{activeCategory}</h2>
                  <div className="h-px w-32 bg-gradient-to-r from-red-500 to-transparent mt-2"></div>
                </div>
                <button onClick={() => { setActiveCategory('All'); }} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 border shadow-md hover:scale-105 ${theme === 'dark' ? 'glass-card border-white/10 hover:bg-white hover:text-black' : 'glass-card border-zinc-200 hover:bg-black hover:text-white'}`}>← Back</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((news) => {
                  const userVote = votes[news.id];
                  const count = counters[news.id] || { up: 0, down: 0 };
                  return (
                    <div key={news.id} onClick={() => setSelectedArticle(news)} className="glass-card rounded-xl overflow-hidden cursor-pointer group hover:translate-y-[-2px] transition-all duration-300">
                      <div className="w-full h-48 overflow-hidden">
                        <img src={news.image} alt="" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-4">
                        <span className="text-[8px] font-black text-red-500 uppercase tracking-[0.3em] mb-2 block">{news.category}</span>
                        <h3 className={`text-sm font-black leading-tight mb-3 uppercase line-clamp-2 ${theme === 'dark' ? 'text-white group-hover:text-red-500' : 'text-black group-hover:text-red-600'}`}>{news.title}</h3>
                        <div className="flex gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => handleVote(news.id, 'up')} 
                            className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[7px] font-black tracking-widest transition-all duration-300 border ${userVote === 'up' ? 'bg-emerald-600 border-emerald-600 text-white' : (theme === 'dark' ? 'bg-transparent border-white/10 text-zinc-500 hover:text-white' : 'bg-transparent border-zinc-200 text-zinc-400 hover:text-black')}`}
                          >
                            ↑ {count.up}
                          </button>
                          <button 
                            onClick={() => handleVote(news.id, 'down')} 
                            className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[7px] font-black tracking-widest transition-all duration-300 border ${userVote === 'down' ? 'bg-red-600 border-red-600 text-white' : (theme === 'dark' ? 'bg-transparent border-white/10 text-zinc-500 hover:text-white' : 'bg-transparent border-zinc-200 text-zinc-400 hover:text-black')}`}
                          >
                            ↓ {count.down}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer - Full Width */}
      <footer className={`${theme === 'dark' ? 'bg-black/80 border-white/5' : 'bg-white/80 border-zinc-200'} py-16 px-[5%] border-t backdrop-blur-xl w-full`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Logo />
                <h4 className={`text-xl font-black tracking-[-2px] uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>SIGNAL NEWS HUB.</h4>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">The global standard for unfiltered intelligence, providing deep-sector analysis at the frontier of human civilization.</p>
              <div className="flex gap-3 pt-2">
                <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-[10px] font-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer">X</div>
                <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-[10px] font-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer">in</div>
                <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-[10px] font-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer">fb</div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">About</h5>
              <p className="text-sm text-zinc-500 leading-relaxed">Founded by Mehedi Redoy, Signal News Hub delivers verified, independent journalism.</p>
              <p className="text-sm text-zinc-500 leading-relaxed"><span className="text-red-500 font-bold">Truth. Accuracy. Integrity.</span> Every story verified.</p>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => { setActiveCategory('All'); }} className="text-zinc-500 hover:text-red-600 transition-colors">Today's Intelligence</button></li>
                <li><Link href="/about" className="text-zinc-500 hover:text-red-600 transition-colors">About</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><button className="text-zinc-500 hover:text-red-600 transition-colors">Privacy Policy</button></li>
                <li><button className="text-zinc-500 hover:text-red-600 transition-colors">Terms of Service</button></li>
                <li><button className="text-zinc-500 hover:text-red-600 transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800/50 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-[9px] font-black uppercase tracking-tighter">© 2026 SIGNAL NEWS HUB • ALL RIGHTS RESERVED</p>
            <p className="text-zinc-600 text-[9px] font-black uppercase tracking-tighter">FOUNDER & LEAD EDITOR: MEHEDI REDOY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}