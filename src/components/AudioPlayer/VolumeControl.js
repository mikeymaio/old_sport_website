import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoundCloudAudio from 'soundcloud-audio';
import ClassNames from 'classnames';
import { VolumeIconLoudSVG, VolumeIconMuteSVG } from './Icons';

class VolumeControl extends Component {

  render() {
    const { className, buttonClassName, rangeClassName, volume, isMuted, onVolumeChange, toggleMute } = this.props;

    let value = volume * 100 || 0;

    if (value < 0 || isMuted) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    const classNames = ClassNames('sb-soundplayer-volume', className);
    const buttonClassNames = ClassNames('sb-soundplayer-btn sb-soundplayer-volume-btn', buttonClassName);
    const rangeClassNames = ClassNames('sb-soundplayer-volume-range', rangeClassName);

    return (
      <div className={classNames} onClick={this.handleMute}>
        <button type="button" className={buttonClassNames} onClick={this.props.toggleMute}>
          {isMuted ? <VolumeIconMuteSVG /> : <VolumeIconLoudSVG />}
        </button>
        <div>
          <input className={rangeClassNames} type="range" min="0" max="100" step="1" value={value} onChange={e => this.props.onVolumeChange(parseInt(e.target.value, 10) / 100)} />
        </div>
      </div>
    );
  }
}

VolumeControl.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  rangeClassName: PropTypes.string,
  volume: PropTypes.number,
  onVolumeChange: PropTypes.func,
  onToggleMute: PropTypes.func,
  soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

VolumeControl.defaultProps = {
  volume: 1,
  isMuted: 0
};

export default VolumeControl;
