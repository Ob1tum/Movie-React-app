import { MovieObject } from './movies';

export type RatedMovie = MovieObject & {
  rate: number;
};
