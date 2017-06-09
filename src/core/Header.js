import React from 'react';

function Header({ searchText, handleNewText }) {
  const handleTextChange = e => {
    handleNewText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleTextChange} value={searchText} />
    </div>
  );
}

export default Header;
