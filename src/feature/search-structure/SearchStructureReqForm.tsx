"use client";

import { useState } from "react";
import { CommonSearchType } from "../dashboard/DashboardType";
import StructurePopup from "../structure/StructurePopup";
import { StructureType } from "../structure/StructureType";
import { initialStructure } from "../structure/constants";

export default function SearchStructureReqForm({
  searchStructureSwrKey,
  commonSearch,
}: {
  searchStructureSwrKey: unknown[];
  commonSearch: CommonSearchType;
}) {
  // api vale
  const [structure, setStructure] = useState<StructureType>(initialStructure);
  const [description, setDesctiption] = useState("");
  // page vale
  const [isLoading, setIsLoading] = useState(false);
  const [isStructurePopupOpen, setIsStructurePopupOpen] = useState(false);
  // function
  const openStructurePopup = () => setIsStructurePopupOpen(true);
  const closeStructurePopup = () => setIsStructurePopupOpen(false);
  const handleSubmit = async (e: React.FormEvent) => {};

  return (
    <>
      {isStructurePopupOpen && (
        <StructurePopup
          closeStructurePopup={closeStructurePopup}
          setStructure={setStructure}
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            value={commonSearch.title}
            placeholder="임장 제목"
            disabled={true}
          />
          <input
            type="text"
            className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            value={structure.name}
            onClick={openStructurePopup}
            placeholder="건물명"
            readOnly
          />
          <input
            type="text"
            className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            value={description}
            onChange={(e) => setDesctiption(e.target.value)}
            placeholder="설명"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
          >
            {"추가"}
          </button>
        </div>
      </form>
    </>
  );
}
