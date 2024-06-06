import { useState } from "react";
import { usePokemon } from "../data/utils";

export default function PokemonPocket({
  id,
  onSelect,
}: {
  id: number;
  onSelect: (id: number) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { error, isLoading, isSuccess, data } = usePokemon(id);

  return (
    <>
      {error && <h1 className="warning-message">Something went wrong...</h1>}
      {isLoading && <h1 className="load-info">Loading...</h1>}
      {isSuccess && (
        <div
          className="w-24 h-24"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          onClick={() => {
            onSelect(id);
          }}
        >
          <p className={`text-base ${isVisible ? "visible" : "invisible"}`}>
            {data.name}
          </p>

          <div>
            <img
              id="pokemonImg"
              className="w-20 h-20"
              src={
                data.sprites.other.showdown.front_default
                  ? data.sprites.other.showdown.front_default
                  : data.sprites.front_default
                  ? data.sprites.front_default
                  : ""
              }
              alt={data.name}
            />
          </div>
        </div>
      )}
    </>
  );
}
