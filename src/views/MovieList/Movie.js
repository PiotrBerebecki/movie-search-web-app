import React from 'react';

import {
  MovieCard,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieOverview,
} from './../../styles';
import trimTextToFullWord from './../../helpers/trimTextToFullWord';

const baseUrlCover = 'https://image.tmdb.org/t/p/w500';

function Movie({ cover, title, summary }) {
  return (
    <MovieCard>
      <MovieImage url={`${baseUrlCover}${cover}`} />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieOverview>{trimTextToFullWord(summary, 0, 100)}</MovieOverview>
      </MovieInfo>
    </MovieCard>
  );
}

export default Movie;
