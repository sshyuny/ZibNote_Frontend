"use client";

import { CommonSearchType } from "../dashboard/DashboardType";
import SearchStructureReqForm from "./SearchStructureReqForm";

export default function SearchStructureOrganism({
  commonSearch,
}: {
  commonSearch: CommonSearchType;
}) {
  const searchStructureSwrKey: unknown[] = ["/search-structure", "1"];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-600 pt-12 pb-4">
        임장 건물 목록
      </h1>
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
        <SearchStructureReqForm
          searchStructureSwrKey={searchStructureSwrKey}
          commonSearch={commonSearch}
        />
      </div>
    </div>
  );
}
