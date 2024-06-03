import Location from "./Location";
import imgUrl from "../assets/PokeMap.png";
import { coordinates } from "../data/coordinates";


export default function Map() {
  return (
    <div className="relative "
    >
      <img src={imgUrl} alt="PokeMap" />
      {[...Array(20).keys()].map((i) => {
        return <Location key={i + 1} n={i + 1} coordinates={coordinates} />;
      })}
    </div>
  );
}