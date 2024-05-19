import { MOVIE_API_KEY } from '@/utils/constants';

export const moviesFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
  const headers = {
    'X-API-KEY': MOVIE_API_KEY as string,
    ...init?.headers,
  };

  const modifiedInit: RequestInit = {
    ...init,
    headers,
  };

  return fetch(input, modifiedInit);
};
