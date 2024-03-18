import SunriseSunset from "components/SunriseSunset/SunriseSunset";
import TemperatureComponent from "components/TemperatureComponent/TemperatureComponent";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import WeatherIcon from "components/WeatherIcon/WeatherIcon";
import useGetWeather from "hooks/useGetWeather";
import CountriesList from "../components/CountriesList/CountriesList";
import {
  StyledHeaderContainer,
  StyledHomeContainer,
  StyledTemperatureContainer,
  StyledWeatherDetailsContainer,
} from "./Home.Styles";

function Homepage() {
  const {
    data,
    temperatureUnits,
    handleCountryChange,
    handleToggleUnits,
    temperatureBasedOnUnits,
    backgroundImage,
  } = useGetWeather();

  return (
    <StyledHomeContainer backgroundImage={backgroundImage}>
      <StyledWeatherDetailsContainer>
        <StyledHeaderContainer>
          <CountriesList handleCountryChange={handleCountryChange} />
          <ToggleSwitch toggleUnits={handleToggleUnits} />
        </StyledHeaderContainer>
        {data && (
          <>
            <StyledTemperatureContainer>
              <TemperatureComponent
                temperatureUnits={temperatureUnits}
                temperature={data.main.temperature}
                temperatureBasedOnUnits={temperatureBasedOnUnits}
              />
              <WeatherIcon
                icon={data.weather.icon}
                alternativeText={data.name}
              />
            </StyledTemperatureContainer>
            <SunriseSunset data={data?.sys} timezone={data?.timezone} />
          </>
        )}
      </StyledWeatherDetailsContainer>
    </StyledHomeContainer>
  );
}

export default Homepage;
