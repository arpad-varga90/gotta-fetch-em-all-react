import Location from "./Location";
import imgUrl from "../assets/PokeMap.png";
import { coordinates, mapPins } from "../data/coordinates";

export default function Map({
  onSelectLocation,
}: {
  onSelectLocation: (n: number) => void;
}) {
  return (
    <div className="relative ">
      <img src={imgUrl} alt="PokeMap" className="size-full" />
      {[...Array(20).keys()].map((i) => {
        return (
          <Location
            key={i + 1}
            locationNumber={i + 1}
            coordinates={coordinates}
            mapPins={mapPins}
            onSelectLocation={() => onSelectLocation(i + 1)}
          />
        );
      })}
    </div>
  );
}
