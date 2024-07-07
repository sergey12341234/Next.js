// src/app/(mainLayout)/movies-api/getMovies.ts
import { GetMoviesResponse } from '@/types/Movies';
import { BASE_URL } from '@/urlConfig';

type GetMoviesProps = {
  page?: number;
}

export const getMovies = async ({ page = 1 }: GetMoviesProps): Promise<GetMoviesResponse> => {
  const response = await fetch(`${BASE_URL}/api/movies?page=${page}`);
  const data = await response.json();
  return data;
};
