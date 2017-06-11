[![Build Status](https://travis-ci.org/PiotrBerebecki/movie-search-web-app.svg?branch=master)](https://travis-ci.org/PiotrBerebecki/movie-search-web-app)
[![codecov](https://codecov.io/gh/PiotrBerebecki/movie-search-web-app/branch/master/graph/badge.svg)](https://codecov.io/gh/PiotrBerebecki/movie-search-web-app)

# Movie Search Web App

## Running this app locally

```sh
git clone https://github.com/PiotrBerebecki/movie-search-web-app.git
cd reach-the-treasure-game
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

- To avoid making too many API request, network calls are not carried out on each keydown. Instead a delay of 500ms is applied.

- To avoid unexpected requests to the server the movie query string is being encoded with the [`encodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) function. For example, when searching for `matrix reloaded` the query string becomes `matrix%20reloaded`.

- Some movies do not have poster images. These have been omitted from the app.

- `package.json` specifies which files are [included in Jest code coverage report](https://facebook.github.io/jest/docs/configuration.html#collectcoveragefrom-array):

  ```javascript
  "jest": {
    "collectCoverageFrom": ["src/**/*.js", "!**/node_modules/**", "!**/src/index.js"]
  }
  ```
