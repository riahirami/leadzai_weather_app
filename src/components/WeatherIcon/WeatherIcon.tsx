import React from "react";
import { weatherIcon } from "utils/helpers";
import { StyledWeatherIcon } from "./WeatherIcon.styles";
import { WeatherIconProps } from "./WeatherIcon.type";

const WeatherIcon = ({ icon, alternativeText }: WeatherIconProps) => {
  return <StyledWeatherIcon src={weatherIcon(icon)} alt={alternativeText} />;
};

export default WeatherIcon;
