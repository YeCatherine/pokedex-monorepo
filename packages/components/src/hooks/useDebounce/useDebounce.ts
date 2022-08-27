import { useEffect, useState } from 'react';

/**
 * Custom implementation of debounce approach.
 *
 * Main goal - is to limit amount of API request.
 *
 * @param value that should be decounced
 *
 * @param delay - value in microseconds to wait
 *
 * @returns value with delay set in varaiable "delay"
 */
export function useDebounce<T>(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 200);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
