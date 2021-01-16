import React from "react";
import { useTranslation } from "react-i18next";

import Input from "components/forms/input";
import { ConfigurationProps } from "widgets/index";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<Props>) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={(value: string) => setOptions({ lat: value })}
        value={options.lat}
        label={t("widget.weather.configuration.latitude")}
        pattern="[0-9]+([,\.][0-9]+)?"
        onEnter={save}
      />
      <Input
        setValue={(value: string) => setOptions({ lon: value })}
        value={options.lon}
        label={t("widget.weather.configuration.longtitude")}
        pattern="[0-9]+([,\.][0-9]+)?"
        onEnter={save}
      />
      {/* TODO: geolocation button */}
    </>
  );
};

export interface Props {
  lat: string;
  lon: string;
}

export default Configuration;
