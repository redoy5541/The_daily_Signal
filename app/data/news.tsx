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
  // ==================== WORLD SECTION ====================
  {
    id: "world-strait-hormuz-2026",
    title: "Strait of Hormuz: U.S. Seizes Iranian Vessel Amid Blockade",
    excerpt: "Commercial shipping traffic through the world's most vital oil artery has largely stopped.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    image: "https://images.pexels.com/photos/257003/pexels-photo-257003.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Pope Leo XIV arrived in Luanda today to an audience of over 500,000 people.

His speech was a strong call to end corruption and foreign exploitation of Africa's natural resources.

He urged Angolan leaders to ensure the country's vast mineral and oil wealth benefits its own people rather than foreign corporations.

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

This breakthrough comes after new reform commitments and ends a four-year political stalemate.`,
  },

  {
    id: "world-idf-lebanon-security",
    title: "IDF Re-establishes Security Zone in Southern Lebanon",
    excerpt: "The military reveals a 'Forward Defense Line' as divisions move into border regions.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Urgent",
    image: "https://images.pexels.com/photos/6076197/pexels-photo-6076197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `The Israel Defense Forces have re-entered southern Lebanon to create a 'forward defense area'.

The goal is to push Hezbollah forces away from the border and allow the safe return of displaced citizens.`,
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
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `193 countries have signed the Global AI Compact in Geneva.

The treaty bans lethal autonomous weapons and requires meaningful human control over life-and-death decisions.`,
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
    image: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Australia has approved the world's first large-scale geoengineering test to protect the Great Barrier Reef.

Scientists will spray sea salt into clouds to reflect sunlight away from the warming ocean.`,
  },

  {
    id: "world-middle-east-escalation-2026",
    title: "Middle East Escalation: Multiple Fronts Ignite Simultaneously",
    excerpt: "Tensions flare across the region as new conflicts emerge.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Urgent",
    image: "https://images.pexels.com/photos/32632477/pexels-photo-32632477.jpeg",
    content: `Multiple flashpoints have erupted across the Middle East today, raising fears of a wider regional conflict.`,
  },

  {
    id: "world-global-energy-crisis-2026",
    title: "Global Energy Crisis Deepens as Oil Supply Lines Collapse",
    excerpt: "Energy markets face unprecedented pressure after Hormuz disruptions.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `The effective closure of the Strait of Hormuz has triggered a full-scale global energy crisis.`,
  },

  // ==================== POLITICS SECTION ====================

  {
    id: "politics-eu-ai-act-0419",
    title: "EU Passes Landmark AI Regulation Act",
    excerpt: "Strict AI rules across member states.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `The European Union has passed the world's toughest AI law to date.

The new regulation imposes strict rules on high-risk AI systems across all 27 member states. Companies face fines of up to 7% of their global revenue for serious violations.

The law covers facial recognition, biometric surveillance, and AI systems used in hiring, lending, and law enforcement. It also requires transparency in AI decision-making processes.

This landmark legislation is expected to set a global standard for AI governance and will come into force in stages over the next 24 months.`,
  },

  {
    id: "politics-china-taiwan-tensions-2026",
    title: "China-Taiwan Tensions Escalate as Military Drills Intensify",
    excerpt: "Beijing conducts largest-ever military exercises around Taiwan.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Urgent",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `China has launched its largest military drills yet around Taiwan, raising fears of further escalation in the Taiwan Strait.

The exercises involve naval vessels, fighter jets, and missile units conducting live-fire training in multiple zones surrounding the island.

Taiwan has responded by placing its forces on high alert and calling for international support.`,
  },

  {
    id: "politics-brazil-presidential-2026",
    title: "Brazil Presidential Race Heats Up with Environmental Focus",
    excerpt: "Candidates clash over Amazon protection and economic growth.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://static01.nyt.com/images/2022/10/31/climate/31cli-brazilclimate-1/31cli-brazilclimate-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    content: `Brazil's presidential race is intensifying with sharp debates over Amazon rainforest protection versus economic development.

Leading candidates are presenting contrasting visions for the country's future.`,
  },

  {
    id: "politics-russia-ukraine-update-2026",
    title: "Russia-Ukraine Conflict: New Peace Talks Proposed",
    excerpt: "International mediators push for renewed negotiations.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/947931/pexels-photo-947931.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `International mediators have proposed a new round of peace talks to address the ongoing Russia-Ukraine conflict.

Both sides have expressed cautious interest, though significant differences remain on key issues including territorial control and security guarantees.`,
  },

  {
    id: "politics-africa-union-summit-2026",
    title: "Africa Union Summit: New Trade Agreement Signed",
    excerpt: "Continental leaders commit to deeper economic integration.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/3184316/pexels-photo-3184316.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `African Union leaders have signed a landmark trade agreement aimed at boosting intra-African commerce and reducing dependence on external markets.

The agreement establishes new frameworks for cross-border trade, investment protection, and dispute resolution mechanisms.`,
  },
  
  // ==================== BUSINESS SECTION ====================

  {
    id: "business-tesla-robotaxi-2026",
    title: "Tesla Robotaxi Fleet Hits One Million Vehicles",
    excerpt: "Autonomous ride-sharing expands globally.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/11139552/pexels-photo-11139552.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Tesla's autonomous ride-sharing network has officially surpassed one million active vehicles on the road.

Early data shows significantly lower costs and zero accidents in the first 10 million miles. The fleet is now operational in 47 cities worldwide, disrupting traditional taxi and ride-hailing industries.

This milestone brings Elon Musk’s vision of fully driverless transportation closer to reality and is expected to reshape urban mobility globally.`,
    featured: true
  },

  {
    id: "business-nvidia-ai-boom-2026",
    title: "Nvidia Surpasses $4 Trillion Market Cap as AI Boom Continues",
    excerpt: "Chipmaker becomes the world's most valuable company.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Nvidia has become the first company to surpass $4 trillion in market capitalization, driven by explosive demand for its AI chips.

The company's data center revenue has grown over 400% year-over-year as every major tech company races to build AI infrastructure.

Analysts predict the AI chip market will reach $1 trillion by 2030, with Nvidia maintaining a dominant position.`,
  },

  {
    id: "business-apple-vision-pro-2026",
    title: "Apple Vision Pro 2 Launches with Major Upgrades",
    excerpt: "Mixed reality headset sees strong enterprise adoption.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Apple has launched the second generation of its Vision Pro mixed reality headset with significant improvements in weight, battery life, and spatial computing capabilities.

Enterprise adoption has been stronger than expected, with major companies using it for training, design, and remote collaboration.`,
  },
  {
    id: "business-crypto-bitcoin-etf-2026",
    title: "Bitcoin ETF Inflows Reach Record $50 Billion",
    excerpt: "Institutional adoption of cryptocurrency accelerates.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Bitcoin ETFs have seen record inflows of over $50 billion this year as institutional investors continue to increase their exposure to cryptocurrency.

Major financial institutions including BlackRock, Fidelity, and Goldman Sachs have reported strong demand from pension funds and high-net-worth clients.

The surge comes after the SEC approved several spot Bitcoin ETFs last year, making it easier for traditional investors to gain exposure without directly holding the cryptocurrency.`,
  },

  // ==================== TECH SECTION ====================

  {
    id: "tech-gpt5-0419",
    title: "OpenAI Launches GPT-5 with Real-Time Video",
    excerpt: "AI understands live video feeds.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "15m ago",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `OpenAI has released GPT-5, which can watch live video feeds, describe events in real time, and even generate code from visual input.

The new model represents a major leap in multimodal AI capabilities and is already being integrated into enterprise tools.

Developers are praising the improved reasoning and context understanding, while critics raise concerns about potential misuse and the need for stronger safety measures.`,
  },

  {
    id: "tech-nvidia-ai-chip-2026",
    title: "Nvidia Unveils Next-Gen Blackwell AI Chip",
    excerpt: "New processor promises 30x performance boost for AI training.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Nvidia has officially unveiled the next-generation Blackwell AI chip, promising up to 30 times faster performance for AI training workloads.

The new architecture is designed to handle the massive computational demands of next-generation large language models and multimodal AI systems.

Major cloud providers have already placed large orders, signaling strong demand. The announcement sent Nvidia stock soaring in after-hours trading.`,
  },

  {
    id: "tech-apple-vision-pro-2026",
    title: "Apple Vision Pro 2 Launches with Major Upgrades",
    excerpt: "Mixed reality headset sees strong enterprise adoption.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Apple has launched the second generation of its Vision Pro mixed reality headset with significant improvements in weight, battery life, and spatial computing capabilities.

Enterprise adoption has been stronger than expected, with major companies using it for training, design, and remote collaboration.

The device is seen as a potential game-changer for the future of work and entertainment.`,
  },

  {
    id: "tech-quantum-computing-breakthrough-2026",
    title: "Google Achieves Major Quantum Computing Breakthrough",
    excerpt: "New chip solves complex problems in seconds that would take classical computers thousands of years.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Google Quantum AI has announced a major breakthrough with its latest quantum processor, demonstrating the ability to solve complex optimization problems in seconds that would take even the most powerful classical supercomputers thousands of years.

The achievement marks a significant milestone toward practical quantum computing applications in drug discovery, materials science, and financial modeling.

Industry experts say this could accelerate the timeline for useful quantum computers by several years.`,
  },

  {
    id: "tech-spacex-starship-2026",
    title: "SpaceX Starship Successfully Completes Orbital Test Flight",
    excerpt: "Reusable rocket system takes major step toward Mars missions.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260",
    content: `SpaceX's Starship has successfully completed its first full orbital test flight and safe re-entry.

The achievement brings Elon Musk's vision of affordable space travel and eventual Mars colonization closer to reality.

The fully reusable system is expected to dramatically reduce the cost of sending payloads and humans into space.`,
  },

  {
    id: "tech-meta-metaverse-update-2026",
    title: "Meta Announces Major Metaverse Hardware and Software Updates",
    excerpt: "New VR headsets and AI features aim to revitalize the platform.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Meta has unveiled significant updates to its metaverse platform, including new lighter VR headsets and advanced AI companions.

The company is betting heavily on social VR as the next major computing platform after mobile.

Early user feedback has been positive, particularly regarding the improved social features and reduced motion sickness.`,
  },

  {
    id: "tech-cybersecurity-breach-2026",
    title: "Massive Cybersecurity Breach Affects Millions of Users",
    excerpt: "Major tech companies scramble to contain data leak.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Urgent",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `A massive cybersecurity breach has exposed sensitive data of millions of users across multiple platforms.

Security experts are warning of increased risk of identity theft and targeted attacks in the coming months.

Companies affected have begun notifying users and offering free credit monitoring services.`,
  },

  // ==================== SPORTS SECTION ====================

{
  id: "sports-nba-0419",
  title: "NBA 2026 Finals: Legacy on the Line",
  excerpt: "Veteran superstars clash in high-stakes championship series.",
  category: "Sports",
  author: "Mehedi Redoy",
  date: "April 19, 2026",
  time: "1h ago",
  image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260",
  content: `The NBA Finals are underway with legendary veterans facing off against rising stars.

Game 1 saw a record-breaking performance that has fans and analysts questioning if this could be the greatest finals series in history.

The intensity on the court has been matched by passionate crowds filling every arena to capacity.`,
},

{
  id: "sports-formula1-2026",
  title: "Formula 1 2026 Season: Electric Revolution Begins",
  excerpt: "Sustainable powertrains deliver record speeds and drama.",
  category: "Sports",
  author: "Mehedi Redoy",
  date: "April 19, 2026",
  time: "2h ago",
  image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260",
  content: `The new era of Formula 1 has arrived with fully sustainable powertrains that are breaking speed records.

The season opener featured multiple lead changes and a photo finish that had the crowd on their feet.

Teams are still adapting to the new regulations, but early indications suggest this could be the most competitive season in years.`,
},

{
  id: "sports-olympics-2026",
  title: "Paris 2024 Legacy: First AI-Judged Olympic Events",
  excerpt: "Swimming and gymnastics trials use real-time AI scoring.",
  category: "Sports",
  author: "Mehedi Redoy",
  date: "April 19, 2026",
  time: "Live",
  image: "https://images.pexels.com/photos/260598/pexels-photo-260598.jpeg?auto=compress&cs=tinysrgb&w=1260",
  content: `The Paris 2024 Olympics introduced AI-powered judging in select events, and the technology is now being expanded.

Swimming and gymnastics trials are using real-time AI scoring to assist human judges, reducing controversy and improving accuracy.

Athletes have generally welcomed the technology, though some express concerns about its long-term implications for the sport.`,
},

{
  id: "sports-cricket-world-cup-2026",
  title: "Cricket World Cup 2026: India vs Australia Final Expected",
  excerpt: "The two powerhouses set to clash in the ultimate showdown.",
  category: "Sports",
  author: "Mehedi Redoy",
  date: "April 19, 2026",
  time: "Hot",
  image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260",
  content: `The Cricket World Cup is heading toward a blockbuster final between India and Australia.

Both teams have dominated their respective groups and look unstoppable heading into the knockout stages.

The final, if it happens, would be the most-watched cricket match in history, with billions expected to tune in globally.`,
},

{
  id: "sports-tennis-grand-slam-2026",
  title: "Tennis Grand Slam 2026: New Stars Emerge",
  excerpt: "Young talents challenge the established champions.",
  category: "Sports",
  author: "Mehedi Redoy",
  date: "April 19, 2026",
  time: "Live",
 image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260",
  content: `The first Grand Slam of 2026 has delivered stunning upsets and emerging stars.

Young players are challenging the established order, pushing former champions to their limits in marathon matches.

The changing of the guard in tennis appears to be accelerating, with new rivalries capturing fan imagination worldwide.`,
},

{
  id: "sports-soccer-champions-league-2026",
  title: "UEFA Champions League 2026: Surprise Teams Reach Quarterfinals",
  excerpt: "Underdogs make history in Europe's premier club competition.",
  category: "Sports",
  author: "Mehedi Redoy",
  date: "April 19, 2026",
  time: "Hot",
  image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260",
  content: `The Champions League quarterfinals feature unexpected teams that have defied all predictions.

Underdogs have eliminated several favorites, proving that football's biggest stage can still produce remarkable stories.

The remaining matches promise intense drama as clubs chase European glory.`,
},

{
  id: "sports-olympic-prep-2026",
  title: "2028 Los Angeles Olympics: Record-Breaking Preparations Underway",
  excerpt: "Host city aims to deliver the most sustainable Games ever.",
  category: "Sports",
  author: "Mehedi Redoy",
  date: "April 19, 2026",
  time: "Live",
  image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260",
  content: `Los Angeles is preparing for the 2028 Olympics with ambitious sustainability goals.

The organizing committee has announced plans to use existing venues and temporary facilities, reducing the environmental impact.

New technologies will enhance the athlete and spectator experience while maintaining a focus on eco-friendly operations.`,
},

  // ==================== ENTERTAINMENT SECTION ====================

  {
    id: "ent-dune3-0419",
    title: "Dune: Messiah Breaks All-Time Box Office Records",
    excerpt: "Denis Villeneuve's epic concludes with $2B opening weekend.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `The third installment of Denis Villeneuve's Dune saga has shattered box office records with a $2 billion opening weekend.

The film redefines sci-fi cinema with groundbreaking VFX and a deeper exploration of messianic themes.

Critics are calling it the most ambitious and visually stunning entry in the series yet. Fans are already speculating about potential spin-offs and future sequels.

The movie's success has also boosted interest in Frank Herbert's original novels, with book sales seeing a significant spike worldwide.`,
  },

  {
    id: "ent-wicked2-0419",
    title: "Wicked Part Two Shatters Records",
    excerpt: "Cynthia Erivo and Ariana Grande return in the most anticipated musical sequel.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `The musical fantasy continues its record-breaking global run with Wicked Part Two.

Cynthia Erivo and Ariana Grande deliver powerful performances that have audiences singing along and leaving theaters in tears.

The sequel expands on the beloved story with new songs, stunning visuals, and deeper character development.

Early reviews suggest it may surpass the first film in both critical acclaim and box office earnings.`,
  },

  {
    id: "ent-marvel-secret-wars-2026",
    title: "Marvel's Secret Wars: The Most Ambitious Crossover Ever",
    excerpt: "Multiple universes collide in the biggest MCU event yet.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/1191860/pexels-photo-1191860.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Marvel Studios is preparing for its most ambitious project yet — Secret Wars.

The film will bring together characters from multiple phases and alternate universes in one epic storyline.

Casting rumors and leaked concept art have fans buzzing with excitement and speculation.

This crossover is expected to be the culmination of over 15 years of MCU storytelling and could redefine the future of superhero cinema.`,
  },

  {
    id: "ent-oppenheimer-sequel-2026",
    title: "Oppenheimer Sequel in Development at Universal",
    excerpt: "Christopher Nolan returns to the atomic age with new story.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/1150459/pexels-photo-1150459.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Christopher Nolan is reportedly developing a sequel to Oppenheimer, focusing on the long-term consequences of the atomic age.

The project is said to explore the moral and scientific aftermath of the Manhattan Project with the same level of historical detail and cinematic excellence as the original.

Cillian Murphy is expected to return in a significant role. The film is already generating massive buzz among cinephiles and history enthusiasts.`,
  },

  {
    id: "ent-taylor-swift-eras-tour-2026",
    title: "Taylor Swift Eras Tour Extends into 2026 with New Dates",
    excerpt: "The record-breaking tour continues to break records.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Taylor Swift has announced additional dates for her record-breaking Eras Tour, extending it well into 2026.

The tour has already become the highest-grossing concert tour in history, with fans traveling across continents to attend shows.

New setlist additions and surprise songs have kept even dedicated Swifties excited for every performance.

The cultural impact of the tour continues to be felt across music, fashion, and social media.`,
  },

  {
    id: "ent-squid-game-season-2-2026",
    title: "Squid Game Season 2 Breaks Netflix Viewing Records",
    excerpt: "The Korean thriller returns with even higher stakes.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/3779005/pexels-photo-3779005.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `Squid Game Season 2 has shattered Netflix viewing records in its first week of release.

The new season introduces fresh games and deeper character backstories while maintaining the intense psychological tension that made the first season a global phenomenon.

The show's success has sparked renewed interest in Korean cinema and television worldwide.

Critics praise the season for balancing spectacle with social commentary on inequality and human nature.`,
  },

  {
    id: "ent-hollywood-strike-resolution-2026",
    title: "Hollywood Strike Resolution Brings Major Changes to Industry",
    excerpt: "New agreements reshape compensation and AI usage in film.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: `The long Hollywood strikes have finally reached a resolution with new agreements that significantly change how writers, actors, and directors are compensated.

The deals include stronger protections against AI-generated content replacing human creators and improved residual payments for streaming content.

Industry insiders say these changes will have long-lasting effects on how movies and TV shows are produced and distributed.

Many projects that were delayed during the strikes are now back in production with renewed energy.`,
  },

// ==================== HISTORY SECTION ====================

  {
    id: "history-leonardo-mona-lisa",
    title: "The Mona Lisa: Leonardo da Vinci's Masterpiece Still Captivates the World",
    excerpt: "New research reveals hidden details in the most famous painting in history.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/23726195/pexels-photo-23726195.jpeg",
    content: `Leonardo da Vinci's Mona Lisa continues to be the most famous painting in human history.

New high-resolution scans have revealed previously hidden details in the background and the subject's enigmatic smile. Art historians say the painting represents the pinnacle of Renaissance humanism.

Leonardo worked on the portrait for over 16 years, using techniques that were revolutionary for the time. The painting's mysterious smile has fascinated millions for centuries and remains a symbol of artistic genius.

Recent studies using infrared reflectography have uncovered that Leonardo made numerous changes to the composition during its creation, including adjustments to the position of the hands and the background landscape.`,
  },

  {
    id: "history-roman-empire-fall",
    title: "The Fall of the Roman Empire: New Evidence Changes Everything",
    excerpt: "Recent archaeological finds rewrite the final days of Rome.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/5665104/pexels-photo-5665104.jpeg",
    content: `New archaeological discoveries in Rome and Constantinople are rewriting the narrative of the Roman Empire's decline.

The finds show that the empire did not collapse suddenly but underwent a complex transformation over centuries, with cultural and economic continuity far longer than previously thought.

Historians now believe that internal political instability, economic pressures, and barbarian invasions combined to gradually weaken the empire rather than a single catastrophic event.

The discovery of well-preserved trade records suggests that Roman commerce continued in modified forms even after the traditional "fall" date of 476 AD.`,
  },

  {
    id: "history-einstein-relativity",
    title: "Einstein: Space, Time, and Relativity",
    excerpt: "Time is not absolute.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/30950148/pexels-photo-30950148.jpeg",
    content: `Albert Einstein's work on E=mc² remains the foundation of nuclear energy and our understanding of the cosmos.

His theory of relativity fundamentally changed how we perceive space and time, showing that they are interconnected and relative to the observer's frame of reference.

Einstein's 1905 paper on special relativity and his 1915 general relativity theory revolutionized physics and laid the groundwork for modern cosmology, GPS technology, and our understanding of black holes.`,
  },

  {
    id: "history-newton-laws",
    title: "Isaac Newton: Laws That Still Govern the Universe",
    excerpt: "Birth of classical mechanics.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/9241897/pexels-photo-9241897.jpeg",
    content: `Newton's three laws of motion and universal gravitation remain the bedrock of physics more than 300 years later.

His work in the Principia Mathematica established the foundation for classical mechanics and explained planetary motion with unprecedented accuracy.

The famous story of the apple falling from a tree inspired his insights into gravity, though historians debate the exact details of the anecdote.

Newton's contributions extended beyond physics to mathematics, where he co-developed calculus, and to optics, where he demonstrated that white light is composed of a spectrum of colors.`,
  },

  {
    id: "history-cleopatra",
    title: "Cleopatra: The Last Pharaoh and Her Influence on Rome",
    excerpt: "The legendary queen who shaped the fate of empires.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/17131829/pexels-photo-17131829.jpeg",
    content: `Cleopatra VII, the last active pharaoh of Ancient Egypt, was a brilliant strategist and diplomat who formed alliances with Julius Caesar and Mark Antony.

Her relationships with these powerful Roman leaders had profound consequences for both Egypt and Rome.

Cleopatra was highly educated, fluent in multiple languages, and skilled in politics. Her reign marked the end of the Ptolemaic dynasty and the beginning of Roman rule over Egypt.

Modern historians continue to debate her legacy, with some viewing her as a shrewd political operator and others as a romantic figure whose personal choices altered the course of history.`,
  },

  {
    id: "history-ww2-turning-points",
    title: "World War II Turning Points: The Battles That Changed History",
    excerpt: "Key moments that determined the outcome of the global conflict.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/27609440/pexels-photo-27609440.jpeg",
    content: `The Battle of Midway in 1942 was a decisive turning point in the Pacific theater, where the U.S. Navy inflicted a crushing defeat on the Japanese fleet.

In Europe, the Battle of Stalingrad marked the beginning of the end for Nazi Germany's eastern campaign, with massive casualties on both sides.

The D-Day invasion of Normandy in 1944 opened a second front in Europe and accelerated the liberation of the continent from Nazi occupation.

These battles, along with the atomic bombings of Hiroshima and Nagasaki, fundamentally altered the course of the war and shaped the postwar world order.`,
  },

  {
    id: "history-ancient-egypt",
    title: "Ancient Egypt: The Civilization That Built the Pyramids",
    excerpt: "Engineering marvels and cultural achievements of the Nile Valley.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/33678772/pexels-photo-33678772.jpeg",
    content: `Ancient Egypt flourished along the Nile River for over 3,000 years, creating one of the most enduring civilizations in human history.

The construction of the Great Pyramids of Giza demonstrated remarkable engineering skills and organizational capabilities that still amaze modern architects and historians.

Egyptian achievements in mathematics, medicine, astronomy, and writing (hieroglyphics) influenced later civilizations including the Greeks and Romans.

The civilization's complex religious beliefs, elaborate burial practices, and divine kingship system shaped its society and left a lasting legacy that continues to fascinate people today.`,
  }
];