import { configure, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Calories from "./Calories";
import { getFlag } from "../../utils/getFlag";

configure({ testIdAttribute: "data-test-id" });

vi.mock("../../utils/getFlag", () => ({
  getFlag: vi.fn(),
}));

const mockGetFlag = vi.mocked(getFlag);
describe("Calories", () => {
  it("checking the correct data-test-id", () => {
    render(<Calories value={222} mealType="breakfast" />);
    
    expect(screen.getByTestId("calories")).toBeInTheDocument();
  });
  it("renders calories amount", () => {
    render(<Calories value={222} mealType="breakfast" />);

    expect(screen.getByText("Calories")).toBeInTheDocument();
    const calories = screen.getByTestId("calories");
    expect(calories).toHaveTextContent("222.00");
  });
  it("renders calories amount with decimals", () => {
    render(<Calories value={222.22} mealType="breakfast" />);

    expect(screen.getByText("Calories")).toBeInTheDocument();
    const calories = screen.getByTestId("calories");
    expect(calories).toHaveTextContent("222.22");
  });

  it("renders calories amount with decimals rounded", () => {
    render(<Calories value={222.2222222} mealType="breakfast" />);

    expect(screen.getByText("Calories")).toBeInTheDocument();
    const calories = screen.getByTestId("calories");
    expect(calories).toHaveTextContent("222.22");
  });
  it("renders calories amount with decimals rounded with .229999 after decimals", () => {
    render(<Calories value={222.22999999} mealType="breakfast" />);

    expect(screen.getByText("Calories")).toBeInTheDocument();
    const calories = screen.getByTestId("calories");
    expect(calories).toHaveTextContent("222.23");
  });
  it("renders calories amount with decimals rounded with .999999 after decimals", () => {
    render(<Calories value={222.99999999} mealType="breakfast" />);

    expect(screen.getByText("Calories")).toBeInTheDocument();
    const calories = screen.getByTestId("calories");
    expect(calories).toHaveTextContent("223.00");
  });
  it("renders calories amount with decimals rounded with .99 after decimals (user input .99)", () => {
    render(<Calories value={222.99} mealType="breakfast" />);

    expect(screen.getByText("Calories")).toBeInTheDocument();
    const calories = screen.getByTestId("calories");
    expect(calories).toHaveTextContent("222.99");
  });

  it("get Flag return that high flag, so data-flag became high", () => {
    mockGetFlag.mockReturnValue("high");
    render(<Calories value={222.99} mealType="breakfast" />);

    expect(screen.getByText("Calories")).toBeInTheDocument();
    const caloriesRow = screen.getByTestId("calories").closest("[data-flag]");
    expect(caloriesRow).toHaveAttribute("data-flag", "high");
  });
});
