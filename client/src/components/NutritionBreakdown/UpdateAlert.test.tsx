import { describe, it, expect } from "vitest";
import { render, screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import UpdateAlert from "./UpdateAlert";

const alert =
  "Attention! The Nutrition Breakdown values have not been updated because the inputs have changed. Please click the Calculate Food Nutrition button again to get the updated values.";

configure({ testIdAttribute: "data-test-id" });
describe("Update Alert", () => {
  it("shows an update alert when the user changes something in the form after submitting the previous form", () => {
    render(<UpdateAlert update={true} />);

    expect(screen.queryByText(alert)).toBeInTheDocument();
    expect(screen.getByTestId("updateAlert")).toHaveAttribute(
      "data-open",
      "true",
    );
  });

  it("when there is no update, then update alert is not visible", async () => {
    render(<UpdateAlert update={false} />);

    expect(screen.queryByText(alert)).not.toBeInTheDocument();
    expect(screen.getByTestId("updateAlert")).toHaveAttribute(
      "data-open",
      "false",
    );
  });
});