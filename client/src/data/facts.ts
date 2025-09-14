import type { Fact, NumberFacts } from "@shared/schema";

//todo: remove mock functionality
export const mockFacts: Fact[] = [
  {
    id: "1",
    number: 0,
    title: "The Invention of Zero",
    description: "Aryabhatta, the great Indian mathematician and astronomer (476-550 CE), is credited with the invention of zero as both a placeholder and a number. This revolutionary concept transformed mathematics globally, making complex calculations possible and laying the foundation for modern computing and digital technology.",
    category: "historical",
    source: "Indian Mathematical Heritage",
    isSpecial: true
  },
  {
    id: "2",
    number: 1,
    title: "Unity in Diversity",
    description: "India is one nation but speaks over 780 languages with 22 official languages recognized by the Constitution. Despite this incredible linguistic diversity, the concept of 'Vasudhaiva Kutumbakam' (the world is one family) remains central to Indian philosophy.",
    category: "cultural",
    source: "Census of India",
    isSpecial: false
  },
  {
    id: "3",
    number: 2,
    title: "The Two Monsoons",
    description: "India experiences two monsoon seasons - the Southwest monsoon (June-September) and Northeast monsoon (October-December). These monsoons are so crucial that 60% of India's agriculture depends on them, affecting the lives of 600+ million farmers.",
    category: "statistical",
    source: "Indian Meteorological Department",
    isSpecial: false
  },
  {
    id: "4",
    number: 6,
    title: "Six Seasons of Wisdom",
    description: "While the world recognizes four seasons, ancient Indian texts describe six seasons (Ritu): Vasant (Spring), Grishma (Summer), Varsha (Monsoon), Sharad (Autumn), Shishir (Pre-winter), and Shita (Winter). This detailed seasonal understanding helped develop Ayurveda and agriculture.",
    category: "cultural",
    source: "Ancient Indian Texts",
    isSpecial: false
  },
  {
    id: "5",
    number: 28,
    title: "States of Bureaucracy",
    description: "India has 28 states and 8 union territories, but to get a simple business license, you might need to visit approximately 28 different government offices. The irony is not lost on anyone who's tried to start a business here!",
    category: "satirical",
    source: "Ease of Doing Business Reports",
    isSpecial: false
  },
  {
    id: "6",
    number: 29.5,
    title: "The Leap Second Country",
    description: "India Standard Time (IST) is UTC+5:30, making it one of the few countries with a 30-minute offset. This unique time zone was established in 1947 and covers the entire country despite India spanning almost 30 degrees of longitude.",
    category: "statistical",
    source: "Indian Standard Time Authority",
    isSpecial: false
  },
  {
    id: "7",
    number: 108,
    title: "The Sacred Mathematics",
    description: "The number 108 is considered sacred in Hinduism and Buddhism. Temple bells ring 108 times, prayer malas have 108 beads, and there are 108 Upanishads. Mathematically, 108 = 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² - a perfect cosmic equation!",
    category: "cultural",
    source: "Vedic Mathematics",
    isSpecial: true
  },
  {
    id: "8",
    number: 365,
    title: "Ancient Calendar Precision",
    description: "Over 1,500 years ago, the Indian mathematician Aryabhatta calculated the length of a year as 365.2563627 days - remarkably close to the modern value of 365.256363004 days. This precision was achieved without modern instruments!",
    category: "achievement",
    source: "Aryabhatiya Text",
    isSpecial: false
  },
  {
    id: "9",
    number: 2000,
    title: "Years of Potholes",
    description: "India's roads have had potholes for over 2000 years! From ancient trade routes to modern highways, the tradition continues. Today, potholes cause over 3,000 deaths annually, making them more dangerous than terrorism. At least we're consistent!",
    category: "satirical",
    source: "Ministry of Road Transport & Highways",
    isSpecial: false
  },
  {
    id: "10",
    number: 69000,
    title: "The Chess Championship Heritage",
    description: "Chess originated in India around the 6th century CE as 'Chaturanga'. Today, India has over 69,000 rated chess players and has produced 75 Grandmasters, including the youngest world champion Gukesh D who won the title at age 18.",
    category: "achievement",
    source: "World Chess Federation",
    isSpecial: false
  },
  {
    id: "11",
    number: 400000,
    title: "The Chai-wallah Economy",
    description: "India consumes over 400,000 tons of tea annually, with 70% being consumed domestically. There are an estimated 1 million tea vendors across the country, creating a parallel economy worth billions. From railway stations to corporate boardrooms, chai fuels the nation!",
    category: "statistical",
    source: "Tea Board of India",
    isSpecial: false
  },
  {
    id: "12",
    number: 1400000000,
    title: "The Billion-Plus Democracy",
    description: "India's population crossed 1.4 billion in 2023, making it the world's most populous country. Managing democracy for 1.4 billion people across 28 states, 22 languages, and countless cultures is perhaps humanity's greatest administrative achievement.",
    category: "achievement",
    source: "UN Population Division 2023",
    isSpecial: true
  },
  // Multiple facts for number 7 - demonstrating the multi-fact feature
  {
    id: "13",
    number: 7,
    title: "Seven Sacred Rivers",
    description: "India reveres seven sacred rivers: Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, and Kaveri. These rivers are considered goddesses and are central to Hindu spirituality, with millions of pilgrims visiting their banks annually.",
    category: "cultural",
    source: "Hindu Scriptures",
    isSpecial: false
  },
  {
    id: "14",
    number: 7,
    title: "The Seven Sisters",
    description: "Northeast India's seven states - Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura - are called the 'Seven Sisters'. This region hosts over 200 tribes speaking 400+ dialects, making it India's most ethnically diverse region.",
    category: "cultural",
    source: "Northeast India Cultural Survey",
    isSpecial: false
  },
  // Multiple facts for number 3
  {
    id: "15",
    number: 3,
    title: "Three Branches of Government",
    description: "India's democracy operates through three branches: Executive (Prime Minister and Council of Ministers), Legislative (Parliament with Lok Sabha and Rajya Sabha), and Judiciary (Supreme Court and High Courts). This separation ensures checks and balances.",
    category: "historical",
    source: "Constitution of India",
    isSpecial: false
  }
];

