import React, { Component } from 'react'
import './App.css';
import treeData from '../../assets/treeData';
import TreeDisplay from '../TreeDisplay/TreeDisplay';
import Header from '../Header/Header';
import Form from '../Form/Form';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: []
    }
  }

  componentDidMount() {
    this.setState({ trees: treeData })
  }

  getRandomTree = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addTree = (newTree) => {
    this.setState({ trees: [...this.state.trees, newTree] })
  }

  render() {
    return (
      <>
        <Header />
        {
        this.state.trees.length &&
        <TreeDisplay tree={this.state.trees[this.getRandomTree(0, this.state.trees.length)]} />
        }
        <Form addTree={this.addTree} />
      </>
    )
  }
}

export default App;
