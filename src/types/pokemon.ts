export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonStats {
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  moves: { move: { name: string } }[];
  species: { name: string; url: string };
}