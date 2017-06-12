import React from 'react';
import { shallow } from 'enzyme';

import MovieList from './index';
import { GuideText } from './../../styles';

describe('MovieList', () => {
  it('renders correctly the guide text', () => {
    const guideText = 'Popular movies';
    const movies = [{ id: 1 }];
    const wrapper = shallow(
      <MovieList guideText={guideText} movies={movies} />
    );
    const guideTextComponent = wrapper.find(GuideText);

    expect(guideTextComponent.props().children).toEqual(guideText);
  });
});
