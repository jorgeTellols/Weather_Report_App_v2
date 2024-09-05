import { renderHook, act } from '@testing-library/react';
import useApp from './useApp';
import Es from '../utils/Es';

describe('useApp', () => {
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

  // Test to check the showModal() function
  it('should show the form modal when showModal is called', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.showModal();
    });

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
