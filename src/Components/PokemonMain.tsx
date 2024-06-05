import { useQuery } from "@tanstack/react-query";
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
