import { renderHook, act } from '@testing-library/react';
import useSidebar from './useSidebar';

// Mock functions to simulate city selection callbacks
const mockSelectLondon = jest.fn();
const mockSelectToronto = jest.fn();
const mockSelectSingapore = jest.fn();

describe('useSidebar', () => {
  // Test for toggleVisibility()
  it('should show/hide the sidebar and set firstTime to false if is true', () => {
    const { result } = renderHook(
      () => useSidebar({
        selectLondon: mockSelectLondon,
        selectToronto: mockSelectToronto,
        selectSingapore: mockSelectSingapore,
      }),
    );

    // Default states to hide the sidebar
    expect(result.current.isVisible).toBe(false);
    expect(result.current.firstTime).toBe(true);

    // Show the sidebar
    act(() => {
      result.current.toggleVisibility();
    });

    // States change, now sidebar is showing and firstTime will always be false
    expect(result.current.isVisible).toBe(true);
    expect(result.current.firstTime).toBe(false);

    // Hides the sidebar
    act(() => {
      result.current.toggleVisibility();
    });

    // States changes, now sidebar is showing and firstTime is still false
    expect(result.current.isVisible).toBe(false);
    expect(result.current.firstTime).toBe(false);
  });

  // Test for handleCitySelection()
  it('should call the appropriate city selection function and toggle visibility', () => {
    const { result } = renderHook(
      () => useSidebar({
        selectLondon: mockSelectLondon,
        selectToronto: mockSelectToronto,
        selectSingapore: mockSelectSingapore,
      }),
    );

    // Shows the sidebar
    act(() => {
      result.current.toggleVisibility();
    });

    // London is selected and the sidebars hides
    act(() => {
      result.current.londonSelection();
    });
    expect(mockSelectLondon).toHaveBeenCalled();
    expect(result.current.isVisible).toBe(false);

    // Shows the sidebar again
    act(() => {
      result.current.toggleVisibility();
    });

    // Toronto is selected and the sidebars hides
    act(() => {
      result.current.torontoSelection();
    });
    expect(mockSelectToronto).toHaveBeenCalled();
    expect(result.current.isVisible).toBe(false);

    // Shows the sidebar once again
    act(() => {
      result.current.toggleVisibility();
    });

    // Singapore is selected and the sidebars hides
    act(() => {
      result.current.singaporeSelection();
    });
    expect(mockSelectSingapore).toHaveBeenCalled();
    expect(result.current.isVisible).toBe(false);
  });
});
