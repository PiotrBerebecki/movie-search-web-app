import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    const { guideText, movies } = this.props;
    const renderMovies = movies.map(movie => (
      <li key={movie.id}>{movie.title}</li>
    ));

    return (
      <div>
        <p>{guideText}</p>
        <ul>
          {renderMovies}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
