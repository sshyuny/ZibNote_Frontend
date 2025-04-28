"use client";

import SearchReqForm from "./SearchReqForm";
import SearchList from "./SearchList";

export default function SearchOrganism({
  setCommonSearch,
}: {
  setCommonSearch: Function;
}) {
  const searchSwrKey: unknown[] = ["/search", "1"];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-600 pt-12 pb-4">
        임장 리스트
      </h1>
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
        <SearchReqForm searchSwrKey={searchSwrKey} />
      </div>
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
        <SearchList
          searchSwrKey={searchSwrKey}
          setCommonSearch={setCommonSearch}
        />
      </div>
    </div>
  );
}
