import { useEffect, useState } from 'react';

/**
 * Custom implementation of debounce approach.
 *
 * Main goal - is to limit amount of API request.
 *
 * @param value
 *
 * @param delay
 */
function useDebounce<T>(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 200);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
export default useDebounce;
