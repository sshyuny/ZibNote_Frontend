"use client";

import SearchItemCard from "./SearchItemCard";
import { fetchSearchResults } from "./api";
import useSWR from "swr";

export default function SearchList({
  searchSwrKey,
}: {
  searchSwrKey: unknown[];
}) {
  const { data, error, isLoading } = useSWR(searchSwrKey, () =>
    fetchSearchResults(),
  );

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="space-y-4">
      {data &&
        data.data.map((item: any) => (
          <SearchItemCard
            key={"search" + item.searchId}
            item={item}
            searchSwrKey={searchSwrKey}
          />
        ))}
    </div>
  );
}
