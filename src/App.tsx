import Map from "./Components/Map";
import Fight from "./Components/Fight";
import { useState } from "react";


export default function App() {
  
  const [locationSelection, setLocationSelection] = useState(false);
  const [locationNumber, setLocationNumber] = useState(Math.floor(Math.random()*20));

  if (locationSelection) {
    return (
      <div onClick={()=>{setLocationSelection(false)}}>
        <Map />
      </div>
    );
  } else {
    return (
      <div onClick={()=>{setLocationSelection(true)}}>
        <Fight n={locationNumber} />
      </div>
    );
  }
}
