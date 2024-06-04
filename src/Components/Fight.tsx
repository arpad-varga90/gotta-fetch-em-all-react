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
    <div onClick={onClose} className="relative ">
      <img src={background} alt="background" className="size-full" />
      <div
        style={{
          transform: "translate(-50%, -50%)",
          position: "absolute",
          top: "15%",
          left: "50%",
        }}
      >
        <h1 className="text-5xl text-black bg-white p-2"> GAME PAHSE </h1>
      </div>
    </div>
  );
}
