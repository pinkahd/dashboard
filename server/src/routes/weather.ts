import _ from "lodash";
import {
  Express,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core";

import axios from "../axios";
import config from "../config";
import { ttlForWidgetType } from "../utils";

const isRequestValid = (request: Request) =>
  !!request.query.lat && !!request.query.lon;

const routes = (app: Express) =>
  /* Get the current weather + forecast */
  app.get(
    "/weather",
    async (request: Request, response: Response, next: NextFunction) => {
      if (!isRequestValid(request)) {
        return response.status(400).end();
      }

      try {
        const { lat, lon, unit } = request.query;
        const axiosResponse = await axios.get(
          "https://api.openweathermap.org/data/2.5/onecall",
          {
            params: {
              lat,
              lon,
              units: unit || "metric", // "imperial" | "metric"
              exclude: "minutely,hourly",
              appid: config.api.openWeatherMap,
            },
            ttl: ttlForWidgetType("weather"),
          }
        );

        const values = axiosResponse.data;

        // TODO: pass through all other required parameters (e.g. weather conditions)
        return response.json({
          current: {
            temperature: _.round(values.current.temp),
          },
          forecast: values.daily.map((daily: any) => ({
            temperatureMin: _.round(daily.temp.min),
            temperatureMax: _.round(daily.temp.max),
          })),
        });
      } catch (error) {
        return next(error);
      }
    }
  );

export default routes;
