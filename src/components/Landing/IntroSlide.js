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
    if (browser === 'IE') {
      return (
        <div data-target="1" className="slide slide--1">
          <div className="banner__fallback"></div>
        </div>
      )
    }
    return (
      <div className="swiper-slide">
        <figure className="slide-bgimg slide-bgimg--1" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website-219318.appspot.com/o/images%2FOld_Sport_38.jpg?alt=media&token=7780c72b-9f41-4bae-892f-bfae713bebf6)' }}>
          <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website-219318.appspot.com/o/images%2FOld_Sport_38.jpg?alt=media&token=7780c72b-9f41-4bae-892f-bfae713bebf6" alt="OLD_SPORT" className="entity-img" />
        </figure>
        <div className="content">
          <div className="slide__darkbg slide--1__darkbg"></div>
          <div className="slide__text-wrapper slide--1__text-wrapper">
            <div
              className="slide__letter slide--1__letter title"
              style={{
              fontSize: '22vw'
            }}>
              OLD SPORT
            </div>
            <div className="caption" />
          </div>
        </div>
      </div>
    );
  }
  render() {
    return this.renderLanding();
  }
}