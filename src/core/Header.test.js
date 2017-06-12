import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import { SearchField } from './../styles';

describe('Header', () => {
  it('renders correctly the search text', () => {
    const searchText = 'matrix';
    const wrapper = shallow(<Header searchText={searchText} />);
    const input = wrapper.find(SearchField);

    expect(input.props().value).toEqual(searchText);
    expect(input.props().placeholder).toEqual('');
  });

  it('calls the text handler function', () => {
    const mockNewTextHandler = jest.fn();
    const wrapper = shallow(<Header handleNewText={mockNewTextHandler} />);
    const input = wrapper.find(SearchField);
    input.simulate('change');

    expect(mockNewTextHandler).toHaveBeenCalled();
    expect(mockNewTextHandler).toHaveBeenCalledTimes(1);
  });
});
