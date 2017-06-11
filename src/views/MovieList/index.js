import React, { Component } from 'react';

import Movie from './Movie';
import { MovieListWrapper, GuideText, Movies } from './../../styles';

class SearchResults extends Component {
  render() {
    const { guideText, movies } = this.props;
    const renderMovies = movies.map(movie => (
      <Movie key={movie.id} {...movie} />
    ));

    return (
      <MovieListWrapper>
        <GuideText>{guideText}</GuideText>
        <Movies>
          {renderMovies}
        </Movies>
      </MovieListWrapper>
    );
  }
}

export default SearchResults;
