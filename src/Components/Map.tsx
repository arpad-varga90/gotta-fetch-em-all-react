import Location from "./Location";
import imgUrl from "../assets/PokeMap.png";

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
            onSelectLocation={() => onSelectLocation(i + 1)}
          />
        );
      })}
    </div>
  );
}
