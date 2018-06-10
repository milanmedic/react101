import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
      return (
          <div> 
              <button onClick={this.props.increase}>Povecaj</button>
              <h1>Counter: {this.props.counterValue}</h1>
              <button onClick={this.props.decrease}>Smanji</button>
          </div>
      )
  }
}