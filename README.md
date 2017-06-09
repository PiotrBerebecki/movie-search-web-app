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

## Cool stuff included in this project

- [pre-push](https://www.npmjs.com/package/pre-push) npm module has been included so that all tests are run before every push. This ensures that broken code is not published.

- `package.json` specifies which files are [included in Jest code coverage report](https://facebook.github.io/jest/docs/configuration.html#collectcoveragefrom-array):

  ```javascript
  "jest": {
    "collectCoverageFrom": ["src/**/*.js", "!**/node_modules/**", "!**/src/index.js"]
  }
  ```
