import { fetchGetMethod, fetchWithBody } from "@/component/CommonApi";
import { SearchStructureRegisterType } from "./SearchStructureType";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchSearchStructureResults = async (
  key: string,
): Promise<any> => {
  return fetchGetMethod(`${API_ORIGIN}${key}`, "검색 실패");
};

export const registerSearchStructure = async (
  requestData: SearchStructureRegisterType,
): Promise<any> => {
  const body = {
    searchId: requestData.searchId,
    structureId: requestData.structureId,
    description: requestData.description,
  };
  return fetchWithBody(
    `${API_ORIGIN}/api/search-structure`,
    "POST",
    body,
    "등록 실패",
  );
};

export const deleteSearchStructure = async (
  searchStructureId: number,
): Promise<void> => {
  const body = {
    searchStructureId: searchStructureId,
  };
  return fetchWithBody(
    `${API_ORIGIN}/api/search-structure`,
    "DELETE",
    body,
    "삭제 실패",
  );
};
