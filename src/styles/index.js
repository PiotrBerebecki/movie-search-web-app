import styled from 'styled-components';

import { media } from './theme';

export const AppWrapper = styled.div`
  background-color: #222222;
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
  ${props => props.theme.widthContainer(1)}
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
  font-size: 1.1rem;
  font-weight: 300;
  ::-webkit-input-placeholder {
    color: #ccc;
  }
  ::-moz-placeholder {
    color: #ccc;
  }
  ${media.phone`
    font-size: 1.2rem;
  `}
`;

export const MovieListWrapper = styled.main`
  ${props => props.theme.widthContainer(1.6)}
  margin: 0 auto;
  padding: 1rem 0;
`;

export const GuideText = styled.p`
  margin-bottom: 1rem;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

export const Movies = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  `}
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
`;

export const MovieImage = styled.div`
  width: 100%;
  height: 15rem;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 1rem;
  color: #676767;
  font-size: 1.2rem;
  font-weight: 200;
  text-align: center;
`;

export const MovieOverview = styled.p`
  color: #898989;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 200;
`;
