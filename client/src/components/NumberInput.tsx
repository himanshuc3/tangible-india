import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calculator, Dices } from "lucide-react";

interface NumberInputProps {
  onNavigateToNumber: (number: number | string) => void;
  onRandomNumber: () => void;
  maxNumber?: number;
}

export default function NumberInput({ onNavigateToNumber, onRandomNumber, maxNumber }: NumberInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!inputValue.trim()) {
      setError("Please enter a number");
      return;
    }

    const num = parseFloat(inputValue);
    if (isNaN(num)) {
      setError("Please enter a valid number");
      return;
    }

    if (maxNumber && num > maxNumber) {
      setError(`Number cannot exceed ${maxNumber}`);
      return;
    }

    if (num < 0) {
      setError("Number cannot be negative");
      return;
    }

    console.log('Navigating to number:', num);
    onNavigateToNumber(num);
    setInputValue("");
  };

  const handleRandomClick = () => {
    console.log('Random number requested');
    onRandomNumber();
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="text-sm font-medium text-muted-foreground">
        Jump to Number
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter number (e.g., 42, 3.14)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            data-testid="input-number"
            className={error ? "border-destructive" : ""}
          />
          <Button 
            type="submit" 
            size="icon"
            data-testid="button-go-to-number"
            className="hover-elevate"
          >
            <Calculator className="h-4 w-4" />
          </Button>
        </div>
        
        {error && (
          <p className="text-sm text-destructive" data-testid="text-error">
            {error}
          </p>
        )}
      </form>

      <div className="pt-2 border-t">
        <Button
          variant="outline"
          size="sm"
          onClick={handleRandomClick}
          data-testid="button-random"
          className="w-full hover-elevate"
        >
          <Dices className="h-4 w-4 mr-2" />
          Discover Random Fact
        </Button>
      </div>
    </Card>
  );
}