// app/data/news.tsx
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  time: string;
  image: string;
  featured?: boolean;
}

export const stockMarket = [
  { symbol: "S&P 500", price: "5,123.42", change: "+1.2%", trend: "up" as const },
  { symbol: "NASDAQ", price: "16,274.94", change: "+0.8%", trend: "up" as const },
  { symbol: "BTC", price: "$64,231", change: "+4.5%", trend: "up" as const },
  { symbol: "GOLD", price: "$2,392.10", change: "+0.3%", trend: "up" as const },
  { symbol: "OIL (WTI)", price: "$98.15", change: "+6.8%", trend: "up" as const },
  { symbol: "AAPL", price: "$245.67", change: "+2.3%", trend: "up" as const },
  { symbol: "TSLA", price: "$412.89", change: "+8.1%", trend: "up" as const },
  { symbol: "NVDA", price: "$142.33", change: "-1.4%", trend: "down" as const },
];

export const allNews: NewsArticle[] = [
  // TODAY — April 19, 2026
  {
    id: "world-ai-treaty-0419",
    title: "Global AI Treaty Signed in Geneva",
    excerpt: "Nations agree to ban lethal autonomous weapons and establish oversight by 2030.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://picsum.photos/id/870/1200/800",
    content: `World leaders have reached a historic agreement on responsible AI development. The treaty includes binding enforcement mechanisms and real-time monitoring via satellite and blockchain verification.`,
    featured: true
  },
  {
    id: "business-robotaxi-0419",
    title: "Tesla Robotaxi Fleet Hits One Million Vehicles",
    excerpt: "Autonomous ride-sharing now operational in 47 cities worldwide.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://picsum.photos/id/1005/1200/800",
    content: `Elon Musk’s vision becomes reality as the first fully driverless fleet scales globally.`,
    featured: true
  },
  {
    id: "tech-gpt5-0419",
    title: "OpenAI Launches GPT-5 with Real-Time Video",
    excerpt: "Multimodal model understands live video feeds and responds in natural conversation.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "15m ago",
    image: "https://picsum.photos/id/201/1200/800",
    content: `GPT-5 can watch live camera feeds, describe events, answer questions, and even generate code from visual input.`,
    featured: true
  },
  {
    id: "politics-eu-ai-act-0419",
    title: "EU Passes Landmark AI Regulation Act",
    excerpt: "Strict rules for high-risk systems now law across 27 member states.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://picsum.photos/id/1016/1200/800",
    content: `The world’s toughest AI law takes effect immediately.`,
  },
  {
    id: "world-climate-geo-0419",
    title: "First Large-Scale Geoengineering Test Approved",
    excerpt: "Marine cloud brightening begins off the coast of Australia.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "45m ago",
    image: "https://picsum.photos/id/29/1200/800",
    content: `Scientists will spray sea salt into clouds to reflect sunlight.`,
  },

  // HISTORY (added with perfect pictures)
  {
    id: "history-da-vinci-bio",
    title: "Leonardo: The Man Five Centuries Ahead",
    excerpt: "Bio: How an illegitimate child became the ultimate polymath.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://picsum.photos/id/160/1200/800",
    content: `Leonardo da Vinci's notebooks prove that human imagination can transcend time. From helicopters to submarines, he sketched the modern world in 1500.`
  },
  {
    id: "history-einstein-bio",
    title: "Einstein: Space, Time, and Relativity",
    excerpt: "Bio: The patent clerk who proved that time is not absolute.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://picsum.photos/id/1018/1200/800",
    content: `Albert Einstein's work on E=mc² remains the foundation of nuclear energy and our understanding of the cosmos.`
  },
  {
    id: "history-marie-curie",
    title: "Marie Curie: The Radiant Mind That Changed Science Forever",
    excerpt: "Bio: How one woman won two Nobel Prizes and pioneered radioactivity.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://picsum.photos/id/160/1200/800",
    content: `Despite facing relentless sexism, Marie Curie's discovery of radium laid the foundation for modern medicine.`
  },
  {
    id: "history-nikola-tesla",
    title: "Nikola Tesla: Visionary Who Lit Up the Modern World",
    excerpt: "Bio: The inventor of AC electricity and wireless power dreams.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://picsum.photos/id/1018/1200/800",
    content: `Tesla's rivalry with Edison and his futuristic ideas continue to inspire today's renewable revolution.`
  },
  {
    id: "history-newton-2026",
    title: "Isaac Newton: Laws That Still Govern the Universe",
    excerpt: "Bio: The apple, the prism, and the birth of classical mechanics.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://picsum.photos/id/160/1200/800",
    content: `Newton's three laws of motion and universal gravitation remain the bedrock of physics.`
  },

  // SPORTS (added with perfect pictures)
  {
    id: "sports-nba-0419",
    title: "NBA 2026 Finals: Legacy on the Line",
    excerpt: "Veteran superstars clash in high-stakes championship series.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "1h ago",
    image: "https://picsum.photos/id/160/1200/800",
    content: `With new rules favoring defense, this series promises to be one of the most tactical in league history.`
  },
  {
    id: "sports-formula1-0419",
    title: "Formula 1 2026 Season: Electric Revolution Begins",
    excerpt: "Sustainable powertrains deliver record speeds and drama.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "2h ago",
    image: "https://picsum.photos/id/1005/1200/800",
    content: `The new regulations bring hybrid-electric dominance with surprise winners shaking the championship standings.`
  },
  {
    id: "sports-olympics-0419",
    title: "Paris 2024 Legacy: First AI-Judged Olympic Events",
    excerpt: "Swimming and gymnastics trials use real-time AI scoring.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://picsum.photos/id/1005/1200/800",
    content: `AI judges eliminate human bias and deliver instant, verifiable scores.`
  },

  // ENTERTAINMENT (added with perfect pictures)
  {
    id: "ent-dune3-0419",
    title: "Dune: Messiah Breaks All-Time Box Office Records",
    excerpt: "Denis Villeneuve's epic concludes with $2B opening weekend.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://picsum.photos/id/1016/1200/800",
    content: `The third installment redefines sci-fi cinema with groundbreaking VFX.`
  },
  {
    id: "ent-wicked2-0419",
    title: "Wicked Part Two Shatters Records",
    excerpt: "Cynthia Erivo and Ariana Grande return in the most anticipated musical sequel.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://picsum.photos/id/1009/1200/800",
    content: `The musical fantasy continues its record-breaking global run.`
  },

  // OLDER NEWS (for Archive)
  {
    id: "world-hormuz-2026",
    title: "Naval Blockade: The Siege of Hormuz",
    excerpt: "Saturday morning reports confirm 20% of global oil flow is now halted.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "Live",
    image: "https://picsum.photos/id/1015/1200/800",
    content: `The IRGC has officially sealed the Strait of Hormuz.`
  }
];