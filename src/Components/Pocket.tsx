import PokemonPocket from "./PokemonPocket";

export default function Pocket({
  pocket,
  onSelect,
}: {
  pocket: number[];
  onSelect: (id: number) => void;
}) {
  return (
    <footer>
      <h2 className="text-center my-2 py-1">POCKET:</h2>
      <div className="flex flex-row flex-wrap gap-3 h-auto">
        {pocket.map((id) => (
          <PokemonPocket
            key={id}
            id={id}
            onSelect={(id) => {
              onSelect(id);
            }}
          />
        ))}
      </div>
    </footer>
  );
}
