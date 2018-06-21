import React from 'react';
import ReactPlayer from 'react-player';
import Timer from './Timer';
import Progress from './Progress'
import PlayButton from './PlayButton';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      played: 0,
      loaded: 0,
      duration: 0,
      open: false
    }
    this.onSeekChange = this
      .onSeekChange
      .bind(this)
    this.onSeekMouseDown = this
      .onSeekMouseDown
      .bind(this)
    this.onSeekMouseUp = this
      .onSeekMouseUp
      .bind(this)
    this.onProgress = this
      .onProgress
      .bind(this)
    this.onDuration = this
      .onDuration
      .bind(this)
  }

  onSeekMouseDown = e => {
    this.setState({seeking: true})
  }

  onSeekChange = e => {
    Promise
      .resolve()
      .then(() => {
        this.setState({played: parseFloat(e), playedSeconds: parseFloat(e)})
      })
      .then(() => {
        this
          .player
          .seekTo(parseFloat(this.state.playedSeconds))
      })
  }

  onSeekMouseUp = e => {
    this.setState({seeking: false})
    this
      .player
      .seekTo(this.state.playedSeconds)
  }

  onProgress = state => {
    // Slider should only update if not seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
    this.setState({played: state.played, playedSeconds: state.playedSeconds})
  }

  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({duration})
  }

  render() {

    const {played, playedSeconds, loaded, duration} = this.state

    let startStopClass = 'startStopButton2' + this.props.play
      ? 'active'
      : '';
    let platterClassNames = 'platter player-container' + this.props.play
      ? 'spinPlatter'
      : '';

    return (
      <div
        style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div
          style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <PlayButton
            className="flex-none h2 mr2 button button-transparent button-grow rounded"
            {...this.props}
            onClick={this.props.handleStartStop}/>
          <Progress
            value={(playedSeconds / duration) * 100 || 0}
            duration={duration}
            onSeekChange={this.onSeekChange}
            style={{
            width: '80%'
          }}
            innerStyle={{
            color: 'black',
            backgroundColor: '#43c6cc'
            // background: 'linear-gradient(#8f5fff, #000)',
          }}
            onMouseDown={this.onSeekMouseDown}
            onMouseUp={this.onSeekMouseUp}/>
          <Timer
            style={{
            marginLeft: 10,
            fontSize: 14
          }}
            duration={this.state.duration}
            currentTime={this.player
            ? this
              .player
              .getCurrentTime()
            : null}/>
        </div>
        <ReactPlayer
          url={this.props.track}
          ref={player => {
          this.player = player
        }}
          controls
          className="player"
          playing={this.props.playing}
          volume={this.props.volume}
          muted={this.props.isMuted}
          onProgress={this.onProgress}
          hidden
          progressInterval={500}
          onDuration={this.onDuration}/>
      </div>
    )
  }
}

export default AudioPlayer;
