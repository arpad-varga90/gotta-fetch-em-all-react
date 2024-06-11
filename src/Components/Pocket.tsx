import PokemonPocket from "./PokemonPocket";

export default function Pocket({
  pocket,
  fightState,
  onSelect,
}: {
  pocket: number[];
  fightState: string;
  onSelect: (id: number) => void;
}) {
  return (
    <div className=" absolute top-0 left-0 z-10 text-black">
      <div className="flex flex-row">
        {pocket.map((id) => (
          <PokemonPocket
            key={id}
            id={id}
            fightState={fightState}
            onSelect={(id) => {
              onSelect(id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
