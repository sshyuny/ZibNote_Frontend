"use client";

import { useState } from "react";
import { mutate } from "swr";
import { fetchSearchResults, registerSearch } from "./api";
import { SearchRegisterType } from "./SearchType";

export default function FieldReqForm({
  searchSwrKey,
}: {
  searchSwrKey: unknown[];
}) {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDesctiption] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const requestBody: SearchRegisterType = {
      title: title,
      description: description,
      region: region,
    };

    try {
      await registerSearch(requestBody);
      mutate(searchSwrKey, () => fetchSearchResults());

      setTitle("");
      setRegion("");
      setDesctiption("");
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
      </div>

      <div>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="지역"
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
