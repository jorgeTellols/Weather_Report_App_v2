import { useEffect, useState } from 'react';
import weatherWidgetService from '../../services/WeatherWidgetService';
import Weather from '../../models/Weather';
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
      temperature: weekWeatherReport[dayOfTheWeek].getTemperature(),
      tempMax: weekWeatherReport[dayOfTheWeek].getTempMax(),
      tempMin: weekWeatherReport[dayOfTheWeek].getTempMin(),
      rainProb: weekWeatherReport[dayOfTheWeek].getRainProb(),
      pressure: weekWeatherReport[dayOfTheWeek].getPressure(),
      humidity: weekWeatherReport[dayOfTheWeek].getHumidity(),
      windSpeed: weekWeatherReport[dayOfTheWeek].getWindSpeed(),
    };
  };

  // Hook return
  return {
    checkError,
    serverError,
    clientError,
    selectedCityName,
    weekWeatherReport,
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
