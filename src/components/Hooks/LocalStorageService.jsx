import { useEffect, useState } from "react";

export function useLocalStorage(key, arr) {
  const [state, setState] = useState(() =>
    JSON.parse(localStorage.getItem(key)) || arr
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}