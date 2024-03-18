import { WeatherUnits } from "enums/weather.enums";

export interface TemperatureProps {
  temperature: number;
  temperatureUnits: WeatherUnits;
  temperatureBasedOnUnits: (temperature: number) => number;
}
