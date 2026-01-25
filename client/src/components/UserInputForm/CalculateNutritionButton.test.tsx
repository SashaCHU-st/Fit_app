import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CalculateNutritionButton from "./CalculateNutritionButton";

describe("Calculate Nutrition Food button", () => {
  it("button should be active from beginning and visible", () => {
    render(<CalculateNutritionButton loading={false} />);

    const button = screen.getByRole("button", {
      name: /Check Food Nutrition/i,
    });

    expect(button).toBeEnabled();
    expect(button).toHaveAttribute("type", "submit");
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
  });

  it("button loading after press", () => {
    render(<CalculateNutritionButton loading={true} />);

    const button = screen.getByRole("button", {
      name: /Checking/i,
    });

    expect(button).toBeDisabled();
  });
});
