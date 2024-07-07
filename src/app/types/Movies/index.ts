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

export type MovieExpanded = {
  kinopoiskId: number;
  kinopoiskHDId: null | string;
  imdbId: string;
  nameRu: string;
  nameEn: null | string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: null | string;
  logoUrl: null | string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: null | number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: null | number;
  ratingAwaitCount: number;
  ratingRfCritics: null | number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: null | string;
  description: null | string;
  shortDescription: null | string;
  editorAnnotation: null | string;
  isTicketsAvailable: boolean;
  productionStatus: null | string;
  type: string;
  ratingMpaa: null | string;
  ratingAgeLimits: string;
  countries: MovieCountry[];
  genres: MovieGenre[];
  startYear: null | number;
  endYear: null | number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
}
