import { gifUrl } from "../data/backgrounds";
import PokemonMain from "./PokemonMain";
import { getRandNumber } from "../data/utils";

// 874 strong pokemon

function randNum(): number {
  return getRandNumber(1, 1025);
}

export default function Fight({
  activeLocationNumber,
  onClose,
}: {
  activeLocationNumber: number;
  onClose: () => void;
}) {
  return (
    <div onClick={onClose} className="full-width-1024px">
      <img
        src={gifUrl[activeLocationNumber - 1]}
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="overlay-components">
        <div className="w-3/5 h-3/5 grid grid-cols-2 gap-5">
          <PokemonMain pokemonId={874} />
          <PokemonMain pokemonId={randNum()} />
        </div>
      </div>
    </div>
  );
}
