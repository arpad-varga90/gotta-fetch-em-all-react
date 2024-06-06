import { useEffect, useState } from "react";
import { getRandNumber } from "../data/utils";
import { PokemonDetailsRefactored } from "../Types/types";

export default function Battle({
  actualPocket,
  player,
  enemy,
  onClose,
  onHPChange,
  onMessage,
}: {
  actualPocket: number[];
  player: PokemonDetailsRefactored;
  enemy: PokemonDetailsRefactored;
  onClose: (newPocket: number[]) => void;
  onHPChange: (newEnemyHP: number, newPlayerHP: number) => void;
  onMessage: (message: string) => void;
}) {
  const [enemyActualHP, setEnemyActualHP] = useState(enemy.hp);
  const [playerActualHP, setPlayerActualHP] = useState(player.hp);
  const [newPocket, setNewPocket] = useState(actualPocket);
  const [attackState, setAttackState] = useState(1);

  function countPoints(attack: number, defense: number) {
    return (
      ((((2 / 5 + 2) * attack * 60) / defense / 50 + 2) *
        getRandNumber(217, 255)) /
      255
    );
  }

  useEffect(() => {});

  function fight() {
    const damageToEnemy = countPoints(player.attack, enemy.defense);
    const damageToPlayer = countPoints(enemy.attack, player.defense);
    if (enemyActualHP - damageToEnemy <= 0) {
      setEnemyActualHP(0);
      setNewPocket([...actualPocket,player.id,enemy.id])
      onMessage("You won");
      onHPChange(0, enemyActualHP);
      setAttackState(3);
    }
    if (playerActualHP - damageToPlayer <= 0) {
      setPlayerActualHP(0);
      setNewPocket(actualPocket)
      onMessage("You loose");
      onHPChange(playerActualHP, 0);
      setAttackState(3);
    } else {
      setEnemyActualHP(enemyActualHP - damageToEnemy);
      setPlayerActualHP(playerActualHP - damageToPlayer);
      onHPChange(
        enemyActualHP - damageToEnemy,
        playerActualHP - damageToPlayer
      );
      onMessage(
        `Demage to enemy: ${damageToEnemy}\n
new enemyHP:${enemyActualHP - damageToEnemy}\n
Demage to player: ${damageToPlayer}\n
new playerHP: ${playerActualHP - damageToPlayer}`
      );
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
