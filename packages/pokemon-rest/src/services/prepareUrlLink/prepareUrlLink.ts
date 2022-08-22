/**
 * Prepares the URL for the page request.
 *
 * @module
 * @param formState
 */
// type formStateProps = {
//   [key: string]: string
// }
export default function prepareUrlLink(formState) {
  const preparedURL = new URL(`${process.env.REACT_APP_API_URL}/programs`);

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
  return preparedURL.href;
}
