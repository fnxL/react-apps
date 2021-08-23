import { useEffect, useState } from 'react';

export function useLocalStorage(key, defaultValue = '') {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  ); //lazy state init;

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
