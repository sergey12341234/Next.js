export interface MovieCountry {
  country: string;
}

export interface MovieGenre {
  genre: string;
}

export type Movie = {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: MovieCountry[];
  genres: MovieGenre[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export type GetMoviesResponse = {
  total: number;
  totalPages: number;
  items: Movie[];
}
