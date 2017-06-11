import React, { Component } from 'react';

import Header from './Header';
import MovieList from './../views/MovieList';

class App extends Component {
  state = {
    searchText: '',
    movies: [{ title: 'Matrix', id: '1' }, { title: 'Terminator', id: '2' }],
    guideText: 'Popular movies',
  };

  handleNewText = searchText => {
    console.log('text', searchText);
    this.setState({
      searchText,
    });
  };

  render() {
    const { searchText, movies, guideText } = this.state;

    return (
      <div>
        <Header searchText={searchText} handleNewText={this.handleNewText} />
        <MovieList guideText={guideText} movies={movies} />
      </div>
    );
  }
}

export default App;
