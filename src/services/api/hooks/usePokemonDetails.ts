import { useQuery } from '@tanstack/react-query';
import { fetchPokemonDetails } from '../fetchers/pokemonDetailsFetcher';
import { PokemonStats } from '../../../types/pokemon';

export const usePokemonDetails = (url: string) => {
  return useQuery<PokemonStats>({
    queryKey: ['pokemonDetails', url],
    queryFn: () => fetchPokemonDetails(url),
    enabled: !!url,
  });
};