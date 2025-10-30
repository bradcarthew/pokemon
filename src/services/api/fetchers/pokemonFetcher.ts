import { QueryFunctionContext } from '@tanstack/react-query';
import { Pokemon } from '../../../types/pokemon';

export interface PokemonApiResponse {
  next: string | null;
  results: Pokemon[];
}

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const fetchPokemonPage = async (
  context: QueryFunctionContext
): Promise<PokemonApiResponse> => {
  const { pageParam = 0 } = context;
  const limit = 20;
  const res = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${pageParam}`);

  if (!res.ok) {
    throw new Error('Failed to fetch Pokémon');
  }

  return res.json();
};