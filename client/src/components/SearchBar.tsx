import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "historical", label: "Historical" },
  { value: "satirical", label: "Satirical" },
  { value: "achievement", label: "Achievements" },
  { value: "statistical", label: "Statistical" },
  { value: "cultural", label: "Cultural" },
];

export default function SearchBar({ onSearch, placeholder = "Search by number or keyword..." }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = () => {
    console.log('Search triggered:', { query, category: selectedCategory });
    onSearch(query, selectedCategory === "all" ? undefined : selectedCategory);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "achievement": return "bg-accent text-accent-foreground";
      case "satirical": return "bg-destructive text-destructive-foreground";
      case "historical": return "bg-primary text-primary-foreground";
      case "statistical": return "bg-chart-3 text-primary-foreground";
      case "cultural": return "bg-chart-5 text-primary-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-10 pr-4"
            data-testid="input-search"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              data-testid="button-filter"
              className="hover-elevate"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {categories.map((category) => (
              <DropdownMenuItem
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                data-testid={`filter-${category.value}`}
              >
                {category.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button 
          onClick={handleSearch} 
          data-testid="button-search"
          className="hover-elevate"
        >
          Search
        </Button>
      </div>

      {selectedCategory !== "all" && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Filter:</span>
          <Badge 
            className={getCategoryColor(selectedCategory)}
            data-testid={`badge-active-filter`}
          >
            {categories.find(c => c.value === selectedCategory)?.label}
            <button 
              onClick={() => setSelectedCategory("all")}
              className="ml-2 hover:opacity-70"
              data-testid="button-clear-filter"
            >
              ×
            </button>
          </Badge>
        </div>
      )}
    </div>
  );
}