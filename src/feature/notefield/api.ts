
const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchNoteFieldResults = async () => {

    const res = await fetch(`${API_ORIGIN}/api/notefield/list`, {
        credentials: 'include',
    })

    if (!res.ok) throw new Error("검색 실패")
    return res.json()
}
