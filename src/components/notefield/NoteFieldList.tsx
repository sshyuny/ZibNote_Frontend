'use client'

import { useEffect, useState } from 'react'
import NoteFieldItemCard from './NoteFieldItemCard'
import { NoteFieldItemType } from '@/types/NoteFieldType'

export default function NoteFieldList({refreshKey}: {refreshKey: number}) {

    const [items, setItems] = useState<NoteFieldItemType[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('http://localhost:8080/api/notefield/list', {
            credentials: 'include', // 세션/쿠키 인증일 경우 필요!
        })
        .then(res => {
            if (!res.ok) throw new Error('데이터 조회 실패')
            return res.json()
        })
        .then(data => setItems(data.data))
        .catch(err => setError(err.message))
    }, [refreshKey])

    if (error) return <p className="text-red-500">{error}</p>

    return (
        <div className="space-y-4">
            {items.map(item => (
                <NoteFieldItemCard key={item.noteFieldId} item={item} />
            ))}
        </div>
    )
}
