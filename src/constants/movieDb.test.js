import { getSearchUrl, getDiscoverUrl } from './movieDb';

describe('getSearchUrl', () => {
  it('returns a search url', () => {
    const apiKey = '123abc';
    const title = 'matrix';
    const expected =
      'https://api.themoviedb.org/3/search/movie?api_key=123abc&query=matrix';

    expect(getSearchUrl(apiKey, title)).toEqual(expected);
  });
});

describe('getDiscoverUrl', () => {
  it('returns a discover url', () => {
    const apiKey = '123abc';
    const expected =
      'https://api.themoviedb.org/3/discover/movie?api_key=123abc&sort_by=popularity.desc&with_genres=878';

    expect(getDiscoverUrl(apiKey)).toEqual(expected);
  });
});
