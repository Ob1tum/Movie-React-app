import React, { useState } from 'react';
import { selectRated, selectRatedMap } from '../../store/reducers/rated-reducer';
import { useAppSelector } from '../../store/hooks';
import { Pagination } from 'antd';
import MovieCard from '../movie-card/movie-card';

import './rated-movies.scss';

const RatedMovies = () => {
  const rated = useAppSelector(selectRated);
  const ratedMap = useAppSelector(selectRatedMap);
  const [currentPage, setCurrentPage] = useState(1);

  const RatedMovies = ratedMap.map((id, i) => {
    const needToRender = i < currentPage * 20 && i >= (currentPage - 1) * 20;
    const movie = rated[id];

    return needToRender ? <MovieCard {...movie} key={movie.id} /> : null;
  });
  const paginationHandler = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={'rated-movies'}>
      <div className="movie-list">{RatedMovies}</div>
      <Pagination
        showSizeChanger={false}
        onChange={paginationHandler}
        current={currentPage}
        total={ratedMap.length}
        hideOnSinglePage
        defaultPageSize={20}
      />
    </div>
  );
};

export default RatedMovies;
