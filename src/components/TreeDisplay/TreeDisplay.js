import React from 'react';

const TreeDisplay = ({ tree }) => {
  return (
    <article>
      <img alt={`${tree.name} tree`} src={tree.image} />
      <h1>{tree.name}</h1>
      <h2>{tree.scientificName}</h2>
      <p>Region: {tree.region}</p>
      <p>Average height: {tree.averageHeight}</p>
      <p>Lifespan: {tree.lifespan}</p>
      <p>{tree.fact}</p>
    </article>
  )
}

export default TreeDisplay;