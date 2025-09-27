import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoryColor(category: string) {
  switch (category) {
    case "achievement":
      return {
        backgroundColor: "hsl(var(--chart-2))",
        color: "hsl(var(--primary-foreground))",
        classNames: "bg-accent text-accent-foreground",
        textColorClassName: "text-chart-2"
      };
    case "satirical":
      return {
        backgroundColor: "hsl(var(--destructive))",
        color: "hsl(var(--primary-foreground))",
        classNames: "bg-destructive text-destructive-foreground",
        textColorClassName: "text-destructive"

      };
    case "historical":
      return {
        backgroundColor: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))",
        classNames: "bg-primary text-primary-foreground",
        textColorClassName: "text-primary"

      };
    case "statistical":
      return {
        backgroundColor: "hsl(var(--chart-3))",
        color: "hsl(var(--primary-foreground))",
        classNames: "bg-chart-3 text-primary-foreground",
        textColorClassName: "text-chart-3"

      };
    case "cultural":
      return {
        backgroundColor: "hsl(var(--chart-5))",
        color: "hsl(var(--primary-foreground))",
        classNames: "bg-chart-5 text-primary-foreground",
        textColorClassName: "text-chart-5"

      };
    default:
      return {
        backgroundColor: "hsl(var(--secondary))",
        color: "hsl(var(--primary-foreground))",
        classNames: "bg-secondary text-secondary-foreground",
        textColorClassName: "text-secondary"

      };
  }
}
