const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchStructureResults = async (url: string) => {
  const res = await fetch(url, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("검색 실패");
  }
  return res.json();
};
