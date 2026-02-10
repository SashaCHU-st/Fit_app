import { beforeEach, describe, it, vi, expect } from "vitest";
import { calculateNutrition } from "../../../utils/calculateNutrition";
import { renderHook, act } from "@testing-library/react";
import { useUserInputForm } from "./useUserInputForm";
import { initialEmptyErrors, initialForm } from "../model/initialState";
import type { NutritionBreakdownData } from "../../../types/form";

vi.mock("../../../utils/calculateNutrition", () => ({
  calculateNutrition: vi.fn(),
}));
const nutrition: NutritionBreakdownData = {
  calories: 100,
  proteins: 10,
  carbohydrates: 20,
  fat: 5,
  amountFoodLogBreakDown: 200,
  mealType: "breakfast",
  foodLogInput: "banana",
};

const mockCalculateNutrition = vi.mocked(calculateNutrition);
describe(" useUserinput hook", () => {
  beforeEach(() => {});
  it("Checking the initial form states", () => {
    const { result } = renderHook(() =>
      useUserInputForm({
        onSubmit: vi.fn(),
        onChangeForm: vi.fn(),
        onInvalidSubmit: vi.fn(),
      }),
    );
    expect(result.current.userForm).toEqual(initialForm);
    expect(result.current.userFormError).toEqual(initialEmptyErrors);
    expect(result.current.alert).toBe("");
    expect(result.current.isLoading).toBe(false);
  });

  it("handleChange clears alert, calls onChangeForm", () => {
    const onChangeForm = vi.fn();
    const { result } = renderHook(() =>
      useUserInputForm({
        onSubmit: vi.fn(),
        onChangeForm: onChangeForm,
        onInvalidSubmit: vi.fn(),
      }),
    );

    act(() => {
      result.current.handleChange(
        {
          foodLogInput: "banana",
          mealType: "breakfast",
        },
        { foodLogError: null, mealTypeError: null },
      );
    });

    expect(result.current.alert).toBe("");
    expect(result.current.isLoading).toBe(false);
    expect(result.current.userForm).toEqual({
      ...initialForm,
      foodLogInput: "banana",
      mealType: "breakfast",
    });
    expect(result.current.userFormError).toEqual({
      ...initialEmptyErrors,
      foodLogError: null,
      mealTypeError: null,
    });
    expect(onChangeForm).toHaveBeenCalledTimes(1);
  });

  it("handleSubmit submit form when form is valid", async () => {
    const onSubmit = vi.fn();

    const { result } = renderHook(() =>
      useUserInputForm({
        onSubmit,
        onChangeForm: vi.fn(),
        onInvalidSubmit: vi.fn(),
      }),
    );

    act(() => {
      result.current.handleChange(
        {
          foodLogInput: "banana",
          amountFoodLogInput: "200",
          mealType: "breakfast",
        },
        {
          foodLogError: null,
          mealTypeError: null,
        },
      );
    });

    mockCalculateNutrition.mockResolvedValue(nutrition);

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(mockCalculateNutrition).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(nutrition);
  });
});
