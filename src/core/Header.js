import React from 'react';

import magnifyingGlass from './assets/magnifying-glass.svg';
import {
  HeaderWrapper,
  HeaderContainer,
  SearchGroup,
  MagnifyingGlass,
  SearchField,
} from './../styles';
import { searchFieldPlaceholder } from './../constants/textSnippets';

function Header({ handleNewText, searchText }) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <SearchGroup>
          <MagnifyingGlass src={magnifyingGlass} alt="magnifying glass" />
          <SearchField
            type="text"
            onChange={handleNewText}
            value={searchText}
            placeholder={searchText ? '' : searchFieldPlaceholder}
          />
        </SearchGroup>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
