// app/data/news.ts
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
  // ==================== WORLD - APRIL 20, 2026 ====================
  {
    id: "world-us-seizes-iran-ship-0420",
    title: "U.S. Navy Seizes Iranian-Flagged Cargo Ship Near Strait of Hormuz",
    excerpt: "Tensions escalate in the Middle East as Tehran vows swift response to what it calls 'piracy'.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Breaking",
    image: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6000x4000+0+0/resize/1600/quality/85/format/webp/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fe5%2F8c%2Fc6803d384dfc892eaf9be0019d73%2Fap26108447409970.jpg",
    content: "The U.S. Navy has seized an Iranian-flagged cargo ship near the strategic Strait of Hormuz, dramatically escalating tensions in the region. The vessel was intercepted by the USS Spruance during a routine patrol in international waters. Defense officials claim the ship was carrying suspected weapons components destined for militant groups in Yemen. Iran's Revolutionary Guard Corps has condemned the seizure as an act of piracy and vowed a swift and decisive response. The Iranian Foreign Ministry summoned the Swiss ambassador, who represents U.S. interests in Tehran, to protest the action. Commercial shipping in the area has slowed considerably as insurance premiums spike. The Strait of Hormuz handles approximately 20 percent of global oil supply, and energy markets are watching closely. The United Nations Security Council has scheduled an emergency session to discuss the escalating crisis. Oil prices surged 5 percent following the news. This represents the most serious U.S.-Iran confrontation since the 2020 Soleimani strike.",
    featured: true
  },
  {
    id: "world-iran-vows-response-0420",
    title: "Iran Vows Swift Response After U.S. Ship Seizure",
    excerpt: "Tehran calls the act 'piracy' as Supreme Leader warns of consequences.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Urgent",
    image: "https://thefederal.com/h-upload/2026/04/19/611854-hormuz-blockade11zon.webp",
    content: "Iran's Supreme Leader Ayatollah Ali Khamenei has issued a stern warning to the United States following the seizure of an Iranian cargo ship near the Strait of Hormuz. The American regime will pay a heavy price for this act of maritime piracy, Khamenei said in a televised address. Iran does not initiate conflict but will respond decisively to any aggression. The Iranian Parliament has convened an emergency session to discuss the nation's response options. Hardline factions are calling for the closure of the Strait of Hormuz to U.S. and allied shipping. Foreign Minister Hossein Amir-Abdollahian has instructed diplomats to file a formal complaint with the United Nations Security Council. The Iranian Navy has deployed additional patrol vessels to the region, raising concerns about potential clashes at sea. Oil markets have reacted sharply to the escalating tensions, with Brent crude jumping above $95 per barrel.",
    featured: true
  },
  {
    id: "world-ceasefire-collapse-fears-0420",
    title: "Ceasefire Collapse Fears as Iran Refuses New Talks",
    excerpt: "Tehran walks away from negotiations scheduled in Pakistan amid rising tensions.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://i.ytimg.com/vi/6UMeW0VSTaI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZdF2wY3Jpa2oeqA90AgNEeM7-iQ",
    content: "Iran has refused to participate in new ceasefire talks scheduled to take place in Pakistan, raising fears of a complete diplomatic collapse. The negotiations were intended to address the escalating maritime tensions and find a path toward de-escalation. Tehran's withdrawal comes just 48 hours before the talks were set to begin. Pakistani Foreign Minister Bilawal Bhutto Zardari expressed deep disappointment at Iran's decision and called for both sides to exercise restraint. The region cannot afford another conflict, Bhutto Zardari said. U.S. officials indicated they would still send a delegation to Islamabad, though the prospects for meaningful dialogue now appear dim. The State Department described Iran's refusal as a missed opportunity for diplomacy. The development significantly raises the risk of military confrontation in one of the world's most critical waterways."
  },
  {
    id: "world-bulgaria-election-0420",
    title: "Former Bulgarian President Radev Headed for Election Victory",
    excerpt: "Pro-Russian leader's win could shift EU political balance amid Ukraine war.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Former Bulgarian President Rumen Radev appears headed for a decisive victory in the country's parliamentary elections, exit polls suggest. Radev's pro-Russian stance and criticism of EU sanctions against Moscow have resonated with voters frustrated by economic stagnation and the rising cost of living. With 40 percent of precincts reporting, Radev's coalition holds a commanding lead over the pro-European opposition. The election outcome could shift the balance of power within the European Union, where Bulgaria currently holds significant voting weight on energy and defense matters. Analysts warn that a Radev victory could complicate EU efforts to maintain unified support for Ukraine and sanctions against Russia. NATO officials are monitoring the situation closely."
  },
  {
    id: "world-japan-tsunami-alert-0420",
    title: "Japan Issues Tsunami Alert After Powerful Quake Off Northern Coast",
    excerpt: "Magnitude 7.2 earthquake triggers evacuation orders for coastal communities.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Urgent",
    image: "https://images.pexels.com/photos/209733/pexels-photo-209733.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Japan has issued a tsunami warning following a powerful magnitude 7.2 earthquake off the northern coast of Honshu island. The quake struck at 8:47 AM local time at a depth of 35 kilometers, approximately 150 kilometers east of Sendai. Shaking was felt across northern Japan, including Tokyo. The Japan Meteorological Agency warned of potential tsunami waves of up to three meters along the Iwate and Miyagi prefectures. Evacuation orders have been issued for coastal communities. NHK television interrupted regular programming to broadcast urgent warnings, urging residents to move to higher ground immediately. Nuclear facilities in the region, including the Fukushima Daiichi plant, have reported no abnormalities. This is the strongest earthquake to hit the region since the 2011 Tohoku quake."
  },
  {
    id: "world-canada-evacuation-kuwait-0420",
    title: "Canada Urges Evacuation of Contractors from Kuwait, Iraq",
    excerpt: "Iran-backed attack concerns prompt security warning for Canadian citizens.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/6076197/pexels-photo-6076197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "The Canadian government has urged all non-essential personnel and contractors to leave Kuwait and Iraq immediately, citing credible threats of Iran-backed attacks. The travel advisory, issued jointly by Global Affairs Canada and the Department of National Defence, warns of increased risk of drone and missile strikes against Western interests in both countries. Canadian defense contractors working with U.S. Central Command have been instructed to coordinate evacuation through military channels. The United States issued a similar warning to its citizens yesterday, suggesting coordinated intelligence assessments of imminent threats. Approximately 850 Canadian citizens and 2,000 Canadian contractors are currently in Kuwait and Iraq."
  },
  {
    id: "world-malaysia-fire-sabah-0420",
    title: "Fire Destroys 1,000 Homes in Malaysia's Sabah",
    excerpt: "Mass displacement as blaze sweeps through residential area on Borneo island.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://www.asiaone.com/sites/default/files/styles/article_top_image/public/original_images/Apr2026/200426_sabah-fire_balai-bomba-sandakan.png?itok=QCg_4DyN",
    content: "A massive fire has destroyed approximately 1,000 homes in Malaysia's eastern state of Sabah on the island of Borneo, displacing an estimated 5,000 people. The blaze broke out early this morning in the densely populated Kampung Pondo residential area outside Kota Kinabalu, the state capital. Strong winds quickly spread the fire through the closely packed wooden structures. Firefighting efforts were hampered by narrow roads and limited water pressure. At least 12 people have been hospitalized with burns and smoke inhalation. No fatalities have been reported. Malaysian Prime Minister Anwar Ibrahim has announced emergency relief funding of 50 million ringgit ($10.6 million) for affected families."
  },
  {
    id: "world-ukraine-missile-defense-0420",
    title: "Ukraine War Briefing: Europe Calls for Homegrown Missile Defense",
    excerpt: "European leaders push for strategic autonomy amid U.S. commitment concerns.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/947931/pexels-photo-947931.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "European leaders are accelerating plans for a homegrown missile defense system as the Ukraine war enters its third year with no end in sight. German Chancellor Friedrich Merz and French President Emmanuel Macron jointly announced the European Sky Shield Initiative 2.0, which aims to develop an independent continental air defense capability. The announcement reflects growing European concerns about long-term U.S. commitment to NATO's Article 5 guarantees. The new system would complement existing NATO defenses while reducing Europe's reliance on U.S.-made Patriot and THAAD batteries. Initial funding of €50 billion has been committed by 14 EU member states. Ukrainian President Volodymyr Zelensky welcomed the initiative."
  },
  {
    id: "world-madagascar-arrests-0420",
    title: "Arrests in Madagascar Fuel Fears for Gen Z Protest Movement",
    excerpt: "Young activists detained ahead of planned environmental demonstrations.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/17129315/pexels-photo-17129315.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "At least 23 young activists have been arrested in Madagascar's capital Antananarivo ahead of planned environmental protests, raising international concerns about crackdowns on Gen Z-led movements. The detainees, most between the ages of 18 and 25, were taken into custody overnight, according to human rights group Amnesty International. They face charges of illegal assembly and incitement to unrest. The arrests come as the island nation prepares for what organizers hoped would be the largest climate protest in its history. Social media platforms, including TikTok and Instagram, have been restricted in the country. The United Nations has called for the immediate release of the detainees."
  },

  // ==================== TECH - APRIL 20, 2026 ====================
  {
    id: "tech-gpt5-video-launch-0420",
    title: "OpenAI Launches GPT-5 with Real-Time Video Understanding",
    excerpt: "New AI model can watch live video feeds and describe events in real time.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Breaking",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "OpenAI has officially launched GPT-5, the next generation of its large language model, featuring groundbreaking real-time video understanding capabilities. The new model can watch live video feeds, describe events as they happen, answer questions about what it sees, and even generate code from visual input. This represents a major leap from GPT-4, which could only process static images. Early demonstrations showed GPT-5 analyzing a busy street intersection, identifying potential traffic hazards, and suggesting safety improvements. The model is being integrated into enterprise tools for security monitoring, quality control, and accessibility applications. OpenAI CEO Sam Altman called it the most significant update since the original GPT-3. Critics have raised concerns about privacy implications and potential misuse for surveillance. The API is available starting today with pricing at $0.10 per minute of video processed.",
    featured: true
  },
  {
    id: "tech-nvidia-blackwell-shipping-0420",
    title: "Nvidia Begins Shipping Blackwell AI Chips to Major Cloud Providers",
    excerpt: "Next-generation processors promise 30x performance boost for AI training.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Nvidia has begun shipping its next-generation Blackwell AI chips to major cloud providers including AWS, Microsoft Azure, and Google Cloud. The B200 GPU promises up to 30 times faster performance for AI training workloads compared to the current H100 architecture. Early benchmarks show the chip can train a 1 trillion parameter model in half the time while consuming 25 percent less energy. Nvidia CEO Jensen Huang announced the shipment during a keynote at the company's GTC conference. Major AI companies including OpenAI, Anthropic, and Meta have already placed large orders. Analysts expect Blackwell to drive significant revenue growth for Nvidia, which recently surpassed $4 trillion in market capitalization. The chips are expected to be available through cloud providers by Q3 2026.",
    featured: true
  },
  {
    id: "tech-google-quantum-breakthrough-0420",
    title: "Google Achieves Major Quantum Computing Breakthrough with Willow Chip",
    excerpt: "New processor solves complex problems in seconds that would take classical computers thousands of years.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Google Quantum AI has announced a major breakthrough with its latest quantum processor, demonstrating the ability to solve complex optimization problems in seconds that would take even the most powerful classical supercomputers thousands of years. The chip, called Willow, features 105 qubits with significantly improved error correction capabilities. This achievement marks a significant milestone toward practical quantum computing applications in drug discovery, materials science, and financial modeling. Industry experts say this could accelerate the timeline for useful quantum computers by several years. Google CEO Sundar Pichai described it as our Sputnik moment for quantum computing. The company has open-sourced the error correction protocols to accelerate research across the industry.",
    featured: true
  },
  {
    id: "tech-apple-vision-pro-2-sales-0420",
    title: "Apple Vision Pro 2 Sales Exceed Expectations as Enterprise Adoption Soars",
    excerpt: "Mixed reality headset finds strong demand from businesses and developers.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Apple's Vision Pro 2 has exceeded sales expectations since its launch last month, with particularly strong adoption in enterprise markets. The updated headset features a 30 percent lighter design, improved battery life, and enhanced spatial computing capabilities. Major companies including Walmart, Nike, and Siemens have deployed thousands of units for training, design review, and remote collaboration. Apple CEO Tim Cook said the Vision Pro 2 is off to a stronger start than the original. Developers have created over 2,000 spatial computing apps optimized for the new hardware. The device starts at $3,499 and is available in all major markets. Analysts project Apple could sell 2 million units in 2026.",
    featured: true
  },
  {
    id: "tech-spacex-starship-lunar-0420",
    title: "SpaceX Starship Completes Critical Lunar Landing Test",
    excerpt: "Reusable rocket system takes major step toward NASA Artemis moon missions.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
    content: "SpaceX has successfully completed a critical test of its Starship human landing system, demonstrating the ability to take off from the lunar surface and rendezvous with the Orion capsule. The test, conducted in low Earth orbit using a simulated lunar environment, validated the vehicle's navigation, docking, and ascent propulsion systems. This brings SpaceX one step closer to the planned Artemis III mission, which aims to return humans to the lunar surface for the first time since 1972. NASA Administrator Bill Nelson congratulated the SpaceX team on this milestone achievement. The Starship human landing system is a crucial component of NASA's lunar exploration architecture.",
    featured: true
  },
  {
    id: "tech-meta-quest-pro-3-0420",
    title: "Meta Announces Quest Pro 3 with Advanced Mixed Reality Features",
    excerpt: "New VR headset includes higher resolution displays and improved passthrough cameras.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Meta has announced the Quest Pro 3, its most advanced virtual and mixed reality headset to date. The device features dual 4K micro-OLED displays, improved color passthrough cameras, and a new chip designed specifically for mixed reality workloads. Priced at $1,499, the Quest Pro 3 targets enterprise and prosumer markets. Meta CEO Mark Zuckerberg demonstrated the headset's new capabilities including realistic avatar rendering and persistent spatial anchors. The device ships in June with pre-orders opening today. Meta also announced partnerships with Microsoft and Autodesk for professional applications.",
    featured: false
  },
  {
    id: "tech-microsoft-copilot-update-0420",
    title: "Microsoft Copilot Gets Major Update with Agentic AI Capabilities",
    excerpt: "AI assistant can now autonomously complete multi-step tasks across applications.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Microsoft has released a major update to Copilot, its AI assistant, adding agentic capabilities that allow it to autonomously complete multi-step tasks across different applications. Copilot can now schedule meetings, draft emails, create presentations, and analyze data without constant user prompting. The update is available today for Microsoft 365 Enterprise customers. Microsoft CEO Satya Nadella described it as a fundamental shift in how people interact with computers. Early user testing showed productivity gains of up to 40 percent for knowledge workers. The agentic features are powered by OpenAI's GPT-5 model, which Microsoft has exclusive access to through its partnership.",
    featured: false
  },
  {
    id: "tech-amazon-project-kuiper-launch-0420",
    title: "Amazon's Project Kuiper Launches First Production Satellites",
    excerpt: "Starlink competitor begins deploying its 3,200-satellite internet constellation.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24977611/amazon_project_kuiper_test_satellites.jpg?quality=90&strip=all&crop=0,3.4926328102429,100,93.014734379514",
    content: "Amazon has launched the first production satellites for Project Kuiper, its planned 3,200-satellite internet constellation. The satellites, launched aboard a ULA Atlas V rocket, will begin providing beta internet service to select customers in the coming months. Amazon aims to offer broadband connectivity to underserved areas globally, competing directly with SpaceX's Starlink. The company has invested over $10 billion in the project and has secured launch contracts with multiple providers. Project Kuiper will offer speeds up to 1 gigabit per second with latency below 30 milliseconds. Commercial service is expected to begin in early 2027.",
    featured: false
  },
  {
    id: "tech-samsung-foldable-ai-phone-0420",
    title: "Samsung Unveils Galaxy Z Fold 6 with On-Device AI Processing",
    excerpt: "New foldable phone runs AI models locally without cloud connectivity.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Samsung has unveiled the Galaxy Z Fold 6, featuring a dedicated AI processor that can run large language models locally without cloud connectivity. The device can perform real-time translation, image generation, and voice assistance even in airplane mode. Samsung claims the on-device AI is faster and more private than cloud-based alternatives. The Z Fold 6 also features a brighter 7.6-inch main display and improved hinge durability. Pre-orders begin next week with prices starting at $1,799. Samsung is positioning the device as the ultimate productivity tool for business users.",
    featured: false
  },
  {
    id: "tech-ai-safety-summit-0420",
    title: "Global AI Safety Summit Concludes with New Commitments",
    excerpt: "Major tech companies agree to voluntary testing and transparency standards.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "The Global AI Safety Summit in Seoul has concluded with major tech companies agreeing to voluntary testing and transparency standards for frontier AI models. Participants including OpenAI, Google, Microsoft, Meta, and Anthropic committed to allowing government safety testing before releasing new models. The agreement also includes transparency requirements around training data and capability assessments. While non-binding, the commitments represent a significant step toward international AI governance. The next summit is scheduled for November in San Francisco. Critics argue the voluntary nature of the commitments lacks enforcement mechanisms.",
    featured: false
  },

  // ==================== BUSINESS - APRIL 20, 2026 ====================
  {
    id: "business-oil-prices-surge-0420",
    title: "Oil Prices Rise Nearly 5% on Iran-U.S. Ceasefire Collapse Fears",
    excerpt: "Brent crude breaches $95 per barrel as Hormuz tensions escalate.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Oil prices surged nearly 5 percent today as fears mounted that the Iran-U.S. ceasefire could collapse following the seizure of an Iranian cargo ship near the Strait of Hormuz. Brent crude futures jumped $4.50 to $95.87 per barrel, while West Texas Intermediate rose $4.20 to $91.65, marking their largest single-day gains since October 2023. The spike reflects growing concern that the world's most critical oil chokepoint could be disrupted by military conflict. Approximately 20 percent of global petroleum passes through the Strait of Hormuz daily. Energy analysts warn that prices could exceed $120 per barrel if Iran follows through on threats. This is the most serious supply threat we have seen in years, said Helima Croft of RBC Capital Markets.",
    featured: true
  },
  {
    id: "business-gcc-hiring-surge-0420",
    title: "GCC Hiring Jumps 14% in Q1 2026, But AI Talent Shortages Persist",
    excerpt: "Tech and finance sectors lead recruitment surge across Gulf region.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Hiring across the Gulf Cooperation Council countries increased by 14 percent in the first quarter of 2026 compared to the same period last year, according to a new report from Korn Ferry. The United Arab Emirates and Saudi Arabia led the growth, investing heavily in technology, finance, and renewable energy sectors. However, the report also found persistent shortages of qualified artificial intelligence professionals, with an estimated 40,000 unfilled positions across the region. We are seeing unprecedented demand for AI talent, but the supply simply is not there yet, said Mark Williams of Korn Ferry. Saudi Arabia's Public Investment Fund has launched initiatives to develop local talent."
  },
  {
    id: "business-construction-slows-0420",
    title: "Construction Activity Slows 36% in Q1 2026 Amid Geopolitical Uncertainty",
    excerpt: "Megaproject delays as developers adopt wait-and-see approach.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Construction activity across major global markets slowed by 36 percent in the first quarter of 2026 compared to the previous quarter, according to data from Dodge Data and Analytics. The sharp decline is attributed to growing geopolitical uncertainty, rising material costs, and higher interest rates. Commercial real estate projects have been hardest hit, with office and retail construction down 52 percent year-over-year. Developers are adopting a wait-and-see approach, said Sarah Johnson, chief economist at Dodge Data and Analytics. With tensions in the Middle East escalating, many are postponing groundbreaking decisions. Residential construction has fared slightly better, though single-family home starts are down 28 percent."
  },
  {
    id: "business-india-d2c-growth-0420",
    title: "Tier-II & III Cities Drive 66% of India's D2C Ecommerce Growth",
    excerpt: "Smaller cities lead direct-to-consumer revolution in world's fastest-growing major economy.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Tier-II and Tier-III cities accounted for 66 percent of India's direct-to-consumer ecommerce growth in the past year, according to a new report from Redseer. The findings highlight a dramatic shift in India's digital commerce landscape, with consumers in smaller cities increasingly buying directly from brands. Cosmetics, apparel, and home goods have seen the strongest D2C adoption, driven by social commerce platforms like Instagram and WhatsApp. India's D2C revolution is no longer a metropolitan phenomenon, said Anil Kumar of Redseer. The report estimates India's D2C market will reach $100 billion by 2028, up from approximately $45 billion today."
  },
  {
    id: "business-tissot-ecommerce-india-0420",
    title: "Swiss Watchmaker Tissot Launches Official E-Commerce Platform in India",
    excerpt: "Luxury brand targets young professionals in world's most populous nation.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Swiss luxury watchmaker Tissot has launched its official e-commerce platform in India, marking the brand's most significant digital expansion in the Asia-Pacific region. The platform offers Tissot's full range of timepieces, including the popular PRX and Le Locle collections. India represents a critical growth market for Swiss watchmakers, with the country's luxury goods market expected to grow at 12 percent annually through 2030. We see tremendous potential in India's growing community of watch enthusiasts, said Tissot CEO Sylvain Dolla. The platform includes virtual try-on using augmented reality, free home delivery, and a 30-day return policy."
  },
  {
    id: "business-csr-spending-surge-0420",
    title: "CSR Spending by NSE-Listed Firms Jumps 23% to ₹22,212 Crore",
    excerpt: "Education and healthcare receive largest share of corporate social responsibility funds.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Corporate social responsibility spending by companies listed on India's National Stock Exchange jumped 23 percent to ₹22,212 crore ($2.66 billion) in fiscal year 2026, according to data from the Ministry of Corporate Affairs. The increase significantly exceeds the 12 percent average annual growth rate over the previous three years. Education received the largest share of CSR funds at 38 percent, followed by healthcare and sanitation at 27 percent. Reliance Industries, Tata Consultancy Services, and HDFC Bank were the top three spenders. We are seeing a maturation of India's CSR ecosystem, said NITI Aayog CEO B.V.R. Subrahmanyam."
  },
  {
    id: "business-mcx-coal-exchange-0420",
    title: "MCX Clears Plan to Set Up Coal Exchange with ₹100 Cr Investment",
    excerpt: "India's first dedicated coal trading platform aims to boost energy security.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/1138391/pexels-photo-1138391.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "The Multi Commodity Exchange of India has received regulatory approval to establish the country's first dedicated coal exchange, with an initial investment of ₹100 crore ($12 million). The MCX Coal Exchange will provide a transparent platform for spot and futures trading of domestic and imported coal. India is the world's second-largest coal importer and third-largest producer. We are bringing the kind of transparency to coal that we have already brought to metals and agricultural commodities, said MCX Managing Director P.S. Reddy. State-owned Coal India has agreed to offer a portion of its output through the exchange."
  },
  {
    id: "business-ai-funding-surge-0420",
    title: "Tech Startup and AI Funding Surges Globally, With Record $297B in VC Funding in Q1 2026",
    excerpt: "Artificial intelligence companies attract majority of venture capital investments.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Global venture capital funding for technology startups reached a record $297 billion in the first quarter of 2026, with artificial intelligence companies accounting for 62 percent of total investments, according to PitchBook. The figure represents a 35 percent increase from the previous quarter. AI infrastructure companies attracted the largest checks, with CoreWeave raising $4.5 billion and Anthropic securing $3.2 billion. Generative AI has moved from novelty to necessity, said PitchBook analyst Brendan Burke. Geographically, the United States attracted 54 percent of global AI funding, followed by China at 18 percent and Europe at 12 percent.",
    featured: true
  },
  {
    id: "business-nextdc-expansion-0420",
    title: "Australia's NEXTDC Plans $1.07B Data-Center Expansion for AI Demand",
    excerpt: "Brisbane-based company to build five new facilities across Asia-Pacific region.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Australian data-center operator NEXTDC has announced plans to invest $1.07 billion in new facilities across the Asia-Pacific region to meet surging demand from artificial intelligence applications. The company will build five new data centers over the next 24 months, with locations including Sydney, Melbourne, Singapore, Tokyo, and Jakarta. AI is fundamentally changing what is required from data center infrastructure, said NEXTDC CEO Craig Scroggie. The new facilities will feature liquid cooling systems capable of supporting up to 100 kilowatts per rack. The announcement sent NEXTDC shares up 8 percent."
  },
  {
    id: "business-blue-origin-new-glenn-0420",
    title: "Blue Origin Successfully Reuses New Glenn Booster, But Satellite Orbit Error Raises Questions",
    excerpt: "Second successful landing marks milestone, but payload deployment issue clouds mission.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
    content: "Blue Origin successfully launched and landed its New Glenn rocket booster for the second time today, achieving a key reusability milestone. The booster lifted off from Cape Canaveral at 2:23 PM ET, carrying a payload of 30 internet satellites. The booster landed on Blue Origin's drone ship approximately 10 minutes after launch. However, the mission encountered complications during the second stage's orbit insertion. Multiple industry sources indicate that the satellites were deployed at an incorrect altitude. We are reviewing telemetry data, Blue Origin CEO Dave Limp said. The partial success highlights the challenges Blue Origin faces."
  },
  {
    id: "business-palantir-manifesto-0420",
    title: "Palantir Releases New Manifesto Intertwined with Tech Culture and Politics",
    excerpt: "Data analytics giant outlines vision for AI governance and national security.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Palantir Technologies has released a new corporate manifesto that intertwines the company's technological vision with broader political and cultural commentary. The document, titled The Software Defined Society, argues that AI and data analytics should play a more central role in government decision-making. CEO Alex Karp wrote that democratic institutions must embrace software-defined processes or risk being outcompeted. The manifesto has drawn both praise and criticism. Palantir's stock rose 4 percent following the release."
  },
  {
    id: "business-msc-warning-0420",
    title: "UK's M&C Saatchi Warns Middle East War Could Hit Its Business",
    excerpt: "Advertising giant cites client caution amid escalating regional tensions.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "British advertising giant M&C Saatchi has warned investors that escalating tensions in the Middle East could negatively impact its business performance. In a filing to the London Stock Exchange, the company noted that clients in the region have become increasingly cautious about marketing spending. The Middle East accounts for approximately 15 percent of M&C Saatchi's global revenue. While we remain committed to the region, we are monitoring the situation closely, the company stated. Shares fell 3 percent following the announcement."
  },

  // ==================== SPORTS - APRIL 20, 2026 ====================
  {
    id: "sports-marcel-hug-boston-0420",
    title: "Marcel Hug Wins Ninth Boston Marathon Wheelchair Title",
    excerpt: "Swiss 'Silver Bullet' continues dominance with record-breaking performance.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/2403049/pexels-photo-2403049.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Switzerland's Marcel Hug, known as the Silver Bullet, has won his ninth Boston Marathon wheelchair title, crossing the finish line in a course-record time of 1 hour, 18 minutes, and 24 seconds. Hug broke away from the pack at the 10-mile mark and finished nearly three minutes ahead of second place. I felt strong from the start, Hug said after the race. Boston is always special. The victory extends Hug's dominance in the sport. He has now won 12 major marathon titles since 2020. American Susannah Scaroni won the women's wheelchair division for the third consecutive year.",
    featured: true
  },
  {
    id: "sports-djokovic-laureus-0420",
    title: "Novak Djokovic Teams with Eileen Gu for Laureus World Sports Awards",
    excerpt: "Tennis legend and Olympic champion to co-host prestigious ceremony.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://sustainhealth.fit/wp-content/uploads/2026/04/Novak-Djokovic-and-Eileen-Gu.webp",
    content: "Novak Djokovic and Olympic gold medalist Eileen Gu will co-host the 2026 Laureus World Sports Awards, organizers announced today. The ceremony, scheduled for May 15 in Madrid, honors the year's most outstanding athletes. Djokovic is a four-time Laureus winner. I am honored to share the stage with Eileen, Djokovic said. Gu, one of the world's most marketable athletes, said she was thrilled to co-host. Nominees will be announced next week."
  },
  {
    id: "sports-nfl-draft-trade-0420",
    title: "NFL Draft Trade Talks: Cardinals Engage Chiefs for No. 3 Pick",
    excerpt: "Arizona exploring options as quarterback-needy teams circle top selection.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://wp.clutchpoints.com/wp-content/uploads/2026/04/Chiefs-Cardinals.jpg?w=1200",
    content: "The Arizona Cardinals have engaged in trade discussions with the Kansas City Chiefs regarding the No. 3 overall pick in next week's NFL Draft, according to league sources. The talks would likely involve the Chiefs moving up from No. 28 to select a top offensive tackle or wide receiver. Cardinals general manager Monti Ossenfort has been open about his willingness to trade down. The Chiefs are among several teams that have contacted Arizona, including the Raiders, Saints, and Vikings. Quarterback-needy teams are focused on the top two picks."
  },
  {
    id: "sports-snooker-championship-0420",
    title: "World Snooker Championship 2026 Underway with Ronnie O'Sullivan Chasing Eighth Title",
    excerpt: "Rocket aims to extend record as tournament begins at Sheffield's Crucible Theatre.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/4673079/pexels-photo-4673079.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "The 2026 World Snooker Championship is underway at Sheffield's Crucible Theatre, with Ronnie The Rocket O'Sullivan seeking an unprecedented eighth title. O'Sullivan, 50, is the tournament's oldest-ever competitor but remains the betting favorite after winning two ranking events earlier this season. It is about managing the mental side at this stage, O'Sullivan said. Defending champion Luca Brecel opened his title defense with a convincing 10-3 victory over China's Pang Junxu. The tournament runs through May 4."
  },
  {
    id: "sports-rbc-heritage-0420",
    title: "RBC Heritage Golf Tournament Features Top Players and $20M Prize Pool",
    excerpt: "Hilton Head event draws strongest field of the season outside majors.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/4871291/pexels-photo-4871291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "The RBC Heritage golf tournament gets underway Thursday at Harbour Town Golf Links in Hilton Head, South Carolina, featuring a $20 million prize pool and one of the strongest fields of the season. Defending champion Scottie Scheffler arrives as the betting favorite after victories at the Masters and Players Championship. The tournament has become a signature event on the PGA Tour calendar since its elevation to elevated status in 2024. Other top entrants include Rory McIlroy, Jon Rahm, and Xander Schauffele. The winner will receive $3.6 million."
  },
  {
    id: "sports-aew-dynamite-spoiler-0420",
    title: "AEW Dynamite Spoiler: Darby Allin Wins World Title",
    excerpt: "Sting's protege captures championship in emotional main event.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Darby Allin defeated Samoa Joe to win the AEW World Championship at Wednesday night's Dynamite tapings, according to multiple sources. Allin, who was trained by the legendary Sting, secured the victory after landing his signature Coffin Drop finisher through a table. The win marks Allin's first world title reign and caps a two-year journey back from a career-threatening injury. It is an emotional moment for the 33-year-old, who has become one of wrestling's most beloved underdogs. AEW has not officially commented on the spoilers."
  },
  {
    id: "sports-ipl-2026-mi-vs-gt-0420",
    title: "IPL 2026 Live: MI vs GT Match Underway",
    excerpt: "Mumbai Indians chase 185 against Gujarat Titans at Wankhede Stadium.",
    category: "Sports",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://c.ndtvimg.com/2026-04/ptbnr8k8_tilak-varma-mi-bcci_625x300_20_April_26.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    content: "Mumbai Indians are chasing a target of 185 runs against Gujarat Titans in their IPL 2026 clash at Wankhede Stadium. Gujarat captain Shubman Gill scored 72 off 48 balls to anchor the innings, while Rashid Khan took 3 for 28 in MI's bowling attack. MI openers Rohit Sharma and Ishan Kishan have started positively, reaching 45 for 0 after 5 overs. The match is expected to go down to the wire. The winner will move to second place on the points table."
  },

  // ==================== POLITICS - APRIL 20, 2026 ====================
  {
    id: "politics-state-budget-stalemate-0420",
    title: "State Budget Stalemate: Lawmakers Fail to Reach Deal by Deadline",
    excerpt: "Government shutdown looms as parties remain divided on spending priorities.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Lawmakers have failed to reach a budget deal by the midnight deadline, raising the prospect of a government shutdown. The impasse centers on disagreements over education funding and tax relief. Neither party is willing to budge, said State Senate Majority Leader John Smith. Essential services will continue, but non-essential offices will close. The governor has called a special session for tomorrow."
  },
  {
    id: "politics-protesters-detention-center-0420",
    title: "Protesters Gather at U.S. Detention Center as Municipal Elections Begin",
    excerpt: "Advocacy groups demand immigration reform during early voting period.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://cdn.abcotvs.com/dip/images/16007522_031125-wabc-protest-delaney-hall-img.jpg?w=992",
    content: "Hundreds of protesters gathered outside a U.S. immigration detention center today, demanding reforms as early voting began for municipal elections. The demonstration was organized by immigrant rights groups. We want our voices heard at the ballot box, said organizer Maria Gonzalez. Police reported no arrests."
  },
  {
    id: "politics-early-voting-begins-0420",
    title: "US Early Voting Begins for May 2 Municipal Elections",
    excerpt: "Local political engagement growing as voters head to polls early.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Early voting has begun across the United States for the May 2 municipal elections. Voters will decide mayoral races, city council seats, and local ballot measures in hundreds of communities. Election officials report strong turnout in the first day of early voting, suggesting heightened local political engagement. The elections are seen as a bellwether for the 2026 midterms."
  },
  {
    id: "politics-louisiana-shooting-0420",
    title: "Louisiana Mass Shooting Reignites Debate on Gun Laws After Eight Children Killed",
    excerpt: "Community mourns as lawmakers face renewed pressure for action.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Urgent",
    image: "https://thumb.spokesman.com/ppFfrjmv0OXDk8f-dieh8IQZ51E=/1200x800/smart/media.spokesman.com/photos/2026/04/19/69e547d876f14.image.jpg",
    content: "A mass shooting in Louisiana that killed eight children has reignited the national debate on gun laws. The shooter, who died at the scene, used an assault-style rifle. President Biden called the shooting a tragedy beyond comprehension. Lawmakers face renewed pressure to act."
  },

  // ==================== ENTERTAINMENT - APRIL 20, 2026 ====================
  {
    id: "ent-breakthrough-prize-0420",
    title: "Star-Studded Breakthrough Prize Ceremony Sees Appearances by Gigi Hadid, Anne Hathaway & Cardi B",
    excerpt: "Hollywood and science collide at annual awards celebrating scientific achievement.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/1191860/pexels-photo-1191860.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "The Breakthrough Prize ceremony brought together Hollywood and science tonight, with appearances by Gigi Hadid, Anne Hathaway, and Cardi B. The event honored leading researchers in life sciences, fundamental physics, and mathematics. Each winner received $3 million, making it the world's most generous academic prize. Cardi B performed her new single."
  },
  {
    id: "ent-media-layoffs-0420",
    title: "Media & Entertainment Layoffs Continue Across Paramount, Warner Bros, CNN and More",
    excerpt: "Streaming pressures and consolidation drive industry job cuts.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Layoffs continue across the media and entertainment industry, with Paramount Global, Warner Bros. Discovery, and CNN among the latest companies to reduce staff. The cuts come amid ongoing pressure to achieve streaming profitability and integrate recent mergers. Industry analysts expect the consolidation trend to continue."
  },
  {
    id: "ent-stage-and-screen-0420",
    title: "Stage and Screen Expands Global Sports & Entertainment Offerings in U.S. Market",
    excerpt: "Production company diversifies portfolio with major sports content push.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Stage and Screen, the global production company, announced a major expansion of its sports and entertainment offerings in the U.S. market. The company will produce original documentary series and live event coverage. This represents a significant diversification of our portfolio, said CEO Sarah Jones."
  },
  {
    id: "ent-taraji-p-henson-0420",
    title: "Taraji P. Henson Featured on TODAY Discussing Broadway's 'Joe Turner's Come and Gone'",
    excerpt: "Actress returns to stage in August Wilson revival.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Taraji P. Henson appeared on the TODAY show this morning to discuss her return to Broadway in August Wilson's Joe Turner's Come and Gone. The play, which begins previews next month, marks Henson's first stage role in over a decade. I am honored to bring this powerful story to a new generation, Henson said."
  },
  {
    id: "ent-running-point-0420",
    title: "'Running Point' Stars & TODAY Guests Include Kate Hudson & Brenda Song",
    excerpt: "Actresses promote new sports comedy during morning show appearance.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Kate Hudson and Brenda Song appeared on the TODAY show to promote their new film Running Point, a sports comedy about a dysfunctional basketball team. The actresses discussed their training for the roles. The film opens nationwide this Friday."
  },

  // ==================== HISTORY & CONTEXT - APRIL 20, 2026 ====================
  {
    id: "history-earth-day-2026",
    title: "Earth Day Events and Climate Activism Ramp Up Across Bay Area & Beyond",
    excerpt: "Millions expected to participate in environmental demonstrations worldwide.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Earth Day events are ramping up across the San Francisco Bay Area and worldwide, with millions expected to participate in environmental demonstrations and educational activities. The 56th annual Earth Day comes amid record global temperatures. Youth climate activists are leading marches in over 100 cities. The theme for 2026 is Our Power, Our Planet."
  },
  {
    id: "history-ai-robotics-milestones-0420",
    title: "AI and Robotics Reach New Milestones — Humanoid Robots Compete in Marathon in Beijing",
    excerpt: "First-ever humanoid robot marathon showcases rapid advances in robotics.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "Humanoid robots competed in the first-ever robot marathon in Beijing today, showcasing remarkable advances in artificial intelligence and robotics. Twenty robots from research institutions worldwide completed the 26.2-mile course. The winner, a robot developed by China's Unitree Robotics, finished in just over four hours. The event highlights rapid progress in humanoid robotics."
  },
  {
    id: "history-social-media-wellbeing-0420",
    title: "Social Media Deactivation Linked to Better Well-Being, Stanford Study Suggests",
    excerpt: "Research finds significant improvements in mental health after one week without platforms.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 20, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "A new Stanford University study has found that deactivating social media accounts for just one week leads to significant improvements in mental well-being. The study tracked over 2,000 participants. Those who deactivated reported lower anxiety and depression scores. The findings add to growing evidence about social media's effects on mental health."
  },

  // ==================== PRESERVED ARCHIVE - APRIL 19, 2026 AND EARLIER ====================
  {
    id: "world-strait-hormuz-2026",
    title: "Strait of Hormuz: U.S. Seizes Iranian Vessel Amid Blockade",
    excerpt: "Commercial shipping traffic through the world's most vital oil artery has largely stopped.",
    category: "World",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: "The U.S. Navy Guided Missile Destroyer USS Spruance intercepted and seized the Iranian-flagged cargo ship Touska in the Gulf of Oman today. This escalation marks a breaking point in modern maritime security. Commercial shipping through the Strait of Hormuz has almost completely stopped. Oil prices have surged dramatically. Intelligence sources indicate the vessel was part of a clandestine supply chain. This is being called a Phase 4 economic event. Shipping insurance premiums have risen by 400 percent in the last 72 hours.",
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
    content: "Pope Leo XIV arrived in Luanda today to an audience of over 500,000 people. His speech was a strong call to end corruption and foreign exploitation of Africa's natural resources. He urged Angolan leaders to ensure the country's vast mineral and oil wealth benefits its own people. This visit has sparked important conversations about economic justice across Africa."
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
    content: "The European Commission has agreed to release €10.2 billion in previously frozen funds to Hungary. This breakthrough comes after new reform commitments and ends a four-year political stalemate."
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
    content: "The Israel Defense Forces have re-entered southern Lebanon to create a forward defense area. The goal is to push Hezbollah forces away from the border and allow the safe return of displaced citizens.",
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
    content: "193 countries have signed the Global AI Compact in Geneva. The treaty bans lethal autonomous weapons and requires meaningful human control over life-and-death decisions.",
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
    content: "Australia has approved the world's first large-scale geoengineering test to protect the Great Barrier Reef. Scientists will spray sea salt into clouds to reflect sunlight away from the warming ocean."
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
    content: "Multiple flashpoints have erupted across the Middle East today, raising fears of a wider regional conflict."
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
    content: "The effective closure of the Strait of Hormuz has triggered a full-scale global energy crisis."
  },
  {
    id: "politics-eu-ai-act-0419",
    title: "EU Passes Landmark AI Regulation Act",
    excerpt: "Strict AI rules across member states.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: "The European Union has passed the world's toughest AI law to date. The new regulation imposes strict rules on high-risk AI systems across all 27 member states. Companies face fines of up to 7 percent of their global revenue for serious violations."
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
    content: "China has launched its largest military drills yet around Taiwan. The exercises involve naval vessels, fighter jets, and missile units. Taiwan has placed its forces on high alert."
  },
  {
    id: "politics-brazil-presidential-2026",
    title: "Brazil Presidential Race Heats Up with Environmental Focus",
    excerpt: "Candidates clash over Amazon protection and economic growth.",
    category: "Politics",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Live",
    image: "https://static01.nyt.com/images/2022/10/31/climate/31cli-brazilclimate-1/31cli-brazilclimate-1-articleLarge.jpg",
    content: "Brazil's presidential race is intensifying with sharp debates over Amazon rainforest protection versus economic development. Leading candidates are presenting contrasting visions for the country's future."
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
    content: "International mediators have proposed a new round of peace talks to address the ongoing Russia-Ukraine conflict. Both sides have expressed cautious interest, though significant differences remain."
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
    content: "African Union leaders have signed a landmark trade agreement aimed at boosting intra-African commerce and reducing dependence on external markets."
  },
  {
    id: "business-tesla-robotaxi-2026",
    title: "Tesla Robotaxi Fleet Hits One Million Vehicles",
    excerpt: "Autonomous ride-sharing expands globally.",
    category: "Business",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/11139552/pexels-photo-11139552.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: "Tesla's autonomous ride-sharing network has officially surpassed one million active vehicles on the road. The fleet is now operational in 47 cities worldwide, disrupting traditional taxi and ride-hailing industries.",
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
    content: "Nvidia has become the first company to surpass $4 trillion in market capitalization, driven by explosive demand for its AI chips. The company's data center revenue has grown over 400 percent year-over-year."
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
    content: "Apple has launched the second generation of its Vision Pro mixed reality headset with significant improvements in weight, battery life, and spatial computing capabilities."
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
    content: "Bitcoin ETFs have seen record inflows of over $50 billion this year as institutional investors continue to increase their exposure to cryptocurrency."
  },
  {
    id: "tech-gpt5-0419",
    title: "OpenAI Launches GPT-5 with Real-Time Video",
    excerpt: "AI understands live video feeds.",
    category: "Tech",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "15m ago",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: "OpenAI has released GPT-5, which can watch live video feeds, describe events in real time, and even generate code from visual input. The new model represents a major leap in multimodal AI capabilities."
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
    content: "Nvidia has unveiled the next-generation Blackwell AI chip, promising up to 30 times faster performance for AI training workloads. Major cloud providers have already placed large orders."
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
    content: "Google Quantum AI has announced a major breakthrough with its latest quantum processor, demonstrating the ability to solve complex optimization problems in seconds."
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
    content: "SpaceX's Starship has successfully completed its first full orbital test flight and safe re-entry. The achievement brings Elon Musk's vision of affordable space travel closer to reality."
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
    content: "Meta has unveiled significant updates to its metaverse platform, including new lighter VR headsets and advanced AI companions."
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
    content: "A massive cybersecurity breach has exposed sensitive data of millions of users across multiple platforms. Security experts are warning of increased risk of identity theft."
  },
  {
    id: "ent-dune3-0419",
    title: "Dune: Messiah Breaks All-Time Box Office Records",
    excerpt: "Denis Villeneuve's epic concludes with $2B opening weekend.",
    category: "Entertainment",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Hot",
    image: "https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260",
    content: "The third installment of Denis Villeneuve's Dune saga has shattered box office records with a $2 billion opening weekend. Critics are calling it the most ambitious entry in the series yet."
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
    content: "The musical fantasy continues its record-breaking global run with Wicked Part Two. Cynthia Erivo and Ariana Grande deliver powerful performances that have audiences singing along."
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
    content: "Marvel Studios is preparing for its most ambitious project yet — Secret Wars. The film will bring together characters from multiple phases and alternate universes."
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
    content: "Christopher Nolan is reportedly developing a sequel to Oppenheimer, focusing on the long-term consequences of the atomic age. Cillian Murphy is expected to return."
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
    content: "Taylor Swift has announced additional dates for her record-breaking Eras Tour, extending it well into 2026. The tour has already become the highest-grossing concert tour in history."
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
    content: "Squid Game Season 2 has shattered Netflix viewing records in its first week of release. The new season introduces fresh games and deeper character backstories."
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
    content: "The long Hollywood strikes have finally reached a resolution with new agreements that significantly change how writers, actors, and directors are compensated."
  },
  {
    id: "history-leonardo-mona-lisa",
    title: "The Mona Lisa: Leonardo da Vinci's Masterpiece Still Captivates the World",
    excerpt: "New research reveals hidden details in the most famous painting in history.",
    category: "History",
    author: "Mehedi Redoy",
    date: "April 19, 2026",
    time: "Deep Dive",
    image: "https://images.pexels.com/photos/23726195/pexels-photo-23726195.jpeg",
    content: "Leonardo da Vinci's Mona Lisa continues to be the most famous painting in human history. New high-resolution scans have revealed previously hidden details in the background and the subject's enigmatic smile."
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
    content: "New archaeological discoveries in Rome and Constantinople are rewriting the narrative of the Roman Empire's decline. The finds show that the empire did not collapse suddenly but underwent a complex transformation."
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
    content: "Albert Einstein's work on E=mc² remains the foundation of nuclear energy and our understanding of the cosmos. His theory of relativity fundamentally changed how we perceive space and time."
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
    content: "Newton's three laws of motion and universal gravitation remain the bedrock of physics more than 300 years later. His work in the Principia Mathematica established the foundation for classical mechanics."
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
    content: "Cleopatra VII, the last active pharaoh of Ancient Egypt, was a brilliant strategist and diplomat who formed alliances with Julius Caesar and Mark Antony."
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
    content: "The Battle of Midway in 1942 was a decisive turning point in the Pacific theater. In Europe, the Battle of Stalingrad marked the beginning of the end for Nazi Germany's eastern campaign."
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
    content: "Ancient Egypt flourished along the Nile River for over 3,000 years, creating one of the most enduring civilizations in human history. The construction of the Great Pyramids of Giza demonstrated remarkable engineering skills."
  }
];