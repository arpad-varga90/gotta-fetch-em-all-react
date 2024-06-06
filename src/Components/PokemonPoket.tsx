import { PokemonDetails } from "../Types/types";
import { useQuery } from "@tanstack/react-query";

async function fetchPokemon(n: number): Promise<PokemonDetails> {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(URL + n);
  const data = await response.json();
  return data;
}
export default function PokemonPoket({id, onSelect}:{id: number, onSelect:(id:number)=>void}) {
  const query = useQuery({
    queryKey: ["pocket", id],
    queryFn: () => fetchPokemon(id),
  });
  if (query.error) {
    return <></>
  }

  return(
  <div>
    <li onClick={()=>{onSelect(id)}} className="w-12 h-12">
              <h3>{query.data?.name}</h3>
              <img
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


  </div>)
}
