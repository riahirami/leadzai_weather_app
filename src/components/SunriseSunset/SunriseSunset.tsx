import { timestampToTime } from "utils/helpers";
import { StyledSunriseSunsetContainer } from "./SunsetSunrise.styles";
import { SunriseSunsetProps } from "./SunriseSunset.type";

const SunriseSunset = ({ data, timezone }: SunriseSunsetProps) => {
  const sunrise = data.sunrise && timestampToTime(data.sunrise, timezone);
  const sunset = data.sunset && timestampToTime(data.sunset, timezone);
  return (
    <StyledSunriseSunsetContainer>
      <h3>Sunrise: {sunrise}</h3>
      <h3>Sunset : {sunset}</h3>
    </StyledSunriseSunsetContainer>
  );
};

export default SunriseSunset;
