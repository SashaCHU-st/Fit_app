import { configure, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NutritionBreakdown from "./NutritionBreakdown";

configure({ testIdAttribute: "data-test-id" });

const updateAlertText =
  "Attention! The Nutrition Breakdown values have not been updated because the inputs have changed. Please click the Calculate Food Nutrition button again to get the updated values.";

const validForm = {
  update: false,
  calories: 100,
  carbohydrates: 20,
  proteins: 10,
  fat: 15,
  amountFoodLogBreakDown: 200,
  mealType: "breakfast",
  foodLogInput: "banana",
};

const setup = (overrides = {}) =>
  render(<NutritionBreakdown {...validForm} {...overrides} />);

describe("Nutrition Breakdown", () => {
  it("Checking if all titles re on place", () => {
    setup();

    expect(screen.getByTestId(/amountFoodLogBreakdown/i)).toBeInTheDocument();
    expect(screen.getByTestId(/calories/i)).toBeInTheDocument();
    expect(screen.getByTestId(/proteins/i)).toBeInTheDocument();
    expect(screen.getByTestId(/fat/i)).toBeInTheDocument();
    expect(screen.getByTestId(/carbohydrates/i)).toBeInTheDocument();

    expect(screen.queryByText(updateAlertText)).not.toBeInTheDocument();

    expect(
      screen.queryByText("Food with such as name"),
    ).not.toBeInTheDocument();
  });

  it("Shows Update alert when something changed in the form, update = true", () => {
    setup({ update: true, calories: 200 });

    expect(screen.queryByText(updateAlertText)).toBeInTheDocument();
  });

  it("Checking if nutrition got correct values, and data-row-value is correct", () => {
    render(<NutritionBreakdown {...validForm} />);

    expect(screen.getByText("Food amount (in grams)")).toBeInTheDocument();
    const foodAmount = screen.getByTestId("amountFoodLogBreakdown");
    expect(foodAmount).toHaveAttribute("data-raw-value", "20000");

    expect(screen.getByText("Calories")).toBeInTheDocument();
    const calories = screen.getByTestId("calories");
    expect(calories).toHaveAttribute("data-raw-value", "10000");

    expect(screen.getByText("Proteins")).toBeInTheDocument();
    const proteins = screen.getByTestId("proteins");
    expect(proteins).toHaveAttribute("data-raw-value", "1000");

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fat = screen.getByTestId("fat");
    expect(fat).toHaveAttribute("data-raw-value", "1500");

    expect(screen.getByText("Carbohydrates")).toBeInTheDocument();
    const carbohydrates = screen.getByTestId("carbohydrates");
    expect(carbohydrates).toHaveAttribute("data-raw-value", "2000");
  });

  it("each of the element has own test-id", () => {
    render(<NutritionBreakdown {...validForm} />);

    expect(screen.getByTestId("amountFoodLogBreakdown")).toBeInTheDocument();
    expect(screen.getByTestId("calories")).toBeInTheDocument();
    expect(screen.getByTestId("proteins")).toBeInTheDocument();
    expect(screen.getByTestId("fat")).toBeInTheDocument();
    expect(screen.getByTestId("carbohydrates")).toBeInTheDocument();
  });
});
