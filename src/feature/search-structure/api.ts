import { SearchStructureRegisterType } from "./SearchStructureType";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchSearchStructureResults = async (key: string) => {
  const res = await fetch(`${API_ORIGIN}${key}`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("검색 실패");
  }
  return res.json();
};

export const registerSearchStructure = async (
  requestData: SearchStructureRegisterType,
) => {
  const res = await fetch(`${API_ORIGIN}/api/search-structure`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchId: requestData.searchId,
      structureId: requestData.structureId,
      description: requestData.description,
    }),
    credentials: "include",
  });

  if (!res.ok) throw new Error("등록 실패");
  return res.json();
};

export const deleteSearchStructure = async (
  searchStructureId: number,
): Promise<void> => {
  const res = await fetch(`${API_ORIGIN}/api/search-structure`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchStructureId: searchStructureId }),
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("삭제 실패");
  }
  return res.json();
};
