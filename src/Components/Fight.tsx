import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { gifUrl } from "../data/backgrounds";
import { getRandNumber } from "../data/utils";
import { PokemonDetails } from "../Types/types";
import PokemonMain from "./PokemonMain";
import Battle from "./Battle";

// 644 strong pokemon

async function fetchPokeDetails(id: number): Promise<PokemonDetails> {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(URL + id);
  const data = response.json();
  return data;
}

function usePokemon(id: number) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokeDetails(id),
    refetchOnWindowFocus: false,
  });
}

function randNum(): number {
  return getRandNumber(1, 1025);
}

export default function Fight({
  activeLocationNumber,
  activeLocationName,
  pocket,
  onClose,
}: {
  activeLocationNumber: number;
  activeLocationName: string;
  pocket: number[];
  onClose: (newPocket: number[]) => void;
}) {
  const [enemyActualHP, setEnemyActualHP] = useState(-10);
  const [playerActualHP, setPlayerActualHP] = useState(-10);
  const [demageToEnemy, setDemageToEnemy] = useState(0);
  const [demageToPlayer, setDemageToPlayer] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(7);

  const randomNumber = useRef(randNum());
  const enemyData = usePokemon(randomNumber.current);
  const playerData = usePokemon(selectedPokemon);

  return (
    <div className="full-width-1024px text-black">
      <h1>{activeLocationName}</h1>
      <img
        src={gifUrl[activeLocationNumber - 1]}
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="overlay-components">
        <div className="w-3/5 grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-5">
            {playerData.error && (
              <h1 className="warning-message">Something went wrong...</h1>
            )}

            {playerData.isLoading && (
              <h1 className="bg-blue-100 rounded-lg text-blue-900">
                Loading...
              </h1>
            )}
            {playerData.isSuccess && (
              <>
                <PokemonMain
                  pokemonById={playerData.data}
                  newHP={playerActualHP}
                />
              </>
            )}
            {enemyData.error && (
              <h1 className="warning-message">Something went wrong...</h1>
            )}

            {enemyData.isLoading && (
              <h1 className="bg-blue-100 rounded-lg text-blue-900">
                Loading...
              </h1>
            )}
            {enemyData.isSuccess && (
              <>
                <PokemonMain
                  pokemonById={enemyData.data}
                  newHP={enemyActualHP}
                />
              </>
            )}
          </div>
          <div className="grid grid-cols-1">
            {enemyData.isSuccess && playerData.isSuccess && (
              <Battle
              actualPocket={pocket}
                player={{
                  id: selectedPokemon,
                  hp: playerData.data.stats[0].base_stat,
                  attack: playerData.data.stats[1].base_stat,
                  defense: playerData.data.stats[2].base_stat,
                }}
                enemy={{
                  id: enemyData.data.id,
                  hp: enemyData.data.stats[0].base_stat,
                  attack: enemyData.data.stats[1].base_stat,
                  defense: enemyData.data.stats[2].base_stat,
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
