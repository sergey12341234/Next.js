import { useInfiniteQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { PokemonApi } from '@/services/pokemon';
import { TPokemon } from '@/types/services/pokemon';
import { GET_POKEMONS_LIMIT, GET_POKEMONS_OFFSET } from '../utils/constants';

export const useGetPokemonsGorInfiniteScroll = () => useInfiniteQuery({
  queryKey: [ 'pokemons' ],
  staleTime: 180 * 1000,
  queryFn: async ({ pageParam }: { pageParam: number }) => {
    const result = await PokemonApi.getPokemons({ offset: pageParam || 0 });

    if (!isAxiosError(result)) {
      const { count, results } = result;
      const pokemonsWithAllInfo = await Promise.all(results.map(
        (pokemon) => PokemonApi.getPokemonById({ name: pokemon.name }),
      ));

      const filteredPokemons: TPokemon[] = pokemonsWithAllInfo.filter((item): item is TPokemon => !isAxiosError(item));

      return {
        count,
        result: filteredPokemons,
        pageParam,
      };
    }
    return null;
  },
  initialPageParam: GET_POKEMONS_OFFSET,
  getNextPageParam: (lastPage) => {
    if (!lastPage || (lastPage.pageParam > lastPage.count)) return null;
    return lastPage.pageParam + GET_POKEMONS_LIMIT;
  },
});
