import { degreeSymbolBasedOnUnits } from "utils/helpers";
import { StyledTemperatureText } from "./TemperatureComponent.styles";
import { TemperatureProps } from "./TemperatureComponent.type";

const TemperatureComponent = ({
  temperature,
  temperatureUnits,
  temperatureBasedOnUnits,
}: TemperatureProps) => {
  return (
    <StyledTemperatureText>
      {`${temperatureBasedOnUnits(temperature)} ${degreeSymbolBasedOnUnits(
        temperatureUnits
      )}`}
    </StyledTemperatureText>
  );
};

export default TemperatureComponent;
