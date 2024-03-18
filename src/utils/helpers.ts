import type { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TemperatureUnits, WeatherUnits } from "enums/weather.enums";
import { setPopupConfig } from "store/slices/popup/popupSlice";
import { RootState } from "store/store";
import { PopupParams } from "./Global.types";
import { GlobalVariables } from "./constants";

// convert timestamp to time based on timezone
export function timestampToTime(
  timestamp: number,
  timezoneOffset: number
): string {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const utcTimestamp = date.getTime() + date.getTimezoneOffset() * 60 * 1000; // Adjust for local time zone
  const localTime = new Date(utcTimestamp + timezoneOffset * 1000); // Apply timezone offset
  return `${localTime.getHours()}:${String(localTime.getMinutes()).padStart(
    2,
    "0"
  )}:${String(localTime.getSeconds()).padStart(2, "0")}`;
}

// convert the temperature from kelvin to celsius
export const kelvinToCelsius = (kelvin: number): number => {
  const celsius = kelvin - 273.15;
  return Math.round(celsius);
};

// convert the temperature from kelvin to fahrenheit
export const kelvinToFahrenheit = (kelvin: number): number => {
  const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
  return Math.round(fahrenheit);
};

// generate an icon url from the icon name rended by the ws
export const weatherIcon = (icon: string): string => {
  const iconUrl = `${GlobalVariables.IMAGE_URL}${icon}${GlobalVariables.IMAGE_SIZE_4X}${GlobalVariables.IMAGE_EXTENSION.PNG}`;
  return iconUrl;
};

// render the temperature degree symbol based on units (celsius/fahrenheit)
export const degreeSymbolBasedOnUnits = (units: WeatherUnits): string => {
  if (units === WeatherUnits.CELSIUS) {
    return TemperatureUnits.CELSIUS;
  } else {
    return TemperatureUnits.FAHRENHEIT;
  }
};

export const showPopup = (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
  params: PopupParams
): void => {
  dispatch(
    setPopupConfig({
      isVisible: true,
      title: params.title ?? "",
      message: params.message,
      confirmText: params.confirmText,
      confirmCallback: params.confirmCallback,
    })
  );
};

export const upperCaseFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
