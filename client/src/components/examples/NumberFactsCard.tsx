import NumberFactsCard from "../NumberFactsCard";
import type { NumberFacts } from "@shared/schema";

export default function NumberFactsCardExample() {
  // Example with multiple facts for number 7
  const mockNumberFacts: NumberFacts = {
    number: 7,
    facts: [
      {
        id: "7a",
        number: 7,
        title: "The Sacred Mathematics",
        description:
          "The number 108 is considered sacred in Hinduism and Buddhism. Temple bells ring 108 times, prayer malas have 108 beads, and there are 108 Upanishads. Mathematically, 108 = 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² - a perfect cosmic equation!",
        category: "cultural",
        source: "Vedic Mathematics",
      },
      {
        id: "7b",
        number: 7,
        title: "Seven Sacred Rivers",
        description:
          "India reveres seven sacred rivers: Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, and Kaveri. These rivers are considered goddesses and are central to Hindu spirituality, with millions of pilgrims visiting their banks annually.",
        category: "cultural",
        source: "Hindu Scriptures",
      },
      {
        id: "7c",
        number: 7,
        title: "The Seven Sisters",
        description:
          "Northeast India's seven states - Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura - are called the 'Seven Sisters'. This region hosts over 200 tribes speaking 400+ dialects, making it India's most ethnically diverse region.",
        category: "cultural",
        source: "Northeast India Cultural Survey",
      },
    ],
  };

  return <NumberFactsCard numberFacts={mockNumberFacts} />;
}
