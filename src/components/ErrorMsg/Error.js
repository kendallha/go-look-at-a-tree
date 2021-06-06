import React from 'react';
import './Error.css';

const Error = ({ error }) => {
  return (
    <>
      <h1 className='error-msg'>Error: {error}</h1>
    </>
  )
}

export default Error;
