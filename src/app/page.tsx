'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ListOfPokemons } from './components/listOfPokemons';
import { PortalSpinner } from './components/spiners/portalSpinner';
import { useGetPokemonsGorInfiniteScroll } from './hooks/useGetPokemonsForInfiniteScroll';

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

  return (
    <div className='flex min-h-screen flex-col items-center p-24 relative'>
      { isFetching && <PortalSpinner /> }
      { !isLoading && data?.pages
      && <ListOfPokemons innerRef={ ref } pokemonPages={ data.pages } />}
      {error && <div>{error.message}</div>}
    </div>
  );
}
