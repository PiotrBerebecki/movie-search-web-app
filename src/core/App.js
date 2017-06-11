import React, { Component } from 'react';

import Header from './Header';
import MovieList from './../views/MovieList';

class App extends Component {
  state = {
    searchText: '',
    defaultMovies: [],
    guideText: 'Popular movies',
  };

  componentDidMount() {
    this.getMovies('defaultMovies');
  }

  getMovies(typeOfMovies) {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&with_genres=878`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ [typeOfMovies]: json.results });
      })
      .catch(err => {
        console.log('Caught error', err);
      });
  }

  handleNewText = searchText => {
    console.log('text', searchText);
    this.setState({
      searchText,
    });
  };

  render() {
    const { searchText, defaultMovies, guideText } = this.state;
    return (
      <div>
        <Header searchText={searchText} handleNewText={this.handleNewText} />
        <MovieList guideText={guideText} movies={defaultMovies} />
      </div>
    );
  }
}

export default App;
