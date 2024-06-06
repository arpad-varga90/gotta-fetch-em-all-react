import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PokemonDetails } from "../Types/types";

async function fetchPokemon(n: number): Promise<PokemonDetails> {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(URL + n);
  const data = await response.json();
  return data;
}

export default function Pocket({ pocket }: { pocket: number[] }) {
  const pocketData = pocket.map((e) => {
    const id = e;
    const query = useQuery({
      queryKey: ["pocket", id],
      queryFn: () => fetchPokemon(id),
    });
    if (query.error) {
      return <></>;
    }
    return query.data;
  });
  console.log(pocketData);
  return (
    <footer>
      <ul>
        {pocketData.map((pokemon) => {
          return (
            <li key={pokemon?.id} className="w-12 h-12">
              <h3>{pokemon?.name}</h3>
              <img
                src={
                  pokemon?.sprites.other.showdown.front_default
                    ? pokemon?.sprites.other.showdown.front_default
                    : pokemon?.sprites.front_default
                    ? pokemon.sprites.front_default
                    : ""
                }
                alt={pokemon?.name}
              />
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
