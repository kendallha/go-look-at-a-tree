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
    console.log("invoked")
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addTree = (newTree) => {
    this.setState({ trees: [...this.state.trees, newTree] })
  }

  render() {
    if (this.state.trees.length) {
    return (
      <>
        <Header treeData={this.state.trees} getRandomTree={this.getRandomTree}/>
        <Route exact path='/'>
          {this.state.trees.length &&
          <TreeDisplay tree={this.state.trees[this.getRandomTree(0, this.state.trees.length - 1)]} />
          }
        </Route>
        <Route
        exact path="/tree/:id"
        render={({ match }) => {
          const id  = match.params.id;
          const foundTree = this.state.trees.find(tree => tree.id === id)
          return <TreeDisplay tree={foundTree} />
        }}/>
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
