import React, { Component } from 'react';
import './Form.css';

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
    const newTree = {
      ...this.state
    }
    this.props.addTree(newTree);
    this.clearInputs();
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
        <div className="form-row">
          <label for="commonName">Common name</label>
          <input
            type='text'
            id='commonName'
            name='name'
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="form-row">
          <label for="scientificName">Scientific name</label>
          <input
            type='text'
            id='scientificName'
            name='scientific_name'
            value={this.state.scientific_name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="form-row">
          <label for="region">Region</label>
          <input
            type='text'
            id='region'
            name='region'
            value={this.state.region}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="form-row">
          <label for="averageHeight">Average height</label>
          <input
            type='text'
            id='averageHeight'
            name='average_height'
            value={this.state.average_height}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="form-row">
          <label for="lifespan">Lifespan</label>
          <input
            type='text'
            id='lifespan'
            name='lifespan'
            value={this.state.lifespan}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="form-row">
          <label for="funFact">Fun fact</label>
          <input
            type='text'
            id='funFact'
            name='fact'
            value={this.state.fact}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="form-row">
          <label for="imageURL">Image URL</label>
          <input
            type='text'
            id='imageURL'
            name='image'
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <h2>Please fill <em>EVERY</em> field before submitting</h2>
        <button className="tree-button form-button" onClick={e => this.submitTree(e)}>Submit Your Tree!</button>
      </form>
    )
  }
}

export default Form;
