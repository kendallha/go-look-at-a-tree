import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      region: '',
      scientificName: '',
      averageHeight: '',
      lifespan: '',
      fact: '',
      image: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitTree = (e) => {
    e.preventDefault();
    const newTree = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTree(newTree);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      name: '',
      region: '',
      scientificName: '',
      averageHeight: '',
      lifespan: '',
      fact: '',
      image: ''
    })
  }

  render() {
    return(
      <form>
        <h1>Add Your Favorite Tree</h1>
        <input 
          type='text' 
          placeholder='Common name' 
          name='name' 
          value={this.state.name}
          onChange={e => this.handleChange(e)}
          />
        <input 
          type='text' 
          placeholder='Scientific name' 
          name='scientificName' 
          value={this.state.scientificName}
          onChange={e => this.handleChange(e)}
          />
        <input 
          type='text' 
          placeholder='Region' 
          name='region' 
          value={this.state.region}
          onChange={e => this.handleChange(e)}
          />
        <input 
          type='text' 
          placeholder='Average height' 
          name='averageHeight' 
          value={this.state.averageHeight}
          onChange={e => this.handleChange(e)}
          />
        <input 
          type='text' 
          placeholder='Lifespan' 
          name='lifespan' 
          value={this.state.lifespan}
          onChange={e => this.handleChange(e)}
          />
        <input 
          type='text' 
          placeholder='Fun fact' 
          name='fact' 
          value={this.state.fact}
          onChange={e => this.handleChange(e)}
          />
        <input 
          type='text' 
          placeholder='Image URL' 
          name='image' 
          value={this.state.image}
          onChange={e => this.handleChange(e)}
          />
        <button>Add Tree</button>
      </form>
    )
  }
}

export default Form;