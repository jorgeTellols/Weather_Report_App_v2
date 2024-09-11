import { renderHook, act } from '@testing-library/react';
import useApp from './useApp';
import Es from '../utils/Es';
import Weather from '../models/Weather';

describe('useApp', () => {
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

  // Test of handleLanguageChange() function
  it('should update the language when handleLanguageChange is called', () => {
    // We render the hook
    const { result } = renderHook(() => useApp());

    // Call the function
    act(() => {
      result.current.handleLanguageChange(Es);
    });

    // And check the state
    expect(result.current.languageSelected).toEqual(Es);
  });

  // Test to check the selectLondon() function
  it('should update selectedCityName when selectLondon is called', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.selectLondon();
    });

    expect(result.current.selectedCityName).toBe('london');
  });

  // Test to check the selectToronto() function
  it('should update selectedCityName when selectToronto is called', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.selectToronto();
    });

    expect(result.current.selectedCityName).toBe('toronto');
  });

  // Test to check the selectSingapore() function
  it('should update selectedCityName when selectSingapore is called', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.selectSingapore();
    });

    expect(result.current.selectedCityName).toBe('singapore');
  });

  // Test to check the toggleFormModal() function
  it('should show the modal and set the modalType to form', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.toggleFormModal();
    });

    expect(result.current.modalType).toBe('form');
    expect(result.current.isFormShowing).toBe(true);
  });

  // Test to check the toggleReportModal() function
  it('should show the modal, set modalType to report and set fullReport with a Weather object', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.toggleReportModal(mockWeather);
    });

    expect(result.current.modalType).toBe('report');
    expect(result.current.fullReport).toBe(mockWeather);
    expect(result.current.isFormShowing).toBe(true);
  });

  // Test to check the hideModal() function
  it('should hide the form modal when hideModal is called', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.hideModal();
    });

    expect(result.current.isFormShowing).toBe(false);
  });
});
