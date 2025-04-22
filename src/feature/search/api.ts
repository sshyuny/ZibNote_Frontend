
const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchSearchResults = async () => {

    const res = await fetch(`${API_ORIGIN}/api/search/list`, {
        credentials: 'include',
    })

    if (!res.ok) throw new Error("검색 실패")
    return res.json()
}
