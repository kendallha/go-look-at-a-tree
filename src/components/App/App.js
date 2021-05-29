import React, { Component } from 'react'
import './App.css';
import treeData from '../../assets/treeData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tress: []
    }
  }

  componentDidMount() {
    this.setState({ trees: treeData.trees })
  }

  render() {
    return (
      <>
        <h1>Go Look at a Tree</h1>
        <p></p>
      </>
    )
  }
}

export default App;
