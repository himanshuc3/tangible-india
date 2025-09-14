import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface ProgressIndicatorProps {
  currentNumber: number | string;
  totalNumbers: number;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onReset: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
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
}: ProgressIndicatorProps) {
  const progress = totalNumbers > 0 ? (currentIndex / totalNumbers) * 100 : 0;

  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Journey Progress
        </div>
        <div className="text-sm font-medium" data-testid="text-progress">
          {currentIndex + 1} of {totalNumbers}
        </div>
      </div>

      <Progress 
        value={progress} 
        className="h-2" 
        data-testid="progress-indicator"
      />

      <div className="flex items-center justify-between">
        <div className="text-lg font-mono text-primary" data-testid="text-current-number">
          Current: {currentNumber}
        </div>
        
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={onPrevious}
            disabled={!hasPrevious}
            data-testid="button-previous"
            className="hover-elevate"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={onReset}
            data-testid="button-reset"
            className="hover-elevate"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={onNext}
            disabled={!hasNext}
            data-testid="button-next"
            className="hover-elevate"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}