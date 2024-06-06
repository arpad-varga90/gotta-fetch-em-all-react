import { PokemonDetails } from "../Types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function fetchPokemon(n: number): Promise<PokemonDetails> {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(URL + n);
  const data = await response.json();
  return data;
}
export default function PokemonPoket({ id }: { id: number }) {
  const query = useQuery({
    queryKey: ["pocket", id],
    queryFn: () => fetchPokemon(id),
  });
  if (query.error) {
    return <></>;
  }
  const [isVisible, setIsVisible] = useState(false);

  const hoverOn = function () {
    setIsVisible(true);
  };
  const hoverOff = function () {
    setIsVisible(false);
  };

  return (
    <div className="w-24 h-24" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
      <p className={`text-base ${isVisible ? "visible" : "invisible"}`}>
        {query.data?.name}
      </p>

      <div>
        <img
          id="pokemonImg"
          className="w-20 h-20"
          src={
            query.data?.sprites.other.showdown.front_default
              ? query.data?.sprites.other.showdown.front_default
              : query.data?.sprites.front_default
              ? query.data?.sprites.front_default
              : ""
          }
          alt={query.data?.name}
        />
      </div>
    </div>
  );
}
