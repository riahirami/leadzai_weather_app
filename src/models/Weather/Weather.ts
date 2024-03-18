import { WeatherResponse } from "./Weather.Response";

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export const decodeWeather = (response: WeatherResponse): Weather => {
  return {
    id: response.id,
    main: response.main,
    description: response.description,
    icon: response.icon,
  };
};
