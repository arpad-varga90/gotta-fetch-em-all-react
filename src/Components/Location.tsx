import { useQuery } from "@tanstack/react-query";
import { PokeLocation } from "../Types/types";
import { useState } from "react";

async function fetchLocation(n: number): Promise<PokeLocation> {
  const URL = "https://pokeapi.co/api/v2/location/";
  const response = await fetch(URL + n);
  const data = await response.json();
  return data;
}
export default function Location({ n }: { n: number }) {
  const query = useQuery({
    queryKey: ["location", n],
    queryFn: () => fetchLocation(n),
  });
  const [location, setLocation] = useState("");

  if(query.error){
    return<></>
  }
  const hoverOn = function () {
    setLocation(query.data?.names[1].name);
  };
  const hoverOff = function () {
    setLocation("");
  };

  return (
    <div id={query.data?.name}>
      <span onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
        🔴{location}
      </span>
    </div>
  );
}
