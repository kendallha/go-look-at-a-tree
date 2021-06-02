import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({treeData, getRandomTree}) => {
  return (
    <header>
      <h1>Go Look at a Tree</h1>
      <div className="button-container">
        <Link to={`/tree/${treeData[getRandomTree(0, treeData.length - 1)].id}`}><button className="tree-button">Get a Tree</button></Link>
        <Link to='/addtree'><button className="tree-button">Add a Tree</button></Link>
      </div>
    </header>
  )
}

// this.state.trees[this.getRandomTree(0, this.state.trees.length - 1)].id

export default Header;