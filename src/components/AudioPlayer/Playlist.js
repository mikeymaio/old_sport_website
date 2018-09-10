import React, {Component} from 'react';
import PlayButton from './PlayButton';
import ProgressCircle from './ProgressCircle';

const ListItem = props => (
    <div
      style={{
      backgroundColor: '#333',
      border: '1px solid black',
      padding: '0px 15px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
    onClick={(e) => props.onSelectTrack(e, props.track)}>
    <div
      style={{
        background: `url(${props.track.imageUrl})`,
        backgroundSize: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: 15,
        position: 'relative',
        }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.35)'
        }}
      />
      <ProgressCircle
        strokeWidth="3"
        sqSize="40"
        percentage={props.playing ? (props.state.playedSeconds / props.state.duration) * 100 : 0}
      >
      <div style={{position: 'absolute', bottom: 10, left: props.playing ? 7 : 9}}>
      <PlayButton
        className="flex-none h2 mr2 button button-transparent button-grow rounded"
        {...props}
        playing={props.playing}
        onClick={(e) => {
          e.stopPropagation();
          if (props.playing) {
            return props.handleStartStop();
          }
          return props.onSelectTrack(e, props.track);
        }}
      />
      </div>
      </ProgressCircle>
    </div>

    <div>
      <h5>{props.track.artist}</h5>
      <h4>{props.track.title}</h4>
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: '5px 0' }} onClick={e => e.stopPropagation()}>
      <a href={props.track.spotifyUrl} target="_blank">
        <img src={require('../../assets/spotify-logo-small.png')} style={{ width: 30, height: 30, marginRight: 10  }} />
      </a>
      <a href={props.track.itunesUrl} target="_blank">
        <img src={require('../../assets/itunes-button.png')} style={{ width: 35, height: 35, marginRight: 10  }} />
      </a>
      <a href={props.track.amazonUrl} target="_blank">
        <img src={require('../../assets/amazon-logo-small.png')} style={{ width: 35, height: 35, marginRight: 10  }} />
      </a>
    </div>
  </div>
)

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.preventScrollPropagation = this.preventScrollPropagation.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  preventScrollPropagation(e) {
    e.stopPropagation();
  }

  onMouseEnter() {
    this.playlist.focus();

    this.playlist.addEventListener('DOMMouseScroll', this.preventScrollPropagation)
    this.playlist.addEventListener('mousewheel', this.preventScrollPropagation)
    this.playlist.addEventListener('mouseover', this.preventScrollPropagation)
    this.playlist.addEventListener('keydown', this.preventScrollPropagation)
  }

  onMouseLeave() {
    this.playlist.blur();

    this.playlist.removeEventListener('DOMMouseScroll', this.preventScrollPropagation)
    this.playlist.removeEventListener('mousewheel', this.preventScrollPropagation)
    this.playlist.removeEventListener('mouseover', this.preventScrollPropagation)
    this.playlist.removeEventListener('keydown', this.preventScrollPropagation)
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
        tabIndex="0" ref={node => this.playlist = node}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this
          .props
          .tracks
          .map((track, index) => {
            return (
              <ListItem
                key={index}
                track={track}
                playing={this.props.playing && this.props.selectedTrack === track}
                onSelectTrack={this.props.onSelectTrack}
                handleStartStop={this.props.handleStartStop}
                state={this.props.state}
              />
            )
          })}
      </div>
    )
  }
}