import { configure, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Proteins from "./Proteins";
import { getFlag } from "../../utils/getFlag";

configure({ testIdAttribute: "data-test-id" });

vi.mock("../../utils/getFlag", () => ({
  getFlag: vi.fn(),
}));

const mockGetFlag = vi.mocked(getFlag);
describe("Proteins", () => {
  it("checking the correct data-test-id", () => {
    render(<Proteins value={222} mealType="breakfast" />);

    expect(screen.getByTestId("proteins")).toBeInTheDocument();
  });
  it("renders Proteins amount", () => {
    render(<Proteins value={222} mealType="breakfast" />);

    expect(screen.getByText("Proteins")).toBeInTheDocument();
    const proteins = screen.getByTestId("proteins");
    expect(proteins).toHaveTextContent("222.00");
  });
  it("renders Proteins amount with decimals", () => {
    render(<Proteins value={222.22} mealType="breakfast" />);

    expect(screen.getByText("Proteins")).toBeInTheDocument();
    const proteins = screen.getByTestId("proteins");
    expect(proteins).toHaveTextContent("222.22");
  });

  it("renders Proteins amount with decimals rounded", () => {
    render(<Proteins value={222.2222222} mealType="breakfast" />);

    expect(screen.getByText("Proteins")).toBeInTheDocument();
    const proteins = screen.getByTestId("proteins");
    expect(proteins).toHaveTextContent("222.22");
  });
  it("renders Proteins amount with decimals rounded with .229999 after decimals", () => {
    render(<Proteins value={222.22999999} mealType="breakfast" />);

    expect(screen.getByText("Proteins")).toBeInTheDocument();
    const proteins = screen.getByTestId("proteins");
    expect(proteins).toHaveTextContent("222.23");
  });
  it("renders Proteins amount with decimals rounded with .999999 after decimals", () => {
    render(<Proteins value={222.99999999} mealType="breakfast" />);

    expect(screen.getByText("Proteins")).toBeInTheDocument();
    const proteins = screen.getByTestId("proteins");
    expect(proteins).toHaveTextContent("223.00");
  });
  it("renders Proteins amount with decimals rounded with .99 after decimals (user input .99)", () => {
    render(<Proteins value={222.99} mealType="breakfast" />);

    expect(screen.getByText("Proteins")).toBeInTheDocument();
    const proteins = screen.getByTestId("proteins");
    expect(proteins).toHaveTextContent("222.99");
  });

  it("get Flag return that high flag, so data-flag became low", () => {
    mockGetFlag.mockReturnValue("low");
    render(<Proteins value={222.99} mealType="breakfast" />);

    expect(screen.getByText("Proteins")).toBeInTheDocument();
    const proteinsRow = screen.getByTestId("proteins").closest("[data-flag]");
    expect(proteinsRow).toHaveAttribute("data-flag", "low");
  });
});
