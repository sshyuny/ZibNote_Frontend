"use client";

import SearchReqForm from "./SearchReqForm";
import SearchList from "./SearchList";

export default function SearchOrganism() {
  const searchSwrKey: unknown[] = ["/search", "1"];

  return (
    <div className="flex flex-col justify-center items-center mt-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-600 mt-4 ">
        임장 리스트
      </h1>
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
        <SearchReqForm searchSwrKey={searchSwrKey} />
      </div>
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
        <SearchList searchSwrKey={searchSwrKey} />
      </div>
    </div>
  );
}
