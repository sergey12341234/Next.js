'use client';

import { useQuery } from '@tanstack/react-query';
import { FC, ComponentPropsWithoutRef } from 'react';
import { getMovies } from '@/(mainLayout)/movies-api/getMovies';

type TMovieCart = ComponentPropsWithoutRef<'div'>

const MovieCart: FC<TMovieCart> = ({ ...restProps }) => {
  const { data } = useQuery({
    queryKey: [ 'movies' ],
    queryFn: getMovies,
    staleTime: 1 * 60 * 1000,
  });
  return (
    <div
      { ...restProps }
    >
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default MovieCart;
