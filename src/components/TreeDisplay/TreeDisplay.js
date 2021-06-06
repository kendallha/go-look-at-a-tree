import React from 'react';
import './TreeDisplay.css';

const TreeDisplay = ({ tree }) => {
  return (
    <article className="tree-display">
      <img alt={`${tree.name} tree`} src={tree.image} className="tree-image"/>
      <div className="tree-details">
        <h1 className="tree-name">{tree.name}</h1>
        <h2 className="sci-name">{tree.scientific_name}</h2>
        <p className="region">Region: {tree.region}</p>
        <p className="height">Average height: {tree.average_height} feet</p>
        <p className="lifespan">Lifespan: {tree.lifespan} years</p>
        <p className="tree-fact">{tree.fact}</p>
      </div>
    </article>
  )
}

export default TreeDisplay;
