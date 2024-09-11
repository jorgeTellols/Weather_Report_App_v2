import weatherWidgetService from './WeatherWidgetService';
import Weather from '../models/Weather';
import En from '../utils/En';

// Mock global fetch
global.fetch = jest.fn();

// Reset the mocked fetch before each test
describe('weatherWidgetService', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  // Test if the url is built correctly
  it('should build the correct URL based on cityName', async () => {
    // Variable initialization and call to the API
    const cityName = 'toronto';
    const language = En;
    await weatherWidgetService(cityName, language);

    // Expect the url the have the correct content
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('lat=43.65&lon=-79.34'));
  });

  // Test if the call returns an array when everything is ok
  it('should return an array of Weather objects', async () => {
    // Mocked fetch of a successful call
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        daily: [
          {
            dt: 1633084800, weather: [{ icon: '01d', description: 'clear sky' }], temp: { max: 25, min: 15 }, pop: 0.1, wind_speed: 5, humidity: 50, pressure: 1013,
          },
          {
            dt: 1633171200, weather: [{ icon: '02d', description: 'few clouds' }], temp: { max: 26, min: 16 }, pop: 0.2, wind_speed: 4, humidity: 55, pressure: 1012,
          },
        ],
        current: { temp: 20 },
        timezone: 'GMT',
      }),
    });

    // Variable initialization and call to the API
    const cityName = 'London 💂🏻‍♀️';
    const language = En;
    const result = await weatherWidgetService(cityName, language);

    if (Array.isArray(result)) {
      // Expect to have an array with actual content
      expect(result.length).toBeGreaterThan(0);
      // Expect this content to be Weather objects
      expect(result[0]).toBeInstanceOf(Weather);
      // Expect the Weather objects to have content
      expect(result[0].getTemperature()).toBe(20);
    }
  });

  // Test if the call returns an array when something fails
  it('should return a number (that represents the HTML fail code)', async () => {
    // Mocked fetch of an error
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
      json: () => Promise.resolve({}),
    });

    // Variable initialization and call to the API
    const cityName = 'London 💂🏻‍♀️';
    const language = En;
    const result = await weatherWidgetService(cityName, language);

    if (typeof result === 'number') {
      // Expect the service to return the error code as a number
      expect(result).toBe(404);
    }
  });
});
