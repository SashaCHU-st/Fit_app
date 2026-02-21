import { describe, expect, it } from "vitest";
import type { Flag } from "../types/breakdown";
import { flagList } from "./flagList";
describe("Flag list", () => {
  it("check how creating joined list for  low list", () => {
    const sum: [string, Flag][] = [
      ["calories", "low"],
      ["fat", "low"],
      ["carb", "low"],
      ["proteins", "low"],
    ];

    expect(flagList(sum)).toEqual({
      lowList: "calories, fat, carb, proteins",
      highList: "",
    });
  });

  it("when all in good will return empty lost of low and high", () => {
    const sum: [string, Flag][] = [
      ["calories", "good"],
      ["fat", "good"],
      ["carb", "good"],
      ["proteins", "good"],
    ];

    expect(flagList(sum)).toEqual({
      lowList: "",
      highList: "",
    });
  });

  it("return list of both", () => {
    const sum: [string, Flag][] = [
      ["calories", "low"],
      ["fat", "high"],
      ["carb", "low"],
      ["proteins", "good"],
    ];

    expect(flagList(sum)).toEqual({
      lowList: "calories, carb",
      highList: "fat",
    });
  });
});
