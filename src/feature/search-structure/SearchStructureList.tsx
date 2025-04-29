"use client";

import { fetchSearchStructureResults } from "./api";
import { CommonSearchType } from "../dashboard/DashboardType";
import SearchStructureItemCard from "./SearchStructureItemCard";
import useSWRMutation from "swr/mutation";
import { useEffect } from "react";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export default function SearchStructureList({
  searchStructureSwrKey,
  commonSearch,
}: {
  searchStructureSwrKey: unknown[];
  commonSearch: CommonSearchType;
}) {
  // requester
  const { trigger, data, error, isMutating } = useSWRMutation(
    `${API_ORIGIN}/api/search-structure/list?searchId=${commonSearch.searchId}`,
    fetchSearchStructureResults,
  );
  // Hooks
  useEffect(() => {
    if (commonSearch.searchId != 0) {
      trigger();
    }
  }, [commonSearch.searchId]);

  // return case
  if (commonSearch.searchId == 0) return <div className="space-y-4"></div>;
  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="space-y-4">
      {data &&
        data.data.map((item: any) => (
          <SearchStructureItemCard
            key={"searchStructure" + item.searchId}
            searchStructureSwrKey={searchStructureSwrKey}
            item={item}
          />
        ))}
    </div>
  );
}
