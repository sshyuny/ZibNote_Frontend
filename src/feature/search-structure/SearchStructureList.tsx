"use client";

import { fetchSearchStructureResults } from "./api";
import { CommonSearchType } from "../dashboard/DashboardType";
import SearchStructureItemCard from "./SearchStructureItemCard";
import { useEffect } from "react";
import useSWR from "swr";

export default function SearchStructureList({
  searchStructureSwrKey,
  commonSearch,
}: {
  searchStructureSwrKey: unknown[];
  commonSearch: CommonSearchType;
}) {
  // requester
  const { data, error, mutate } = useSWR(
    commonSearch.searchId
      ? `/api/search-structure/list?searchId=${commonSearch.searchId}`
      : null,
    fetchSearchStructureResults,
  );
  // Hooks
  useEffect(() => {
    console.log(commonSearch.searchId);
    if (commonSearch.searchId != 0) {
      mutate(`/api/search-structure/list?searchId=${commonSearch.searchId}`);
    }
  }, [commonSearch.searchId]);

  // return case
  if (commonSearch.searchId == 0) return <div className="space-y-4"></div>;
  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="space-y-4">
      {data &&
        data.data &&
        data.data.map((item: any) => (
          <SearchStructureItemCard
            key={"searchStructure" + item.searchStructureId}
            searchStructureSwrKey={searchStructureSwrKey}
            item={item}
          />
        ))}
    </div>
  );
}
