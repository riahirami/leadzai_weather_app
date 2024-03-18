import { MainResponse } from "./Main.Response";

export interface Main {
  temperature: number;
  temperatureFeelsLike: number;
  minTemperature: number;
  maxTemperature: number;
  pressure: number;
  humidity: number;
}

export const decodeMain = (response: MainResponse): Main => {
  return {
    temperature: response.temp,
    temperatureFeelsLike: response.feels_like,
    minTemperature: response.temp_min,
    maxTemperature: response.temp_max,
    pressure: response.pressure,
    humidity: response.humidity,
  };
};
