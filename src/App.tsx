import Map from "./Components/Map";
import Fight from "./Components/Fight";
import { useState } from "react";


export default function App() {
  
  const [locationSelection, setLocationSelection] = useState(false);
  const [locationNumber, setLocationNumber] = useState(Math.floor(Math.random()*20));

  if (locationSelection) {
    return (
      <div>
        <Map />
      </div>
    );
  } else {
    {console.log(locationNumber)}
    return (
      <div>
        <Fight n={locationNumber} />
        
      </div>
    );
  }
}
