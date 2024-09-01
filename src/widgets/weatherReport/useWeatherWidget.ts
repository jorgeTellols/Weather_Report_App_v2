import { useEffect, useState } from 'react';
import weatherWidgetService from './Weather/WeatherWidgetService';
import Weather from './Weather/Weather';
import Language from '../../utils/Language';

// Interface to define the props from the parent
interface Props {
  selectedCityName: string,
  languageSelected: Language,
}

// Custom hook to separate the UI and the logic of the weather widget
function useWeatherWidget({
  selectedCityName,
  languageSelected,
} : Props) {
  const [clientError, setClientError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [weatherToday, setWeatherToday] = useState<Weather | null>(null);
  const [localeSelectedCityName, setLocaleSelectedCityName] = useState(selectedCityName);
  const [localeLanguageSelected] = useState(languageSelected);

  useEffect(() => setLocaleSelectedCityName(selectedCityName), [selectedCityName]);

  const checkError = (statusCode: number) => {
    if (statusCode >= 400 && statusCode <= 499) {
      setClientError(true);
    } if (statusCode >= 500 && statusCode <= 599) {
      setServerError(true);
    }
  };

  const getData = async (dayOfTheWeek: number) => {
    const data = await weatherWidgetService('London 💂🏻‍♀️', localeLanguageSelected.dataFormat);

    if (!(Array.isArray(data))) {
      checkError(data);
    } else {
      setServerError(false);
      setServerError(false);

      setWeatherToday(data[dayOfTheWeek]);

      console.log(weatherToday);
    }
  };

  getData(1);

  return {
    serverError,
    clientError,
    weatherToday,
    getData,
  };
}

export default useWeatherWidget;
