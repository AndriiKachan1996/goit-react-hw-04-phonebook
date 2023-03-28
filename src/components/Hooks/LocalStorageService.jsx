import { useEffect, useState } from 'react';

export function useLocalStorage(key, arr) {
  const [state, setState] = useState(() =>
    window.JSON.parse(localStorage.getItem(key) ?? arr)
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
