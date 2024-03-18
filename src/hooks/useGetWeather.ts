import { WeatherUnits } from "enums/weather.enums";
import { WeatherModel } from "models/WeatherModel/WeatherModel";
import { useEffect, useState } from "react";
import { useLazyGetWeatherQuery } from "store/api/weatherApi";
import { useAppDispatch } from "store/hooks";

import {
  setLoaderInvisible,
  setLoaderVisible,
} from "store/slices/loader/loaderSlice";
import { COUNTRIES } from "utils/countries";
import { kelvinToCelsius, kelvinToFahrenheit } from "utils/helpers";
import { handleErrorPopUp } from "utils/network";

interface useGetWeatherProps {
  handleCountryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleToggleUnits: () => void;
  temperatureUnits: WeatherUnits;
  temperatureBasedOnUnits: (temperature: number) => number;
  data: WeatherModel | undefined;
  backgroundImage: any;
}

const useGetWeather = (): useGetWeatherProps => {
  const [getWeatherApi, { data }] = useLazyGetWeatherQuery();
  const [temperatureUnits, setTemperatureUnits] = useState(
    WeatherUnits.CELSIUS
  );

  const [backgroundImage, setBackgroundImage] = useState(COUNTRIES[0].image);
  const dispatch = useAppDispatch();

  const getWeatherAction = async (): Promise<void> => {
    dispatch(setLoaderVisible());
    try {
      await getWeatherApi({
        q: COUNTRIES[0].name,
      }).unwrap();
    } catch (error) {
      handleErrorPopUp(error);
    } finally {
      dispatch(setLoaderInvisible());
    }
  };

  useEffect(() => {
    void getWeatherAction();
  }, []);

  const handleCountryChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    dispatch(setLoaderVisible());
    try {
      const selectedCountry = COUNTRIES.find(
        (item) => item.name === event.target.value
      );
      if (selectedCountry) {
        await getWeatherApi({
          q: selectedCountry.name,
        }).unwrap();
        setBackgroundImage(selectedCountry.image);
      }
    } catch (error) {
      handleErrorPopUp(error);
    } finally {
      dispatch(setLoaderInvisible());
    }
  };

  const temperatureBasedOnUnits = (temperature: number): number => {
    if (temperatureUnits === WeatherUnits.CELSIUS) {
      return kelvinToCelsius(temperature);
    } else {
      return kelvinToFahrenheit(temperature);
    }
  };

  const handleToggleUnits = () => {
    if (temperatureUnits === WeatherUnits.CELSIUS) {
      setTemperatureUnits(WeatherUnits.FAHRENHEIT);
    } else {
      setTemperatureUnits(WeatherUnits.CELSIUS);
    }
  };

  return {
    data,
    backgroundImage,
    temperatureUnits,
    handleToggleUnits,
    handleCountryChange,
    temperatureBasedOnUnits,
  };
};

export default useGetWeather;
