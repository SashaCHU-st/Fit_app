import { describe, it, expect } from "vitest";
import { render, screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import WarningAlert from "./WarningAlert";

configure({ testIdAttribute: "data-test-id" });
describe("Warning Alert", () => {
  it("When there is no such food", () => {
    render(
      <WarningAlert value="Food with such as name xxxxxxxxxxxxx not exist" />,
    );

    expect(
      screen.queryByText("Food with such as name xxxxxxxxxxxxx not exist"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("warning")).toHaveAttribute("data-open", "true");
  });

  it("When there is np error, then warning alert is not visible", async () => {
    render(<WarningAlert value="" />);

    expect(screen.getByTestId("warning")).toHaveAttribute("data-open", "false");
  });
});
