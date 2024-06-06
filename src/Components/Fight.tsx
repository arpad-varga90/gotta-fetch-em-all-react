import { gifUrl } from "../data/backgrounds";
import PokemonMain from "./PokemonMain";
import Battle from "./Battle";
import { useState } from "react";

export default function Fight({
  activeLocationNumber,
  onClose,
}: {
  activeLocationNumber: number;
  onClose: (newPocket: number[]) => void;
}) {

  const [message,setMessage]=useState("")
  const [enemyActualHP,setEnemyActualHP]=useState(0)
  const [playerActualHP,setPlayerActualHP]=useState(0)


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
          hp: 130,
          defense: 65,
          attack: 60,
        }}
        onClose={(newPocket) => {
          onClose(newPocket);
        }
      }
      onHPChange={(newEnemyHP,newPlayerHP)=>{setEnemyActualHP(newEnemyHP);setPlayerActualHP(newPlayerHP)}}
      onMessage={(a)=>{setMessage(a)}}
      />
      <p>newPlayerHP: {playerActualHP}</p>
      <p>newEnemyHP: {enemyActualHP}</p>
      <p>Message: {message}</p>
    </div>
  );
}
