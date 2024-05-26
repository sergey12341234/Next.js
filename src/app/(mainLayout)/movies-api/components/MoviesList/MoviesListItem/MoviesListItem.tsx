import { Movie } from '@/types/Movies';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ComponentPropsWithoutRef } from 'react';

type TMoviesListItem = ComponentPropsWithoutRef<'li'> & {
  movie: Movie;
}

const MoviesListItem: FC<TMoviesListItem> = ({
  movie,
  ...restProps
}) => {
  return (
    <li
      className='w-[256px]'
      { ...restProps }
    >
      <div
        className='w-[256px] relative h-[384px]'
      >
        <Image
          alt={ movie.nameEn }
          src={ movie.posterUrlPreview }
          quality={ 100 }
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h5
        className='text-2xl dark:text-white text-slate-950 mt-2'
      >
        <Link
          href='/#'
        >
          {' '}
          { movie.nameRu }
          {' '}
        </Link>
      </h5>
      <span
        className='flex flex-wrap dark:text-slate-300 text-sm mt-1'
      >
        <span>
          {' '}
          { movie.year }
          ,
          {' '}
        </span>
        { movie.genres.map((genre, index) => (
          <span
            key={ genre.genre }
          >
            { index === movie.genres.length - 1 ? genre.genre : `${genre.genre},` }
          </span>
        )) }
      </span>
    </li>
  );
};

export default MoviesListItem;
