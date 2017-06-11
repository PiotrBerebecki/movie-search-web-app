import React from 'react';

import magnifyingGlass from './assets/magnifying-glass.svg';
import {
  HeaderWrapper,
  HeaderContainer,
  MagnifyingGlass,
  SearchField,
} from './../styles';

function Header({ handleNewText, searchText }) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <MagnifyingGlass src={magnifyingGlass} alt="magnifying glass" />
        <SearchField
          type="text"
          onChange={handleNewText}
          value={searchText}
          placeholder={searchText ? '' : 'What movie are you looking for?'}
        />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
