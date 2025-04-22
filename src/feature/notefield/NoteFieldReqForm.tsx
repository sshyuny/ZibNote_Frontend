'use client'

import { useState } from 'react'
import { mutate } from "swr"
import { fetchNoteFieldResults } from './api';

export default function NoteFieldReqForm({noteFieldSwrKey}: {noteFieldSwrKey: unknown[]}) {

  const [name, setName] = useState('')
  const [description, setDesctiption] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:8080/api/notefield', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, description: description }),
        credentials: 'include', // 세션/쿠키 인증일 경우 필요!
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || '로그인 실패')
      }

      mutate(noteFieldSwrKey, () => fetchNoteFieldResults())

    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <input
          type="text"
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='항목명'
        />
      </div>

      <div>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          value={description}
          onChange={(e) => setDesctiption(e.target.value)}
          placeholder='설명'
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
      >
        {'추가'}
      </button>

    </form>
  )
}
