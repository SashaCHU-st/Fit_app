import { test, expect } from "@playwright/test";

test.use({ testIdAttribute: "data-test-id" });

const nutritionData = {
  products: [
    {
      product_name: "banana",
      nutriments: {
        proteins_100g: 30.6,
        carbohydrates_100g: 50,
        fat_100g: 100,
        "energy-kcal_100g": 100,
      },
    },
  ],
};

test.describe("Nutrition Calculator", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/cgi/search.pl?search_terms=*", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        headers: { "access-control-allow-origin": "*" },
        body: JSON.stringify(nutritionData),
      }),
    );
  });
  test("loads nutrition calculator form", async ({ page }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await expect(
      page.getByRole("heading", { name: "Nutrition Food Calculator" }),
    ).toBeVisible();
    await expect(page.locator('[data-test-id="mealType"]')).toBeVisible();
    await expect(page.locator('[data-test-id="foodLog"]')).toBeVisible();
    await expect(page.locator('[data-test-id="foodAmount"]')).toBeVisible();
  });
  test("after filling the inputs with valid values and pressing the ‘Check Food Nutrition’ button, the Nutrition Breakdown will be displayed.", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await expect(
      page.getByRole("heading", { name: "Nutrition Food Calculator" }),
    ).toBeVisible();
    await page.getByTestId("foodLog").fill("banana");
    await page.getByTestId("foodAmount").fill("100");
    await page.getByTestId("mealType").selectOption("breakfast");
    await page.getByTestId("calculateFoodNutrition").click();

    await expect(
      page.getByRole("heading", {
        name: /Here’s your nutrition breakdown for/i,
      }),
    ).toBeVisible();
    const amountFoodLog = page
      .getByText("Food amount (in grams)", { exact: true })
      .locator("..");
    await expect(
      amountFoodLog.locator('[data-raw-value="10000"]'),
    ).toBeVisible();
    const calories = page.getByText("Calories", { exact: true }).locator("..");
    await expect(calories.locator('[data-raw-value="10000"]')).toBeVisible();
    const proteins = page.getByText("Proteins", { exact: true }).locator("..");
    await expect(proteins.locator('[data-raw-value="3060"]')).toBeVisible();
    const fat = page.getByText("Fat ", { exact: true }).locator("..");
    await expect(fat.locator('[data-raw-value="10000"]')).toBeVisible();
    const carbs = page
      .getByText("Carbohydrates ", { exact: true })
      .locator("..");
    await expect(carbs.locator('[data-raw-value="5000"]')).toBeVisible();
  });

  test("sets low/good/high flags based on meal recommendations", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await page.getByTestId("foodLog").fill("banana");
    await page.getByTestId("foodAmount").fill("100");
    await page.getByTestId("mealType").selectOption("breakfast");
    await page.getByTestId("calculateFoodNutrition").click();

    await expect(
      page.getByRole("heading", {
        name: /Here’s your nutrition breakdown for/i,
      }),
    ).toBeVisible();

    const caloriesRow = page
      .getByText("Calories", { exact: true })
      .locator("..");
    await expect(caloriesRow).toHaveAttribute("data-flag", "low");

    const proteinsRow = page
      .getByText("Proteins", { exact: true })
      .locator("..");
    await expect(proteinsRow).toHaveAttribute("data-flag", "good");

    const fatRow = page.getByText("Fat", { exact: true }).locator("..");
    await expect(fatRow).toHaveAttribute("data-flag", "high");

    const carbsRow = page
      .getByText("Carbohydrates", { exact: true })
      .locator("..");
    await expect(carbsRow).toHaveAttribute("data-flag", "good");
  });
  //sometimes fails...neede to fix
  // test("when the form is valid, nutrition values are displayed. If the user changes any input, an update alert is shown", async ({
  //   page,
  // }) => {
  //   await page.goto("http://localhost:5173/nutritionCalculator");

  //   await expect(
  //     page.getByRole("heading", { name: "Nutrition Food Calculator" }),
  //   ).toBeVisible();
  //   await page.getByTestId("foodLog").fill("banana");
  //   await page.getByTestId("foodAmount").fill("100");
  //   await page.getByTestId("mealType").selectOption("breakfast");
  //   await page.getByTestId("calculateFoodNutrition").click();

  //   await expect(
  //     page.getByRole("heading", {
  //       name: /Here’s your nutrition breakdown for/i,
  //     }),
  //   ).toBeVisible();
  //   const amountFoodLog = page
  //     .getByText("Food amount (in grams)", { exact: true })
  //     .locator("..");
  //   await expect(
  //     amountFoodLog.locator('[data-raw-value="10000"]'),
  //   ).toBeVisible();
  //   const calories = page.getByText("Calories", { exact: true }).locator("..");
  //   await expect(calories.locator('[data-raw-value="10000"]')).toBeVisible();
  //   const proteins = page.getByText("Proteins", { exact: true }).locator("..");
  //   await expect(proteins.locator('[data-raw-value="3060"]')).toBeVisible();
  //   const fat = page.getByText("Fat ", { exact: true }).locator("..");
  //   await expect(fat.locator('[data-raw-value="10000"]')).toBeVisible();
  //   const carbs = page
  //     .getByText("Carbohydrates ", { exact: true })
  //     .locator("..");
  //   await expect(carbs.locator('[data-raw-value="5000"]')).toBeVisible();

  //   await page.getByTestId("foodLog").fill("apple");
  //   await expect(
  //     page.getByText(
  //       "Attention! The Nutrition Breakdown values have not been updated because the inputs have changed. Please click the Calculate Food Nutrition button again to get the updated values.",
  //     ),
  //   ).toBeVisible();
  //   const button = page.getByTestId("calculateFoodNutrition");
  //   await expect(button).toBeEnabled();
  //   await expect(button).toHaveText("Check Food Nutrition");
  //   await button.click();
  //   await expect(
  //     page.getByText(
  //       "Attention! The Nutrition Breakdown values have not been updated because the inputs have changed. Please click the Calculate Food Nutrition button again to get the updated values.",
  //     ),
  //   ).not.toBeVisible();
  // });
  test("shows an error when all inputs are empty", async ({ page }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await page.getByTestId("foodLog").fill("");
    await page.getByTestId("foodAmount").fill("");
    await page.getByTestId("mealType").selectOption("none");

    await page.getByTestId("calculateFoodNutrition").click();
    await expect(page.getByText("Please select a meal type")).toBeVisible();
    await expect(
      page.getByText("Food log cannot be empty. Please enter e.g. banana"),
    ).toBeVisible();
    await expect(
      page.getByText(
        "Food amount cannot be empty. Please start to type e.g 10",
      ),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: /Here’s your nutrition breakdown for/i,
      }),
    ).not.toBeVisible();
  });
  test("after all values are filled, clicking the ‘Check Food Nutrition’ button disables it and shows a loading state", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await page.route("**/cgi/search.pl?search_terms=banana*", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        headers: { "access-control-allow-origin": "*" },
        body: JSON.stringify(nutritionData),
      });
    });

    await page.getByTestId("foodLog").fill("banana");
    await page.getByTestId("foodAmount").fill("20");
    await page.getByTestId("mealType").selectOption("breakfast");

    await page.getByTestId("calculateFoodNutrition").click();
    const button = page.getByTestId("calculateFoodNutrition");
    await expect(button).toBeDisabled();
    await expect(button).toContainText(/Checking/i);
  });

  test("renders legend labels for low/good/high", async ({ page }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await page.getByTestId("foodLog").fill("banana");
    await page.getByTestId("foodAmount").fill("100");
    await page.getByTestId("mealType").selectOption("breakfast");
    await page.getByTestId("calculateFoodNutrition").click();

    await expect(page.getByText("Low", { exact: true })).toBeVisible();
    await expect(page.getByText("Good", { exact: true })).toBeVisible();
    await expect(page.getByText("High", { exact: true })).toBeVisible();
  });

  test("the meal type error is cleared after a selection is made", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await page.getByTestId("calculateFoodNutrition").click();
    await expect(page.getByText("Please select a meal type")).toBeVisible();

    await page.getByTestId("mealType").selectOption("breakfast");
    await expect(page.locator("#mealType-helper")).toHaveText("");
  });
  /// sometime failing, need to fix
  test("flags are recalculated when the meal type changes", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await page.getByTestId("foodLog").fill("banana");
    await page.getByTestId("foodAmount").fill("100");
    await page.getByTestId("mealType").selectOption("breakfast");
    await page.getByTestId("calculateFoodNutrition").click();

    await expect(
      page.getByRole("heading", {
        name: /Here’s your nutrition breakdown for/i,
      }),
    ).toBeVisible();
    const carbsRowBefore = page
      .getByText("Carbohydrates", { exact: true })
      .locator("..");
    await expect(carbsRowBefore).toHaveAttribute("data-flag", "good");

    await page.getByTestId("mealType").selectOption("lunch");
    const button = page.getByTestId("calculateFoodNutrition");
    await expect(button).toBeEnabled();
    await expect(button).toHaveText("Check Food Nutrition");
    await button.click();

    await expect(
      page.getByRole("heading", {
        name: /Here’s your nutrition breakdown for/i,
      }),
    ).toBeVisible();

    const carbsRowAfter = page
      .getByText("Carbohydrates", { exact: true })
      .locator("..");
    await expect(carbsRowAfter).toHaveAttribute("data-flag", "low");
  });

  test("shows validation error for invalid amount and blocks breakdown", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await page.getByTestId("foodLog").fill("banana");
    await page.getByTestId("foodAmount").fill("0");
    await page.getByTestId("mealType").selectOption("breakfast");
    await page.getByTestId("calculateFoodNutrition").click();

    await expect(
      page.getByText("The Food Amount must be between 0.1 and 1000 (1 kg)"),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: /Here’s your nutrition breakdown for/i,
      }),
    ).not.toBeVisible();
  });
  test("shows an error in the food log when only spaces are entered", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/nutritionCalculator");

    await page.getByTestId("foodLog").fill("   ");
    await expect(
      page.getByText("Food log cannot be empty. Please enter e.g. banana"),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: /Here’s your nutrition breakdown for/i,
      }),
    ).not.toBeVisible();
  });
});
