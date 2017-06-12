import React from 'react';
import { shallow } from 'enzyme';

import Movie from './Movie';
import { MovieTitle, MovieOverview } from './../../styles';

describe('Movie', () => {
  it('renders correctly the title', () => {
    const title = 'matrix';
    const wrapper = shallow(<Movie title={title} summary="" />);
    const titleComponent = wrapper.find(MovieTitle);

    expect(titleComponent.props().children).toEqual(title);
  });

  it('renders correctly the overview', () => {
    const summary = 'I know kung-fu';
    const summaryRendered = 'I know kung-fu...';
    const wrapper = shallow(<Movie title="" summary={summary} />);
    const overviewComponent = wrapper.find(MovieOverview);

    expect(overviewComponent.props().children).toEqual(summaryRendered);
  });
});
