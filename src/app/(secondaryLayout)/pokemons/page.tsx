'use client';

import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { ListOfPokemons } from '@/components/listOfPokemons';
import { PortalSpinner } from '@/components/spiners/portalSpinner';
import { useGetPokemonsGorInfiniteScroll } from '@/hooks/useGetPokemonsForInfiniteScroll';
import { TPokemon } from '../../types/services/pokemon';

export default function Home() {
  const { ref, inView } = useInView();
  const {
    isLoading,
    data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetPokemonsGorInfiniteScroll();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [ fetchNextPage, inView, hasNextPage ]);

  // const {
  //   data, isLoading, error, isError,
  // } = useQuery({
  //   queryKey: [ 'pokemon' ],
  //   staleTime: 180 * 1000,
  //   queryFn: async () => {
  //     const { results } = await PokemonApi.getPokemons();
  //     const pokemonsWithAllInfo = await Promise.all(results.map(
  //       (pokemon) => PokemonApi.getPokemonById({ name: pokemon.name }),
  //     ));
  //     return pokemonsWithAllInfo;
  //   },
  // });
  const filteredPokemonPages = useMemo(() => {
    if (data && data.pages) {
      const res = data.pages
        .filter((page) => page !== null) as { count: number; result: TPokemon[]; pageParam: number; }[];
      return res;
    }
    return null;
  }, [ data ]);

  return (
    <div className='flex min-h-screen flex-col items-center p-24 relative'>
      { isFetching && <PortalSpinner /> }
      { !isLoading && filteredPokemonPages
      && <ListOfPokemons innerRef={ ref } pokemonPages={ filteredPokemonPages } />}
      {error && <div>{error.message}</div>}
    </div>
  );
}
