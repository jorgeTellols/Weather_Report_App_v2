import { renderHook, waitFor, act } from '@testing-library/react';

import useWeatherWidget from './useWeatherWidget';
import weatherWidgetService from '../../services/WeatherWidgetService';
import Weather from '../../models/Weather';
import En from '../../utils/En';

// Mock the service
jest.mock('../../services/WeatherWidgetService.ts');

// Variable initialization
const selectedCityName = 'London 💂🏻‍♀️';
const languageSelected = En;

// Mocks a weatherReport array
const mockWeatherArray: Array<Weather> = [
  new Weather('2024-09-01', 'icon1', 'description1', 20, 25, 15, 0.1, 5, 60, 1013),
  new Weather('2024-09-02', 'icon2', 'description2', 22, 26, 17, 0.2, 6, 55, 1015),
];

const mockWeatherService = weatherWidgetService as jest.MockedFunction<typeof weatherWidgetService>;

// Clear mock before eahc test
beforeEach(() => {
  jest.resetAllMocks();
});

// Test if the useEffect() that runs getData() works when the call is correct
it('should return weather data and put it into todayWeather', async () => {
  mockWeatherService.mockResolvedValue(mockWeatherArray);

  // We render the hook
  const { result } = renderHook(() => useWeatherWidget({ selectedCityName, languageSelected }));

  await waitFor(() => {
    // No errors received so we set them to false
    expect(result.current.serverError).toBe(false);
    expect(result.current.clientError).toBe(false);
    // We compare to the mocked object to see if it worked
    expect(result.current.todayWeather).toEqual({
      date: '2024-09-01',
      icon: 'icon1',
      description: 'description1',
      temperature: 20,
      tempMax: 25,
      tempMin: 15,
      rainProb: 0.1,
      pressure: 1013,
      humidity: 60,
      windSpeed: 5,
    });
  });
});

// Test if the useEffect() that runs getData() works when the call fails
it('should change the state of clientError or serverError because the call failed', async () => {
  // We mock an error
  mockWeatherService.mockResolvedValue(404);

  // We render the hook
  const { result } = renderHook(() => useWeatherWidget({ selectedCityName, languageSelected }));

  await waitFor(() => {
    // Checks if the state has changed
    expect(result.current.clientError).toBe(true);
  });
});

// Test to see if checkError() works
it('should set clientError or serverError to true depending on the number received', () => {
  // We render the hook and call the function
  const { result } = renderHook(() => useWeatherWidget({ selectedCityName, languageSelected }));
  act(() => {
    result.current.checkError(400);
  });

  // State should have changed
  expect(result.current.serverError).toBe(false);
  expect(result.current.clientError).toBe(true);

  // Now we do the same but with a serverError;
  act(() => {
    result.current.checkError(500);
  });

  // State should have changed
  expect(result.current.clientError).toBe(false);
  expect(result.current.serverError).toBe(true);
});
