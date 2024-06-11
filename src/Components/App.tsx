import Map from "./Map";
import Fight from "./Fight";
import { useState } from "react";
import Pocket from "./Pocket";

export default function App() {
  const [gameState, setGameState] = useState("start");
  const [locationSelectionState, setLocationSelectionState] = useState(true);
  const [fightState, setFightState] = useState("stop");
  const [pocket, setPocket] = useState([2,6,7]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(0);
  const [activeLocations, setActiveLocations] = useState("");
  const [activeLocationNumber, setActiveLocationNumber] = useState(0);

  if (locationSelectionState) {
    return (
      <div className="full-width-1024px">
        {gameState === "start" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 text-white text-center text-3xl font-bold cursor-poke-full">
            <button
              className="cursor-poke-full transition-transform transform hover:scale-110 "
              onClick={() => {
                setGameState("on");
              }}
            >
              START THE GAME
            </button>
          </div>
        )}
        {gameState === "gameover" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 text-white text-center  cursor-poke-full ">
            <div className="grid grid-rows-2">
              <h1 className="text-3xl font-bold">GAME OVER</h1>
              <button
                className={
                  "cursor-poke-full transition-transform transform hover:scale-110"
                }
                onClick={() => {
                  setGameState("on");
                }}
              >
                START A NEW GAME
              </button>
            </div>
          </div>
        )}
        <>
          <Pocket pocket={pocket} fightState={fightState} onSelect={() => {}} />
          <Map
            onSelectLocation={(n, name) => {
              setActiveLocationNumber(n);
              setActiveLocations(name);
              setLocationSelectionState(false);
              setFightState("select");
            }}
          />
        </>
      </div>
    );
  }
  if (fightState) {
    return (
      <div>
        <Pocket
          pocket={pocket}
          fightState={fightState}
          onSelect={(id) => {
            setSelectedPokemonId(id);
            if (fightState === "select" && selectedPokemonId === 0) {
              setPocket([
                ...pocket.filter((item) => {
                  return item !== id;
                }),
              ]);
            } else if (fightState === "select" && selectedPokemonId !== 0) {
              setPocket([
                ...pocket.filter((item) => {
                  return item !== id;
                }),
                selectedPokemonId,
              ]);
            }
          }}
        />
        <Fight
          onClose={(newPocket) => {
            setPocket([...newPocket]);
            setFightState("stop");
            setLocationSelectionState(true);
            setSelectedPokemonId(0);
            if (newPocket.length === 0) {
              setGameState("gameover");
            }
          }}
          selectedPokemonId={selectedPokemonId}
          activeLocationNumber={activeLocationNumber}
          activeLocationName={activeLocations}
          pocket={pocket}
          fightState={fightState}
          onFightState={(fightState) => {
            setFightState(fightState);
          }}
        />
      </div>
    );
  }
}
