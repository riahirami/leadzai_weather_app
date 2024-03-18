import { WindResponse } from "./Wind.Response";

export interface Wind {
  speed: number;
  deg: number;
}

export const decodeWind = (response: WindResponse): Wind => {
  return {
    speed: response.speed,
    deg: response.deg,
  };
};
