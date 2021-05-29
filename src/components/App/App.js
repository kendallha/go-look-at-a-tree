import React, { Component } from 'react'
import './App.css';
import treeData from '../../assets/treeData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: []
    }
    console.log(this.state.trees, "constructor")
  }

  componentDidMount() {
    console.log(this.state.trees, "mount")
    this.setState({ trees: treeData })
  }

  render() {
    console.log(this.state.trees, "render")
    return (
      <>
        <h1>Go Look at a Tree</h1>
        {
          this.state.trees.length &&
          <p>{this.state.trees[0].type }</p>
        }
      </>
    )
  }
}

export default App;
