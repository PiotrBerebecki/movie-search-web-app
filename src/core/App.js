import React, { Component } from 'react';

import Header from './Header';
import SearchResults from './../views/SearchResults';

class App extends Component {
  state = {
    searchText: '',
  };

  handleNewText = searchText => {
    console.log('text', searchText);
    this.setState({
      searchText,
    });
  };

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <Header searchText={searchText} handleNewText={this.handleNewText} />
        <SearchResults />
      </div>
    );
  }
}

export default App;
