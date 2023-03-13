import React from 'react';

import './rating-ring.scss';

type Props = {
  rating: number;
  style?: {
    [key: string]: string;
  };
};

const colors: { [key: string]: string } = {
  '3': '#E90000',
  '5': '#E97E00',
  '7': '#E9D100',
  '10': '#66E900',
};

export const RatingRing = (props: Props) => {
  const { rating, style } = props;
  const fixedRating = Number(rating.toFixed(1));

  const colorsIdx = Object.keys(colors);
  const idx = colorsIdx.findIndex((key, i) => {
    return fixedRating >= Number(colorsIdx[i - 1]) && fixedRating <= Number(key);
  });
  const color = colors[colorsIdx[idx]];

  const styles = {
    ...style,
    borderColor: color,
  };

  return (
    <div style={styles} className={'rating-ring'}>
      {fixedRating}
    </div>
  );
};
