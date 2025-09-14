import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart } from "lucide-react";
import { useState } from "react";
import type { Fact } from "@shared/schema";

interface NumberDisplayProps {
  fact: Fact;
  showFullDescription?: boolean;
}

export default function NumberDisplay({ fact, showFullDescription = false }: NumberDisplayProps) {
  const [isExpanded, setIsExpanded] = useState(showFullDescription);
  const [isFavorited, setIsFavorited] = useState(false);

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

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
    console.log(`${isFavorited ? 'Removed from' : 'Added to'} favorites:`, fact.title);
  };

  return (
    <Card className={`p-6 space-y-4 hover-elevate transition-all duration-200 ${fact.isSpecial ? 'ring-2 ring-primary' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="text-6xl font-bold text-primary font-mono" data-testid={`text-number-${fact.id}`}>
          {fact.number}
        </div>
        <div className="flex items-center gap-2">
          <Badge 
            className={getCategoryColor(fact.category)} 
            data-testid={`badge-category-${fact.id}`}
          >
            {fact.category}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleFavorite}
            data-testid={`button-favorite-${fact.id}`}
            className={`hover-elevate ${isFavorited ? 'text-destructive' : ''}`}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2" data-testid={`text-title-${fact.id}`}>
          {fact.title}
        </h3>
        
        <div className={`text-muted-foreground ${!isExpanded && fact.description.length > 200 ? 'line-clamp-3' : ''}`}>
          <p data-testid={`text-description-${fact.id}`}>
            {fact.description}
          </p>
        </div>

        {fact.description.length > 200 && !showFullDescription && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid={`button-expand-${fact.id}`}
            className="mt-2 p-0 h-auto text-primary hover-elevate"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </Button>
        )}
      </div>

      {fact.source && (
        <div className="flex items-center gap-2 pt-2 border-t">
          <span className="text-sm text-muted-foreground">Source:</span>
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto text-sm text-primary hover-elevate"
            data-testid={`button-source-${fact.id}`}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            {fact.source}
          </Button>
        </div>
      )}
    </Card>
  );
}