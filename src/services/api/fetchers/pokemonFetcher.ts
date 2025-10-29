import { QueryFunctionContext } from '@tanstack/react-query';

export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export const fetchPokemonPage = async (
  context: QueryFunctionContext
): Promise<PokemonApiResponse> => {
  const { pageParam = 0 } = context;
  const limit = 20;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pageParam}`);

  if (!res.ok) {
    throw new Error('Failed to fetch Pokémon');
  }

  return res.json();
};