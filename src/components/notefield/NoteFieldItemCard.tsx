import { NoteFieldItemType } from "@/types/NoteFieldType";

export default function NoteFieldItemCard({ item }: { item: NoteFieldItemType }) {
    return (
        <div className="p-4 border rounded shadow bg-white">
            <h2 className="text-lg font-bold text-gray-600">{item.name}</h2>
            <p className="text-gray-700 mt-2 text-gray-600">{item.description}</p>
        </div>
    )
}
  