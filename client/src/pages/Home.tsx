import { useState, useEffect, useMemo, useRef, useCallback } from "react";

import Header from "@/components/Header";
import FactsCard from "@/components/FactsCard";
import SearchBar from "@/components/SearchBar";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Navigation } from "@progress/kendo-react-common";
import { Card } from "@progress/kendo-react-layout";
import { Badge } from "@/components/ui/badge";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import {
  sparklesIcon
} from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  mockFacts,
  groupFactsByNumber,
  searchFactsGrouped,
  getRandomNumberFacts,
  getFactsByNumber,
} from "@/data/facts";
import type { NumberFacts } from "@shared/schema";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

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
  const root = useRef<HTMLDivElement>(null);

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
  
  useKeyboardShortcuts({
    onPrevFact: handlePrevious,
    onNextFact: handleNext,
    onToggleTheme: () => {
      const html = document.querySelector("html");
      if (html) {
        if (html.classList.contains("dark")) {
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
      }
    },
    onFocusSearchBar: () => {
      const searchInput = document.getElementById(
        "search-input"
      ) as HTMLInputElement | null;
      if (searchInput) {
        searchInput.focus();
      }
    },
  });

 

 

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
    const groups = allNumberFacts;

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
    <div
      className="min-h-screen bg-background home-wrapper"
      ref={root}
    >
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
        <div>
          <ProgressIndicator
            currentNumber={currentNumberFacts.number}
            totalNumbers={currentGroups.length}
            currentIndex={currentNumberIndex}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onReset={handleReset}
            hasNext={currentNumberIndex < currentGroups.length - 1}
            hasPrevious={currentNumberIndex > 0}
            facts={allNumberFacts}
          />
        </div>

        {isSearchMode && (
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <SvgIcon icon={sparklesIcon} className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                Found {searchResults.length} number
                {searchResults.length !== 1 ? "s" : ""} with facts
              </span>
              {searchResults.length > 0 && (
                <Badge variant="secondary" className="ml-auto">
                  Number {currentNumberIndex + 1} of {searchResults.length}
                </Badge>
              )}
            </div>
          </Card>
        )}

        {/* Current Number Facts Display */}
        {currentGroups.length > 0 ? (
          <div className="space-y-6">
            <FactsCard
              numberFacts={currentNumberFacts}
              currentFactIndex={currentFactIndex}
              onFactChange={handleFactChange}
            />

            {/* Navigation Controls */}
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
        <div className="flex gap-6">
          {/* <Statistics /> */}
          <About />
        </div>
      </main>
    </div>
  );
}
