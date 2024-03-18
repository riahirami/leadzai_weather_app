import { WeatherUnits } from "enums/weather.enums";
import { degreeSymbolBasedOnUnits } from "utils/helpers";
import { StyledToggleSwitch } from "./ToggleSwitch.styles";
import { ToggleSwitchProps } from "./ToogleSwitch.type";

const ToggleSwitch = ({ toggleUnits }: ToggleSwitchProps) => {
  return (
    <StyledToggleSwitch>
      <div className="toggle-switch">
        <p>{degreeSymbolBasedOnUnits(WeatherUnits.CELSIUS)}</p>
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          onChange={toggleUnits}
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
        <p>{degreeSymbolBasedOnUnits(WeatherUnits.FAHRENHEIT)}</p>
      </div>
    </StyledToggleSwitch>
  );
};

export default ToggleSwitch;
