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

export const todayNews: NewsArticle[] = [
  {
    id: "world-hormuz-2026",
    title: "Naval Blockade: The Siege of Hormuz",
    excerpt: "Saturday morning reports confirm 20% of global oil flow is now halted.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "Live",
    image: "https://picsum.photos/id/1015/1200/800",
    content: `The IRGC has officially sealed the Strait of Hormuz. International naval task forces are reportedly mobilizing in the Arabian Sea. Global markets are bracing for a supply shock not seen since the 1970s.`
  },
  {
    id: "business-oil-120",
    title: "Crude Hits $120: Energy Markets Fracture",
    excerpt: "Business Intel: Supply shocks of 13M barrels per day erase 2026 glut.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "Hot",
    image: "https://picsum.photos/id/133/1200/800",
    content: `With the primary artery of global trade restricted, oil futures have skyrocketed. Corporate earnings for Q3 are now being revised downwards as fuel costs eat into margins across every sector.`
  },
  {
    id: "tech-quantum-2026",
    title: "Quantum Era: Stable Qubits Realized",
    excerpt: "Silicon Valley achieves 10k stable qubits, breaking traditional encryption.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "15m ago",
    image: "https://picsum.photos/id/201/1200/800",
    content: `Cybersecurity protocols worldwide are being rewritten today as researchers prove quantum machines can now solve problems that would take a supercomputer 10,000 years.`
  },
  {
    id: "world-gaza-humanitarian",
    title: "Gaza Aid Routes Under Strategic Review",
    excerpt: "UNICEF reports critical water infrastructure damage in Northern Gaza.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "45m ago",
    image: "https://picsum.photos/id/29/1200/800",
    content: `Humanitarian corridors remain narrow and dangerous. International calls for a 'Tech-Driven' aid drop system are gaining traction in Geneva.`
  },
  {
    id: "history-da-vinci-bio",
    title: "Leonardo: The Man Five Centuries Ahead",
    excerpt: "Bio: How an illegitimate child became the ultimate polymath.",
    category: "History",
    author: "Mehedi Redoy",
    date: "Archive",
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
    date: "Archive",
    time: "Deep Dive",
    image: "https://picsum.photos/id/1018/1200/800",
    content: `Albert Einstein's work on E=mc² remains the foundation of nuclear energy and our understanding of the cosmos.`
  },
  {
    id: "politics-election-2026",
    title: "2028 Presidential Primaries Accelerate Amid Global Tensions",
    excerpt: "Diplomatic realignments ripple across continents ahead of historic vote.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "Live",
    image: "https://picsum.photos/id/1016/1200/800",
    content: `Candidates are already staking bold positions on AI governance, climate treaties, and space militarization. Analysts call this the most consequential election cycle of the 21st century.`
  },
  {
    id: "business-fusion-energy",
    title: "Fusion Breakthrough: First Net-Positive Reactor Goes Commercial",
    excerpt: "Business: Clean energy revolution accelerates with unlimited power promise.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "Hot",
    image: "https://picsum.photos/id/133/1200/800",
    content: `A consortium of tech giants and governments announces the first profitable fusion plant, potentially ending the fossil fuel era overnight.`
  },
  {
    id: "tech-neuralink-2026",
    title: "Neuralink 2.0: Millions of Thoughts Transmitted Wirelessly",
    excerpt: "Tech: Brain-computer interface reaches mass adoption phase.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "15m ago",
    image: "https://picsum.photos/id/201/1200/800",
    content: `Elon Musk's Neuralink unveils version 2.0 with seamless integration, enabling paralyzed patients to walk and control devices with pure thought.`
  },
  {
    id: "world-climate-accord",
    title: "Historic Climate Accord Signed in Geneva",
    excerpt: "World: Nations commit to net-zero by 2035 with AI-monitored enforcement.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "45m ago",
    image: "https://picsum.photos/id/29/1200/800",
    content: `The new treaty includes carbon pricing, geoengineering oversight, and binding enforcement mechanisms.`
  },
  {
    id: "sports-formula1-2026",
    title: "Formula 1 2026 Season: Electric Revolution Begins",
    excerpt: "Sports: Sustainable powertrains deliver record speeds and drama.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "2h ago",
    image: "https://picsum.photos/id/1005/1200/800",
    content: `The new regulations bring hybrid-electric dominance with surprise winners shaking the championship standings.`
  },
  {
    id: "entertainment-dune3",
    title: "Dune: Messiah Breaks All-Time Box Office Records",
    excerpt: "Entertainment: Denis Villeneuve's epic concludes with $2B opening weekend.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "Hot",
    image: "https://picsum.photos/id/1016/1200/800",
    content: `The third installment redefines sci-fi cinema with groundbreaking VFX.`
  },
  {
    id: "history-marie-curie",
    title: "Marie Curie: The Radiant Mind That Changed Science Forever",
    excerpt: "Bio: How one woman won two Nobel Prizes and pioneered radioactivity.",
    category: "History",
    author: "Mehedi Redoy",
    date: "Archive",
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
    date: "Archive",
    time: "Deep Dive",
    image: "https://picsum.photos/id/1018/1200/800",
    content: `Tesla's rivalry with Edison and his futuristic ideas continue to inspire today's renewable revolution.`
  },
  {
    id: "tech-xai-grok",
    title: "xAI Releases Grok-4: The Most Advanced AI Yet",
    excerpt: "Tech: Grok-4 achieves near-human reasoning across complex domains.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "Live",
    image: "https://picsum.photos/id/870/1200/800",
    content: `Built by xAI to understand the universe, Grok-4 sets new benchmarks in scientific discovery.`
  },
  {
    id: "business-ai-investment",
    title: "AI Sector Surpasses $1 Trillion in Market Value",
    excerpt: "Business Intel: Venture capital floods into ethical AI development.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "30m ago",
    image: "https://picsum.photos/id/1009/1200/800",
    content: `Major funds report record returns as AI integrates into every industry.`
  },
  {
    id: "sports-nba-finals",
    title: "NBA 2026 Finals: Legacy on the Line",
    excerpt: "Sports: Veteran superstars clash in high-stakes championship series.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "1h ago",
    image: "https://picsum.photos/id/160/1200/800",
    content: `With new rules favoring defense, this series promises to be one of the most tactical in league history.`
  },
  {
    id: "world-mars-milestone",
    title: "First Human Settlement on Mars Achieves Self-Sufficiency",
    excerpt: "World: SpaceX-led colony produces food and oxygen independently.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 18, 2026",
    time: "Live",
    image: "https://picsum.photos/id/101/1200/800",
    content: `After years of preparation, the Red Planet outpost marks a new chapter in human expansion.`
  }
];