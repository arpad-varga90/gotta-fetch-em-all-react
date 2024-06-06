import { gifUrl } from "../data/backgrounds";
import PokemonMain from "./PokemonMain";
import { getRandNumber } from "../data/utils";
import Battle from "./Battle";
import { useRef, useState } from "react";

// 874 strong pokemon

function randNum(): number {
  return getRandNumber(1, 1025);
}

export default function Fight({
  activeLocationNumber,
  onClose,
}: {
  activeLocationNumber: number;
  onClose: (newPocket: number[]) => void;
}) {
  const [enemyActualHP, setEnemyActualHP] = useState(0);
  const [playerActualHP, setPlayerActualHP] = useState(0);
  const [demageToEnemy, setDemageToEnemy] = useState(0);
  const [demageToPlayer, setDemageToPlayer] = useState(0);

  const randomNumber = useRef(randNum());

  return (
    <div className="full-width-1024px text-black">
      <img
        src={gifUrl[activeLocationNumber - 1]}
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="overlay-components">
        <div className="w-3/5 grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-5">
            <PokemonMain pokemonId={874} />
            <PokemonMain pokemonId={randomNumber.current} />
          </div>
          <div className="grid grid-cols-1">
            <Battle
              actualPocket={[1, 6]}
              player={{
                id: 61,
                name: "name-of-player",
                hp: 65,
                defense: 65,
                attack: 65,
              }}
              enemy={{
                id: 134,
                name: "name-of-enemy",
                hp: 20,
                defense: 65,
                attack: 60,
              }}
              onClose={(newPocket) => {
                onClose(newPocket);
              }}
              onHPChange={(
                newEnemyHP,
                newPlayerHP,
                damageToEnemy,
                damageToPlayer
              ) => {
                setEnemyActualHP(newEnemyHP);
                setPlayerActualHP(newPlayerHP);
                setDemageToEnemy(damageToEnemy);
                setDemageToPlayer(damageToPlayer);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
