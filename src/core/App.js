import React, { Component } from 'react';

import SearchResults from './../views/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Movie Search App</h1>
        <SearchResults />
      </div>
    );
  }
}

export default App;
