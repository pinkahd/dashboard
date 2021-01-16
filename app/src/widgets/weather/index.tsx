import React from "react";
// import { useTranslation } from "react-i18next";
import isEmpty from "lodash/isEmpty";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import WidgetUnconfigured from "components/widget-unconfigured";
// import WidgetError from "components/widget-error";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";
import { widgetType } from "./properties";

export { saga } from "./sagas";

const Weather: React.FC<Props> = ({ id, lat, lon, meta, triggerUpdate }) => {
  // const { t } = useTranslation();
  useTriggerUpdate({ id, params: { lat, lon }, meta, triggerUpdate }, [
    lat,
    lon,
  ]);
  if (isEmpty(lat) || isEmpty(lon))
    return <WidgetUnconfigured type={widgetType} />;

  return <div>Hi</div>;
};

interface Props extends WidgetProps, ConfigurationProps {}

export default Weather;
