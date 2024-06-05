import { gifUrl } from "../data/backgrounds";
import PokemonMain from "./PokemonMain";

export default function Fight({
  activeLocationNumber,
  onClose,
}: {
  activeLocationNumber: number;
  onClose: () => void;
}) {
  return (
    <div onClick={onClose}>
      <div className="flex justify-center items-center">
        <div className="relative z-0">
          <img src={gifUrl[activeLocationNumber-1]} alt="background" className="w-screen" />
            <PokemonMain />
        </div>
      </div>
    </div>
  );
}
