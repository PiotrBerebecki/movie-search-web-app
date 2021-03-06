[![Build Status](https://travis-ci.org/PiotrBerebecki/movie-search-web-app.svg?branch=master)](https://travis-ci.org/PiotrBerebecki/movie-search-web-app)
[![codecov](https://codecov.io/gh/PiotrBerebecki/movie-search-web-app/branch/master/graph/badge.svg)](https://codecov.io/gh/PiotrBerebecki/movie-search-web-app)

# Movie Search Web App

https://movie-search-web-app.surge.sh/

<img src="./documentation/screencast.gif" width="275px" height="auto">

## Running this app locally

```sh
git clone https://github.com/PiotrBerebecki/movie-search-web-app.git
cd movie-search-web-app
npm install

#1. Create a root '.env' file with the following content
REACT_APP_API_KEY=Paste your Movie DB api key here.

# Here are the instructions on how to create / find your api key
# https://developers.themoviedb.org/3/getting-started


#2. Start the app
npm start

#3. Open this url in your browser: http://localhost:3000
```

## Documentation

- The app has been tested using the [Jest testing framework](https://facebook.github.io/jest/docs/en/getting-started.html)

  <img src="./documentation/test-coverage.png" width="500px" height="auto">

- `package.json` specifies which files are [included in Jest code coverage report](https://facebook.github.io/jest/docs/configuration.html#collectcoveragefrom-array):

  ```javascript
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.js",
      "!**/node_modules/**",
      "!**/src/index.js",
      "!**/src/styles/*.js"
    ]
  }
  ```

- To avoid making too many API requests network calls are not carried out on each keydown. Instead a delay of 500ms is applied.

- To avoid unexpected requests to the server the movie query string is being encoded with the [`encodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) function. For example, when searching for `matrix reloaded` the query string becomes `matrix%20reloaded`.

- Some movies do not have poster images. These have been omitted from the app.

- Core / common components have been placed in a dedicated folder: `src/core`

- The folder structure has been designed to facilitate adding new views: `src/views`

- A number of functions have been pulled out as separate modules: 'src/helpers'. This makes the app easier to test.
