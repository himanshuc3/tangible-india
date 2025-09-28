import type { Fact, NumberFacts } from "@shared/schema";

//todo: remove mock functionality
export const mockFacts: Fact[] = [
  {
    id: "1",
    number: 0,
    title: "0️⃣ The Invention of Zero",
    description: [
      "<b>Aryabhatta</b>, the great Indian mathematician and astronomer (476-550 CE), is credited with the invention of zero",
      "<i>Aryabhatiya</i>, a compendium of mathematics and astronomy, also introduced the concept of place-value in number system.",
    ],
    category: "achievement",
    source: [
      {
        name: "Who invented zero?",
        url: "https://www.open.ac.uk/blogs/MathEd/index.php/2022/08/25/the-men-who-invented-zero/",
      },
      { name: "History of Zero", url: "https://en.wikipedia.org/wiki/0" },
      {
        name: "Aryabhata - wikipedia",
        url: "https://en.wikipedia.org/wiki/Aryabhata",
      },
    ],
  },
  {
    id: "2",
    number: 1,
    title: "👩‍💼 First Female Prime Minister",
    description:
      "<i>Indira Gandhi</i>, India's first and World's second lady prime minister after <i>Sirimavo Bandaranaike</i>.",
    category: "historical",
    source: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Indira_Gandhi#:~:text=Indira%20Priyadarshini%20Gandhi%20(n%C3%A9e%20Nehru,until%20her%20assassination%20in%201984.",
      },
    ],
  },
  {
    id: "21",
    number: 1,
    title: "⚡️ Adani power's lease-t interested ",
    description: [
      "Adani power has received a lease of 1,020 acres in Bihar for Rs 1/acre/year (time to invest in some stocks❓).",
      "Even though Adani Power will be generating the electricity in homes, the company itself seems to be powered by the Government.",
    ],
    category: "meme",
    source: [
      {
        name: "The Wire",
        url: "https://thewire.in/government/adani-power-receives-1020-acres-for-lease-in-bihars-bhagalpur-at-rs-1-per-acre-per-year",
      },
    ],
  },
  {
    id: "23332",
    number: 1,
    title: "💨 Does air have O2?",
    description: [
      "New Delhi (unfortunately my native), usually tops the list of world's worst AQI ratings on a daily basis.",
      "Pollution is caused by multitude of sources: <i>Vehicular emissions, Stubble burning, construction dust, industrial emissions</i>",
    ],
    category: "achievement",
    source: [
      {
        name: "AQI - Live Ranking",
        url: "https://www.iqair.com/world-air-quality-ranking",
      },
    ],
  },

  {
    id: "243",
    number: 2,
    title: "🫖 Survival Mentali-tea",
    description:
      "Two cups of chai a day is considered survival minimum in most households #chai-paglu",
    category: "meme",
    source: [
      {
        name: "Misguiding resource",
        url: "https://en.wikipedia.org/wiki/List_of_countries_by_tea_consumption_per_capita",
      },
      {
        name: "Tea drinking across India",
        url: "https://www.thehindu.com/sci-tech/science/tea-drinking-across-india/article68769331.ece",
      },
    ],
  },
  {
    id: "3",
    number: 2,
    title: "🍃 The Two Monsoons",
    description: [
      "India experiences two monsoons: South-West Monsoon & North-East Monsoon.",
      "The southwest monsoon in India extends from June to mid-September",
      "The northeast monsoon in India extends from October and November",
    ],
    category: "cultural",
    source: [
      {
        name: "India - climate",
        url: "https://www.nextias.com/blog/monsoon-in-india/#:~:text=Seasonal%20Rainfall%20%E2%80%93%20The%20Monsoon%20in,Monsoon%20(October%20to%20December).",
      },
    ],
  },
  {
    id: "432",
    number: 3,
    title: "✈️ Aviation Flies high",
    description:
      "Despite being the 3rd largest in aviation traffic by country, prices soar high without bounds and regulations.",
    category: "statistical",
    source: [
      {
        name: "Economic times",
        url: "https://economictimes.indiatimes.com/industry/transportation/airlines-/-aviation/india-soars-to-3rd-spot-in-global-aviation-market-says-iata/articleshow/121551238.cms",
      },
    ],
  },
  {
    id: "20",
    number: 4,
    title: "💸 World's 4th largest economy",
    description: [
      "Calculated via the <b>official</b> income generated, reported and filed via ITR.",
      "Despite the properity hinted on the surface, it ranks 136<sup>th</sup> on per capita income.",
      "The unemployment rate stands at ~5.2%, which amounts to roughly 7.2 crore people.",
    ],
    category: "statistical",
    source: [
      {
        name: "Economy of India",
        url: "https://en.wikipedia.org/wiki/Economy_of_India",
      },
      {
        name: "Unemployment rate",
        url: "https://www.thehindu.com/news/national/government-survey-shows-dip-in-unemployment-rate/article69948766.ece",
      },
    ],
  },
  {
    id: "30",
    number: 5,
    title: "💩 World's 5th most polluted country",
    description:
      "New delhi (my hometown) topping the charts of the most polluted city (air quality) in the world on a consistent basis.",
    category: "achievement",
    source: [
      {
        name: "Live World air quality Index",
        url: "https://www.iqair.com/world-air-quality-ranking",
      },
    ],
  },
  {
    id: "13",
    number: 7,
    title: "🌊 Seven Sacred Rivers",
    description:
      "India reveres seven sacred rivers: <i>Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, and Kaveri</i>.",
    category: "cultural",
    source: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Rivers_in_Hinduism",
      },
    ],
  },
  {
    id: "25",
    number: 7,
    title: "🦁 Thala for a reason",
    description: [
      "There are 7 colors in rainbow, 7 days in a week, 7 wonders of the world, 7 major seas and total continents in the world are 7. But that is not the reason 7 is the most trending number online.",
      "M.S. Dhoni used to play under the jersey number 7 in ICT and IPL.",
      "Thala in tamil means 'leader', given to him by the fans of Chennai super kings for all the right reasons.",
    ],
    category: "meme",
    source: [
      {
        name: "Thala for a reason",
        url: "https://www.ndtv.com/offbeat/thala-for-a-reason-google-pays-tribute-to-ms-dhoni-with-number-7-4661840",
      },
      {
        name: "",
        url: "https://x.com/GoogleIndia/status/1734510431098597427",
      },
    ],
  },
  {
    id: "26",
    number: 7,
    title: "🏛️ Taj Mahal",
    description: [
      `It is one of the 7 wonders of world included in the company of: Great Wall of China, Petra, Colosseum, Chichén Itzá, Machu Picchu and Christ the Redeemer.`,
      "The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture",
    ],
    category: "cultural",
    source: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Taj_Mahal",
      },
      {
        name: "Architecture",
        url: "https://whc.unesco.org/en/list/252/",
      },
    ],
  },
  {
    id: "14",
    number: 7,
    title: "⛰️ The Seven Sisters",
    description: [
      "The 7 northeastern states of India - Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura - are called the 'Seven Sisters'.",
      "Fun Fact: Every one of the states in northeast shares it's border with Assam.",
    ],
    category: "cultural",
    source: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Northeast_India",
      },
    ],
  },
  {
    id: "5",
    number: 28,
    title: "💩 States of Bureaucracy",
    description:
      "India has 28 states and 8 union territories, but to get a simple business license, you might need to visit approximately 28 different government offices.",
    category: "satirical",
    source: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/States_and_union_territories_of_India",
      },
    ],
  },
  {
    id: "7",
    number: 89,
    title: "Φ The Chess heritage",
    description: [
      "At the time of writing, India has 89 chess grandmasters.",
      "Chess originated in India around the 6th century CE as 'Chaturanga' and is a prominent sport/game till date.",
    ],
    category: "cultural",
    source: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/List_of_Indian_chess_players",
      },
    ],
  },
  // {
  //   id: "6",
  //   number: 29.5,
  //   title: "The Leap Second Country",
  //   description:
  //     "India Standard Time (IST) is UTC+5:30, making it one of the few countries with a 30-minute offset. This unique time zone was established in 1947 and covers the entire country despite India spanning almost 30 degrees of longitude.",
  //   category: "statistical",
  // },
  {
    id: "7",
    number: 108,
    title: "Φ The Sacred Mathematics",
    description: [
      "The number 108 is considered sacred in Hinduism and Buddhism.",
      "Temple bells ring 108 times, prayer malas have 108 beads, and there are 108 Upanishads.",
      "Mathematically, 108 = 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² - a perfect cosmic equation!",
    ],
    category: "cultural",
    source: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/108_(number)" },
    ],
  },
  {
    id: "108",
    number: 118,
    title: "😢 India on Happiness Index",
    description: [
      "India’s 118ᵗʰ position in the World Happiness Report 2025 is jarring, especially when one notes that even nations torn by conflict—such as Ukraine (ranked 111) and Israel (ranked 8)—are placed ahead of it",
      "Further, while 2/3rd of the population is happy in the ICT's success over Pakistan and the rest of the population is happy making memes about it, it begs to differ why the remaining non-existant population is still on average sadder than Pakistan's population (109)",
    ],
    category: "satirical",
    source: [
      {
        name: "World Happiness Report 2025",
        url: "https://www.worldhappiness.report/",
      },
    ],
  },
  {
    id: "122",
    number: 122,
    title: "🗣️ Major Languages spoken in India",
    description: [
      "The Census taken all the way back in 2001 suggests 122 major languages spoken, though the lines become blurry with dialects.",
      "On the surface, the leaders seems to chant the echos of diversity of culture and languages, while the common public is divergent.",
      "Reports and cases of violent acts based on non-regional language speakers have been reported across Bangalore, Pune and other parts of India.",
    ],
    category: "achievement",
    source: [
      {
        name: "Languages of India - Wiki",
        url: "https://en.wikipedia.org/wiki/Languages_of_India",
      },
      {
        name: "Learn all official languages of India",
        url: "https://www.hindustantimes.com/cities/bengaluru-news/id-speak-english-in-bengaluru-not-kannada-viral-post-says-no-point-learning-languages-of-poor-economies-101752315098698.html",
      },
    ],
  },
  {
    id: "8",
    number: 365,
    title: "📆 Ancient Calendar Precision",
    description:
      "Over 1,500 years ago, the Indian mathematician Aryabhatta calculated the length of a year as 365.2563627 days - remarkably close to the modern value of 365.256363004 days.",
    category: "achievement",
    source: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Aryabhata",
      },
    ],
  },
  {
    id: "1947",
    number: 1947,
    title: "🇮🇳 Independence Day",
    description: [
      "India celebrates got it's independence in this year and celebrates it every year on 15th Aug.",
      "Though it still has a colonial hangover with the worst traits being picked up a result from the British empire.",
    ],
    category: "historical",
    source: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Independence_Day_(India)",
      },
      {
        name: "Colonial hangover",
        url: "https://economicsdeclassified.wordpress.com/2025/02/19/colonial-hangover-in-india-a-lingering-legacy-or-an-overstated-myth/",
      },
    ],
  },
  {
    id: "707M",
    number: 707_000_000,
    title: "📱 UPI transactions / day",
    description: [
      "Unified Payments Interface (UPI) has been the preferred payment method for micro-transactions since it's inception.",
    ],
    category: "statistical",
    source: [
      {
        name: "Transaction report",
        url: "https://www.indiatoday.in/technology/news/story/upi-sets-new-record-with-over-700-million-transactions-in-a-single-day-2766568-2025-08-05",
      },
    ],
  },
  {
    id: "12",
    number: 1400000000,
    title: "👶 The Billion-Plus Democracy",
    description: [
      "India's population crossed 1.4 billion in 2023, making it the world's most populous country.",
      "For reference, Europe's total population is ~750M, which is half of India's population 😱 while Europe's surface area is 3x that of India. ",
    ],
    category: "achievement",
    source: [
      {
        name: "Transaction report",
        url: "https://www.indiatoday.in/technology/news/story/upi-sets-new-record-with-over-700-million-transactions-in-a-single-day-2766568-2025-08-05",
      },
      {
        name: "Europe Wiki",
        url: "https://en.wikipedia.org/wiki/Europe",
      },
    ],
  },
  {
    id: "12-2",
    number: 1400000001,
    title: "🚧 Number of potholes in India",
    description: [
      "I postulate there’s a pothole for every Indian, and one more to spare. Who says Made In India program is a not making it's mark (pun-intended!).</p>",
      "Somehow, India also is capable of achieving potholes sidewalks which are almost non-existent in the first place."
    ],
    category: "meme",
    source: [
      {
        name: "Mumbai's pothole count 2023",
        url: "https://indianexpress.com/article/cities/mumbai/concretisation-roads-bmc-highest-number-potholes-year-8888435/?utm_source=chatgpt.com",
      },
      {
        name: "State of Namma Bengaluru footpaths",
        url: "https://www.youtube.com/shorts/DAHGjp4OnG8"
      }
    ],
  },
];

