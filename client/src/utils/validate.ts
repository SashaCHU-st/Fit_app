/** validates Food amount, Food Log, and meal type */

export const validateAmountFoodLogInput = (raw: string): string | null => {
  if (raw === "")
    return "Food amount cannot be empty. Please start to type e.g 10";
  const num = Number(raw);
  if (num < 0) return "Food amount log cannot be negative";
  if (num < 1 || num > 1000)
    return "The Food Amount must be between 1 and 1000 (1 kg)";
  return null;
};

export const validateFoodLogInput = (raw: string): string | null => {
  const value = raw.trim();
  if (value === "") {
    return "Food log cannot be empty. Please enter e.g. banana";
  }
  return null;
};

export const validateMealType = (raw: string): string | null => {
  if (!raw || raw === "none") {
    return "Please select a meal type";
  }
  return null;
};
