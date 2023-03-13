import { getResource } from './core';
import { GenreObject } from '../types/genres';

type GetGenres = () => Promise<{ genres: GenreObject[] }>;

export const getGenres: GetGenres = async () => {
  return await getResource('/genre/movie/list', {});
};
