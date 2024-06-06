import PokemonPoket from "./PokemonPoket";

export default function Pocket({ pocket, onSelect }: { pocket: number[], onSelect:(id:number)=>void}) {
  return (
    <footer>
      <ul>
        {pocket.map((id) => <PokemonPoket key={id} id={id} onSelect={(id)=>{onSelect(id)}}/>
        )}
      </ul>
    </footer>
  );
}
