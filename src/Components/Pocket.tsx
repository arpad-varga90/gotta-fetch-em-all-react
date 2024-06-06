import PokemonPoket from "./PokemonPoket";

export default function Pocket({ pocket }: { pocket: number[] }) {

  return (
    <footer>
      <ul>
        {pocket.map((id) => <PokemonPoket key={id} id={id}/>
        )}
      </ul>
    </footer>
  );
}
