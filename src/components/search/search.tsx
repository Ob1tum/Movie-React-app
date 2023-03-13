import React, { useEffect } from 'react';
import { Input, Pagination } from 'antd';
import MovieList from '../movie-list/movie-list';
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMovies, selectPage, selectQuery, selectTotalPages } from '../../store/reducers/movies-reducer';
import { fetchGenres } from '../../store/reducers/genres-reducer';

import './search.scss';

const Search = () => {
  const dispatch = useAppDispatch();

  const totalPages = useAppSelector(selectTotalPages);
  const currentPage = useAppSelector(selectPage);
  const currentQuery = useAppSelector(selectQuery);

  useEffect(() => {
    dispatch(fetchMovies({ query: 'return', page: 1 }));
    dispatch(fetchGenres());
  }, []);

  const searchMovie = debounce(function (query: string) {
    dispatch(fetchMovies({ query, page: 1 }));
  }, 500);

  const onSearchInput = (e: React.BaseSyntheticEvent) => {
    const targetInput: HTMLInputElement = e.target;
    const query = targetInput.value;

    if (query) {
      searchMovie(query);
    } else {
      searchMovie('return');
    }
  };

  const paginationHandler = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(fetchMovies({ query: currentQuery, page }));
  };

  return (
    <div className={'search'}>
      <Input placeholder="Type to search" size="large" onChange={onSearchInput} />
      <MovieList />
      <Pagination
        showSizeChanger={false}
        pageSize={1}
        current={currentPage}
        total={totalPages}
        onChange={paginationHandler}
        hideOnSinglePage
      />
    </div>
  );
};

export default Search;
