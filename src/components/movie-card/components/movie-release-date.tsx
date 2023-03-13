import React from 'react';
import { format } from 'date-fns';
import { ReleaseDate } from '../../../types/core';

function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d as unknown as number);
}

type Props = {
  releaseDate: ReleaseDate;
};

const MovieReleaseDate = (props: Props) => {
  const releaseDate = new Date(props.releaseDate);

  return <p>{isValidDate(releaseDate) ? format(releaseDate, 'PP') : 'unknown'}</p>;
};

export default MovieReleaseDate;
