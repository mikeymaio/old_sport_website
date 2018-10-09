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
      <div>
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
          {/* <div className="music__container caption">
            <AudioPlayerContainer
              tracks={this.state.tracks}
              selectedTrack={this.state.selectedTrack}
              streamUrl={this.state.streamUrl}
              handleStartStop={this.togglePlay}
              playing={this.state.playing}
              onSelectTrack={this.onSelectTrack}
              initHorizontalScroll={this.props.initHorizontalScroll}
            />

            <div className="music-slide__artist-links__container">
              <iframe
                src="https://open.spotify.com/follow/1/?uri=spotify:artist:7vymsKsxaBuqW9idxrQUOE&size=detail&theme=dark&show-count=0" width="300"
                height="56"
                scrolling="no"
                frameBorder="0"
                className="spotify__artist"
                allowtransparency="true"
              />
                <a
                  href="https://itunes.apple.com/us/artist/oldsport/1063747050"
                  target="_blank"
                  style={{
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <img src={require('../../assets/available-itunes-logo.png')} style={{ width: '100%', maxWidth: 150 }} />
                </a>
                <a
                  href="https://www.amazon.com/gp/search/ref=sr_adv_m_digital/?search-alias=digital-music&unfiltered=1&field-keywords=&field-author=OLD_SPORT&field-title=&field-label=&field-browse=&sort=relevancerank&Adv-Srch-MP3-Submit.x=46&Adv-Srch-MP3-Submit.y=9" target="_blank"
                  style={{
                    width: '30%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20
                  }}
                >
                  <img src={require('../../assets/amazon-logo_white.jpg')} style={{ width: '100%', maxWidth: 125, minWidth: 60 }} />
                </a>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
  render() {
    return this.renderLanding();
  }
}