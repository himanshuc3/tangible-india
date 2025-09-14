import NumberDisplay from '../NumberDisplay'
import type { Fact } from '@shared/schema'

export default function NumberDisplayExample() {
  const mockFact: Fact = {
    id: "1",
    number: 0,
    title: "The Invention of Zero",
    description: "Aryabhatta, the great Indian mathematician and astronomer (476-550 CE), is credited with the invention of zero as both a placeholder and a number. This revolutionary concept transformed mathematics globally, making complex calculations possible and laying the foundation for modern computing and digital technology.",
    category: "historical",
    source: "Indian Mathematical Heritage",
    isSpecial: true
  };

  return <NumberDisplay fact={mockFact} />
}