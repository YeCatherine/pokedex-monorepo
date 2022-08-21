import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/useDebounce';
import { formSearchType } from '@/types';

export default function usePrograms(formState) {
  const debouncedFormState = useDebounce<formSearchType>(formState, 500);
  return useQuery(['programs', debouncedFormState], async () => {
    const preparedURL = new URL('http://localhost:4002/programs');

    if (formState.name !== '') {
      preparedURL.searchParams.append('name_like', formState.name);
    }

    Object.entries(formState.statuses).forEach(([key, value]) => {
      if (value) {
        preparedURL.searchParams.append('status', key.toUpperCase());
      }
    });

    preparedURL.searchParams.append('_start', '0');
    preparedURL.searchParams.append('_limit', '100');

    return fetch(preparedURL.href).then((response) => response.json());
  });
}