export function searchFacts(query: string, category?: string[]): Fact[] {
  let results = mockFacts;

  // Filter by category if specified
  if (category) {
    results = results.filter((fact) => category.includes(fact.category));
  }

  // If query is empty, return filtered results
  if (!query.trim()) {
    return results;
  }

  // Search by number or text content
  // NOTE:
  // 1. Provide better search functionality - fuzzy search, typo tolerance (closest distance to change threshold) etc.
  const searchTerm = query.toLowerCase();
  return results.filter(
    (fact) =>
      fact.number.toString().includes(searchTerm) ||
      fact.title.toLowerCase().includes(searchTerm) ||
      fact.description.toLowerCase().includes(searchTerm)
  );
}

export function getRandomFact(): Fact {
  return mockFacts[Math.floor(Math.random() * mockFacts.length)];
}

export function getFactByNumber(number: number | string): Fact | undefined {
  return mockFacts.find((fact) => fact.number.toString() === number.toString());
}

// New functions for handling multiple facts per number
export function groupFactsByNumber(facts: Fact[]): NumberFacts[] {
  const grouped = new Map<string, Fact[]>();

  // Group facts by normalized number string
  facts.forEach((fact) => {
    const numberKey = fact.number.toString();
    if (!grouped.has(numberKey)) {
      grouped.set(numberKey, []);
    }
    grouped.get(numberKey)!.push(fact);
  });

  // Convert to NumberFacts array and sort by numerical value
  return Array.from(grouped.entries())
    .map(([numberStr, factsArray]) => ({
      number: numberStr.includes(".")
        ? parseFloat(numberStr)
        : parseInt(numberStr),
      facts: factsArray,
    }))
    .sort((a, b) => {
      const aNum =
        typeof a.number === "string" ? parseFloat(a.number) : a.number;
      const bNum =
        typeof b.number === "string" ? parseFloat(b.number) : b.number;
      return aNum - bNum;
    });
}

export function getFactsByNumber(number: number | string): Fact[] {
  return mockFacts.filter(
    (fact) => fact.number.toString() === number.toString()
  );
}

export function getRandomNumberFacts(): {
  groupIndex: number;
  factIndex: number;
} {
  const groups = groupFactsByNumber(mockFacts);
  const groupIndex = Math.floor(Math.random() * groups.length);
  const factIndex = Math.floor(Math.random() * groups[groupIndex].facts.length);
  return { groupIndex, factIndex };
}

export function searchFactsGrouped(
  query: string,
  category?: string
): NumberFacts[] {
  const searchResults = searchFacts(query, category);
  return groupFactsByNumber(searchResults);
}
