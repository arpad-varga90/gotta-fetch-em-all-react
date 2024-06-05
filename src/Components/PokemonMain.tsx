import { useQuery } from "@tanstack/react-query";
import { PokemonDetails } from "../Types/types";
import { useState } from "react";

async function fetchPokeDetails(id: number): Promise<PokemonDetails> {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(URL + id);
  const data = response.json();
  return data;
}

function usePokemon(id: number) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokeDetails(id),
    refetchOnWindowFocus: false,
  });
}

export default function PokemonMain({ pokemonId }: { pokemonId: number }) {
  const { error, isSuccess, isLoading, data } = usePokemon(pokemonId);
  const [isVisible, setIsVisible] = useState(true);

  return (
      {error && (
        <h1 className="warning-message">
          Something went wrong...
        </h1>
      )}
      {isSuccess && (
        <div className="card justify-between bg-slate-50/75 w-1/4 h-5/6">
          <h1 className="text-wrap text-center p-2">
            {data.name.toUpperCase()}
          </h1>

          <div className="bg-blue-100 border-2 rounded-lg h-60 p-2 mx-2">
            {data.sprites.other.dream_world.front_default ? (
              <img
                src={data.sprites.other.dream_world.front_default}
                alt="Picture of the opponent"
                className="size-full"
              />
            ) : data.sprites.front_default ? (
              <img
                src={data.sprites.front_default}
                alt="Picture of the opponent"
                className="size-full"
              />
            ) : (
              <h1>Sorry, no image to this Pokemon</h1>
            )}
          </div>
          {/* Stats */}
          <div
            className={`grid grid-cols-1 my-6 mx-8 ${
              isVisible ? "visible" : "invisible"
            }`}
          >
            <div className="text-center pb-4">Details</div>
            <div className="grid grid-cols-2">
              <div className="grid grid-rows-3">
                <div className="">HP:</div>
                <div className="">Attack:</div>
                <div className="">Defense:</div>
              </div>
              <div className="grid grid-rows-3 text-right pr-6">
                <div className="">{data.stats[0].base_stat}</div>
                <div className="">{data.stats[1].base_stat}</div>
                <div className="">{data.stats[2].base_stat}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
