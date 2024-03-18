import { type SysResponse } from "./SysResponse";

export interface Sys {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}

export const decodeSys = (response: SysResponse): Sys => {
  return {
    type: response.type,
    id: response.id,
    country: response.country,
    sunrise: response.sunrise,
    sunset: response.sunset,
  };
};
