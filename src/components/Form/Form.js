import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      "name": '',
      "region": '',
      "scientificName": '',
      "averageHeight": '',
      "lifespan": '',
      "fact": '',
      "image": ''
    }
  }

  render() {
    return(
      <form>
        <input type='text' placeholder='Common name' name='name' value={this.state.name}/>
        <input type='text' placeholder='Scientific name' name='scientificName' value={this.state.scientificName}/>
        <input type='text' placeholder='Region' name='region' value={this.state.region}/>
        <input type='text' placeholder='Average height' name='averageHeight' value={this.state.averageHeight}/>
        <input type='text' placeholder='Lifespan' name='lifespan' value={this.state.lifespan}/>
        <input type='text' placeholder='Fun fact' name='fact' value={this.state.fact}/>
        <input type='text' placeholder='Image URL' name='image' value={this.state.image}/>
        <button>Add Tree</button>
      </form>
    )
  }
}