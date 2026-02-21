import type { Flag } from "../types/breakdown";

export const flagList = (sum: [string, Flag][]) => {
  const high = sum
    .filter((entry) => entry[1] === "high")
    .map((entry) => entry[0]);

  const low = sum
    .filter((entry) => entry[1] === "low")
    .map((entry) => entry[0]);

  return {
    lowList: low.join(", "),
    highList: high.join(", "),
  };
};
