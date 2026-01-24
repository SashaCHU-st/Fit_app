import { configure, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AmountFoodLogBreakDown from "./AmountFoodLogBreakDown";

configure({ testIdAttribute: "data-test-id" });
describe("Amount Food Breakdown", () => {
  it("checking the correct data-test-id", () => {
    render(<AmountFoodLogBreakDown value={222} />);

    expect(screen.getByTestId("amountFoodLogBreakdown")).toBeInTheDocument();
  });
  it("renders food amount", () => {
    render(<AmountFoodLogBreakDown value={111} />);

    expect(screen.getByText("Food amount (in grams)")).toBeInTheDocument();
    const foodAmount = screen.getByTestId("amountFoodLogBreakdown");
    expect(foodAmount).toHaveTextContent("111");
  });
  it("renders food amount with decimals", () => {
    render(<AmountFoodLogBreakDown value={111.11} />);

    expect(screen.getByText("Food amount (in grams)")).toBeInTheDocument();
    const foodAmount = screen.getByTestId("amountFoodLogBreakdown");
    expect(foodAmount).toHaveTextContent("111.11");
  });

  it("checking data-raw-value in correct format and rounded", () => {
    render(<AmountFoodLogBreakDown value={111.111111} />);

    expect(screen.getByText("Food amount (in grams)")).toBeInTheDocument();
    const foodAmount = screen.getByTestId("amountFoodLogBreakdown");
    expect(foodAmount).toHaveTextContent("111.11");
    expect(foodAmount).toHaveAttribute("data-raw-value", "11111");
  });

  it("checking data-raw-value in correct format and rounded with .9999", () => {
    render(<AmountFoodLogBreakDown value={111.99999999} />);

    expect(screen.getByText("Food amount (in grams)")).toBeInTheDocument();
    const foodAmount = screen.getByTestId("amountFoodLogBreakdown");
    expect(foodAmount).toHaveTextContent("112.00");
    expect(foodAmount).toHaveAttribute("data-raw-value", "11200");
  });

  it("checking data-raw-value in correct format and rounded with .99", () => {
    render(<AmountFoodLogBreakDown value={111.99} />);

    expect(screen.getByText("Food amount (in grams)")).toBeInTheDocument();
    const foodAmount = screen.getByTestId("amountFoodLogBreakdown");
    expect(foodAmount).toHaveTextContent("111.99");
    expect(foodAmount).toHaveAttribute("data-raw-value", "11199");
  });
});
