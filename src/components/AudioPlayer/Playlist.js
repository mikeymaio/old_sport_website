import React, {Component} from 'react';

const ListItem = props => (
  <div
    style={{
    backgroundColor: 'gray',
    border: '1px solid black',
    padding: '5px 15px 5px 15px',
    width: '100%'
  }}
    onClick={(e) => props.onSelectTrack(e, props.track)}>
    <h5>{props.track.artist}</h5>
    <h4>{props.track.title}</h4>
  </div>
)

export default class Playlist extends Component {
  render() {
    return (
      <div
        style={{
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}>
        {this
          .props
          .tracks
          .map(track => {
            return (<ListItem track={track} onSelectTrack={this.props.onSelectTrack}/>)
          })}
      </div>
    )
  }
}