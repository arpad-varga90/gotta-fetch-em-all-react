import Map from "./Components/Map";
import Fight from "./Components/Fight";
import { useState } from "react";
import Pocket from "./Components/Pocket";

export default function App() {
  const [locationSelectionState, setLocationSelectionState] = useState(true);
  const [fightState, setFightState] = useState("stop");
  const [pocket, setPocket] = useState([1, 6, 30]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(0);
  const [activeLocations, setActiveLocations] = useState("");
  const [activeLocationNumber, setActiveLocationNumber] = useState(0);
  if (locationSelectionState) {
    return (
      <div className="full-width-1024px">
        <Pocket pocket={pocket} fightState={fightState} onSelect={() => {}} />
        <Map
          onSelectLocation={(n, name) => {
            setActiveLocationNumber(n);
            setActiveLocations(name);
            setLocationSelectionState(false);
            setFightState("select");
          }}
        />
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
