'use client';

import { useQuery } from '@tanstack/react-query';
import { FC, ComponentPropsWithoutRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getMovies } from '@/(mainLayout)/movies-api/getMovies';
import { MOVIES_REVALIDATE_TIME } from '@/(mainLayout)/movies-api/constants';
import { MoviesListItem } from './MoviesListItem';
import { MoviesListPagination } from '../MoviesListPagination';

type TMoviesList = ComponentPropsWithoutRef<'ul'> & {
  initialPage: number;
};

const MoviesList: FC<TMoviesList> = ({ initialPage, ...restProps }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || String(initialPage), 10);

  const { data } = useQuery({
    queryKey: [ 'movies', page ],
    queryFn: () => getMovies({ page }),
    staleTime: MOVIES_REVALIDATE_TIME,
  });

  const handleNextPage = () => {
    const newPage = page + 1;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', String(newPage));
    router.push(`?${newSearchParams.toString()}`);
  };

  const handlePreviousPage = () => {
    const newPage = Math.max(page - 1, 1);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', String(newPage));
    router.push(`?${newSearchParams.toString()}`);
  };

  const handleSetPage = (pageNum: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', String(pageNum));
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <>
      <ul
        className='flex gap-5 w-full flex-wrap justify-center'
        { ...restProps }
      >
        {data?.items.map((movie) => (
          <MoviesListItem
            key={ movie.kinopoiskId }
            movie={ movie }
          />
        ))}
      </ul>
      <MoviesListPagination
        activePage={ page }
        onNext={ handleNextPage }
        onPrev={ handlePreviousPage }
        setPage={ handleSetPage }
        pages={ data?.totalPages || 0 }
      />
    </>
  );
};

export default MoviesList;
