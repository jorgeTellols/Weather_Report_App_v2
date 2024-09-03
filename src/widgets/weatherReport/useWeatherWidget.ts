import { useEffect, useState } from 'react';
import weatherWidgetService from './Weather/WeatherWidgetService';
import Weather from './Weather/Weather';
import Language from '../../utils/Language';

// Interface to define the props from the parent
interface Props {
  selectedCityName: string;
  languageSelected: Language;
}

// Custom hook to separate the UI and the logic of the weather widget
function useWeatherWidget({
  selectedCityName,
  languageSelected,
}: Props) {
  const [clientError, setClientError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [weekWeatherReport, setWeekWeatherReport] = useState<Array<Weather> | null>(null);

  // Function to check an error origin
  const checkError = (statusCode: number) => {
    if (statusCode >= 400 && statusCode <= 499) {
      setServerError(false);
      setClientError(true);
    }
    if (statusCode >= 500 && statusCode <= 599) {
      setClientError(false);
      setServerError(true);
    }
  };

  // useEffect that only runs the function when we switch languages or cities
  useEffect(() => {
    // Function that handles the data received from the call to the service
    const getData = async () => {
      const data = await weatherWidgetService(selectedCityName, languageSelected);

      if (!Array.isArray(data)) {
        checkError(data);
      } else {
        setServerError(false);
        setClientError(false);
        setWeekWeatherReport(data);
      }
    };

    getData();
  }, [selectedCityName, languageSelected]);

  // Function that formats data to build the object and return it to the UI component
  const formatData = (dayOfTheWeek: number) => {
    if (!weekWeatherReport || !weekWeatherReport[dayOfTheWeek]) {
      return null;
    }

    return {
      date: weekWeatherReport[dayOfTheWeek].getDate(),
      icon: weekWeatherReport[dayOfTheWeek].getIcon(),
      description: weekWeatherReport[dayOfTheWeek].getDescription(),
      temperature: Math.round(weekWeatherReport[dayOfTheWeek].getTemperature()),
      tempMax: Math.round(weekWeatherReport[dayOfTheWeek].getTempMax()),
      tempMin: Math.round(weekWeatherReport[dayOfTheWeek].getTempMin()),
      rainProb: Math.round(weekWeatherReport[dayOfTheWeek].getRainProb() * 100),
    };
  };

  // Hook return
  return {
    checkError,
    serverError,
    clientError,
    selectedCityName,
    todayWeather: formatData(0),
    weatherDay1: formatData(1),
    weatherDay2: formatData(2),
    weatherDay3: formatData(3),
    weatherDay4: formatData(4),
    weatherDay5: formatData(5),
    weatherDay6: formatData(6),
  };
}

export default useWeatherWidget;
