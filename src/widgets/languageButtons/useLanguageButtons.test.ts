import { renderHook, act } from '@testing-library/react';
import useLanguageButtons from './useLanguageButtons';
import Es from '../../utils/Es';
import En from '../../utils/En';

describe('useLanguageButtons', () => {
  // Test for setLanguage(En)
  it('language should change to english when setEnglish is called', () => {
    const switchLanguageMock = jest.fn();
    const { result } = renderHook(() => useLanguageButtons({ switchLanguage: switchLanguageMock }));

    act(() => {
      result.current.setEnglish();
    });

    expect(result.current.languageSelected).toBe(En);
    expect(switchLanguageMock).toHaveBeenCalledWith(En);
  });

  // Test for setLanguage(Es)
  it('language should change to spanish when setSpanish is called', () => {
    const switchLanguageMock = jest.fn();
    const { result } = renderHook(() => useLanguageButtons({ switchLanguage: switchLanguageMock }));

    act(() => {
      result.current.setSpanish();
    });

    expect(result.current.languageSelected).toBe(Es);
    expect(switchLanguageMock).toHaveBeenCalledWith(Es);
  });

  // Test for applyHighlight()
  it('should return true if the selected language is english and false if not ', () => {
    const switchLanguageMock = jest.fn();
    const { result } = renderHook(() => useLanguageButtons({ switchLanguage: switchLanguageMock }));

    if (result.current.languageSelected === En) {
      expect(result.current.isHighlighted).toBe(true);
    } else {
      expect(result.current.isHighlighted).toBe(false);
    }
  });
});
