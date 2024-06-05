import Map from "./Components/Map";
import Fight from "./Components/Fight";
import { useState } from "react";

export default function App() {
  const [locationSelectionState, setLocationSelectionState] = useState(true);
  const [fightState, setFightState] = useState(false);
  const [pocket, setPocket] = useState([1,6,61]);
  // const [activeLocations,setActiveLocations] = useState("")
  const [activeLocationNumber, setActiveLocationNumber] = useState(0);

  console.log(pocket)

  if (locationSelectionState) {
    return (
      <div>
        <Map
          onSelectLocation={(n) => {
            setActiveLocationNumber(n);
            setLocationSelectionState(false);
            setFightState(true);
          }}
        />
      </div>
    );
  }
  if (fightState) {
    return (
      <div>
        <Fight
          onClose={(newPocket) => {
            setPocket(newPocket);
            setFightState(false);
            setLocationSelectionState(true);
          }}
          activeLocationNumber={activeLocationNumber}
        />
      </div>
    );
  }
}
