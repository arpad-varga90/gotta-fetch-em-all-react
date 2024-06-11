import { useState } from "react";
import { usePokemon } from "../Data/utils";

export default function PokemonPocket({
  id,
  fightState,
  onSelect,
}: {
  id: number;
  fightState: string;
  onSelect: (id: number) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { error, isLoading, isSuccess, data } = usePokemon(id);

  return (
    <div
      className="w-20"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => {
        if (fightState === "select") {
          onSelect(id);
        }
      }}
    >
      {error && <h1 className="warning-message">Something went wrong...</h1>}
      {isLoading && <h1 className="load-info">Loading...</h1>}
      {isSuccess && (
        <>
          <div className="card w-full h-1/2 p-2 cursor-poke-full">
            <img
              className="w-auto h-full"
              src={
                data.sprites.other.showdown.front_default
                  ? data.sprites.other.showdown.front_default
                  : data.sprites.front_default
                  ? data.sprites.front_default
                  : ""
              }
              alt={data.name}
            />
                      <p className={`m-2 text-base ${isVisible ? "visible" : "invisible"}`}>
            {data.name}
          </p>
          </div>
        </>
      )}
    </div>
  );
}
