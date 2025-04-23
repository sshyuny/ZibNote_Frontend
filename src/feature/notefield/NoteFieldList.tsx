"use client";

import useSWR from "swr";
import NoteFieldItemCard from "./NoteFieldItemCard";
import { fetchNoteFieldResults } from "./api";

export default function NoteFieldList({
  noteFieldSwrKey,
}: {
  noteFieldSwrKey: unknown[];
}) {
  const { data, error, isLoading } = useSWR(noteFieldSwrKey, () =>
    fetchNoteFieldResults(),
  );

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="space-y-4">
      {data &&
        data.data.map((item: any) => (
          <NoteFieldItemCard
            key={item.noteFieldId}
            item={item}
            noteFieldSwrKey={noteFieldSwrKey}
          />
        ))}
    </div>
  );
}
