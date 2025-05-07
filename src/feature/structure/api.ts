import { fetchGetMethod } from "@/component/CommonApi";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchStructureResults = async (url: string) => {
  return fetchGetMethod(url, "검색 실패");
};
