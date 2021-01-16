import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="weather-01"
      type="weather"
      options={{}}
      data={{}}
      meta={initialMeta("weather")}
    />
  );
};

storiesOf("Widgets/Weather", module).add("Variants", () => <Story />);
