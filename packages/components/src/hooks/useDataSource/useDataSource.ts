import { useEffect, useState } from 'react';
import axios from 'axios';

export function useDataSource<T>(getResourceFunc, params, defaultValue = null) {
  const [resource, setRecource] = useState<T>(defaultValue);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc(params);
      setRecource(result);
    })();
  }, [JSON.stringify(params)]);

  return resource;
}

export const serverResouce = async ({ href }) => {
  const response = await axios.get(href);
  return response.data;
};

export const localStorageResource = ({ key }) => {
  return localStorage.get(key);
};
export default useDataSource;
