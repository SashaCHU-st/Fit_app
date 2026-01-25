import { describe, it, expect, vi, afterEach } from "vitest";
import { getRandomItem } from "./getRandomItem";

const randomFood = [
  "lasagna", //0
  "apple", //1
  "banana", //2
  "orange", //3
  "egg", //4
  "watermelon", //5
  "pork", //6
  "soup", //7
  "rice", //8
  "pasta", //9
  "juice", //10
  "milk", //11
  "yogurt", //12
  "bread", //13
  "pie", //14
  "potato", //15
  "carrot", //16
  "beetroot", //17
];

describe("Get random item", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("checking which value will return", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.8);

    //0.8 * 17 = 13.6 => 14 =>pie

    const item = getRandomItem(randomFood);

    expect(item).toBe("pie");
  });
  it("checking which value will return", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    //0 * 17 = 0 => 0 => lasagna

    const item = getRandomItem(randomFood);

    expect(item).toBe("lasagna");
  });
});
