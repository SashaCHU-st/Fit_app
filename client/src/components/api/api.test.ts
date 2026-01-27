import { describe, it, expect, vi } from "vitest";
import { FoodData } from "./api";

describe("api fetch timeout", () => {
  it("handles fetch failure", async () => {
    globalThis.fetch = vi.fn(() => Promise.reject("Request timeout"));

    await expect(FoodData("test")).rejects.toThrow("Request timeout");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
