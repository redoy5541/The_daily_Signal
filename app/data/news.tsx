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
  { symbol: "BTC", price: "$74,150", change: "+4.5%", trend: "up" as const },
  { symbol: "GOLD", price: "$2,410.50", change: "+0.3%", trend: "up" as const },
  { symbol: "OIL (WTI)", price: "$108.15", change: "+6.8%", trend: "up" as const },
  { symbol: "AAPL", price: "$245.67", change: "+2.3%", trend: "up" as const },
  { symbol: "TSLA", price: "$412.89", change: "+8.1%", trend: "up" as const },
  { symbol: "NVDA", price: "$142.33", change: "-1.4%", trend: "down" as const },
];

export const allNews: NewsArticle[] = [
  // ==================== WORLD SECTION - LONG DETAILED WITH UNIQUE MATCHING IMAGES ====================

  {
    id: "world-strait-hormuz-2026",
    title: "Strait of Hormuz: U.S. Seizes Iranian Vessel Amid Blockade",
    excerpt: "Commercial shipping traffic through the world's most vital oil artery has largely stopped.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `The U.S. Navy Guided Missile Destroyer USS Spruance intercepted and seized the Iranian-flagged cargo ship 'Touska' in the Gulf of Oman today.

This escalation marks a breaking point in modern maritime security. Commercial shipping through the Strait of Hormuz — which carries nearly 20% of the world's daily oil supply — has almost completely stopped.

Oil prices have surged dramatically and global markets are showing extreme volatility. Intelligence sources indicate the vessel was not carrying ordinary goods but was part of a clandestine supply chain.

The operation involved U.S. Marines fast-roping onto the deck after a six-hour standoff with warning shots fired. This is being called a "Phase 4" economic event.

Historically, such blockades have triggered global recessions within 90 days. Shipping insurance premiums for vessels entering the Persian Gulf have risen by 400% in the last 72 hours.

Major carriers like Maersk and MSC have suspended operations in the area.

Key Facts:
• 21 million barrels of oil pass through the strait daily
• Global oil prices jumped over 8% in a single day
• Multiple navies are now mobilizing in the Arabian Sea

Intelligence Bulletins:
• The USS Spruance remains on station with the seized vessel
• Satellite imagery shows Iranian missile batteries in high readiness
• Ghost tankers are attempting to bypass the blockade using unmapped coastal routes.`,
    featured: true
  },

  {
    id: "world-pope-angola-2026",
    title: "Pope Leo XIV in Angola: A Challenge to Global Exploitation",
    excerpt: "The Pontiff calls on Angolan leaders to break corruption cycles and exploitation.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Pope Leo XIV arrived in Luanda today to an audience of over 500,000 people.

His speech was a strong call to end corruption and foreign exploitation of Africa's natural resources.

He urged Angolan leaders to ensure the country's vast mineral and oil wealth benefits its own people rather than foreign corporations.

He called for a full global audit of all extraction contracts signed between 2015 and 2025.

This visit has sparked important conversations about economic justice and sovereignty across Africa.`,
  },

  {
    id: "world-eu-hungary-agreement",
    title: "EU and Hungary Reach €10 Billion Funding Agreement",
    excerpt: "Frozen funds released after reform commitments by the incoming Magyar government.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `The European Commission has agreed to release €10.2 billion in previously frozen funds to Hungary.

This breakthrough comes after new reform commitments by the incoming government.

The deal ends a four-year political stalemate and is seen as a major shift in Hungary’s relationship with the EU.

Hungary has agreed to create an independent anti-corruption task force with direct oversight from Brussels.`,
  },

  {
    id: "world-idf-lebanon-security",
    title: "IDF Re-establishes Security Zone in Southern Lebanon",
    excerpt: "The military reveals a 'Forward Defense Line' as divisions move into border regions.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Urgent",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `The Israel Defense Forces have re-entered southern Lebanon to create a 'forward defense area'.

The stated goal is to push Hezbollah forces away from the border and allow the safe return of 80,000 displaced Israeli citizens.

Lebanese officials have strongly condemned the move as a violation of sovereignty.

This development has significantly raised tensions in the region.`,
    featured: true
  },

  {
    id: "world-ai-treaty-0419",
    title: "Global AI Treaty Signed in Geneva",
    excerpt: "Ban on lethal autonomous weapons by 2030.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `193 countries have signed the Global AI Compact in Geneva.

The treaty bans lethal autonomous weapons and requires meaningful human control over life-and-death decisions.

The agreement also establishes a global fund to help developing nations access safe AI technology.

This is being hailed as one of the most important international agreements of the 21st century.`,
    featured: true
  },

  {
    id: "world-climate-geo-0419",
    title: "First Large-Scale Geoengineering Test Approved",
    excerpt: "Marine cloud brightening begins near Australia.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "45m ago",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Australia has approved the world's first large-scale geoengineering test to protect the Great Barrier Reef.

Scientists will spray sea salt into clouds to brighten them and reflect sunlight away from the warming ocean.

The trial covers 1,200 square kilometers and is being closely monitored.

While controversial, many scientists argue it is a necessary emergency measure to prevent total coral bleaching by 2027.`,
  },

  {
    id: "world-middle-east-escalation-2026",
    title: "Middle East Escalation: Multiple Fronts Ignite Simultaneously",
    excerpt: "Tensions flare across the region as new conflicts emerge.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Urgent",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Multiple flashpoints have erupted across the Middle East today, raising fears of a wider regional conflict.

Analysts warn that the situation is more volatile than at any point in the past decade.`,
  },

  {
    id: "world-global-energy-crisis-2026",
    title: "Global Energy Crisis Deepens as Oil Supply Lines Collapse",
    excerpt: "Energy markets face unprecedented pressure after Hormuz disruptions.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `The effective closure of the Strait of Hormuz has triggered a full-scale global energy crisis.

Governments worldwide are activating emergency reserves. European countries are considering reopening coal plants as a short-term measure.`,
  },

  {
    id: "world-un-emergency-session-2026",
    title: "UN Security Council Holds Emergency Session on Hormuz Crisis",
    excerpt: "World powers debate intervention as oil prices skyrocket.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `The United Nations Security Council is meeting in emergency session to address the Hormuz crisis.

Major powers are divided on whether to authorize naval escort missions for commercial vessels.`,
  },

  {
    id: "world-africa-sovereignty-2026",
    title: "Africa Sovereignty Movement Gains Momentum After Pope's Visit",
    excerpt: "Leaders across the continent call for resource control.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Inspired by Pope Leo XIV’s speech in Angola, several African nations are pushing for greater control over their natural resources.`,
  },

  // ==================== ALL PREVIOUS NON-WORLD ARTICLES (KEPT UNCHANGED) ====================

  {
    id: "business-robotaxi-0419",
    title: "Tesla Robotaxi Fleet Hits One Million Vehicles",
    excerpt: "Autonomous ride-sharing expands globally.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/11139552/pexels-photo-11139552.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Tesla's autonomous ride-sharing network has officially surpassed one million active vehicles on the road.`,
    featured: true
  },

  {
    id: "tech-gpt5-0419",
    title: "OpenAI Launches GPT-5 with Real-Time Video",
    excerpt: "AI understands live video feeds.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "15m ago",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `OpenAI has released GPT-5, which can watch live video feeds and respond in real time.`,
    featured: true
  },

  {
    id: "politics-eu-ai-act-0419",
    title: "EU Passes Landmark AI Regulation Act",
    excerpt: "Strict AI rules across member states.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `The European Union has passed the world's toughest AI law.`,
  },

  {
    id: "history-da-vinci-bio",
    title: "Leonardo: The Man Five Centuries Ahead",
    excerpt: "The ultimate polymath.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Leonardo da Vinci's notebooks prove that human imagination can transcend time.`,
  },

  {
    id: "history-einstein-bio",
    title: "Einstein: Space, Time, and Relativity",
    excerpt: "Time is not absolute.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Albert Einstein's work on E=mc² remains the foundation of nuclear energy.`,
  },

  {
    id: "history-marie-curie",
    title: "Marie Curie: The Radiant Mind That Changed Science Forever",
    excerpt: "Pioneer of radioactivity.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Despite facing relentless sexism, Marie Curie's discovery of radium laid the foundation for modern medicine.`,
  },

  {
    id: "history-nikola-tesla",
    title: "Nikola Tesla: Visionary Who Lit Up the Modern World",
    excerpt: "Inventor of AC electricity.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Tesla's rivalry with Edison and his futuristic ideas continue to inspire today's renewable revolution.`,
  },

  {
    id: "history-newton-2026",
    title: "Isaac Newton: Laws That Still Govern the Universe",
    excerpt: "Birth of classical mechanics.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Newton's three laws of motion and universal gravitation remain the bedrock of physics more than 300 years later.`,
  }
];