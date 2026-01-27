import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FoodLog from "./FoodLog";

describe("Food Log", () => {
  it("calls on change when valid input", () => {
    const onChange = vi.fn<(value: string, error: string | null) => void>();

    render(<FoodLog value="" error={null} onChange={onChange} />);

    const input = screen.getByPlaceholderText("e.g banana");

    fireEvent.change(input, { target: { value: "banana" } });
    expect(onChange).toHaveBeenCalledWith("banana", null);
  });

  it("returns error when user wrote something and removed", () => {
    const onChange = vi.fn<(value: string, error: string | null) => void>();

    const { rerender } = render(
      <FoodLog value="" error={null} onChange={onChange} />,
    );

    const input = screen.getByPlaceholderText("e.g banana");

    fireEvent.change(input, { target: { value: "banana" } });
    expect(onChange).toHaveBeenCalledWith("banana", null);

    rerender(<FoodLog value="a" error="" onChange={onChange} />);
    fireEvent.change(input, { target: { value: "" } });
    expect(onChange).toHaveBeenLastCalledWith(
      "",
      "Food log cannot be empty. Please enter e.g. banana",
    );
  });
  it("the label is visible for user", () => {
    const onChange = vi.fn();

    render(<FoodLog value="" error={null} onChange={onChange} />);

    expect(screen.getByLabelText("Food Log"));
  });
});
