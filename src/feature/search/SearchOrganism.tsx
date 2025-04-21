'use client'

import { useState } from "react"
import SearchReqForm from "./SearchReqForm"
import SearchList from "./SearchList"

export default function SearchOrganism() {

    const [refreshKey, setRefreshKey] = useState(0)
    
    return (
        <div className="flex flex-col justify-center items-center mt-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-gray-600 mt-4 ">임장 리스트</h1>
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
                <SearchReqForm
                    onSuccess={() => setRefreshKey(prev => prev + 1)}
                />
            </div>
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
                <SearchList
                    refreshKey={refreshKey}
                    onSuccess={() => setRefreshKey(prev => prev + 1)}
                />
            </div>
        </div>
    )

}
