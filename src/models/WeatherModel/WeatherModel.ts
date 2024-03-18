import { Clouds, decodeClouds } from "../Clouds/Clouds";
import { Coord, decodeCoord } from "../Coord/Coord";
import { Main, decodeMain } from "../Main/Main";
import { Sys, decodeSys } from "../Sys/Sys";
import { Weather, decodeWeather } from "../Weather/Weather";
import { Wind, decodeWind } from "../Wind/Wind";
import { WeatherModelResponse } from "./WeatherModel.Response";

export interface WeatherModel {
  coord: Coord;
  weather: Weather;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const decodeWeatherModel = (
  response: WeatherModelResponse
): WeatherModel => {
  return {
    coord: decodeCoord(response.coord),
    weather: decodeWeather(response.weather[0]),
    base: response.base,
    main: decodeMain(response.main),
    visibility: response.visibility,
    wind: decodeWind(response.wind),
    clouds: decodeClouds(response.clouds),
    dt: response.dt,
    sys: decodeSys(response.sys),
    timezone: response.timezone,
    id: response.id,
    name: response.name,
    cod: response.cod,
  };
};
