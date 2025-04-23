"use client";

import NoteFieldReqForm from "@/feature/notefield/NoteFieldReqForm";
import NoteFieldList from "@/feature/notefield/NoteFieldList";

export default function NoteFieldOrganism() {
  const noteFieldSwrKey: unknown[] = ["/notefiled", "1"];

  return (
    <div className="flex flex-col justify-center items-center mt-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-600 mt-4">조사 항목</h1>
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
        <NoteFieldReqForm noteFieldSwrKey={noteFieldSwrKey} />
      </div>
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mb-4">
        <NoteFieldList noteFieldSwrKey={noteFieldSwrKey} />
      </div>
    </div>
  );
}
