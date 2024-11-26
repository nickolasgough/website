import React from "react";

export default function useFetch<T>(url: string, options?: RequestInit): [T] {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((resJson) => setData(resJson));
  }, []);
  return [data as T];
}
