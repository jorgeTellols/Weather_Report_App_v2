import './full-weather-report.scss';

// interface Props {
//   fullReport: Weather
//   cityName: string
// }

function FullWeatherReport() {
  return (
    <div className="full-weather-report">
      <div className="first-row">
        <h1>London 💂🏻‍♀️</h1>
        <h1>28/03/1998</h1>
      </div>
      <div className="second-row">
        <div className="first-col">
          <img src="../assets/01d.png" alt="a" />
          <h1>12ºC</h1>
        </div>
        <div className="second-col">
          <table>
            <tbody>
              <tr>
                <td>
                  <img src="../assets/temp-max.png" alt="max-temp" />
                  <h1>12ºC</h1>
                </td>
                <td>
                  <img src="../assets/raindrop.png" alt="rain-prob" />
                  <h1>12%</h1>
                </td>
                <td>
                  <img src="../assets/humidity.png" alt="humidity" />
                  <h1>12%</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="../assets/temp-min.png" alt="min-temp" />
                  <h1>12ºC</h1>
                </td>
                <td>
                  <img src="../assets/wind.png" alt="wind-speed-temp" />
                  <h1>12km/h</h1>
                </td>
                <td>
                  <img src="../assets/pressure.png" alt="pressure" />
                  <h1>12mph</h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  // (
  //   <div className="full-weather-report">
  //     <div className="first-row">
  //       <h1>{cityName}</h1>
  //       <h1>{fullReport.date}</h1>
  //     </div>
  //     <div className="second-row">
  //       <div className="first-col">
  // eslint-disable-next-line max-len
  //         <img src={`../assets/${fullReport.weatherIcon}.png`} alt={fullReport.weatherDescription} />
  //         <h1>{fullReport.weatherTemperature}</h1>
  //       </div>
  //       <div className="second-col">
  //         <table>
  //           <tbody>
  //             <tr>
  //               <td>
  //                 <img src="../assets/temp-max.png" alt="max-temp" />
  //                 <h1>{fullReport.weatherMaxTemp}</h1>
  //               </td>
  //               <td>
  //                 <img src="../assets/rain-drop.png" alt="rain-prob" />
  //                 <h1>{fullReport.weatherRainProb}</h1>
  //               </td>
  //               <td>
  //                 <img src="../assets/humidity.png" alt="humidity" />
  //                 <h1>{fullReport.weatherHumidity}</h1>
  //               </td>
  //             </tr>
  //             <tr>
  //               <td>
  //                 <img src="../assets/temp-min.png" alt="min-temp" />
  //                 <h1>{fullReport.weatherMinTemp}</h1>
  //               </td>
  //               <td>
  //                 <img src="../assets/wind.png" alt="wind-speed-temp" />
  //                 <h1>{fullReport.weatherWindSpeed}</h1>
  //               </td>
  //               <td>
  //                 <img src="../assets/pressure.png" alt="pressure" />
  //                 <h1>{fullReport.weatherPressure}</h1>
  //               </td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default FullWeatherReport;
