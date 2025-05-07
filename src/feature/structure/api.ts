import { fetchGetMethod } from "@/component/CommonApi";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchStructureResults = async (key: string) => {
  return fetchGetMethod(`${API_ORIGIN}${key}`, "검색 실패");
};
