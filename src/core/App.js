import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './../styles/theme';
import { AppWrapper } from './../styles';
import Header from './Header';
import MovieList from './../views/MovieList';

const guideTextSuccess = 'We have found the following movies';
const guideTextFailure =
  "Sorry, we haven't found any matching movies, but you may be interested in these";
const guideTextDefault = 'Popular movies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      searchTextTimeout: 0,
      defaultMovies: [],
      searchedMovies: [],
      guideText: guideTextDefault,
    };
  }

  componentDidMount() {
    this.getMovies('defaultMovies');
  }

  getMovies = (typeOfMovies, searchText) => {
    const url = searchText
      ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${encodeURIComponent(searchText)}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&with_genres=878`;

    fetch(url)
      .then(response => response.json())
      .then(json => {
        const guideText = searchText
          ? json.results && json.results.length > 0
              ? guideTextSuccess
              : guideTextFailure
          : guideTextDefault;

        this.setState({
          [typeOfMovies]: json.results.filter(result => result.poster_path),
          guideText,
        });
      })
      .catch(err => {
        this.setState({
          guideText: guideTextFailure,
        });
      });
  };

  handleNewText = event => {
    const searchText = event.target.value;
    clearTimeout(this.state.searchTextTimeout);

    this.setState({
      searchText,
      searchTextTimeout: setTimeout(
        () => this.getMovies('searchedMovies', searchText),
        500
      ),
    });
  };

  render() {
    const { searchText, guideText, defaultMovies, searchedMovies } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <AppWrapper>
            <Header
              searchText={searchText}
              handleNewText={this.handleNewText}
            />
            <MovieList
              guideText={guideText}
              movies={
                searchedMovies.length > 0 ? searchedMovies : defaultMovies
              }
            />
          </AppWrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
