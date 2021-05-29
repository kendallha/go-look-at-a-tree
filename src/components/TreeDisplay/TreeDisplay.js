import React from 'react';

const TreeDisplay = ({ tree }) => {
  return (
    <article>
      <img alt={`${tree.name} tree`} src={tree.image} />
      <h1>{tree.name}</h1>
      <h2>{tree.scientific_name}</h2>
      <p>Region: {tree.region}</p>
      <p>Average height: {tree.average_height} feet</p>
      <p>Lifespan: {tree.lifespan} years</p>
      <p>{tree.fact}</p>
    </article>
  )
}

export default TreeDisplay;