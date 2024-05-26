'use client';

import { useQuery } from '@tanstack/react-query';
import { FC, ComponentPropsWithoutRef } from 'react';
import { getMovies } from '@/(mainLayout)/movies-api/getMovies';
import { MOVIES_REVALIDATE_TIME } from '@/(mainLayout)/movies-api/constants';
import { MoviesListItem } from './MoviesListItem';

type TMoviesList = ComponentPropsWithoutRef<'ul'>

const MoviesList: FC<TMoviesList> = ({
  ...restProps
}) => {
  const { data } = useQuery({
    queryKey: [ 'movies' ],
    queryFn: () => getMovies(1),
    staleTime: MOVIES_REVALIDATE_TIME,
  });
  return (
    <ul
      className='flex gap-5 w-full flex-wrap justify-center'
      { ...restProps }
    >
      { data?.items.map((movie) => (
        <MoviesListItem
          key={ movie.kinopoiskId }
          movie={ movie }
        />
      )) }
    </ul>
  );
};

export default MoviesList;
