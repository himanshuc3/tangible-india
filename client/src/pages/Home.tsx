import { useState, useEffect } from "react";
import NumberDisplay from "@/components/NumberDisplay";
import SearchBar from "@/components/SearchBar";
import ProgressIndicator from "@/components/ProgressIndicator";
import NumberInput from "@/components/NumberInput";
import ThemeToggle from "@/components/ThemeToggle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { mockFacts, searchFacts, getRandomFact, getFactByNumber } from "@/data/facts";
import type { Fact } from "@shared/schema";

export default function Home() {
  const [currentFact, setCurrentFact] = useState<Fact>(mockFacts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchResults, setSearchResults] = useState<Fact[]>(mockFacts);
  const [isSearchMode, setIsSearchMode] = useState(false);

  // Handle search
  const handleSearch = (query: string, category?: string) => {
    const results = searchFacts(query, category);
    setSearchResults(results);
    setIsSearchMode(true);
    
    if (results.length > 0) {
      setCurrentFact(results[0]);
      setCurrentIndex(0);
    }
    
    console.log(`Search results: ${results.length} facts found`);
  };

  // Handle navigation
  const handleNext = () => {
    const facts = isSearchMode ? searchResults : mockFacts;
    if (currentIndex < facts.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentFact(facts[nextIndex]);
    }
  };

  const handlePrevious = () => {
    const facts = isSearchMode ? searchResults : mockFacts;
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCurrentFact(facts[prevIndex]);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setCurrentFact(mockFacts[0]);
    setSearchResults(mockFacts);
    setIsSearchMode(false);
    console.log('Reset to beginning');
  };

  // Handle direct number navigation
  const handleNavigateToNumber = (number: number | string) => {
    const fact = getFactByNumber(number);
    if (fact) {
      setCurrentFact(fact);
      const factIndex = mockFacts.findIndex(f => f.id === fact.id);
      setCurrentIndex(factIndex);
      setIsSearchMode(false);
      setSearchResults(mockFacts);
    } else {
      console.log(`No fact found for number: ${number}`);
    }
  };

  // Handle random fact
  const handleRandomNumber = () => {
    const randomFact = getRandomFact();
    setCurrentFact(randomFact);
    const factIndex = mockFacts.findIndex(f => f.id === randomFact.id);
    setCurrentIndex(factIndex);
    setIsSearchMode(false);
    setSearchResults(mockFacts);
    console.log('Random fact selected:', randomFact.title);
  };

  const currentFacts = isSearchMode ? searchResults : mockFacts;
  const maxNumber = 1400000000; // India's population

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-primary font-mono">
                0
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Tangible India
                </h1>
                <p className="text-sm text-muted-foreground">
                  A numerical journey through India's facts
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8 max-w-4xl">
        {/* Search Section */}
        <div className="space-y-6">
          <SearchBar onSearch={handleSearch} />
          
          {isSearchMode && (
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  Found {searchResults.length} fact{searchResults.length !== 1 ? 's' : ''}
                </span>
                {searchResults.length > 0 && (
                  <Badge variant="secondary" className="ml-auto">
                    {currentIndex + 1} of {searchResults.length}
                  </Badge>
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Current Fact Display */}
        {currentFacts.length > 0 ? (
          <div className="space-y-6">
            <NumberDisplay fact={currentFact} />
            
            {/* Navigation Controls */}
            <div className="grid md:grid-cols-2 gap-6">
              <ProgressIndicator
                currentNumber={currentFact.number}
                totalNumbers={currentFacts.length}
                currentIndex={currentIndex}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onReset={handleReset}
                hasNext={currentIndex < currentFacts.length - 1}
                hasPrevious={currentIndex > 0}
              />
              
              <NumberInput
                onNavigateToNumber={handleNavigateToNumber}
                onRandomNumber={handleRandomNumber}
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
              Explore India through numbers, from Aryabhatta's revolutionary zero to the billion-plus population. 
              Each number tells a story - historical, cultural, satirical, or statistical. 
              Discover the tangible facts that make India unique!
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              {["historical", "cultural", "achievement", "statistical", "satirical"].map((category) => (
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