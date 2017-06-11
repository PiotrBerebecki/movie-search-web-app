import styled from 'styled-components';

import { media } from './theme';

export const AppWrapper = styled.div`
  ${/* border: solid 3px white; */ ''}
  ${/* position: relative; */ ''}
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #030303;
  ${media.desktop`
    padding: 1rem 0;
  `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${props => props.theme.widthContainer()}
`;

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 3px;
  background-color: #363636;
`;

export const MagnifyingGlass = styled.img`
  width: 1.5rem;
  height: auto;
`;

export const SearchField = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem;
  border: none;
  outline: none;
  background-color: #363636;
  color: white;
  font-size: 1.3rem;
  font-weight: 300;
  ::-webkit-input-placeholder {
    color: #ccc;
  }
`;

export const MovieListWrapper = styled.main`
  ${props => props.theme.widthContainer()}
  margin: 0 auto;
  padding-top: 1rem;
`;

export const GuideText = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  ${/* border: solid 1px white; */ ''}
`;

export const Movies = styled.ul`
  color: white;
`;

export const Movie = styled.li`
  margin-top: 4rem;
`;
