import { useQuery } from "@tanstack/react-query";
import { useId } from "react";
import { PoceLocation } from "../Types/types";

async function fetchLocation(n: string): Promise<PoceLocation> {
  const URL = "https://pokeapi.co/api/v2/location/";
  const response = await fetch(URL + n);
  const data = await response.json();
  return data[0];
}
export default function Location() {
  const id = useId();
  const query = useQuery({
    queryKey: ["location", id],
    queryFn: () => fetchLocation("1"),
  });
  return <h1>{query.data?.names[1].name}</h1>;
}
