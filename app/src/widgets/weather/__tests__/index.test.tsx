import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import Weather from "../index";

describe("<Weather />", () => {
  test("renders without errors", () => {
    render(
      <Weather {...widgetProps} id="weather-mock-id" lat="52.17" lon="11.67" />
    );
    expect(
      screen.getByRole("TODO", { name: /todo text/i })
    ).toBeInTheDocument();
  });
});
