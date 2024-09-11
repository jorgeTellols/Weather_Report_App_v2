import { renderHook } from '@testing-library/react';
import useFullWeatherReport from './useFullWeatherReport';
import Weather from '../../models/Weather';
import Es from '../../utils/Es';
import En from '../../utils/En';

describe('useFullWeatherReport', () => {
  // Mock of a weather object that we'll use later
  const mockWeather = new Weather(
    '2024-09-09',
    '01d',
    'Clear sky',
    25,
    30,
    20,
    10,
    15,
    60,
    1013,
  );

  // Test to see if getDisplayedCity() works
  it('should change the displayedCity content to match the language selected', () => {
    // We render the hook (English is selected by default)
    const { result, rerender } = renderHook(
      ({ languageSelected, selectedCityName }) => useFullWeatherReport({
        languageSelected,
        selectedCityName,
        fullReport: mockWeather,
      }),
      {
        initialProps: { languageSelected: En, selectedCityName: 'london' },
      },
    );

    // We expect the city to be displayed in english (in this case London)
    expect(result.current.displayedCity).toBe('London 💂🏻‍♀️');

    // The languageSelected state changes
    rerender({ languageSelected: Es, selectedCityName: 'london' });

    // Now the city will be displayed in spanish
    expect(result.current.displayedCity).toBe('Londres 💂🏻‍♀️');
  });

  // Test if the object weather is built correctly
  it('should create a weather object and return it', () => {
    // We render the hook
    const { result } = renderHook(
      ({ languageSelected, selectedCityName }) => useFullWeatherReport({
        languageSelected,
        selectedCityName,
        fullReport: mockWeather,
      }),
      {
        initialProps: { languageSelected: En, selectedCityName: 'london' },
      },
    );

    // We expect the weather object to have the same values as the mocked object
    expect(result.current.weather).toEqual({
      date: '2024-09-09',
      icon: '01d',
      description: 'Clear sky',
      temperature: 25,
      tempMax: 30,
      tempMin: 20,
      rainProb: 10,
      windSpeed: 15,
      humidity: 60,
      pressure: 1013,
    });
  });
});
