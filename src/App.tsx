import Map from "./Components/Map";
import Fight from "./Components/Fight";
import { useState } from "react";


export default function App() {
  
  const [locationSelection, setLocationSelection] = useState(true);
  const [locationNumber, setLocationNumber] = useState(null);

  if (locationSelection) {
    return (
      <div>
        <Map />
      </div>
    );
  } else {
    return (
      <div>
        <Fight n={locationNumber} />
      </div>
    );
  }
}
