export const baseUrlCover = 'https://image.tmdb.org/t/p/w500';

const baseUrlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=';
const searchUrlOptions = '&query=';

/**
 * Constructs url for searching movie database
 * @param  {string} apiKey     api key
 * @param  {string} searchText movie title
 * @return {string}            movie db url
 */
export const getSearchUrl = (apiKey, searchText) => {
  return `${baseUrlSearch}${apiKey}${searchUrlOptions}${encodeURIComponent(searchText)}`;
};

const baseUrlDiscover = 'https://api.themoviedb.org/3/discover/movie?api_key=';
const discoverUrlOptions = '&sort_by=popularity.desc&with_genres=878';

/**
 * Constructs url for discovering movies in the database.
 * @param  {string} apiKey api key
 * @return {string}        movie db url
 */
export const getDiscoverUrl = apiKey => {
  return `${baseUrlDiscover}${apiKey}${discoverUrlOptions}`;
};
