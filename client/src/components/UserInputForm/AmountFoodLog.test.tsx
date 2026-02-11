import { describe, it, vi, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import AmountFoodLog from "./AmountFoodLog";
describe("Amount Food log", () => {
  it("calls onChange with valid value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn<(value: string, error: string | null) => void>();

    render(<AmountFoodLog value="" error={null} onChange={onChange} />);
    const input = screen.getByPlaceholderText("e.g 100");
    await user.click(input);
    await user.paste("23");

    expect(onChange).toHaveBeenCalledWith("23", null);
  });
  it("show error if negative value and calls onChange 1 time", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn<(value: string, error: string | null) => void>();

    render(<AmountFoodLog value="" error={null} onChange={onChange} />);
    const input = screen.getByPlaceholderText("e.g 100");
    await user.click(input);
    await user.paste("-5");

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      "-5",
      "Food amount log cannot be negative",
    );
  });
  it("show error if value more then 1000", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn<(value: string, error: string | null) => void>();

    render(<AmountFoodLog value="" error={null} onChange={onChange} />);
    const input = screen.getByPlaceholderText("e.g 100");
    await user.click(input);
    await user.paste("10001");

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      "10001",
      "The Food Amount must be between 1 and 1000 (1 kg)",
    );
  });

  it("the label is visible for user", () => {
    const onChange = vi.fn();

    render(<AmountFoodLog value="" error={null} onChange={onChange} />);

    expect(screen.getByLabelText("Food Amount (max 1000 gr)"));
  });
});
