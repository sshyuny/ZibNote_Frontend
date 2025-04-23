import { NoteFieldRegisterType } from "./NoteFieldType";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchNoteFieldResults = async () => {

    const res = await fetch(`${API_ORIGIN}/api/notefield/list`, {
        credentials: 'include',
    })

    if (!res.ok) throw new Error("검색 실패")
    return res.json()
}

export const registerNoteField = async (requestData: NoteFieldRegisterType) => {

    const res = await fetch(`${API_ORIGIN}/api/notefield`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            name: requestData.name, 
            description: requestData.description 
        }),
        credentials: 'include',
    })

    if (!res.ok) throw new Error("등록 실패")
    return res.json()
}

export const deleteSearch = async (noteFieldId: number): Promise<void> => {

    const res = await fetch(`${API_ORIGIN}/api/notefield`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ noteFieldId: noteFieldId }),
        credentials: 'include',
    })

    if (!res.ok) {throw new Error("삭제 실패")}
    return res.json()
}
