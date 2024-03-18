import { CloudsResponse } from "./Clouds.Response";

export interface Clouds {
  all: number;
}

export const decodeClouds = (response: CloudsResponse): Clouds => {
  return {
    all: response.all,
  };
};
