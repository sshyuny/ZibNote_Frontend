'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {

    const [memberName, setMemberName] = useState('');
    const router = useRouter() 

    useEffect(() => {
        fetch('http://localhost:8080/api/member', {
            credentials: 'include',
        })
        .then(res => {
            if (!res.ok) throw new Error('데이터 조회 실패')
            return res.json()
        })
        .then(data => setMemberName(data.data))
        .catch(err => router.push('/login'))
    }, [memberName])

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-gray-600">{memberName} 님, 안녕하세요 :) </h1>
        </div>
    );

}
