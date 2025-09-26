import { Card } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import {
  TabStrip,
  TabStripTab,
  TabStripSelectEventArguments
} from "@progress/kendo-react-layout";
import { chevronLeftIcon, chevronRightIcon } from "@progress/kendo-svg-icons";
import { useState } from "react";
import NumberDisplay from "./NumberDisplay";
import type { NumberFacts } from "@shared/schema";

import './index.scss'


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


  const handleFactChange = ({selected}: TabStripSelectEventArguments) => {
    setActiveFactIndex(selected);
    onFactChange?.(selected);
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
                <span data-testid={`badge-fact-count-${number}`}>
                  {facts.length} facts
                </span>
                <div className="text-sm text-muted-foreground mt-1">
                  Fact {activeFactIndex + 1} of {facts.length}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                onClick={() =>
                  handleFactChange(Math.max(0, activeFactIndex - 1))
                }
                svgIcon={chevronLeftIcon}
                disabled={activeFactIndex === 0}
                data-testid={`button-prev-fact-${number}`}
                className="hover-elevate"
              ></Button>

              <Button
                svgIcon={chevronRightIcon}
                onClick={() =>
                  handleFactChange(
                    Math.min(facts.length - 1, activeFactIndex + 1)
                  )
                }
                disabled={activeFactIndex === facts.length - 1}
                data-testid={`button-next-fact-${number}`}
                className="hover-elevate"
              ></Button>
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
      {/* Tabs for Facts */}
      <TabStrip selected={activeFactIndex} onSelect={handleFactChange} className="fact-card-tablist">
        {facts.map((fact, index) => (
          <TabStripTab
            key={fact.id}
            title={`Fact ${index + 1}`}
            data-testid={`tab-trigger-${number}-${index}`}
            
            
          >
            <NumberDisplay fact={fact} />
          </TabStripTab>
        ))}
      </TabStrip>
    </div>
  );
}
