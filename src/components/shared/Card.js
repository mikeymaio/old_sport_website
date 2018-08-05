import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="border"></div>
        <img src={this.props.image} />
        <h3>{this.props.name}</h3>
        <h4>{this.props.instrument}</h4>
      </div>
    )
  }
}