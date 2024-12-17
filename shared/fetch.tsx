export type RequestOpts = RequestInit & {
  contentType?: "json" | "text";
};

export default function fetchData<T>(url: string, options?: RequestOpts): Promise<T> {
  return fetch(url, options)
    .then((rawRes) => {
      if (options?.contentType === "text") {
        return rawRes.text();
      }
      return rawRes.json();
    });
}
