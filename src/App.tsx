import Map from "./Components/Map";
import Fight from "./Components/Fight";
import { useState } from "react";
import Pocket from "./Components/Pocket";

export default function App() {
  const [locationSelectionState, setLocationSelectionState] = useState(true);
  const [fightState, setFightState] = useState(false);
  const [pocket, setPocket] = useState([1, 6, 61, 644]);
  const [pokemonSelectionState, setPokemonSelectionState] = useState(true);
  const [selectedPokemonId, setSelectedPokemonId] = useState(0);
  const [activeLocations, setActiveLocations] = useState("");
  const [activeLocationNumber, setActiveLocationNumber] = useState(0);

  if (locationSelectionState) {
    return (
      <div>
        <Map
          onSelectLocation={(n, name) => {
            setActiveLocationNumber(n);
            setActiveLocations(name);
            setLocationSelectionState(false);
            setFightState(true);
          }}
        />
        <Pocket pocket={pocket} onSelect={() => {}} />
      </div>
    );
  }
  if (fightState) {
    return (
      <div>
        <Fight
          onClose={(newPocket) => {
            setPocket([...newPocket]);
            setFightState(false);
            setLocationSelectionState(true);
            setPokemonSelectionState(true);
          }}
          selectedPokemonId={selectedPokemonId}
          activeLocationNumber={activeLocationNumber}
          activeLocationName={activeLocations}
          pocket={pocket}
        />
        <Pocket
          pocket={pocket}
          onSelect={(id) => {
            setPokemonSelectionState(false);
            setSelectedPokemonId(id);
            if (pokemonSelectionState) {
              setPocket([
                ...pocket.filter((item) => {
                  return item !== id;
                }),
              ]);
            }
          }}
        />
      </div>
    );
  }
}
