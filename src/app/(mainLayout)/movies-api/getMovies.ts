import { MoviesApi } from '@/services/movies';

export const getMovies = async () => {
  const data = await MoviesApi.getMovies();
  return data;
};
