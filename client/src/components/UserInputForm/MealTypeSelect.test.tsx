import { render, screen, configure } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import MealTypeSelect from "./MealTypeSelect";

configure({ testIdAttribute: "data-test-id" });
describe("Meal Type Select", () => {
  it("selects meal type", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<MealTypeSelect value="" error={null} onChange={onChange} />);

    const select = screen.getByRole("combobox", {
      name: /meal type/i,
    });

    await user.selectOptions(select, "breakfast");
    expect(onChange).toHaveBeenCalledWith("breakfast", null);
  });

  it("the label is visible for user", () => {
    const onChange = vi.fn();

    render(<MealTypeSelect value="" error={null} onChange={onChange} />);

    expect(screen.getByLabelText("Meal Type"));
  });
});
