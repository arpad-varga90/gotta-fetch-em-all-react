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
    <div onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
      <h3 className={`${isVisible ? "visible" : "invisible"}`}>
        {query.data?.name}
      </h3>

      <li className="w-12 h-12">
        <img
          id="pokemonImg"
          className="w-12 h-12"
          src={
            query.data?.sprites.other.showdown.front_default
              ? query.data?.sprites.other.showdown.front_default
              : query.data?.sprites.front_default
              ? query.data?.sprites.front_default
              : ""
          }
          alt={query.data?.name}
        />
      </li>
    </div>
  );
}
