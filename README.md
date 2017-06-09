[![Build Status](https://travis-ci.org/PiotrBerebecki/movie-search-web-app.svg?branch=master)](https://travis-ci.org/PiotrBerebecki/movie-search-web-app)
[![codecov](https://codecov.io/gh/PiotrBerebecki/movie-search-web-app/branch/master/graph/badge.svg)](https://codecov.io/gh/PiotrBerebecki/movie-search-web-app)

# Movie Search Web App

## Interesting points

- Include the [pre-push](https://www.npmjs.com/package/pre-push) npm module to run tests before every push to ensure that broken code is not published.

- Specify in `package.json` which files you would like to [include / exclude from Jest coverage report](https://facebook.github.io/jest/docs/configuration.html#collectcoveragefrom-array):

```javascript
"jest": {
  "collectCoverageFrom": ["src/**/*.js", "!**/node_modules/**", "!**/src/index.js"]
}
```
