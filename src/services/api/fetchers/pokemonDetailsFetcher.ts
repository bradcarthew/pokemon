import { PokemonStats } from "../../../types/pokemon";

export const fetchPokemonDetails = async (url: string): Promise<PokemonStats> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch Pokémon details");
  return res.json();
};