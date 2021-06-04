import React, { Component } from 'react'
import './App.css';
import treeData from '../../assets/treeData';
import TreeDisplay from '../TreeDisplay/TreeDisplay';
import Header from '../Header/Header';
import Form from '../Form/Form';
import { Route } from 'react-router-dom';
import { retrieveTrees } from '../../utilities/ApiCalls'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: [],
      currentTree: {}
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedTrees = await retrieveTrees();
      this.setState({
        trees: fetchedTrees,
        currentTree: fetchedTrees[this.getRandomIndex(0, treeData.length - 1)]
      })
    } catch (e) {
      this.setState({error: "No trees found. Smokey the bear is sad. Go look outside."})
    }
  }

  getRandomIndex = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addTree = (newTree) => {
    this.setState({ trees: [...this.state.trees, newTree] })
  }

  setNewTree = () => {
    this.setState({ currentTree: this.state.trees[this.getRandomIndex(0, treeData.length - 1)] })
  }

  render() {
    if (this.state.trees.length) {
    return (
      <>
        <Header setNewTree={this.setNewTree}/>
        <Route exact path='/'>
          {this.state.trees.length &&
          <TreeDisplay tree={this.state.currentTree} />
          }
        </Route>
        <Route path='/addtree'>
          <Form addTree={this.addTree} />
        </Route>
      </>
    )
    } else {
      return null
    }
  }
}

export default App;
