import React, { Component } from 'react';

export default class MusicSlide extends Component {
  render() {
    return (
      <div data-target="3" className="slide slide--3">
        <div className="slide__darkbg slide--3__darkbg"></div>
        <div className="slide__text-wrapper slide--3__text-wrapper">
          <div
            className="slide__letter slide--3__letter"
            style={{
            fontSize: '30vw'
          }}>
            MUSIC
          </div>
          <div className="music__container">
            <h2 className="section__header">
              MUSIC
            </h2>
            <div id="spotify__player" style={{width: '75%'}}>
              <iframe
                src="https://open.spotify.com/embed?uri=spotify:album:2IVpnH6bmApCeElMDSqwwQ"
                style={{
                  width: '100%',
                  height: 100,
                  opacity: 0.9
                }}
                frameBorder="0"
                allowtransparency="true" allow="encrypted-media"
              />
              <iframe
                src="https://open.spotify.com/embed?uri=spotify:album:7crdwKShPO8gt1mdqhU6Dd" style={{
                  width: '100%',
                  height: 100,
                  opacity: 0.9
                }}
                frameBorder="0"
                allowtransparency="true" allow="encrypted-media"
              />
            </div>
            <div style={{width: '75%'}}>
              <iframe
                src="https://open.spotify.com/follow/1/?uri=spotify:artist:7vymsKsxaBuqW9idxrQUOE&size=detail&theme=dark&show-count=0" width="300"
                height="56"
                scrolling="no"
                frameBorder="0"
                style={{
                  border:'none',
                  overflow:'hidden',
                  alignSelf: 'flex-end',
                  margin: 20
                }}
                allowtransparency="true"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}