export function searchFacts(query: string, category?: string): Fact[] {
  let results = mockFacts;

  // Filter by category if specified
  if (category && category !== "all") {
    results = results.filter(fact => fact.category === category);
  }

  // If query is empty, return filtered results
  if (!query.trim()) {
    return results;
  }

  // Search by number or text content
  const searchTerm = query.toLowerCase();
  return results.filter(fact => 
    fact.number.toString().includes(searchTerm) ||
    fact.title.toLowerCase().includes(searchTerm) ||
    fact.description.toLowerCase().includes(searchTerm)
  );
}

export function getRandomFact(): Fact {
  return mockFacts[Math.floor(Math.random() * mockFacts.length)];
}

export function getFactByNumber(number: number | string): Fact | undefined {
  return mockFacts.find(fact => fact.number.toString() === number.toString());
}

// New functions for handling multiple facts per number
export function groupFactsByNumber(facts: Fact[]): NumberFacts[] {
  const grouped = new Map<string, Fact[]>();
  
  // Group facts by normalized number string
  facts.forEach(fact => {
    const numberKey = fact.number.toString();
    if (!grouped.has(numberKey)) {
      grouped.set(numberKey, []);
    }
    grouped.get(numberKey)!.push(fact);
  });
  
  // Convert to NumberFacts array and sort by numerical value
  return Array.from(grouped.entries())
    .map(([numberStr, factsArray]) => ({
      number: numberStr.includes('.') ? parseFloat(numberStr) : parseInt(numberStr),
      facts: factsArray,
      isSpecial: factsArray.some(fact => fact.isSpecial)
    }))
    .sort((a, b) => {
      const aNum = typeof a.number === 'string' ? parseFloat(a.number) : a.number;
      const bNum = typeof b.number === 'string' ? parseFloat(b.number) : b.number;
      return aNum - bNum;
    });
}

export function getFactsByNumber(number: number | string): Fact[] {
  return mockFacts.filter(fact => fact.number.toString() === number.toString());
}

export function getRandomNumberFacts(): { groupIndex: number; factIndex: number } {
  const groups = groupFactsByNumber(mockFacts);
  const groupIndex = Math.floor(Math.random() * groups.length);
  const factIndex = Math.floor(Math.random() * groups[groupIndex].facts.length);
  return { groupIndex, factIndex };
}

export function searchFactsGrouped(query: string, category?: string): NumberFacts[] {
  const searchResults = searchFacts(query, category);
  return groupFactsByNumber(searchResults);
}