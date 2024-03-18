import { Clouds } from "../Clouds/Clouds";
import { CloudsResponse } from "../Clouds/Clouds.Response";
import { Coord } from "../Coord/Coord";
import { CoordResponse } from "../Coord/Coord.Response";
import { Main } from "../Main/Main";
import { MainResponse } from "../Main/Main.Response";
import { Sys } from "../Sys/Sys";
import { SysResponse } from "../Sys/SysResponse";
import { Weather } from "../Weather/Weather";
import { WeatherResponse } from "../Weather/Weather.Response";
import { Wind } from "../Wind/Wind";

export interface WeatherModelResponse {
  coord: CoordResponse;
  weather: WeatherResponse[];
  base: string;
  main: MainResponse;
  visibility: number;
  wind: Wind;
  clouds: CloudsResponse;
  dt: number;
  sys: SysResponse;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
