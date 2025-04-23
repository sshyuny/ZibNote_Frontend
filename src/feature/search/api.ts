import { SearchRegisterType } from "./SearchType";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchSearchResults = async () => {

    const res = await fetch(`${API_ORIGIN}/api/search/list`, {
        credentials: 'include',
    })

    if (!res.ok) {throw new Error("검색 실패")}
    return res.json()
}

export const registerSearch = async (requestBody: SearchRegisterType): Promise<void> => {

    const res = await fetch(`${API_ORIGIN}/api/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: requestBody.title, 
            description: requestBody.description, 
            region: requestBody.region
        }),
        credentials: 'include',
    })

    if (!res.ok) {throw new Error("등록 실패")}
    return res.json()
}

export const deleteSearch = async (searchId: number): Promise<void> => {

    const res = await fetch(`${API_ORIGIN}/api/search`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchId: searchId }),
        credentials: 'include',
    })

    if (!res.ok) {throw new Error("삭제 실패")}
    return res.json()
}
