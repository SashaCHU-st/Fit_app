import { configure, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Fat from "./Fat";
import { getFlag } from "../../utils/getFlag";

configure({ testIdAttribute: "data-test-id" });

vi.mock("../../utils/getFlag", () => ({
  getFlag: vi.fn(),
}));

const mockGetFlag = vi.mocked(getFlag);
describe("Fat", () => {
  it("checking the correct data-test-id", () => {
    render(<Fat value={222} mealType="breakfast" />);

    expect(screen.getByTestId("fat")).toBeInTheDocument();
  });
  it("renders calories value", () => {
    render(<Fat value={222} mealType="breakfast" />);

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fat = screen.getByTestId("fat");
    expect(fat).toHaveAttribute("data-test-id", "fat");
  });
  it("renders Fat value", () => {
    render(<Fat value={222} mealType="breakfast" />);

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fat = screen.getByTestId("fat");
    expect(fat).toHaveTextContent("222.00");
  });
  it("renders Fat value with decimals", () => {
    render(<Fat value={222.22} mealType="breakfast" />);

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fat = screen.getByTestId("fat");
    expect(fat).toHaveTextContent("222.22");
  });

  it("renders Fat value with decimals rounded", () => {
    render(<Fat value={222.2222222} mealType="breakfast" />);

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fat = screen.getByTestId("fat");
    expect(fat).toHaveTextContent("222.22");
  });
  it("renders Fat value with decimals rounded with .229999 after decimals", () => {
    render(<Fat value={222.22999999} mealType="breakfast" />);

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fat = screen.getByTestId("fat");
    expect(fat).toHaveTextContent("222.23");
  });
  it("renders Fat value with decimals rounded with .999999 after decimals", () => {
    render(<Fat value={222.99999999} mealType="breakfast" />);

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fat = screen.getByTestId("fat");
    expect(fat).toHaveTextContent("223.00");
  });
  it("renders Fat value with decimals rounded with .99 after decimals (user input .99)", () => {
    render(<Fat value={222.99} mealType="breakfast" />);

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fat = screen.getByTestId("fat");
    expect(fat).toHaveTextContent("222.99");
  });

  it("get the flag,if it returns a low flag, then data-flag becomes low.", () => {
    mockGetFlag.mockReturnValue("low");
    render(<Fat value={222.99} mealType="breakfast" />);

    expect(screen.getByText("Fat")).toBeInTheDocument();
    const fatRow = screen.getByTestId("fat").closest("[data-flag]");
    expect(fatRow).toHaveAttribute("data-flag", "low");
  });
});
