import { chevronRightIcon, chevronLeftIcon } from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";
import type { NumberFacts } from "@shared/schema";

import { Slider, SliderLabel, SliderChangeEvent } from "@progress/kendo-react-inputs";

import './index.scss'

interface ProgressIndicatorProps {
  currentNumber: number | string;
  totalNumbers: number;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onReset: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  facts: NumberFacts[];
  onFactChange: (index: number) => void;
}

const BILLION = 1_000_000_000;
const MILLION = 1_000_000;
const THOUSAND = 1_000;
function displayNumber(number: number): string {
  // billion, million, thousand, anything less
  let display = 0
  let suffix = ""
  if (number / BILLION >= 1) {
    display = number / BILLION;
    suffix = "B"
  } else if (number / MILLION >= 1) {
    display = number / MILLION;
    suffix = "M"
  } else if (number / THOUSAND >= 1) {
    display = number / THOUSAND;
    suffix = "K"
  } else {
    display = number 
  }
  
  return String(display).indexOf(".") >= 0 ? display.toFixed(2) + suffix : display + suffix
}

export default function ProgressIndicator({
  currentNumber,
  totalNumbers,
  currentIndex,
  onPrevious,
  onNext,
  onReset,
  hasNext,
  hasPrevious,
  facts,
  onFactChange
}: ProgressIndicatorProps) {
  const progress = totalNumbers > 0 ? (currentIndex / totalNumbers) * 100 : 0;

  function handleFactChange(event: SliderChangeEvent){
    const roundedIndex = Math.round(event.value) - 1
    
    // Find facts with the same number value
    const clubbedFacts = facts.reduce((acc, fact, index) => {
      if(acc.length === 0) {
        return [{number: fact.number,index, facts: [fact]}];
      }
      const lastGroup = acc[acc.length - 1];
      if(lastGroup.number === fact.number) {
        return [
          ...acc.slice(0, -1),
          { ...lastGroup, facts: [...lastGroup.facts, fact] }
        ];
      }
      return [...acc, {number: fact.number,index, facts: [fact]}];
    }, [] as Array<{number: number,index: number, facts: NumberFacts[]}>)


    console.log(clubbedFacts[roundedIndex])
    onFactChange(clubbedFacts[roundedIndex].index);
  }

  return (
    <div className="w-3/4 flex flex-col m-auto">
      <Slider
        step={1}
        value={currentIndex + 1}
        min={1}
        max={totalNumbers}
        className="elative h-20 w-full overflow-hidden rounded-full progress-indicator"
        data-testid="progress-indicator"
        onChange={handleFactChange}
        buttons={true}
      >
        {facts.map(({ number }, i) => (
          <SliderLabel key={i} position={i + 1}>
            {displayNumber(number)}
          </SliderLabel>
        ))}
      </Slider>
      <div className="flex items-center justify-center gap-4">
        <Button
          svgIcon={chevronLeftIcon}
          type="button"
          fillMode={"flat"}
          disabled={!hasPrevious}
          onClick={onPrevious}
        ></Button>

        <div className="text-sm font-medium" data-testid="text-progress">
          {currentIndex + 1} of {totalNumbers}
        </div>
        <Button
          svgIcon={chevronRightIcon}
          type="button"
          fillMode={"flat"}
          disabled={!hasNext}
          onClick={onNext}
        ></Button>
      </div>
    </div>
  );
}
