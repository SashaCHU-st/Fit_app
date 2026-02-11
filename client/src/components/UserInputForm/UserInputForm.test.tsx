import { configure, render, screen, waitFor } from "@testing-library/react";
import { describe, vi, it, expect, beforeEach } from "vitest";
import { calculateNutrition } from "../../utils/calculateNutrition";
import UserInputForm from "./UserInputForm";
import userEvent from "@testing-library/user-event";

configure({ testIdAttribute: "data-test-id" });

vi.mock("../../utils/calculateNutrition", () => ({
  calculateNutrition: vi.fn(),
}));

const fillValidForm = async () => {
  await userEvent.type(screen.getByLabelText(/Food Log/i), "banana");
  await userEvent.type(
    screen.getByLabelText(/Food Amount \(max 1000 gr\)/i),
    "200",
  );
  await userEvent.selectOptions(
    screen.getByLabelText(/Meal Type/i),
    "breakfast",
  );
};

const mockCalculateNutrition = vi.mocked(calculateNutrition);
beforeEach(() => {
  mockCalculateNutrition.mockReset();
});
describe("User Input Form", () => {
  it("calls submit if all values are correct and valid", async () => {
    mockCalculateNutrition.mockResolvedValue({
      calories: 100,
      carbohydrates: 20,
      proteins: 10,
      fat: 15,
      amountFoodLogBreakDown: 200,
      mealType: "breakfast",
      foodLogInput: "banana",
    });

    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const onChangeForm = vi.fn();

    const user = userEvent.setup();
    render(
      <UserInputForm
        onSubmit={onSubmit}
        onInvalidSubmit={onInvalidSubmit}
        onChangeForm={onChangeForm}
      />,
    );

    await fillValidForm();
    await user.click(
      screen.getByRole("button", { name: /Check Food Nutrition/i }),
    );

    expect(mockCalculateNutrition).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    expect(onInvalidSubmit).not.toHaveBeenCalled();
    expect(onChangeForm).toHaveBeenCalled();
  });

  it("should not submit form if something wrong with calculations", async () => {
    mockCalculateNutrition.mockResolvedValue({} as never);

    const onSubmit = vi.fn();

    const user = userEvent.setup();
    render(
      <UserInputForm
        onSubmit={onSubmit}
        onInvalidSubmit={vi.fn()}
        onChangeForm={vi.fn()}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: /Check Food Nutrition/i }),
    );

    expect(mockCalculateNutrition).not.toHaveBeenCalled();
    expect(onSubmit).not.toHaveBeenCalled();
    expect(await screen.findAllByText(/cannot be empty./i)).toHaveLength(2);
  });
  it("show error when there no such as food", async () => {
    mockCalculateNutrition.mockRejectedValue(
      new Error("Food with such as name aaaaaaaaaaaaa not exist"),
    );

    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();

    render(
      <UserInputForm
        onChangeForm={vi.fn}
        onSubmit={onSubmit}
        onInvalidSubmit={onInvalidSubmit}
      />,
    );

    await fillValidForm();
    await userEvent.click(
      screen.getByRole("button", { name: /Check Food Nutrition/i }),
    );

    await waitFor(() =>
      expect(
        screen.getByText(/Food with such as name aaaaaaaaaaaaa not exist/i),
      ).toBeVisible(),
    );

    expect(onSubmit).not.toHaveBeenCalled();
    expect(onInvalidSubmit).toHaveBeenCalled();
  });

  it("should not submit because Food amount is negative", async () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const user = userEvent.setup();

    render(
      <UserInputForm
        onChangeForm={vi.fn}
        onSubmit={onSubmit}
        onInvalidSubmit={onInvalidSubmit}
      />,
    );

    await fillValidForm();
    await user.clear(screen.getByLabelText(/Food Amount \(max 1000 gr\)/i));
    await user.type(
      screen.getByLabelText(/Food Amount \(max 1000 gr\)/i),
      "-1",
    );
    await user.click(
      screen.getByRole("button", { name: /Check Food Nutrition/i }),
    );

    expect(
      await screen.findAllByText(/Food amount log cannot be negative/i),
    ).toHaveLength(1);

    expect(onSubmit).not.toHaveBeenCalled();
    expect(onInvalidSubmit).not.toHaveBeenCalled();
  });
  it("should not submit because Food amount more then 1000", async () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const user = userEvent.setup();

    render(
      <UserInputForm
        onChangeForm={vi.fn}
        onSubmit={onSubmit}
        onInvalidSubmit={onInvalidSubmit}
      />,
    );

    await fillValidForm();
    await user.clear(screen.getByLabelText(/Food Amount \(max 1000 gr\)/i));
    await user.type(
      screen.getByLabelText(/Food Amount \(max 1000 gr\)/i),
      "10001",
    );

    await user.click(
      screen.getByRole("button", { name: /Check Food Nutrition/i }),
    );

    expect(
      await screen.findAllByText(
        "The Food Amount must be between 1 and 1000 (1 kg)",
      ),
    ).toHaveLength(1);

    expect(onSubmit).not.toHaveBeenCalled();
    expect(onInvalidSubmit).not.toHaveBeenCalled();
  });
  it("onChangeForm should be called when some new input", async () => {
    const onChangeForm = vi.fn();

    render(
      <UserInputForm
        onChangeForm={onChangeForm}
        onInvalidSubmit={vi.fn()}
        onSubmit={vi.fn()}
      />,
    );

    await userEvent.type(screen.getByLabelText("Food Log"), "banana");

    expect(onChangeForm).toHaveBeenCalled();
  });

  it("does not call submit when all empty", async () => {
    const onSubmit = vi.fn();
    const onInvalidSubmit = vi.fn();
    const onChangeForm = vi.fn();

    render(
      <UserInputForm
        onSubmit={onSubmit}
        onChangeForm={onChangeForm}
        onInvalidSubmit={onInvalidSubmit}
      />,
    );

    await userEvent.selectOptions(screen.getByLabelText("Meal Type"), "none");

    await userEvent.clear(screen.getByLabelText("Food Log"));
    await userEvent.clear(screen.getByLabelText("Food Amount (max 1000 gr)"));

    await userEvent.click(
      screen.getByRole("button", { name: /Check Food Nutrition/i }),
    );

    expect(onSubmit).not.toHaveBeenCalled();
    expect(onInvalidSubmit).not.toHaveBeenCalled();
  });
  it("calls onInvalidSubmit when calculator throw error", async () => {
    mockCalculateNutrition.mockRejectedValue(new Error("server down"));
    const onInvalidSubmit = vi.fn();
    const onSubmit = vi.fn();

    render(
      <UserInputForm
        onChangeForm={vi.fn()}
        onSubmit={onSubmit}
        onInvalidSubmit={onInvalidSubmit}
      />,
    );

    await fillValidForm();
    await userEvent.click(
      screen.getByRole("button", { name: /Check Food Nutrition/i }),
    );

    expect(onInvalidSubmit).toHaveBeenCalled();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("onChangeForm called every time when inputs changes", async () => {
    const onChangeForm = vi.fn();

    render(
      <UserInputForm
        onChangeForm={onChangeForm}
        onSubmit={vi.fn()}
        onInvalidSubmit={vi.fn()}
      />,
    );

    await userEvent.type(screen.getByLabelText("Food Log"), "b");
    await userEvent.type(
      screen.getByLabelText("Food Amount (max 1000 gr)"),
      "3",
    );

    expect(onChangeForm).toHaveBeenCalledTimes(2);
    await userEvent.type(screen.getByLabelText("Food Log"), "b");
    await userEvent.type(
      screen.getByLabelText("Food Amount (max 1000 gr)"),
      "3",
    );

    expect(onChangeForm).toHaveBeenCalledTimes(4);
  });
  it("if the food log was empty and the user pressed the “Randomize food” button, the error message will disappear.", async () => {
    const onChangeForm = vi.fn();
    const onInvalidSubmit = vi.fn();
    const onSubmit = vi.fn();
    render(
      <UserInputForm
        onChangeForm={onChangeForm}
        onInvalidSubmit={onInvalidSubmit}
        onSubmit={onSubmit}
      />,
    );

    await fillValidForm();
    await userEvent.clear(screen.getByLabelText("Food Log"));

    expect(
      await screen.findByText(
        "Food log cannot be empty. Please enter e.g. banana",
      ),
    ).toBeVisible();

    await userEvent.click(
      screen.getByRole("button", { name: /Random Food /i }),
    );

    expect(
      screen.queryByText("Food log cannot be empty. Please enter e.g. banana"),
    ).not.toBeInTheDocument();
  });
});
