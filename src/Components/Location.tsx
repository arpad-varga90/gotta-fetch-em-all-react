import { useQuery } from "@tanstack/react-query";
import { PokeLocation } from "../Types/types";
import { useState } from "react";

async function fetchLocation(n: number): Promise<PokeLocation> {
  const URL = "https://pokeapi.co/api/v2/location/";
  const response = await fetch(URL + n);
  const data = await response.json();
  return data;
}
export default function Location({
  locationNumber,
  coordinates,
  mapPins,
  onSelectLocation,
}: {
  locationNumber: number;
  coordinates: Array<Array<number>>;
  mapPins: Array<string>;
  onSelectLocation: () => void;
}) {
  const query = useQuery({
    queryKey: ["location", locationNumber],
    queryFn: () => fetchLocation(locationNumber),
  });
  const [pointer, setPointer] = useState(mapPins[locationNumber - 1]);
  const [locationCard, setLocationCard] = useState(<></>);

  if (query.error) {
    return <></>;
  }
  const hoverOn = function () {
    setLocationCard(
      <span
        onClick={onSelectLocation}
        className="text-white	text-2xl bg-red-700 p-2 "
      >
        {query.data?.names[1].name}
      </span>
    );
    setPointer("");
  };
  const hoverOff = function () {
    setLocationCard(<></>);
    setPointer(mapPins[locationNumber - 1]);
  };

  const x = `${(coordinates[locationNumber - 1][0] / 2170) * 100}%`;
  const y = `${(coordinates[locationNumber - 1][1] / 2520) * 100}%`;

  return (
    <div
      id={query.data?.name}
      style={{
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: x,
        left: y,
      }}
    >
      <div onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
        <span className="text-xl text-black bg-white">{locationNumber}</span>
        <span className="text-xl">{pointer}</span>
        {locationCard}
      </div>
    </div>
  );
}
