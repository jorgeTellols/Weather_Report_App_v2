import { renderHook, act } from '@testing-library/react';
import useForm from './useForm';

// Mock object to be able to test the inputs functions
const createChangeEvent = (value: string): React.ChangeEvent<HTMLInputElement> => ({
  target: {
    value,
  } as HTMLInputElement,
} as React.ChangeEvent<HTMLInputElement>);

describe('useForm', () => {
  // Test to check the validation of the form and the submit button
  it('should change "buttonStatus" state to true when all fields are filled or to false when some fields are empty', () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.setName(createChangeEvent('Jorge'));
    });

    expect(result.current.buttonStatus).toBe(false);

    act(() => {
      result.current.setBirthdate(createChangeEvent('28-03-1998'));
      result.current.setCity(createChangeEvent('Vila-real'));
      result.current.setEmail(createChangeEvent('example@gmail.com'));
      result.current.setPhone(createChangeEvent('722421729'));
    });

    expect(result.current.buttonStatus).toBe(true);

    act(() => {
      result.current.setBirthdate(createChangeEvent(''));
    });

    expect(result.current.buttonStatus).toBe(false);
  });
});
