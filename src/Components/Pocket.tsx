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
      <h2>POCKET:</h2>
      <div className="flex flex-row">
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
