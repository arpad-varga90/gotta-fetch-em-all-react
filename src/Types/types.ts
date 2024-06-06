export type PokeLocation = {
  id: number;
  name: string;
  names: Array<{ name: string }>;
};

export type PokemonDetails = {
  id: number;
  name: string;
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
  sprites: {
    other: {
      showdown: { front_default: string };
    };
  };
};
