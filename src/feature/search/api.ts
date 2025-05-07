import { fetchGetMethod, fetchWithBody } from "@/component/CommonApi";
import { SearchRegisterType } from "./SearchType";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchSearchResults = async (key: string): Promise<any> => {
  return fetchGetMethod(`${API_ORIGIN}/api/search/list`, "검색 실패");
};

export const registerSearch = async (
  requestBody: SearchRegisterType,
): Promise<void> => {
  const body = {
    title: requestBody.title,
    description: requestBody.description,
    region: requestBody.region,
  };
  return fetchWithBody(`${API_ORIGIN}/api/search`, "POST", body, "등록 실패");
};

export const deleteSearch = async (searchId: number): Promise<void> => {
  const body = {
    searchId: searchId,
  };
  return fetchWithBody(`${API_ORIGIN}/api/search`, "DELETE", body, "삭제 실패");
};
