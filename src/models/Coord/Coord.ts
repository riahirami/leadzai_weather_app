import { CoordResponse } from "./Coord.Response";

export interface Coord {
  longitude: number;
  latitude: number;
}

export const decodeCoord = (response: CoordResponse): Coord => {
  return {
    longitude: response.lon,
    latitude: response.lat,
  };
};
