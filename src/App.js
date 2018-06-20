import React, { Component } from 'react';
import DogPark from './dog-park'
import logo from './logo.svg';
import './App.css';
import parks from './parks.json'




export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  updateCount() {
    let oldCount = this.state.count
    this.setState(
      { count: this.state.count + 1 }
    )
    console.log('click')
  }


  render() {
    console.log(DogPark)

    return (

      <DogPark parks={parks} onClick={e => this.updateCount()} count={this.state.count} />
    )
  }
}

// onButtonClick={this.state.count++