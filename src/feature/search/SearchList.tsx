'use client'

import { useEffect, useState } from 'react'
import { SearchItemType } from '@/feature/search/SearchType'
import SearchItemCard from './SearchItemCard'


export default function List({refreshKey, onSuccess}: {refreshKey: number, onSuccess: Function}) {

    const [items, setItems] = useState<SearchItemType[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('http://localhost:8080/api/search/list', {
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
                <SearchItemCard key={'search'+item.searchId} item={item} onSuccess={onSuccess} />
            ))}
        </div>
    )
}
