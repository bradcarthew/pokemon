import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemonPage } from '../fetchers/pokemonFetcher';
import type { PokemonApiResponse } from '../fetchers/pokemonFetcher';

export const usePokemonList = () =>
  useInfiniteQuery<PokemonApiResponse>({
    queryKey: ['pokemonList'],
    queryFn: fetchPokemonPage,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length * 20 : undefined,
  });