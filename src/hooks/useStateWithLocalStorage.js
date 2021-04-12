import { useEffect, useState } from 'react';

export const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ''
  );
  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);

  return [value, setValue];
};
