import React from 'react';

import {
  MovieCard,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieOverview,
} from './../../styles';
import trimText from './../../helpers/trimText';

const baseUrlCover = 'https://image.tmdb.org/t/p/w500';

function Movie({ cover, title, summary }) {
  return (
    <MovieCard>
      <MovieImage url={`${baseUrlCover}${cover}`} />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieOverview>{trimText(summary, 100)}</MovieOverview>
      </MovieInfo>
    </MovieCard>
  );
}

export default Movie;
