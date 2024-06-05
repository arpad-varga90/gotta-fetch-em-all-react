import { gifUrl } from "../data/backgrounds";
import PokemonMain from "./PokemonMain";
import { getRandNumber } from "../data/utils";

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
    <div onClick={onClose} className="flex relative z-0">
      <img
        src={gifUrl[activeLocationNumber - 1]}
        alt="background"
        className="w-screen"
      />
      <PokemonMain pokemonId={6} />
      <PokemonMain pokemonId={randNum()} />
    </div>
  );
}
