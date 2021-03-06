import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './../styles/theme';
import { AppWrapper } from './../styles';
import Header from './Header';
import MovieList from './../views/MovieList';

import { getSearchUrl, getDiscoverUrl } from './../constants/movieDb';
import {
  guideTextSuccess,
  guideTextFailure,
  guideTextDefault,
  summaryDefault,
} from './../constants/textSnippets';

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
      ? getSearchUrl(process.env.REACT_APP_API_KEY, searchText)
      : getDiscoverUrl(process.env.REACT_APP_API_KEY);

    fetch(url)
      .then(response => response.json())
      .then(json => {
        const guideText = searchText
          ? json.results && json.results.length > 0
              ? guideTextSuccess
              : guideTextFailure
          : guideTextDefault;

        const moviesToAdd = json.results
          .filter(movie => movie.backdrop_path)
          .map(movie => {
            return {
              id: movie.id,
              title: movie.title,
              cover: movie.backdrop_path,
              summary: movie.overview || summaryDefault,
            };
          });

        this.setState({
          [typeOfMovies]: moviesToAdd,
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
        <AppWrapper>
          <Header searchText={searchText} handleNewText={this.handleNewText} />
          <MovieList
            guideText={guideText}
            movies={searchedMovies.length > 0 ? searchedMovies : defaultMovies}
          />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
