"use client";

import { CommonSearchType } from "@/feature/dashboard/DashboardType";
import NoteFieldOrganism from "@/feature/notefield/NoteFieldOrganism";
import SearchOrganism from "@/feature/search/SearchOrganism";
import { useState } from "react";

export default function page() {
  const [commonSearch, setCommonSearch] = useState<CommonSearchType>({
    searchId: 0,
    title: "",
  });

  return (
    <div className="flex gap-6 justify-center overflow-x-auto px-4">
      <SearchOrganism setCommonSearch={setCommonSearch} />
      <NoteFieldOrganism />
    </div>
  );
}
