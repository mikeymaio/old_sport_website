import React, { Component } from 'react';

export default class IntroSlide extends Component {
  checkBrowser() {
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
       return 'Opera'
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome'
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari'
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
          return 'Firefox'
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) { //IF IE > 10
      return 'IE'
    } else {
        return 'unknown'
    }
  }

  renderLanding() {
    const browser = this.checkBrowser();
    if (browser === 'Safari') {
      return (
        <div data-target="1" className="slide slide--1">
          <div className="banner__fallback"></div>
        </div>
      )
    }
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
    )
  }
  render() {
    return this.renderLanding();
  }
}