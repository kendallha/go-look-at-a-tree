import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({setNewTree}) => {
  return (
    <header>
      <h1>Go Look at a Tree</h1>
      <div className="button-container">
        <Link to='/'><button onClick={setNewTree} className="tree-button">Get a Tree</button></Link>
        <Link to='/addtree'><button className="tree-button">Add a Tree</button></Link>
      </div>
    </header>
  )
}

export default Header;