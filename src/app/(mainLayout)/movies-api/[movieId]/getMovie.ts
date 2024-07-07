// src/app/(mainLayout)/movies-api/getMovies.ts
import { MovieExpanded } from '@/types/Movies';
import { BASE_URL } from '@/urlConfig';

type GetMoviesProps = {
  movieId: string;
}

export const getMovie = async ({ movieId }: GetMoviesProps): Promise<MovieExpanded> => {
  const response = await fetch(`${BASE_URL}/api/movies/${movieId}`);
  const data = await response.json();
  return data;
};
