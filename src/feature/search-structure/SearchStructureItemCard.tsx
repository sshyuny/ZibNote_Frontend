"use client";

import { useState } from "react";
import { SearchStructureItemType } from "./SearchStructureType";
import { mutate } from "swr";
import { deleteSearchStructure } from "./api";

export default function SearchStructureItemCard({
  searchStructureSwrKey,
  item,
}: {
  searchStructureSwrKey: unknown[];
  item: SearchStructureItemType;
}) {
  const [error, setError] = useState("");

  const deleteOne = async () => {
    try {
      await deleteSearchStructure(item.searchStructureId);
      mutate(`/api/search-structure/list?searchId=${item.searchId}`);
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold text-gray-600">{item.searchTitle}</h2>
      <h2 className="text-lg font-bold text-gray-600">{item.structureName}</h2>
      <p className="text-gray-700 mt-2 text-gray-600">{item.description}</p>

      <button
        className="mt-2 bottom-2 right-2 bg-red-300 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition"
        onClick={() => deleteOne()}
      >
        ✕
      </button>
    </div>
  );
}
