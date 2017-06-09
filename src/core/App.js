import React, { Component } from 'react';

import Header from './Header';
import SearchResults from './../views/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchResults />
      </div>
    );
  }
}

export default App;
