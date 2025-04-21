import { SearchItemType } from "@/feature/search/SearchType"
  
export default function SearchItemCard({ item, onSuccess }: { item: SearchItemType, onSuccess: Function }) {

    const deleteOne = async () => {
        await fetch('http://localhost:8080/api/search', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchId: item.searchId }),
            credentials: 'include',
        })

        onSuccess()
    }

    return (
        <div className="p-4 border rounded shadow bg-white">
            <h2 className="text-lg font-bold text-gray-600">{item.title}</h2>
            <p className="text-gray-700 mt-2 text-gray-600">{item.region}</p>
            <p className="text-gray-700 mt-2 text-gray-600">{item.description}</p>

            <button
                className="mt-2 bottom-2 right-2 bg-red-300 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition"
                onClick={() => deleteOne() }
            >
                ✕
            </button>
        </div>
    )
}
  