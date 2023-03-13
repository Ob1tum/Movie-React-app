import React, { useEffect, useState } from 'react';

import { GenreObject } from '../../../types/genres';
import { useAppSelector } from '../../../store/hooks';
import { selectGenres } from '../../../store/reducers/genres-reducer';

import { Tag } from 'antd';

type Props = {
  genreIds: number[];
};

const MovieTags = (props: Props) => {
  const [genres, setGenres] = useState<GenreObject[]>([]);
  const allGenres = useAppSelector(selectGenres);
  const { genreIds } = props;

  useEffect(() => {
    const filteredGenres = allGenres.filter((genre) => {
      return genreIds.includes(genre.id);
    });

    setGenres(filteredGenres);
  }, [allGenres, genreIds]);

  const genreElements = genres.map((genre: GenreObject) => {
    return <Tag key={genre.id}>{genre.name}</Tag>;
  });

  return <div className="movie-card__tags">{genreElements}</div>;
};

export default MovieTags;
