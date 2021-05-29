import React, { Component } from 'react'
import './App.css';
import treeData from '../../assets/treeData';
import TreeDisplay from '../TreeDisplay/TreeDisplay';
import Header from '../Header/Header';
import Form from '../Form/Form';

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

  addTree = (newTree) => {
    this.setState({ trees: [...this.state.trees, newTree] })
  }

  render() {
    return (
      <>
        <Header />
        {
        this.state.trees.length &&
        <TreeDisplay tree={this.state.trees[0]} />
        }
        <Form addTree={this.addTree} />
      </>
    )
  }
}

export default App;
