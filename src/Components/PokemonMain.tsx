import { useQuery } from "@tanstack/react-query";
import { PokemonDetails } from "../Types/types";

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
}
