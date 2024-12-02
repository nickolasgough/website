import React from "react";
import fetchData, { RequestOpts } from "../fetch";

export type CallbackFn = () => void;

export default function useFetch<T>(url: string, options?: RequestOpts, callbackFn?: CallbackFn): [T] {
  const [data, setData] = React.useState<T>(null as T);
  React.useEffect(() => {
    fetchData<T>(url, options)
      .then((parsedRes) => setData(parsedRes as T))
      .finally(() => {
        if (callbackFn) callbackFn();
      });
  }, []);
  return [data as T];
}
