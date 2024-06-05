import { useQuery } from "@tanstack/react-query";
import { PokemonDetails } from "../Types/types";
import { getRandNumber } from "../data/utils";

async function fetchPokeDetails(): Promise<PokemonDetails> {
  const id = getRandNumber(1, 1025);
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(URL + id);
  const data = response.json();
  return data;
}

function usePokemon() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchPokeDetails,
    refetchOnWindowFocus: false,
  });
}

export default function PokemonMain() {
  const { error, isSuccess, isLoading, data } = usePokemon();
  return (
    <div className="absolute inset-0 flex justify-center items-center z-10">
      {error && <h1>Something went wrong</h1>}
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && (
        <div className="card bg-slate-50/75 w-1/4 h-5/6">
          <h1 className="text-4xl text-center pb-5">
            {data.name.toUpperCase()}
          </h1>
          <div className="flex flex-col justify-evenly px-5 pb-5">
            {data.sprites.other.dream_world.front_default ? (
              <img
                src={data.sprites.other.dream_world.front_default}
                alt="Picture of the opponent"
                className="max-h-fit"
              />
            ) : data.sprites.front_default ? (
              <img
                src={data.sprites.front_default}
                alt="Picture of the opponent"
                className="max-h-fit"
              />
            ) : (
              <h1>Sorry, no image to this Pokemon</h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
