import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Summary from "./Summary";
import { summaryFlags } from "../../utils/summaryFlags";

vi.mock("../../utils/summaryFlags", () => ({
  summaryFlags: vi.fn(),
}));

const mockSummaryFlag = vi.mocked(summaryFlags);
const validForm = {
  mealType: "breakfast",
  calories: 200,
  proteins: 100,
  carbohydrates: 50,
  fat: 20,
};

describe("Summary", () => {
  it("renders the meal type correctly", () => {
    mockSummaryFlag.mockReturnValue({
      low: [],
      lowList: "",
      high: [],
      highList: "",
    });
    render(<Summary {...validForm} />);

    expect(screen.getByText("For breakfast:")).toBeInTheDocument();
  });

  it("if all nutritions within the good range, show message that You have a great choice for today", () => {
    mockSummaryFlag.mockReturnValue({
      low: [],
      lowList: "",
      high: [],
      highList: "",
    });
    render(<Summary {...validForm} />);

    expect(screen.getByText(/For breakfast:/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You have a great choice for today/i),
    ).toBeInTheDocument();
  });

  it("when summary flag returns low, then appear message about that some element in low", () => {
    mockSummaryFlag.mockReturnValue({
      low: ["fat"],
      lowList: "fat",
      high: [],
      highList: "",
    });

    render(<Summary {...validForm} />);
    expect(screen.getByText(/You are low on/i)).toBeInTheDocument();
  });
  it("when summary flag returns low, then appear message about that some element in low", () => {
    mockSummaryFlag.mockReturnValue({
      low: ["proteins"],
      lowList: "proteins",
      high: [],
      highList: "",
    });

    render(<Summary {...validForm} />);
    expect(screen.getByText(/You are low on/i)).toBeInTheDocument();
    expect(screen.getByText(/protein/i)).toBeInTheDocument();
  });
  it("when summary flag returns low and high, then appear message about that some element in low and high", () => {
    mockSummaryFlag.mockReturnValue({
      low: ["proteins"],
      lowList: "proteins",
      high: ["fat"],
      highList: "fat",
    });

    render(<Summary {...validForm} />);
    expect(screen.getByText(/You are low on/i)).toBeInTheDocument();
    expect(screen.getByText(/protein/i)).toBeInTheDocument();
    expect(
      screen.getByText(/It would be better to reduce/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/fat/i)).toBeInTheDocument();
  });
  it("when summary Flag does not return high list, message is not appears", () => {
    mockSummaryFlag.mockReturnValue({
      low: ["protein"],
      lowList: "protein",
      high: [],
      highList: "",
    });

    render(<Summary {...validForm} />);
    expect(
      screen.queryByText(/it would be better to reduce/i),
    ).not.toBeInTheDocument();
  });
  it("summary will be called with correct values", () => {
    mockSummaryFlag.mockReturnValue({
      low: ["protein"],
      lowList: "protein",
      high: [],
      highList: "",
    });
    render(<Summary {...validForm} />);

    expect(mockSummaryFlag).toHaveBeenCalledWith({
      mealType: "breakfast",
      calories: 200,
      proteins: 100,
      carbohydrates: 50,
      fat: 20,
    });
  });
});
