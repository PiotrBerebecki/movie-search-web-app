import styled from 'styled-components';

export const AppWrapper = styled.div`
  border: solid 3px white;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  background-color: #aaa;
  border: solid 4px blue;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 980px;
  border: solid 4px pink;
`;

export const MagnifyingGlass = styled.img`
  width: 1rem;
  height: auto;
`;

export const SearchField = styled.input`
 border: none;
 width: 100%;
 outline: none;
 background-color: #aaa;
 color: white;
 font-size: 1.5rem;
`;
