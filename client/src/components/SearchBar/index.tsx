import { useEffect } from "react";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Tooltip } from "@progress/kendo-react-tooltip";
import {
  Button as KButton,
  ChipList,
  ChipProps,
  Chip,
} from "@progress/kendo-react-buttons";
import {
  binocularsIcon,
  bicycleIcon,
  bellIcon,
  caretAltToTopIcon,
  chartRadarIcon,
  searchIcon,
  sparklesIcon,
} from "@progress/kendo-svg-icons";
import { useState } from "react";

import "./index.scss";

interface SearchBarProps {
  onSearch: (query: string, category?: string) => void;

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
  searchResults,
  currentNumberIndex,
  goToRandomFact,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>(
    categories.map((c) => c.value)
  );

  const handleSearch = () => {
    console.log("Search triggered:", { query, category: selectedCategory });
    onSearch(query, selectedCategory ? undefined : selectedCategory);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryChange = (e: any) => {
    const selectedValues = e.value;
    setSelectedCategory(selectedValues);
    onSearch(query, selectedValues);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "achievement":
        return {
          backgroundColor: "hsl(var(--chart-2))",
          color: "hsl(var(--primary-foreground))",
        };
      case "satirical":
        return {
          backgroundColor: "hsl(var(--destructive))",
          color: "hsl(var(--primary-foreground))",
        };
      case "historical":
        return {
          backgroundColor: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
        };
      case "statistical":
        return {
          backgroundColor: "hsl(var(--chart-3))",
          color: "hsl(var(--primary-foreground))",
        };
      case "cultural":
        return {
          backgroundColor: "hsl(var(--chart-5))",
          color: "hsl(var(--primary-foreground))",
        };
      default:
        return {
           backgroundColor: "hsl(var(--secondary))",
          color: "hsl(var(--primary-foreground))",
        }
    }
  };

  useEffect(() => {
    if (!isSearchMode) {
      setQuery("");
      setSelectedCategory(categories.map((c) => c.value));
    }
  }, [isSearchMode]);

  return (
    <div className="space-y-6">
      <div className="w-full max-w-2xl mx-auto space-y-3">
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              onChange={({ target: { value } }) => setQuery(value as string)}
              placeholder="Search by number or text"
              value={query}
              id="search-input"
              className="pl-10 pr-4 rounded-md px-3 py-2 h-10 bg-card text-secondary-foreground"
              onKeyDown={handleKeyPress}
            />
            <span
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none", // Prevent pointer events on the icon
              }}
            >
              <Button
                svgIcon={caretAltToTopIcon}
                disabled={true}
                className="text-secondary-foreground bg-secondary opacity-100"
              >
                + K
              </Button>
            </span>{" "}
          </div>

          <KButton
            onClick={handleSearch}
            data-testid="button-search"
            svgIcon={searchIcon}
            className="bg-primary text-primary-foreground h-10 font-medium"
          >
            Search
          </KButton>
          <Tooltip title="Get a random fact mapped to the numbers of India!">
            <KButton
              svgIcon={sparklesIcon}
              type="button"
              fillMode={"flat"}
              className="h-10 w-10 bg-card"
              onClick={goToRandomFact}
            />
          </Tooltip>
        </div>

        <div className="categories flex items-center gap-2">
          <ChipList
            defaultData={categories}
            defaultValue={selectedCategory}
            selection="multiple"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-list"
            chip={(props: ChipProps) => (
              <Chip
                {...props}
                style={getCategoryColor(props.dataItem.value)}
                className={` border border-2 ${
                  selectedCategory.includes(props.dataItem.value)
                    ? "border-primary"
                    : "border-transparent"
                }`}
                svgIcon={props.dataItem.icon}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
