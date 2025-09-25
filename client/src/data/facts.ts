import type { Fact, NumberFacts } from "@shared/schema";

//todo: remove mock functionality
export const mockFacts: Fact[] = [
  {
    id: "1",
    number: 0,
    title: "0️⃣ The Invention of Zero",
    description:
      "<b>Aryabhatta</b>, the great Indian mathematician and astronomer (476-550 CE), is credited with the invention of zero as both a placeholder and a number. This revolutionary concept transformed mathematics globally, making complex calculations possible and laying the foundation for modern computing and digital technology.",
    category: "historical",
    source: [
      {
        name: "Who invented zero?",
        url: "https://www.open.ac.uk/blogs/MathEd/index.php/2022/08/25/the-men-who-invented-zero/"
      },
     { name: "History of Zero",
      url: "https://en.wikipedia.org/wiki/0",
     },
     {
      name: "Aryabhata - wikipedia",
      url: "https://en.wikipedia.org/wiki/Aryabhata",
     }
    ],
  },
  {
    id: "2",
    number: 1,
    title: "🫂 Unity in Diversity",
    description:
      "India is one nation but speaks over 780 languages with 22 official languages recognized by the Constitution. Despite this incredible linguistic diversity, the concept of 'Vasudhaiva Kutumbakam' (the world is one family) remains central to Indian philosophy.",
    category: "cultural",
  },
  {
    id: "3",
    number: 2,
    title: "The Two Monsoons",
    description:
      "India experiences two monsoon seasons - the Southwest monsoon (June-September) and Northeast monsoon (October-December). These monsoons are so crucial that 60% of India's agriculture depends on them, affecting the lives of 600+ million farmers.",
    category: "statistical",
  },
  {
    id: "4",
    number: 6,
    title: "Six Seasons of Wisdom",
    description:
      "While the world recognizes four seasons, ancient Indian texts describe six seasons (Ritu): Vasant (Spring), Grishma (Summer), Varsha (Monsoon), Sharad (Autumn), Shishir (Pre-winter), and Shita (Winter). This detailed seasonal understanding helped develop Ayurveda and agriculture.",
    category: "cultural",
  },
  {
    id: "5",
    number: 28,
    title: "💩 States of Bureaucracy",
    description:
      "India has 28 states and 8 union territories, but to get a simple business license, you might need to visit approximately 28 different government offices. The irony is not lost on anyone who's tried to start a business here!",
    category: "satirical",
  },
  {
    id: "6",
    number: 29.5,
    title: "The Leap Second Country",
    description:
      "India Standard Time (IST) is UTC+5:30, making it one of the few countries with a 30-minute offset. This unique time zone was established in 1947 and covers the entire country despite India spanning almost 30 degrees of longitude.",
    category: "statistical",
  },
  {
    id: "7",
    number: 108,
    title: "The Sacred Mathematics",
    description:
      "The number 108 is considered sacred in Hinduism and Buddhism. Temple bells ring 108 times, prayer malas have 108 beads, and there are 108 Upanishads. Mathematically, 108 = 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² - a perfect cosmic equation!",
    category: "cultural",
  },
  {
    id: "108",
    number: 118,
    title: "😢 India on Happiness Index",
    description:
      `<p>India’s 118ᵗʰ position in the World Happiness Report 2025 is jarring, especially when one notes that even nations torn by conflict—such as Ukraine (ranked 111) and Israel (ranked 8)—are placed ahead of it.</p> 
      <p>Further, while 2/3rd of the population is happy in the ICT's success over Pakistan and the rest of the population is happy making memes about it, it begs to differ why the remaining non-existant population is still on average sad than Pakistan's population (109).</p>
      `,
    category: "satirical",
    source: [
      {
        name: "World Happiness Report 2025",
        url: "https://www.worldhappiness.report/",
      }
    ]
  },
  {
    id: "8",
    number: 365,
    title: "Ancient Calendar Precision",
    description:
      "Over 1,500 years ago, the Indian mathematician Aryabhatta calculated the length of a year as 365.2563627 days - remarkably close to the modern value of 365.256363004 days. This precision was achieved without modern instruments!",
    category: "achievement",
  },
  {
    id: "9",
    number: 2000,
    title: "Years of Potholes",
    description:
      "India's roads have had potholes for over 2000 years! From ancient trade routes to modern highways, the tradition continues. Today, potholes cause over 3,000 deaths annually, making them more dangerous than terrorism. At least we're consistent!",
    category: "satirical",
  },
  {
    id: "10",
    number: 69000,
    title: "The Chess Championship Heritage",
    description:
      "Chess originated in India around the 6th century CE as 'Chaturanga'. Today, India has over 69,000 rated chess players and has produced 75 Grandmasters, including the youngest world champion Gukesh D who won the title at age 18.",
    category: "achievement",
  },
  {
    id: "11",
    number: 400000,
    title: "The Chai-wallah Economy",
    description:
      "India consumes over 400,000 tons of tea annually, with 70% being consumed domestically. There are an estimated 1 million tea vendors across the country, creating a parallel economy worth billions. From railway stations to corporate boardrooms, chai fuels the nation!",
    category: "statistical",
  },
  {
    id: "12",
    number: 1400000000,
    title: "👶 The Billion-Plus Democracy",
    description:
      "India's population crossed 1.4 billion in 2023, making it the world's most populous country. Managing democracy for 1.4 billion people across 28 states, 22 languages, and countless cultures is perhaps humanity's greatest administrative achievement.",
    category: "achievement",
  },
  {
    id: "12-2",
    number: 1400000001,
    title: "🚧 Number of potholes in India",
    description:
      "<p>I postulate there’s a pothole for every Indian, and one more to spare. So a normal conclusion would be that if India's average birthrate is ~81,000 thousand/day, we are producing potholes at the same rate every day. Who say's Made In India program is a not making it's mark (literally!).</p>",
    category: "achievement",
    source: [
      {
        name: "Mumbai's pothole count 2023",
        url: "https://indianexpress.com/article/cities/mumbai/concretisation-roads-bmc-highest-number-potholes-year-8888435/?utm_source=chatgpt.com"
      }
    ]
  },
  // Multiple facts for number 7 - demonstrating the multi-fact feature
  {
    id: "13",
    number: 7,
    title: "Seven Sacred Rivers",
    description:
      "India reveres seven sacred rivers: Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, and Kaveri. These rivers are considered goddesses and are central to Hindu spirituality, with millions of pilgrims visiting their banks annually.",
    category: "cultural",
  },
  {
    id: "14",
    number: 7,
    title: "The Seven Sisters",
    description:
      "Northeast India's seven states - Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura - are called the 'Seven Sisters'. This region hosts over 200 tribes speaking 400+ dialects, making it India's most ethnically diverse region.",
    category: "cultural",
  },
  // Multiple facts for number 3
  {
    id: "15",
    number: 3,
    title: "Three Branches of Government",
    description:
      "India's democracy operates through three branches: Executive (Prime Minister and Council of Ministers), Legislative (Parliament with Lok Sabha and Rajya Sabha), and Judiciary (Supreme Court and High Courts). This separation ensures checks and balances.",
    category: "historical",
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
