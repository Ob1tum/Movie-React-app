import { getResource } from './core';
import { MoviesState } from '../store/reducers/movies-reducer';
import { MovieObject, MovieResponseObject } from '../types/movies';
import { BaseResponse } from '../types/core';

type GetMovie = (query: string, page: number) => Promise<MoviesState>;
type TransformMovie = (movie: MovieResponseObject) => MovieObject;

const transformMovie: TransformMovie = (movie) => {
  const { id, title, poster_path, release_date, overview, vote_average, genre_ids } = movie;

  return {
    id,
    title,
    posterPath: poster_path,
    releaseDate: Date.parse(release_date),
    overview,
    usersRating: vote_average,
    genreIds: genre_ids,
  };
};

export const getMovies: GetMovie = async (query, pageNumber) => {
  const { page, results, total_pages }: BaseResponse = await getResource('/search/movie', {
    query: query,
    page: String(pageNumber),
  });
  const transformedMovies = results.map((movie) => transformMovie(movie));

  return {
    page: page,
    movies: transformedMovies,
    totalPages: total_pages,
    query,
    loading: false,
  };
};
