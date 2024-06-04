import { useEffect, useState } from "react";
import { gifUrl } from "../data/backgrounds";

export default function Fight({ n }: { n: number }): React.ReactNode {
  const [background, setBackground] = useState("");
  useEffect(() => {
    setBackground(gifUrl[n]);
  }, [n]);
  return (
    <div>
      <img src={background} alt="background" />
    </div>
  );
}
