import { Button } from "@progress/kendo-react-buttons";
import { useState } from "react";
import { Card } from "@progress/kendo-react-layout";
import type { Fact } from "@shared/schema";
import {
  Badge,
  BadgeContainer,
  Loader,
  Skeleton,
} from "@progress/kendo-react-indicators";
import { getCategoryColor } from "@/lib/utils";

import "./index.scss"

const CATEGORY_RING_COLOR = {
  achievement: "ring-accent",
  satirical: "ring-destructive",
  historical: "ring-primary",
  statistical: "ring-chart-3",
  cultural: "ring-chart-5",
  default: "ring-secondary",
};

interface NumberDisplayProps {
  fact: Fact;
  showFullDescription?: boolean;
}

export default function NumberDisplay({
  fact,
  showFullDescription = false,
}: NumberDisplayProps) {
  const [isExpanded, setIsExpanded] = useState(showFullDescription);
  const categoryStyles = getCategoryColor(fact.category)
  return (
    <Card
      className={`shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 space-y-4 hover-elevate transition-all duration-200 ring-2 ${
        CATEGORY_RING_COLOR[fact.category]
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`text-6xl font-bold font-mono flex items-base ${
            getCategoryColor(fact.category).textColorClassName
          }`}
          data-testid={`text-number-${fact.id}`}
        >
          <span className="text-xl mt-1">#</span>
          <span>{fact.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button className={`${getCategoryColor(fact.category).classNames}`}>
            {fact.category}
           
          </Button>
         
        </div>
      </div>

      <div className="border-t pt-4 space-y-2">
        <h3
          className={`text-3xl font-semibold mb-2 ${getCategoryColor(fact.category).textColorClassName}`}
          data-testid={`text-title-${fact.id}`}
        >
          {fact.title}
        </h3>

        <div
          className={`text-lg mx-6 p-2 border rounded-md background ${
            !isExpanded && fact.description.length > 200 ? "line-clamp-3" : ""
          }`}
        >
          <p
            data-testid={`text-description-${fact.id}`}
            dangerouslySetInnerHTML={{ __html: fact.description }}
          />
        </div>

        {fact.description.length > 200 && !showFullDescription && (
          <div className="flex grow w-full justify-end">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              data-testid={`button-expand-${fact.id}`}
              className="mt-2 border-none p-0 h-auto text-foreground hover-elevate  mr-6 bg-card font-medium text-"
            >
              {isExpanded ? "Show less" : "Read more"}
            </Button>
          </div>
        )}
      </div>

      {fact.source ? (
        <div className={`flex items-center gap-2 pt-2 border-t ${categoryStyles.textColorClassName}`}>
          {fact.source.map(({ name, url }, index) => (
            <a
              href={url}
              target="_blank"
              className="p-0 h-auto text-sm hover-elevate reference-link"
              data-testid={`button-source-${fact.id}`}
            >
              {name}
            </a>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
