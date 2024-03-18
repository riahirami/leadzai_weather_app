import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HttpMethod } from "enums/global";
import {
  WeatherModel,
  decodeWeatherModel,
} from "models/WeatherModel/WeatherModel";
import { WeatherModelResponse } from "models/WeatherModel/WeatherModel.Response";
import { ENDPOINTS } from "utils/endpoints";
import { GlobalVariables } from "utils/constants";

export interface apiParams {
  q: string;
}
export const weatherApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: GlobalVariables.BASE_URL_API,
    timeout: GlobalVariables.REQUEST_TIMEOUT,
  }),
  tagTypes: ["countriesWeather"],
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherModel, apiParams>({
      query: (params: apiParams) => ({
        url: ENDPOINTS.GET_WEATHER,
        method: HttpMethod.Get,
        params: {
          appid: GlobalVariables.API_KEY,
          q: params.q,
        },
      }),
      transformResponse: (response: WeatherModelResponse): WeatherModel => {
        return decodeWeatherModel(response);
      },
    }),
  }),
});

export const { useLazyGetWeatherQuery } = weatherApi;
