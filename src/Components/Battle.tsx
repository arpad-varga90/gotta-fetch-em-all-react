import { useState } from "react";
import { getRandNumber } from "../data/utils";

export default function Battle({
  actualPocket,
  enemyID,
  enemyHP,
  enemyDefense,
  enemyAttack,
  playerHP,
  playerDefense,
  playerAttack,
  onClose,
}: {
  actualPocket: number[];
  enemyID: number;
  enemyHP: number;
  enemyDefense: number;
  enemyAttack: number;
  playerHP: number;
  playerDefense: number;
  playerAttack: number;
  onClose: (newPocket: number[]) => void;
}) {
  const [enemyActualHP, setEnemyActualHP] = useState(enemyHP);
  const [playerActualHP, setPlayerActualHP] = useState(playerHP);
  const [attackState, setAttackState] = useState(1);
  const [newPocket, setNewPocket] = useState([1, 6]);
  const [message, setMessage] = useState("")
  const z = getRandNumber(217, 255);
  const playerStarts = z % 2;

  function fight() {
    if (playerStarts) {
        setAttackState(3);
    }
    if (!playerStarts) {
        setAttackState(3);
    }
  }

  return (
    <div>
      <h1>BATTLE</h1>
      {attackState === 1 ? (
        <>
          <button
            onClick={() => {
              setAttackState(2);
            }}
          >
            START FIGHT
          </button>
        </>
      ) : attackState === 2 ? (
        <>
          <button
            onClick={() => {
              fight();
            }}
          >
            ATTACK
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              onClose(newPocket);
            }}
          >
            BACK TO MAP
          </button>
        </>
      )}
    </div>
  );
}
