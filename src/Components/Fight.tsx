import { useEffect, useState } from "react";
import { gifUrl } from "../data/backgrounds";

export default function Fight({
  activeLocationNumber,
  onClose,
}: {
  activeLocationNumber: number;
  onClose: () => void;
}): React.ReactNode {
  const [background, setBackground] = useState("");
  useEffect(() => {
    setBackground(gifUrl[activeLocationNumber]);
  }, [activeLocationNumber]);

  return (
    <div onClick={onClose} className="relative">
      <img src={background} alt="background" className="size-full" />
      <div className="fight-stage-bg">
        <h1 className="text-5xl text-black bg-white p-2"> GAME PAHSE </h1>
      </div>
    </div>
  );
}
