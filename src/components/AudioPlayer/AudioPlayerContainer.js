import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import PlayButton from './PlayButton'
import Progress from './Progress'
import VolumeControl from './VolumeControl'
import AudioPlayer from './AudioPlayer';
import Playlist from './Playlist'

class AudioPlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      played: 0,
      loaded: 0,
      duration: 0,
      open: false,
      volume: 1,
      isMuted: false,
    }
    this.onSeekMouseDown = this
      .onSeekMouseDown
      .bind(this)
    this.onSeekChange = this
      .onSeekChange
      .bind(this)
    this.onSeekMouseUp = this
      .onSeekMouseUp
      .bind(this)
    this.onProgress = this
      .onProgress
      .bind(this)
    this.toggleMute = this
      .toggleMute
      .bind(this)
    this.onVolumeChange = this
      .onVolumeChange
      .bind(this)
  }

  onSeekMouseDown = e => {
    this.setState({seeking: true})
  }

  onSeekChange = e => {
    this.setState({
      played: parseFloat(e.target.value)
    })
  }

  onSeekMouseUp = e => {
    this.setState({seeking: false})
    this
      .player
      .seekTo(parseFloat(e.target.value))
  }

  onProgress = state => {
    // Slider should only update if not seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  onVolumeChange(volume) {
    this.setState({ volume });
    console.log(volume);
    console.log(this.state.volume);
  }

  toggleMute() {
    this.setState({ isMuted: !this.state.isMuted });
    console.log(this.state.isMuted);
  }

  render() {
    const {track, currentTime, duration} = this.props;

    const {played, loaded} = this.state

    return (
      <div
        // className="py2 white bg-cover bg-top rounded relative"
        className="audioplayer__container"
        style={{
        height: 'auto',
        // width: ' 70%',
        // padding: 100,
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}>
        <div className="bg-black absolute top-0 right-0 left-0 bottom-0 muted" />
        <div
          className="center py4 relative z1"
          style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 50,
        }}>
          { this.props.selectedTrack && (
            <div style={{ textAlign: 'center' }}>
              <h3 className="h4 nowrap caps mb0">{this.props.selectedTrack.artist}</h3>
              <h2 className="h0 nowrap caps m0">{this.props.selectedTrack.title}</h2>
            </div>
          )}
          <VolumeControl
            className='mr2 flex flex-center flex-row'
            buttonClassName="flex-none h2 button button-transparent button-grow rounded"
            rangeClassName="custom-track-bg"
            isMuted={this.state.isMuted}
            volume={this.state.volume}
            onVolumeChange={this.onVolumeChange}
            toggleMute={this.toggleMute}
            {...this.props}/>
        </div>
        <div
          className="flex flex-center px2 relative z1"
          style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 25px 0 25px',
        }}>
          <AudioPlayer
            track={this.props.streamUrl}
            playing={this.props.playing}
            handleStartStop={this.props.handleStartStop}
            isMuted={this.state.isMuted}
            volume={this.state.volume}
          />
        </div>
        <Playlist tracks={this.props.tracks} onSelectTrack={this.props.onSelectTrack}/>
      </div>
    );
  }
}

export default AudioPlayerContainer;