import React from 'react';

import { MovieWrapper, MovieImage } from './../../styles';

function Movie({ title, poster_path, id }) {
  console.log(poster_path, title, id);
  return (
    <MovieWrapper>
      <MovieImage src={`https://image.tmdb.org/t/p/original${poster_path}`} />
    </MovieWrapper>
  );
}

export default Movie;
