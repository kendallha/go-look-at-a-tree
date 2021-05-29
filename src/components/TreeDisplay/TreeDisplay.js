import React from 'react';

const TreeDisplay = ({ tree }) => {
  return (
    <article>
      <img src={tree.image} />
      <h1>{tree.name}</h1>
      <h2>{tree.scientificName}</h2>
      <p>{tree.averageHeight}</p>
      <p>{tree.lifespan}</p>
      <p>{tree.fact}</p>
    </article>
  )
}

export default TreeDisplay;