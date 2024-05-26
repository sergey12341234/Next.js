import { MOVIE_API_KEY, MOVIE_API_URL } from '@/utils/constants';

export const moviesFetch = async (url: string, init?: RequestInit): Promise<Response> => {
  const localUrl = `${MOVIE_API_URL}/${url}`;

  const headers = {
    'X-API-KEY': MOVIE_API_KEY as string,
    ...init?.headers,
  };

  const modifiedInit: RequestInit = {
    ...init,
    headers,
  };

  return fetch(localUrl, modifiedInit);
};
