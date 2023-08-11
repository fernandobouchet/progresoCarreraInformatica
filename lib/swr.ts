export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}${input}`, init);
  return res.json();
}
