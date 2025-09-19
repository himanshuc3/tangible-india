import { z } from "zod";

export const factSchema = z.object({
  id: z.string(),
  number: z.union([z.number(), z.string()]), // Supports both integers and decimals as strings
  title: z.string(),
  description: z.string(),
  category: z.enum([
    "historical",
    "satirical",
    "achievement",
    "statistical",
    "cultural",
  ]),
  source: z.string().optional(),
});

export type Fact = z.infer<typeof factSchema>;

export const searchQuerySchema = z.object({
  query: z.string().min(1),
  category: z.string().optional(),
});

export type SearchQuery = z.infer<typeof searchQuerySchema>;

// New type for grouped facts by number
export type NumberFacts = {
  number: number | string;
  facts: Fact[];
};
