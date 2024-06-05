import { useQuery } from "@tanstack/react-query";
import { PokemonDetails } from "../Types/types";

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
  return (
    <div className="absolute inset-0 flex justify-center items-center z-10">
      {error && <h1>Something went wrong</h1>}
      {isLoading && <h1>Loading...</h1>}
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

          <div className="px-2 mb-10">
            <table className="table-fixed">
              <thead>
                <tr>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hp:</td>
                  <td>{data.stats[0].base_stat}</td>
                </tr>
                <tr>
                  <td>Damage:</td>
                  <td>{data.stats[1].base_stat}</td>
                </tr>
                <tr>
                  <td>Defense:</td>
                  <td>{data.stats[2].base_stat}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
