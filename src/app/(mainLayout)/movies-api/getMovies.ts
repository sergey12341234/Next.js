// src/app/(mainLayout)/movies-api/getMovies.ts
import { GetMoviesResponse } from '@/types/Movies';

export const getMovies = async (page: number = 1): Promise<GetMoviesResponse> => {
  const response = await fetch(`/api/movies?page=${page}`);
  const data = await response.json();
  return data;
};
