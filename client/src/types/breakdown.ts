export interface BreakdownProps {
  value: number;
  flag: string;
}

export type Flag = "low" | "good" | "high";
export interface SummaryProps {
  sum: [string, Flag][];
  mealType: string;
}
