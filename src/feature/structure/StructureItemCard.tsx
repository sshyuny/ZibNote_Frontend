import { StructureType } from "./StructureType";

export default function StructureItemCard({
  itemStructure,
  setStructure,
  closeStructurePopup,
}: {
  itemStructure: StructureType;
  setStructure: Function;
  closeStructurePopup: Function;
}) {
  const selectOne = () => {
    setStructure(itemStructure);
    closeStructurePopup();
  };

  return (
    <div className="max-h-6/10 overflow-y-auto">
      <div className="mb-1 p-4 rounded shadow bg-gray-200">
        <h2 className="text-lg font-bold text-gray-600">
          {itemStructure.name}
        </h2>
        <p className="text-gray-700 mt-2 text-gray-600">
          {itemStructure.roadAddress}
        </p>
        <p className="text-gray-700 mt-2 text-gray-600">
          {itemStructure.numberAddress}
        </p>
        <button
          className="mt-2 bottom-2 right-2 bg-blue-300 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 transition"
          onClick={() => selectOne()}
        >
          선택
        </button>
      </div>
    </div>
  );
}
