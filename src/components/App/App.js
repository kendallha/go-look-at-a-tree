import React, { Component } from 'react'
import './App.css';
import TreeDisplay from '../TreeDisplay/TreeDisplay';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Error from '../ErrorMsg/Error';
import { Route, Switch } from 'react-router-dom';
import { retrieveTrees } from '../../utilities/ApiCalls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: [],
      currentTree: null
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedTrees = await retrieveTrees();
      this.setState({
        trees: fetchedTrees,
        currentTree: fetchedTrees[this.getRandomIndex(0, fetchedTrees.length - 1)]
      })
    } catch (error) {
      this.setState({error: "No trees found. Smokey the bear is sad. Go look outside."})
    }
  }

  getRandomIndex = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addTreeToState = (newTree) => {
    this.setState({ trees: [...this.state.trees, newTree] })
  }


  setNewTree = () => {
    console.log(this.state.trees)
    this.setState({ currentTree: this.state.trees[this.getRandomIndex(0, this.state.trees.length - 1)] })
  }

  render() {
    return (
      <>
        <Header setNewTree={this.setNewTree}/>
        <Switch>
        <Route
          exact path='/'
          render={() => {
            return (
              <TreeDisplay tree={this.state.currentTree} error={this.state.error} />
            )
          }}
        />
        <Route path='/addtree'>
          <Form addTreeToState={this.addTreeToState} />
        </Route>
        <Route>
          <Error error={`Page not found. Click 'Get a Tree' to return to the main page.`} />
        </Route>
        </Switch>
      </>
    )
  }
}

export default App;
