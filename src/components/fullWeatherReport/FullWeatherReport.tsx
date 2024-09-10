import './full_weather_report.scss';
import Button from '../button/Button';
import Weather from '../../widgets/weatherWidget/Weather/Weather';
import Language from '../../utils/Language';
import useFullWeatherReport from './useFullWeatherReport';

interface Props {
  hideModal: () => void;
  fullReport: Weather;
  languageSelected: Language;
  selectedCityName: string;
}

function FullWeatherReport({
  hideModal,
  fullReport,
  languageSelected,
  selectedCityName,
} : Props) {
  const {
    weather,
    displayedCity,
  } = useFullWeatherReport({ fullReport, selectedCityName, languageSelected });

  return (
    <div className="full-weather-report">
      <div className="first-row">
        <h1>{displayedCity}</h1>
        <h1>{weather.date}</h1>
        <Button handleClick={hideModal} textContent={languageSelected.fullWeatherReportCloseButton} styleButton="close-button" />
      </div>
      <div className="second-row">
        <div className="first-col">
          <div className="main-info">
            <img src={`../assets/${weather.icon}.png`} alt={weather.description} />
            <h1>
              {weather.temperature}
              ºC
            </h1>
          </div>
          <div className="forecast">
            <h2>{weather.description}</h2>
          </div>
        </div>
        <div className="second-col">
          <table>
            <tbody>
              <tr>
                <td>
                  <img src="../assets/temp-max.png" alt="max-temp" />
                  <h2>
                    {weather.tempMax}
                    ºC
                  </h2>
                </td>
                <td>
                  <img src="../assets/temp-min.png" alt="min-temp" />
                  <h2>
                    {weather.tempMin}
                    ºC
                  </h2>
                </td>
              </tr>
              <tr className="description">
                <td>
                  <span>{languageSelected.maxTempSpan}</span>
                </td>
                <td>
                  <span>{languageSelected.minTempSpan}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="../assets/humidity.png" alt="humidity" />
                  <h2>
                    {weather.humidity}
                    %
                  </h2>
                </td>
                <td>
                  <img src="../assets/raindrop.png" alt="rain-prob" />
                  <h2>
                    {weather.rainProb}
                    %
                  </h2>
                </td>
              </tr>
              <tr className="description">
                <td>
                  <span>{languageSelected.humiditySpan}</span>
                </td>
                <td>
                  <span>{languageSelected.rainProbSpan}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="../assets/wind.png" alt="wind-speed-temp" />
                  <h2>
                    {weather.windSpeed}
                    km/h
                  </h2>
                </td>
                <td>
                  <img src="../assets/pressure.png" alt="pressure" />
                  <h2>
                    {weather.pressure}
                    hPa
                  </h2>
                </td>
              </tr>
              <tr className="description">
                <td>
                  <span>{languageSelected.windSpeedSpan}</span>
                </td>
                <td>
                  <span>{languageSelected.pressureSpan}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FullWeatherReport;
