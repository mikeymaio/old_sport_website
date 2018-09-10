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
      const tracks = Object.values(snap.val());
      this.setState({ tracks, selectedTrack: tracks[0], streamUrl: tracks[0].songUrl });
    })
  }

  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }

  onSelectTrack(e, track) {
    this.setState({ selectedTrack: track, streamUrl: track.songUrl, playing: true })
  }

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
                  <img src={require('../../assets/available-itunes-logo.png')} style={{ width: '100%' }} />
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
                  <img src={require('../../assets/amazon-logo_white.jpg')} style={{ width: '100%' }} />
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}