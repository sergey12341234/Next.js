import { TPokemon } from '@/app/types/services/pokemon';
import Image from 'next/image';
import { FC, ComponentPropsWithoutRef } from 'react';
import { SimpleTag } from '@/app/components/simpleTag';

type TPokemonCard = ComponentPropsWithoutRef<'li'> & {
  pokemon: TPokemon;
}

const PokemonCard: FC<TPokemonCard> = ({ pokemon, ...restProps }) => (
  <li
    className='p-3 rounded-xl shadow-custom bg-slate-300 dark:bg-slate-800 w-56 flex items-center flex-col flex-grow-0'
    { ...restProps }
  >
    <div>
      { pokemon?.sprites?.front_default && (
        <Image
          quality={ 100 }
          width={ 100 }
          height={ 100 }
          alt={ pokemon?.name }
          src={ pokemon?.sprites?.front_default }
        />
      ) }
    </div>
    <ul className='w-full flex gap-3 flex-wrap justify-start'>
      { pokemon?.abilities?.map((item, index) => (
        <SimpleTag
          // eslint-disable-next-line react/no-array-index-key
          key={ `${item?.ability?.name}/${index}` }
          text={ item?.ability?.name }
        />
      )) }
    </ul>
  </li>
);

export default PokemonCard;
