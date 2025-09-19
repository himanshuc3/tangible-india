import { chevronRightIcon, chevronLeftIcon } from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import type { NumberFacts } from "@shared/schema";

import { Slider, SliderLabel } from "@progress/kendo-react-inputs";

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
}

const BILLION = 1_000_000_000;
const MILLION = 1_000_000;
const THOUSAND = 1_000;
function displayNumber(number: number): string {
  // billion, million, thousand, anything less
  if (number / BILLION >= 1) {
    return number / BILLION + "B";
  } else if (number / MILLION >= 1) {
    return number / MILLION + "M";
  } else if (number / THOUSAND >= 1) {
    return number / THOUSAND + "K";
  } else {
    return number;
  }
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
}: ProgressIndicatorProps) {
  const progress = totalNumbers > 0 ? (currentIndex / totalNumbers) * 100 : 0;

  return (
    <div className="w-3/4 flex flex-col m-auto">
      <div className="flex items-center justify-center gap-4">
        <Button
          svgIcon={chevronLeftIcon}
          type="button"
          fillMode={"outline"}
          disabled={!hasPrevious}
          onClick={onPrevious}
        ></Button>

        <div className="text-sm font-medium" data-testid="text-progress">
          {currentIndex + 1} of {totalNumbers}
        </div>
        <Button
          svgIcon={chevronRightIcon}
          type="button"
          fillMode={"outline"}
          disabled={!hasNext}
          onClick={onNext}
        ></Button>
      </div>

      <Slider
        step={1}
        value={currentIndex + 1}
        min={1}
        max={totalNumbers}
        className="elative h-20 w-full overflow-hidden rounded-full "
        data-testid="progress-indicator "
      >
        {facts.map(({ number }, i) => (
          <SliderLabel key={i} position={i + 1}>
            {displayNumber(number)}
          </SliderLabel>
        ))}
      </Slider>
    </div>
  );
}
