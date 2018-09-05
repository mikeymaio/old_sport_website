import React, { Component } from 'react';

export default class IntroSlide extends Component {
  render() {
    return (
      <div data-target="1" className="slide slide--1">
        <div className="slide__darkbg slide--1__darkbg"></div>
        <div className="slide__text-wrapper slide--1__text-wrapper">
          <div
            className="slide__letter slide--1__letter"
            style={{
            fontSize: '25vw',
            textAlign: 'center'
          }}>
            OLD SPORT
          </div>
          {/* <div className="slide__text slide__text--1">
            Of course we are...
          </div> */}
        </div>
      </div>
    );
  }
}