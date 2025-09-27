import { Card } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { CATEGORIES } from "@/lib/constants";


export default function About() {
  return (
    <Card className="p-6 flex-1 basis-2/3 bg-card text-foreground border border-2 border-popover">
      <div className="text-center space-y-3">
        <h3 className="font-semibold text-lg underline decoration-wavy">About Tangible India</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
          India is diverse in culture and religion not only from the rest of the world but among the different regions from west to east. Each number tells a story - historical,
          cultural, satirical, or statistical.
          Discover the official facts that make India unique while some unofficial goofed up numbers shows it's real face hidden by the media. 
        </p>
        <div className="flex justify-center gap-2 flex-wrap ">
          {CATEGORIES.map(({text}) => (
            <Button key={text} className="text-xs bg-secondary text-foreground">
              {text}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
