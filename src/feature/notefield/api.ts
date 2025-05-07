import { fetchGetMethod, fetchWithBody } from "@/component/CommonApi";
import { NoteFieldRegisterType } from "./NoteFieldType";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchNoteFieldResults = async (key: string): Promise<any> => {
  return fetchGetMethod(`${API_ORIGIN}/api/notefield/list`, "검색 실패");
};

export const registerNoteField = async (
  requestData: NoteFieldRegisterType,
): Promise<any> => {
  const body = {
    name: requestData.name,
    description: requestData.description,
  };
  return fetchWithBody(
    `${API_ORIGIN}/api/notefield`,
    "POST",
    body,
    "등록 실패",
  );
};

export const deleteNoteField = async (noteFieldId: number): Promise<void> => {
  const body = {
    noteFieldId: noteFieldId,
  };
  return fetchWithBody(
    `${API_ORIGIN}/api/notefield`,
    "DELETE",
    body,
    "삭제 실패",
  );
};
