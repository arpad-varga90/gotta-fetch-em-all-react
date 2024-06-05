import Map from "./Components/Map";
import Fight from "./Components/Fight";
import { useState } from "react";

export default function App() {
  const [locationSelectionState, setLocationSelectionState] = useState(true);
  const [fightState, setFightState] = useState(false);
  //const [pocket, setPocket] = useState([]);
  // const [activeLocations,setActiveLocations] = useState("")
  const [activeLocationNumber, setActiveLocationNumber] = useState(0);

  if (locationSelectionState) {
    return (
      <Map
        onSelectLocation={(n) => {
          setActiveLocationNumber(n);
          setLocationSelectionState(false);
          setFightState(true);
        }}
      />
    );
  }
  if (fightState) {
    return (
      <Fight
        onClose={() => {
          setFightState(false);
          setLocationSelectionState(true);
        }}
        activeLocationNumber={activeLocationNumber}
      />
    );
  }
}
