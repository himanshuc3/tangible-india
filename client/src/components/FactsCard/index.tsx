import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import NumberDisplay from "./NumberDisplay";
import type { NumberFacts } from "@shared/schema";

interface NumberFactsCardProps {
  numberFacts: NumberFacts;
  currentFactIndex?: number;
  onFactChange?: (factIndex: number) => void;
}

export default function FactsCard({
  numberFacts,
  currentFactIndex = 0,
  onFactChange,
}: NumberFactsCardProps) {
  const [activeFactIndex, setActiveFactIndex] = useState(currentFactIndex);
  const { number, facts } = numberFacts;

  const handleFactChange = (newIndex: number) => {
    setActiveFactIndex(newIndex);
    onFactChange?.(newIndex);
  };

  // Single fact - no tabs/carousel needed
  if (facts.length === 1) {
    return <NumberDisplay fact={facts[0]} />;
  }

  // Multiple facts - use tabs for ≤4, carousel for >4
  const useCarousel = facts.length > 4;

  if (useCarousel) {
    // Carousel implementation for 5+ facts
    const currentFact = facts[activeFactIndex];

    return (
      <div className="space-y-4">
        {/* Carousel Header */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`text-4xl font-bold font-mono text-primary text-foreground
                `}
              >
                {number}
              </div>
              <div>
                <Badge
                  variant="secondary"
                  data-testid={`badge-fact-count-${number}`}
                >
                  {facts.length} facts
                </Badge>
                <div className="text-sm text-muted-foreground mt-1">
                  Fact {activeFactIndex + 1} of {facts.length}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  handleFactChange(Math.max(0, activeFactIndex - 1))
                }
                disabled={activeFactIndex === 0}
                data-testid={`button-prev-fact-${number}`}
                className="hover-elevate"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  handleFactChange(
                    Math.min(facts.length - 1, activeFactIndex + 1)
                  )
                }
                disabled={activeFactIndex === facts.length - 1}
                data-testid={`button-next-fact-${number}`}
                className="hover-elevate"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1 mt-3">
            {facts.map((_, index) => (
              <button
                key={index}
                onClick={() => handleFactChange(index)}
                className={`w-2 h-2 rounded-full transition-all hover-elevate ${
                  index === activeFactIndex ? "bg-primary" : "bg-muted"
                }`}
                data-testid={`dot-indicator-${number}-${index}`}
              />
            ))}
          </div>
        </Card>

        {/* Current Fact Display */}
        <NumberDisplay fact={currentFact} />
      </div>
    );
  }

  // Tabs implementation for ≤4 facts
  return (
    <div className="space-y-4">
      {/* Number Header */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`text-4xl font-bold font-mono text-primary text-foreground`}
            >
              {number}
            </div>
            <Badge
              variant="secondary"
              data-testid={`badge-fact-count-${number}`}
            >
              {facts.length} facts
            </Badge>
          </div>
        </div>
      </Card>

      {/* Tabs for Facts */}
      <Tabs
        value={activeFactIndex.toString()}
        onValueChange={(value) => handleFactChange(parseInt(value))}
        data-testid={`tabs-facts-${number}`}
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          {facts.map((fact, index) => (
            <TabsTrigger
              key={fact.id}
              value={index.toString()}
              data-testid={`tab-trigger-${number}-${index}`}
              className="text-xs"
            >
              Fact {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        {facts.map((fact, index) => (
          <TabsContent key={fact.id} value={index.toString()}>
            <NumberDisplay fact={fact} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
