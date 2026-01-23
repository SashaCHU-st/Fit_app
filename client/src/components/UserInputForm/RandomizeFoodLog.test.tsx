import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import RandomizeFoodLog from "./RandomizeFoodLog";
import { randomFoodLog } from "../../types/randomFoodLog";

describe("RandomizeFoodLog", () => {
  it("calls onRandomize with a random food value", async () => {
    const onRandomize = vi.fn();
    const user = userEvent.setup();

    render(<RandomizeFoodLog onRandomize={onRandomize} />);

    await user.click(screen.getByRole("button", { name: /Random Food :\)/i }));

    expect(onRandomize).toHaveBeenCalledTimes(1);
    const value = onRandomize.mock.calls[0][0];
    expect(randomFoodLog).toContain(value);
  });
});
