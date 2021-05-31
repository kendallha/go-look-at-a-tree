import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>Go Look at a Tree</h1>
      <div className="button-container">
        <button className="tree-button">Get a Tree</button>
        <button className="tree-button">Add a Tree</button>
      </div>
    </header>
  )
}

export default Header;