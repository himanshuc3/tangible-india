import { Badge } from "@/components/ui/badge";
import {
  Card,
} from '@progress/kendo-react-layout';

export default function About() {
  return (<Card className="p-6">
    <div className="text-center space-y-3">
      <h3 className="font-semibold text-lg">About Tangible India</h3>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Explore India through numbers, from Aryabhatta's revolutionary
        zero to the billion-plus population. Each number tells a story -
        historical, cultural, satirical, or statistical. Discover the
        tangible facts that make India unique!
      </p>
      <div className="flex justify-center gap-2 flex-wrap">
        {[
          "historical",
          "cultural",
          "achievement",
          "statistical",
          "satirical",
        ].map((category) => (
          <Badge key={category} variant="secondary" className="text-xs">
            {category}
          </Badge>
        ))}
      </div>
    </div>
  </Card>)
}