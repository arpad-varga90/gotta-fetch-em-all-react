import { gifUrl } from "../data/backgrounds";
import PokemonMain from "./PokemonMain";
import Battle from "./Battle";

export default function Fight({
  activeLocationNumber,
  onClose,
}: {
  activeLocationNumber: number;
  onClose: (newPocket: number[]) => void;
}) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="relative z-0">
          <img
            src={gifUrl[activeLocationNumber - 1]}
            alt="background"
            className="w-screen"
          />
          <PokemonMain />
        </div>
      </div>
      <Battle
        actualPocket={[1, 6]}
        enemyID={134}
        enemyHP={130}
        enemyDefense={65}
        enemyAttack={60}
        playerHP={65}
        playerDefense={65}
        playerAttack={65}
        onClose={(newPocket) => {
          onClose(newPocket);
        }}
      />
    </div>
  );
}
