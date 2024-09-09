import './full-weather-report.scss';
import Button from '../button/Button';
import Weather from '../../widgets/weatherWidget/Weather/Weather';
import Language from '../../utils/Language';
import useFullWeatherReport from './useFullWeatherReport';

interface Props {
  hideModal: () => void;
  fullReport: Weather;
  languageSelected: Language;
}

// cityName: string;
// cityName,

function FullWeatherReport({
  hideModal,
  fullReport,
  languageSelected,
} : Props) {
  const [
    weather,
  ] = useFullWeatherReport(fullReport);

  // return (
  //   <div className="full-weather-report">
  //     <div className="first-row">
  //       <h1>{cityName}</h1>
  //       <h1>{weatherDate}</h1>
  // eslint-disable-next-line max-len
  //      <Button handleClick={hideModal} textContent={languageSelected.fullWeatherReportCloseButton} styleButton="close-button" />
  //     </div>
  //     <div className="second-row">
  //       <div className="first-col">
  //         <div className="main-info">
  //           <img src={`../assets/${weatherIcon}.png`} alt={weatherDescription} />
  //           <h1>{weatherTemperature}</h1>
  //         </div>
  //         <div className="forecast">
  //           <h2>{weatherDescription}</h2>
  //         </div>
  //       </div>
  //       <div className="second-col">
  //         <table>
  //           <tbody>
  //             <tr>
  //               <td>
  //                 <img src="../assets/temp-max.png" alt="max-temp" />
  //                 <h2>{weatherTempMax}</h2>
  //               </td>
  //               <td>
  //                 <img src="../assets/raindrop.png" alt="rain-prob" />
  //                 <h2>{weatherRainProb}</h2>
  //               </td>
  //             </tr>
  //             <tr className="description">
  //               <td>
  //                 <span>{languageSelected.maxTempSpan}</span>
  //               </td>
  //               <td><span>{languageSelected.rainProbSpan}</span></td>
  //             </tr>

  //             <tr>
  //               <td>
  //                 <img src="../assets/humidity.png" alt="humidity" />
  //                 <h2>
  //                   {weatherHumidity}
  //                   %
  //                 </h2>
  //               </td>
  //               <td>
  //                 <img src="../assets/temp-min.png" alt="min-temp" />
  //                 <h2>
  //                   {weatherTempMin}
  //                   ºC
  //                 </h2>
  //               </td>
  //             </tr>
  //             <tr className="description">
  //               <td>
  //                 <span>{languageSelected.humiditySpan}</span>
  //               </td>
  //               <td><span>{languageSelected.minTempSpan}</span></td>
  //             </tr>

  //             <tr>
  //               <td>
  //                 <img src="../assets/wind.png" alt="wind-speed-temp" />
  //                 <h2>
  //                   {weatherWindSpeed}
  //                   km/h
  //                 </h2>
  //               </td>
  //               <td>
  //                 <img src="../assets/pressure.png" alt="pressure" />
  //                 <h2>
  //                   {weatherPressure}
  //                   mph
  //                 </h2>
  //               </td>
  //             </tr>
  //             <tr className="description">
  //               <td>
  //                 <span>{languageSelected.windSpeedSpan}</span>
  //               </td>
  //               <td><span>{languageSelected.pressureSpan}</span></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="full-weather-report">
      <div className="first-row">
        <h1>London 💂🏻‍♀️</h1>
        <h1>28/03/1998</h1>
        <Button handleClick={hideModal} textContent={languageSelected.fullWeatherReportCloseButton} styleButton="close-button" />
      </div>
      <div className="second-row">
        <div className="first-col">
          <div className="main-info">
            <img src="../assets/01d.png" alt="a" />
            <h1>12ºC</h1>
          </div>
          <div className="forecast">
            <h2>Lluvia moderada con possibilidad espectacular de lluvias bestias</h2>
          </div>
        </div>
        <div className="second-col">
          <table>
            <tbody>

              <tr>
                <td>
                  <img src="../assets/temp-max.png" alt="max-temp" />
                  <h2>{fullReport.getTempMax}</h2>
                </td>
                <td>
                  <img src="../assets/raindrop.png" alt="rain-prob" />
                  <h2>12%</h2>
                </td>
              </tr>
              <tr className="description">
                <td>
                  <span>{languageSelected.maxTempSpan}</span>
                </td>
                <td><span>{languageSelected.rainProbSpan}</span></td>
              </tr>

              <tr>
                <td>
                  <img src="../assets/humidity.png" alt="humidity" />
                  <h2>12%</h2>
                </td>
                <td>
                  <img src="../assets/temp-min.png" alt="min-temp" />
                  <h2>12ºC</h2>
                </td>
              </tr>
              <tr className="description">
                <td>
                  <span>{languageSelected.humiditySpan}</span>
                </td>
                <td><span>{languageSelected.minTempSpan}</span></td>
              </tr>

              <tr>
                <td>
                  <img src="../assets/wind.png" alt="wind-speed-temp" />
                  <h2>12km/h</h2>
                </td>
                <td>
                  <img src="../assets/pressure.png" alt="pressure" />
                  <h2>12mph</h2>
                </td>
              </tr>
              <tr className="description">
                <td>
                  <span>{languageSelected.windSpeedSpan}</span>
                </td>
                <td><span>{languageSelected.pressureSpan}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FullWeatherReport;
