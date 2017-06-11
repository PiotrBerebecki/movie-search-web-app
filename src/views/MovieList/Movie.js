import React from 'react';

import {
  MovieCard,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieOverview,
} from './../../styles';
import trimTextToFullWord from './../../helpers/trimTextToFullWord';
import addThreeDots from './../../helpers/addThreeDots';
import pipe from './../../helpers/pipe';

const baseUrlCover = 'https://image.tmdb.org/t/p/w500';

function Movie({ cover, title, summary }) {
  return (
    <MovieCard>
      <MovieImage url={`${baseUrlCover}${cover}`} />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieOverview>
          {pipe(trimTextToFullWord, addThreeDots)(summary, 0, 100)}
        </MovieOverview>
      </MovieInfo>
    </MovieCard>
  );
}

export default Movie;
