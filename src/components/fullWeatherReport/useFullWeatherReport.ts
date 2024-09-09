import Weather from '../../widgets/weatherWidget/Weather/Weather';

interface Props {
  fullReport: Weather;
}

function useFullWeatherReport({
  fullReport,
} : Props) {
  const setForecast = () => {
    const weather = new Weather(
      fullReport.getDate(),
      fullReport.getIcon(),
      fullReport.getDescription(),
      fullReport.getTemperature(),
      fullReport.getTempMax(),
      fullReport.getTempMin(),
      fullReport.getRainProb(),
      fullReport.getPressure(),
      fullReport.getHumidity(),
      fullReport.getWindSpeed(),
    );

    return weather;
  };

  return {
    weather: () => setForecast,
  };
}

export default useFullWeatherReport;
