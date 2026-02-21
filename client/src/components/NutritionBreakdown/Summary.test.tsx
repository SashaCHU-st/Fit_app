import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Summary from "./Summary";
import { flagList } from "../../utils/flagList";
import type { SummaryProps } from "../../types/breakdown";

vi.mock("../../utils/flagList", () => ({
  flagList: vi.fn(),
}));

const mockFlagList = vi.mocked(flagList);
const validForm: SummaryProps = {
  mealType: "breakfast",
  sum: [
    ["calories", "low"],
    ["proteins", "good"],
    ["fat", "low"],
    ["carbs", "low"],
  ],
};

describe("Summary", () => {
  it("renders the meal type correctly", () => {
    mockFlagList.mockReturnValue({
      lowList: "",
      highList: "",
    });
    render(<Summary {...validForm} />);

    expect(screen.getByText("For breakfast:")).toBeInTheDocument();
  });

  it("if all nutrients are within the good range, show a message: You’ve made a great choice for today.", () => {
    mockFlagList.mockReturnValue({
      lowList: "",
      highList: "",
    });
    render(<Summary {...validForm} />);

    expect(screen.getByText(/For breakfast:/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You have a great choice for today/i),
    ).toBeInTheDocument();
  });

  it("when the summary flag returns low, display a message indicating that some element is low, and gives advice", () => {
    mockFlagList.mockReturnValue({
      lowList: "fat",
      highList: "",
    });

    render(<Summary {...validForm} />);
    expect(screen.getByText(/You are low on/i)).toBeInTheDocument();
  });
  it("when the summary flag returns low, display a message indicating that some element is low, and gives advice (different element from previous test)", () => {
    mockFlagList.mockReturnValue({
      lowList: "proteins",
      highList: "",
    });

    render(<Summary {...validForm} />);
    expect(screen.getByText(/You are low on/i)).toBeInTheDocument();
    expect(screen.getByText(/protein/i)).toBeInTheDocument();
  });
  it("when the summary flag returns low and high, display a message indicating that some element is low and high, shows both messages", () => {
    mockFlagList.mockReturnValue({
      lowList: "proteins",
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
  it("when summary flag does not return high list, message is not appears", () => {
    mockFlagList.mockReturnValue({
      lowList: "protein",
      highList: "",
    });

    render(<Summary {...validForm} />);
    expect(
      screen.queryByText(/it would be better to reduce/i),
    ).not.toBeInTheDocument();
  });
  it("summary Flag will be called with correct values", () => {
    mockFlagList.mockReturnValue({
      lowList: "protein",
      highList: "",
    });
    render(<Summary {...validForm} />);

    expect(mockFlagList).toHaveBeenCalledWith(validForm.sum);
  });
});
