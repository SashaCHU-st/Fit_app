import { configure, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Carbohydrates from "./Carbohydrates";
import { getFlag } from "../../utils/getFlag";

configure({ testIdAttribute: "data-test-id" });

vi.mock("../../utils/getFlag", () => ({
  getFlag: vi.fn(),
}));

const mockGetFlag = vi.mocked(getFlag);
describe("Carbohydrates", () => {
  it("checking the correct data-test-id", () => {
    render(<Carbohydrates value={222} flag="low" />);

    expect(screen.getByTestId("carbohydrates")).toBeInTheDocument();
  });
  it("renders Carbohydrates value", () => {
    render(<Carbohydrates value={222} flag="low" />);

    expect(screen.getByText("Carbohydrates")).toBeInTheDocument();
    const carbohydrates = screen.getByTestId("carbohydrates");
    expect(carbohydrates).toHaveTextContent("222.00");
  });
  it("renders Carbohydrates value with decimals", () => {
    render(<Carbohydrates value={222.22} flag="low" />);

    expect(screen.getByText("Carbohydrates")).toBeInTheDocument();
    const carbohydrates = screen.getByTestId("carbohydrates");
    expect(carbohydrates).toHaveTextContent("222.22");
  });

  it("renders Carbohydrates value with decimals rounded", () => {
    render(<Carbohydrates value={222.2222222} flag="low" />);

    expect(screen.getByText("Carbohydrates")).toBeInTheDocument();
    const carbohydrates = screen.getByTestId("carbohydrates");
    expect(carbohydrates).toHaveTextContent("222.22");
  });
  it("renders Carbohydrates value with decimals rounded with .229999 after decimals", () => {
    render(<Carbohydrates value={222.22999999} flag="low" />);

    expect(screen.getByText("Carbohydrates")).toBeInTheDocument();
    const carbohydrates = screen.getByTestId("carbohydrates");
    expect(carbohydrates).toHaveTextContent("222.23");
  });
  it("renders Carbohydrates value with decimals rounded with .999999 after decimals", () => {
    render(<Carbohydrates value={222.99999999} flag="low" />);

    expect(screen.getByText("Carbohydrates")).toBeInTheDocument();
    const carbohydrates = screen.getByTestId("carbohydrates");
    expect(carbohydrates).toHaveTextContent("223.00");
  });
  it("renders Carbohydrates value with decimals rounded with .99 after decimals (user input .99)", () => {
    render(<Carbohydrates value={222.99} flag="low" />);

    expect(screen.getByText("Carbohydrates")).toBeInTheDocument();
    const carbohydrates = screen.getByTestId("carbohydrates");
    expect(carbohydrates).toHaveTextContent("222.99");
  });

  it("get the flag, if it returns a low flag, then data-flag becomes low", () => {
    mockGetFlag.mockReturnValue("low");
    render(<Carbohydrates value={222.99} flag="low" />);

    expect(screen.getByText("Carbohydrates")).toBeInTheDocument();
    const carbohydratesRow = screen
      .getByTestId("carbohydrates")
      .closest("[data-flag]");
    expect(carbohydratesRow).toHaveAttribute("data-flag", "low");
  });
});
