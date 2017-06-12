import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  jest.useFakeTimers();

  it('calls setTimeout to prevent excessive API requests', () => {
    const wrapper = shallow(<App />);
    const title = 'matrix';
    const id = 1;
    const backdrop_path = '/image.jpg';
    const overview = '';
    const mockResponse = { results: [{ title, id, backdrop_path, overview }] };

    fetch = jest.fn(
      (url, options) =>
        new Promise((resolve, reject) => {
          resolve({
            status: 200,
            json: () => {
              return mockResponse;
            },
          });
        })
    );

    wrapper.instance().componentDidMount();
    wrapper.instance().handleNewText({ target: { value: title } });

    expect(setTimeout.mock.calls[0][0]()).toBe(undefined);
    expect(setTimeout.mock.calls.length).toBe(1);
    expect(setTimeout.mock.calls[0][1]).toBe(500);
  });

  it('handles cases when fetch request fails', () => {
    const wrapper = shallow(<App />);
    const type = 'defaultMovies';

    fetch = jest.fn(
      (url, options) =>
        new Promise((resolve, reject) => {
          reject({
            status: 404,
            json: () => {
              return 'Error';
            },
          });
          expect(wrapper.state().guideText).toEqual('Popular movies');
        })
    );

    wrapper.instance().getMovies(type);
  });

  it('handles cases when no movies have been found', () => {
    const wrapper = shallow(<App />);
    const title = 'thisTitleDoesNotExist';
    const type = 'searchedMovies';
    const mockResponse = {
      results: [],
    };

    fetch = jest.fn(
      (url, options) =>
        new Promise((resolve, reject) => {
          resolve({
            status: 200,
            json: () => {
              expect(mockResponse.results.length).toBe(0);
              return mockResponse;
            },
          });
        })
    );

    wrapper.instance().getMovies(type, title);
  });
});
