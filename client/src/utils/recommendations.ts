export interface RangeRule {
  min: number;
  max: number;
  flag: string | null;
}

export interface MealRecommendations {
  calories_ranges: RangeRule[];
  protein_ranges: RangeRule[];
  fat_ranges: RangeRule[];
  carbs_ranges: RangeRule[];
}

export const MEAL_RECOMMENDATIONS: Record<string, MealRecommendations> = {
  breakfast: {
    calories_ranges: [
      { min: 0, max: 400, flag: "low" },
      { min: 400, max: 500, flag: "ok" },
      { min: 500, max: 0, flag: "high" },
    ],
    protein_ranges: [
      { min: 0, max: 20, flag: "low" },
      { min: 20, max: 25, flag: "ok" },
      { min: 25, max: 35, flag: "good" },
      { min: 35, max: 0, flag: "high" },
    ],
    fat_ranges: [
      { min: 0, max: 15, flag: "low" },
      { min: 15, max: 25, flag: "ok" },
      { min: 25, max: 0, flag: "high" },
    ],
    carbs_ranges: [
      { min: 0, max: 40, flag: "low" },
      { min: 40, max: 60, flag: "ok" },
      { min: 60, max: 0, flag: "high" },
    ],
  },
  lunch: {
    calories_ranges: [
      { min: 0, max: 700, flag: "low" },
      { min: 700, max: 800, flag: "ok" },
      { min: 800, max: 0, flag: "high" },
    ],
    protein_ranges: [
      { min: 0, max: 30, flag: "low" },
      { min: 30, max: 35, flag: "ok" },
      { min: 35, max: 40, flag: "good" },
      { min: 40, max: 45, flag: "ok" },
      { min: 45, max: 0, flag: "high" },
    ],
    fat_ranges: [
      { min: 0, max: 20, flag: "low" },
      { min: 20, max: 30, flag: "ok" },
      { min: 30, max: 0, flag: "high" },
    ],
    carbs_ranges: [
      { min: 0, max: 70, flag: "low" },
      { min: 70, max: 100, flag: "ok" },
      { min: 100, max: 0, flag: "high" },
    ],
  },
  dinner: {
    calories_ranges: [
      { min: 0, max: 500, flag: "low" },
      { min: 500, max: 600, flag: "ok" },
      { min: 600, max: 0, flag: "high" },
    ],
    protein_ranges: [
      { min: 0, max: 30, flag: "low" },
      { min: 30, max: 40, flag: "ok" },
      { min: 40, max: 0, flag: "high" },
    ],
    fat_ranges: [
      { min: 0, max: 15, flag: "low" },
      { min: 15, max: 25, flag: "ok" },
      { min: 25, max: 0, flag: "high" },
    ],
    carbs_ranges: [
      { min: 0, max: 30, flag: "low" },
      { min: 30, max: 50, flag: "ok" },
      { min: 50, max: 0, flag: "high" },
    ],
  },
  snack: {
    calories_ranges: [
      { min: 0, max: 100, flag: "low" },
      { min: 100, max: 200, flag: "ok" },
      { min: 200, max: 0, flag: "high" },
    ],
    protein_ranges: [
      { min: 0, max: 10, flag: "low" },
      { min: 10, max: 20, flag: "ok" },
      { min: 20, max: 0, flag: "high" },
    ],
    fat_ranges: [
      { min: 0, max: 5, flag: "low" },
      { min: 5, max: 10, flag: "ok" },
      { min: 10, max: 0, flag: "high" },
    ],
    carbs_ranges: [
      { min: 0, max: 10, flag: "low" },
      { min: 10, max: 25, flag: "ok" },
      { min: 25, max: 0, flag: "high" },
    ],
  },
};
