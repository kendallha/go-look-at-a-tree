import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      region: '',
      scientific_name: '',
      average_height: '',
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
    if (this.state.name &&
      this.state.region &&
      this.state.scientific_name &&
      this.state.average_height &&
      this.state.lifespan &&
      this.state.fact &&
      this.state.image) {
        const newTree = {
          ...this.state
        }
        this.props.addTree(newTree);
        this.clearInputs();
    } else {
      this.setState({ error: 'Please fill out all input fields'})
    }
  }

  clearInputs = () => {
    this.setState({
      name: '',
      region: '',
      scientific_name: '',
      average_height: '',
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
          name='scientific_name'
          value={this.state.scientific_name}
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
          name='average_height'
          value={this.state.average_height}
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
        <button onClick={e => this.submitTree(e)}>Add Tree</button>
      </form>
    )
  }
}

export default Form;
