// src/app/(mainLayout)/movies-api/[movieId]/components/MovieInfo.tsx

'use client';

import { MOVIE_REVALIDATE_TIME } from '@/(mainLayout)/movies-api/constants';
import { getMovie } from '@/(mainLayout)/movies-api/[movieId]/getMovie';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const MovieInfo = ({ movieId }: { movieId: string }) => {
  const { data } = useQuery({
    queryKey: [ 'movie-by-id', movieId ],
    queryFn: () => getMovie({ movieId }),
    staleTime: MOVIE_REVALIDATE_TIME,
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    nameRu,
    nameOriginal,
    posterUrl,
    ratingKinopoisk,
    ratingImdb,
    year,
    filmLength,
    genres,
    countries,
    description,
    webUrl,
  } = data;

  return (
    <div className='max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
      <div className='relative'>
        <Image
          src={ posterUrl }
          alt={ nameRu || nameOriginal }
          layout='responsive'
          width={ 500 }
          height={ 750 }
          className='object-cover'
        />
      </div>
      <div className='p-4'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>{nameRu || nameOriginal}</h1>
        {nameRu && nameOriginal && <h2 className='text-lg text-gray-500 dark:text-gray-300'>{nameOriginal}</h2>}
        <div className='mt-2 flex items-center'>
          <span className='text-yellow-500'>
            {ratingKinopoisk}
            {' '}
            / 10 (Кинопоиск)
          </span>
          <span className='ml-2 text-yellow-500'>
            {ratingImdb}
            {' '}
            / 10 (IMDB)
          </span>
        </div>
        <div className='mt-2 text-gray-600 dark:text-gray-400'>
          <p>{year}</p>
          <p>
            {filmLength}
            {' '}
            минут
          </p>
          <p>{genres && genres.length > 0 && genres.map((g) => g.genre).join(', ')}</p>
          <p>{countries && countries.length > 0 && countries.map((c) => c.country).join(', ')}</p>
        </div>
        {description && <p className='mt-4 text-gray-700 dark:text-gray-300'>{description}</p>}
        <a
          href={ webUrl }
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 inline-block text-blue-500 dark:text-blue-400'
        >
          Подробнее на Кинопоиске
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
