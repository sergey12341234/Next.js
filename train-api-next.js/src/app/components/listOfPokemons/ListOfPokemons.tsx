import { TPokemon } from '@/app/types/services/pokemon';
import {
  FC, ComponentPropsWithoutRef, RefCallback,
} from 'react';
import { PokemonCard } from '@/app/components/pokemonCard';

type TListOfPokemons = ComponentPropsWithoutRef<'ul'> & {
  innerRef?: RefCallback<HTMLDivElement>;
  pokemonPages: {
      count: number;
      pageParam: number | false;
      result: TPokemon[];
  }[];
}

const ListOfPokemons: FC<TListOfPokemons> = ({ pokemonPages, innerRef, ...restProps }) => (
  <div>
    <h1 className='text-4xl font-light text-slate-800 dark:text-slate-300 mb-5'>Pokemons</h1>
    <ul
      className='flex flex-wrap gap-4 justify-between items-start'
      { ...restProps }
    >
      {pokemonPages?.length > 0 ? (
        <>
          { pokemonPages.map((page) => (
            page.result.map((pokemon) => (
              <PokemonCard
                key={ pokemon.id }
                pokemon={ pokemon }
              />
            ))
          )) }
          <div ref={ innerRef } className='absolute left-0 bottom-0 bg-transparent w-1 h-1' />
        </>
      ) : <p className='text-2xl font-light text-slate-800 dark:text-slate-300'>no results</p>}
    </ul>
  </div>
);

export default ListOfPokemons;
