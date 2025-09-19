import { useState, useEffect } from "react";

import Header from "@/components/Header";
import FactsCard from "@/components/FactsCard";
import SearchBar from "@/components/SearchBar";
import ProgressIndicator from "@/components/ProgressIndicator";
import NumberInput from "@/components/NumberInput";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import {
  mockFacts,
  groupFactsByNumber,
  searchFactsGrouped,
  getRandomNumberFacts,
  getFactsByNumber,
} from "@/data/facts";
import type { NumberFacts } from "@shared/schema";

export default function Home() {
  // Initialize with grouped data
  const allNumberFacts = groupFactsByNumber(mockFacts);

  const [currentNumberFacts, setCurrentNumberFacts] = useState<NumberFacts>(
    allNumberFacts[0]
  );
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [searchResults, setSearchResults] =
    useState<NumberFacts[]>(allNumberFacts);
  const [isSearchMode, setIsSearchMode] = useState(false);

  // Handle search
  const handleSearch = (query: string, category?: string) => {
    const results = searchFactsGrouped(query, category);
    setSearchResults(results);
    setIsSearchMode(true);

    if (results.length > 0) {
      setCurrentNumberFacts(results[0]);
      setCurrentNumberIndex(0);
      setCurrentFactIndex(0);
    }

    console.log(`Search results: ${results.length} number groups found`);
  };

  // Handle navigation between number groups
  const handleNext = () => {
    const groups = isSearchMode ? searchResults : allNumberFacts;
    if (currentNumberIndex < groups.length - 1) {
      const nextIndex = currentNumberIndex + 1;
      setCurrentNumberIndex(nextIndex);
      setCurrentNumberFacts(groups[nextIndex]);
      setCurrentFactIndex(0); // Reset to first fact of next number
    }
  };

  const handlePrevious = () => {
    const groups = isSearchMode ? searchResults : allNumberFacts;
    if (currentNumberIndex > 0) {
      const prevIndex = currentNumberIndex - 1;
      setCurrentNumberIndex(prevIndex);
      setCurrentNumberFacts(groups[prevIndex]);
      setCurrentFactIndex(0); // Reset to first fact of previous number
    }
  };

  const handleReset = () => {
    setCurrentNumberIndex(0);
    setCurrentFactIndex(0);
    setCurrentNumberFacts(allNumberFacts[0]);
    setSearchResults(allNumberFacts);
    setIsSearchMode(false);
    console.log("Reset to beginning");
  };

  // Handle direct number navigation
  const handleNavigateToNumber = (number: number | string) => {
    const facts = getFactsByNumber(number);
    if (facts.length > 0) {
      const numberFacts: NumberFacts = {
        number,
        facts,
        isSpecial: facts.some((f) => f.isSpecial),
      };
      setCurrentNumberFacts(numberFacts);
      setCurrentFactIndex(0);

      // Find the index in the current groups
      const groups = isSearchMode ? searchResults : allNumberFacts;
      const groupIndex = groups.findIndex(
        (g) => g.number.toString() === number.toString()
      );
      if (groupIndex >= 0) {
        setCurrentNumberIndex(groupIndex);
      }

      setIsSearchMode(false);
      setSearchResults(allNumberFacts);
    } else {
      console.log(`No facts found for number: ${number}`);
    }
  };

  // Handle random fact
  const goToRandomFact = () => {
    const randomResult = getRandomNumberFacts();
    const groups = isSearchMode ? searchResults : allNumberFacts;

    setCurrentNumberIndex(randomResult.groupIndex);
    setCurrentFactIndex(randomResult.factIndex);
    setCurrentNumberFacts(groups[randomResult.groupIndex]);
    setIsSearchMode(false);
    setSearchResults(allNumberFacts);

    console.log(
      "Random fact selected:",
      groups[randomResult.groupIndex].facts[randomResult.factIndex].title
    );
  };

  // Handle fact change within a number group
  const handleFactChange = (factIndex: number) => {
    setCurrentFactIndex(factIndex);
    console.log(
      `Switched to fact ${factIndex + 1} of number ${currentNumberFacts.number}`
    );
  };

  const currentGroups = isSearchMode ? searchResults : allNumberFacts;
  const maxNumber = 1400000000; // India's population

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8 max-w-4xl">
        {/* Search Section */}
        <SearchBar
          onSearch={handleSearch}
          isSearchMode={isSearchMode}
          searchResults={searchResults}
          currentNumberIndex={currentNumberIndex}
          goToRandomFact={goToRandomFact}
        />

        {/* Current Number Facts Display */}
        {currentGroups.length > 0 ? (
          <div className="space-y-6">
            <FactsCard
              numberFacts={currentNumberFacts}
              currentFactIndex={currentFactIndex}
              onFactChange={handleFactChange}
            />

            {/* Navigation Controls */}
            <div className="grid md:grid-cols-2 gap-6">
              <ProgressIndicator
                currentNumber={currentNumberFacts.number}
                totalNumbers={currentGroups.length}
                currentIndex={currentNumberIndex}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onReset={handleReset}
                hasNext={currentNumberIndex < currentGroups.length - 1}
                hasPrevious={currentNumberIndex > 0}
              />

              <NumberInput
                onNavigateToNumber={handleNavigateToNumber}
                onRandomNumber={goToRandomFact}
                maxNumber={maxNumber}
              />
            </div>
          </div>
        ) : (
          <Card className="p-8 text-center">
            <div className="space-y-4">
              <div className="text-6xl">🔍</div>
              <div>
                <h3 className="text-xl font-semibold">No facts found</h3>
                <p className="text-muted-foreground mt-2">
                  Try searching with different keywords or browse all categories
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Footer Info */}
        <Card className="p-6">
          <div className="text-center space-y-3">
            <h3 className="font-semibold text-lg">About Tangible India</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore India through numbers, from Aryabhatta's revolutionary
              zero to the billion-plus population. Each number tells a story -
              historical, cultural, satirical, or statistical. Discover the
              tangible facts that make India unique!
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              {[
                "historical",
                "cultural",
                "achievement",
                "statistical",
                "satirical",
              ].map((category) => (
                <Badge key={category} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
