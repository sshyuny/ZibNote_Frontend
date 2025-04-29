"use client";

import { useState } from "react";
import { CommonSearchType } from "../dashboard/DashboardType";
import StructurePopup from "../structure/StructurePopup";
import { StructureType } from "../structure/StructureType";
import { initialStructure } from "../structure/constants";
import { SearchStructureRegisterType } from "./SearchStructureType";
import { registerSearchStructure } from "./api";
import { mutate } from "swr";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

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
  const [error, setError] = useState("");
  const [isStructurePopupOpen, setIsStructurePopupOpen] = useState(false);
  // function
  const openStructurePopup = () => setIsStructurePopupOpen(true);
  const closeStructurePopup = () => setIsStructurePopupOpen(false);
  const handleSubmit = async (e: React.FormEvent) => {
    if (commonSearch.searchId == 0) {
      alert("임장 리스트에서 임장 항목을 하나 선택해주세요!");
    }
    if (structure.structureId == 0) {
      alert("건물을 선택해주세요!");
    }
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const requestData: SearchStructureRegisterType = {
      searchId: commonSearch.searchId,
      structureId: structure.structureId,
      description: description,
    };

    try {
      await registerSearchStructure(requestData);
      mutate(`/api/search-structure/list?searchId=${commonSearch.searchId}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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

          {error && <p className="text-red-500 text-sm">{error}</p>}

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
