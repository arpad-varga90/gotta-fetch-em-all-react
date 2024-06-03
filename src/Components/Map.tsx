import Location from "./Location";
import imgUrl from "../assets/PokeMap.png";
import { coordinates, mapPins} from "../data/coordinates";


export default function Map() {
  return (
    <div className="relative "
    >
      <img src={imgUrl} alt="PokeMap" className="size-full"/>
      {[...Array(20).keys()].map((i) => {
        return <Location key={i + 1} n={i + 1} coordinates={coordinates} mapPins={mapPins} />;
      })}
    </div>
  );
}