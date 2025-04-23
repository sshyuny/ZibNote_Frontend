"use client";

import { useState } from "react";
import { mutate } from "swr";
import { fetchNoteFieldResults, registerNoteField } from "./api";
import { NoteFieldRegisterType } from "./NoteFieldType";

export default function NoteFieldReqForm({
  noteFieldSwrKey,
}: {
  noteFieldSwrKey: unknown[];
}) {
  const [name, setName] = useState("");
  const [description, setDesctiption] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const requestData: NoteFieldRegisterType = {
      name: name,
      description: description,
    };

    try {
      await registerNoteField(requestData);
      mutate(noteFieldSwrKey, () => fetchNoteFieldResults());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="항목명"
        />
      </div>

      <div>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          value={description}
          onChange={(e) => setDesctiption(e.target.value)}
          placeholder="설명"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
      >
        {"추가"}
      </button>
    </form>
  );
}
