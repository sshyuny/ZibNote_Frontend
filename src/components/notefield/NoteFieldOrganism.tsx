'use client'

import { useState } from "react"
import NoteFieldList from "@/components/notefield/NoteFieldList"
import NoteFieldReqForm from "@/components/notefield/NoteFieldReqForm"

export default function NoteFieldOrganism() {

    const [refreshKey, setRefreshKey] = useState(0)
    
    return (
        <div className="flex flex-col justify-center items-center mt-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-gray-600 mt-4">조사 항목</h1>
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
                <NoteFieldReqForm
                    onSuccess={() => setRefreshKey(prev => prev + 1)}
                />
            </div>
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
                <NoteFieldList
                    refreshKey={refreshKey}
                />
            </div>
        </div>
    )

}
