import { SearchItemType } from "@/feature/search/SearchType";

import { mutate } from "swr";
import { deleteSearch } from "./api";

export default function SearchItemCard({
  item,
  searchSwrKey,
}: {
  item: SearchItemType;
  searchSwrKey: unknown[];
}) {
  const deleteOne = async () => {
    await deleteSearch(item.searchId);
    mutate(searchSwrKey);
  };

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold text-gray-600">{item.title}</h2>
      <p className="text-gray-700 mt-2 text-gray-600">{item.region}</p>
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
