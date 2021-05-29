import React, { Component } from 'react'
import './App.css';
import treeData from '../../assets/treeData';
import TreeDisplay from '../TreeDisplay/TreeDisplay';

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

  render() {
    return (
      <>
        <h1>Go Look at a Tree</h1>
        {
        this.state.trees.length &&
        <TreeDisplay tree={this.state.trees[0]} />
        }
      </>
    )
  }
}

export default App;
