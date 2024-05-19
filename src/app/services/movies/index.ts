/* eslint-disable max-len */

class MoviesService {
  /**
   * Sends a request to the movies api
   * @returns an array ov movies
   */

  public async getMovies(): Promise<any> {
    const res = await fetch('/api/movies');
    const data = res.json();
    return data;
  }
}

export const MoviesApi = new MoviesService();
