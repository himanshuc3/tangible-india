import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { Input } from "@progress/kendo-react-inputs";
import {
  Button as KButton,
  ChipList,
  ChipProps,
  Chip,
} from "@progress/kendo-react-buttons";
import {
  alignBottomIcon,
  binocularsIcon,
  bicycleIcon,
  bellIcon,
  caretAltToTopIcon,
  chartRadarIcon,
} from "@progress/kendo-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string, category?: string) => void;
  placeholder?: string;
  isSearchMode: boolean;
  searchResults: any[];
  currentNumberIndex: number;
  goToRandomFact: () => void;
}

const categories = [
  { value: "historical", text: "Historical", icon: binocularsIcon },
  { value: "satirical", text: "Satirical", icon: chartRadarIcon },
  { value: "achievement", text: "Achievements", icon: bicycleIcon },
  { value: "statistical", text: "Statistical", icon: bellIcon },
  { value: "cultural", text: "Cultural", icon: caretAltToTopIcon },
];

export default function SearchBar({
  onSearch,
  isSearchMode,
  placeholder = "Search by number or keyword...",
  searchResults,
  currentNumberIndex,
  goToRandomFact,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = () => {
    console.log("Search triggered:", { query, category: selectedCategory });
    onSearch(query, selectedCategory === "all" ? undefined : selectedCategory);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "achievement":
        return "bg-accent text-accent-foreground";
      case "satirical":
        return "bg-destructive text-destructive-foreground";
      case "historical":
        return "bg-primary text-primary-foreground";
      case "statistical":
        return "bg-chart-3 text-primary-foreground";
      case "cultural":
        return "bg-chart-5 text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="w-full max-w-2xl mx-auto space-y-3">
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              onChange={({ value }) => setQuery(value)}
              placeholder={placeholder}
              value={query}
              className="pl-10 pr-4"
              onKeyDown={handleKeyPress}
            />
          </div>

          <KButton
            svgIcon={alignBottomIcon}
            type="button"
            fillMode={"outline"}
            onClick={goToRandomFact}
          />

          <Button
            onClick={handleSearch}
            data-testid="button-search"
            className="hover-elevate"
          >
            Search
          </Button>
        </div>

        <div className="categories flex items-center gap-2">
          <Chip>
            <span className="k-chip-label">Selected: 0</span>
          </Chip>
          <ChipList
            defaultData={categories}
            defaultValue={[]}
            selection="multiple"
            chip={(props: ChipProps) => (
              <Chip
                {...props}
                svgIcon={props.dataItem.icon}
                // fillMode={props.dataItem.fillMode}
              />
            )}
          />

          {/* <Badge
            className={getCategoryColor(selectedCategory)}
            data-testid={`badge-active-filter`}
          >
            {categories.find((c) => c.value === selectedCategory)?.label}
            <button
              onClick={() => setSelectedCategory("all")}
              className="ml-2 hover:opacity-70"
              data-testid="button-clear-filter"
            >
              ×
            </button>
          </Badge> */}
        </div>
      </div>
      {isSearchMode && (
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
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
    </div>
  );
}
