import React from 'react';

// import { MovieWrapper } from './../../styles';

function Movie(props) {
  console.log(props.children);
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Movie;
