"use client";

import { useState } from "react";
import StructureItemCard from "./StructureItemCard";
import useSWRMutation from "swr/mutation";
import { fetchStructureResults } from "./api";

export default function StructurePopup({
  closeStructurePopup,
  setStructure,
}: {
  closeStructurePopup: any;
  setStructure: Function;
}) {
  // api value
  const [structureName, setStructureName] = useState<string>("");
  const [structureAddress, setStructureAddress] = useState<string>("");
  // functions
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/api/structure/list?name=${structureName}&address=${structureAddress}`,
    fetchStructureResults,
  );

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
      onClick={closeStructurePopup}
    >
      <div
        className="bg-white p-8 max-h-9/10  overflow-y-auto rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-2">건물 선택</h2>
        <p className="mb-1">건물 이름으로 찾기</p>
        <input
          type="text"
          className="mb-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          value={structureName}
          onChange={(e) => setStructureName(e.target.value)}
          placeholder="건물명"
        />
        <p className="mb-1">건물 주소로 찾기</p>
        <input
          type="text"
          className="mb-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          value={structureAddress}
          onChange={(e) => setStructureAddress(e.target.value)}
          placeholder="건물 주소"
        />
        <button
          className="mb-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition disabled:opacity-50"
          type="button"
          onClick={() => trigger()}
        >
          {"조회"}
        </button>

        {data &&
          data.data.map((item: any) => (
            <StructureItemCard
              key={"structure" + item.structureId}
              itemStructure={item}
              setStructure={setStructure}
              closeStructurePopup={closeStructurePopup}
            />
          ))}
      </div>
    </div>
  );
}
