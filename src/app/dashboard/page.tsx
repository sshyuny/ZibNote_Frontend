"use client";

import NoteFieldOrganism from "@/feature/notefield/NoteFieldOrganism";
import SearchOrganism from "@/feature/search/SearchOrganism";

export default function page() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 px-4">
        <SearchOrganism />
        <NoteFieldOrganism />
      </div>
    </div>
  );
}
