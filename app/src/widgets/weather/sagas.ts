import { takeEvery } from "@redux-saga/core/effects";

import api, { WEATHER } from "common/api";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchWeather = async (params: Record<string, any>) => {
  const response = await api.get(WEATHER, { params });
  return response.data;
};

export function* saga() {
  yield takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchWeather)
  );
}
