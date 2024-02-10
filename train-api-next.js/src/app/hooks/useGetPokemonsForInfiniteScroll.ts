import { useInfiniteQuery } from '@tanstack/react-query';
import { PokemonApi } from '../services/pokemon';
import { GET_POKEMONS_LIMIT, GET_POKEMONS_OFFSET } from '../utils/constants';

export const useGetPokemonsGorInfiniteScroll = () => useInfiniteQuery({
  queryKey: [ 'pokemons' ],
  staleTime: 180 * 1000,
  queryFn: async ({ pageParam }: { pageParam: number }) => {
    const { results, count } = await PokemonApi.getPokemons({ offset: pageParam || 0 });
    const pokemonsWithAllInfo = await Promise.all(results.map(
      (pokemon) => PokemonApi.getPokemonById({ name: pokemon.name }),
    ));
    return {
      count,
      result: pokemonsWithAllInfo,
      pageParam,
    };
  },
  initialPageParam: GET_POKEMONS_OFFSET,
  getNextPageParam: (lastPage) => {
    if (lastPage.pageParam > lastPage.count) {
      return undefined;
    }
    return lastPage.pageParam + GET_POKEMONS_LIMIT;
  },
});
