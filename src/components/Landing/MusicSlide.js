import React, { Component } from 'react';
import { database } from '../../constants/firebase-config';
import AudioPlayerContainer from '../AudioPlayer/AudioPlayerContainer';

export default class MusicSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      streamUrl: '',
      playing: false,
      selectedTrack: null,
    }

    this.togglePlay = this.togglePlay.bind(this);
    this.onSelectTrack = this.onSelectTrack.bind(this);
  }
  componentWillMount() {
    database.ref('music').on('value', snap => {
      console.log(snap.val());
      const tracks = Object.values(snap.val());
      this.setState({ tracks, selectedTrack: tracks[0], streamUrl: tracks[0].songUrl });
      console.log(this.state)
    })
  }

  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }

  onSelectTrack(e, track) {
    this.setState({ selectedTrack: track, streamUrl: track.songUrl})
  }

  render() {
    console.log(this.state.tracks);
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
            {/* <div id="spotify__player" style={{width: '75%'}}>
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
            </div> */}

            <AudioPlayerContainer
              tracks={this.state.tracks}
              selectedTrack={this.state.selectedTrack}
              streamUrl={this.state.streamUrl}
              handleStartStop={this.togglePlay}
              playing={this.state.playing}
              onSelectTrack={this.onSelectTrack}
            />

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