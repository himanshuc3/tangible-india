import { useEffect } from "react";
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
  eyeIcon,
  searchIcon,
} from "@progress/kendo-svg-icons";
import { useState } from "react";

import './index.scss'

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
  const [selectedCategory, setSelectedCategory] = useState<string[]>(categories.map(c => c.value));

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
    const selectedValues = e.value
    setSelectedCategory(selectedValues);
    onSearch(query, selectedValues);
  }

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

  useEffect(() => {
    if(!isSearchMode) {
      setQuery("");
      setSelectedCategory(categories.map(c => c.value));
    }
  }, [isSearchMode]);

  return (
    <div className="space-y-6">
      <div className="w-full max-w-2xl mx-auto space-y-3">
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              onChange={({ target:{value} }) => setQuery(value as string)}
              placeholder={placeholder}
              value={query}
              className="pl-10 pr-4 rounded-md px-3 py-2 text-base h-10"
              onKeyDown={handleKeyPress}
            />
          </div>

          <KButton
            onClick={handleSearch}
            data-testid="button-search"
            svgIcon={searchIcon}
            className="bg-primary text-primary-foreground border border-primary-border h-10"
          >
            Search
          </KButton>
          <KButton
            svgIcon={eyeIcon}
            type="button"
            fillMode={"outline"}
            className="h-10 w-10"
            onClick={goToRandomFact}
          />
        </div>

        <div className="categories flex items-center gap-2">
          <Chip disabled={true} className="bg-secondary text-secondary-foreground">
            <span className="k-chip-label">Selected: 0</span>
          </Chip>
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
                className={`${props.selected? "selected": ""} ${getCategoryColor(props.dataItem.value)}`}
                svgIcon={props.dataItem.icon}
                // fillMode={props.dataItem.fillMode}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
