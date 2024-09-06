import { renderHook } from '@testing-library/react';
import useWeatherCard from './useWeatherCard';
import Es from '../../utils/Es';
import En from '../../utils/En';

describe('useWeatherCard', () => {
  // Test to see if getDisplayedCity() works
  it('should change the displayedCity content to match the language selected', () => {
    // We render the hook (English is selected by default)
    const { result, rerender } = renderHook(
      ({ language, city }) => useWeatherCard(language, city),
      {
        initialProps: { language: En, city: 'london' },
      },
    );

    // We expect the city to be displayed in english (in this case London)
    expect(result.current.displayedCity).toBe('London 💂🏻‍♀️');

    // The languageSelected state changes
    rerender({ language: Es, city: 'london' });

    // Now the city will be displayed in spanish
    expect(result.current.displayedCity).toBe('Londres 💂🏻‍♀️');
  });
});
