import React from 'react';

function Header({ handleNewText, searchText }) {
  return (
    <div>
      <input type="text" onChange={handleNewText} value={searchText} />
    </div>
  );
}

export default Header;
