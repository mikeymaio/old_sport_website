import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { PlayIconSVG, PauseIconSVG } from './Icons';

class PlayButton extends Component {
  shouldComponentUpdate(nextProps) {
    const { playing, seeking } = this.props;

    return (
      playing !== nextProps.playing || seeking !== nextProps.seeking
    );
  }

  handleClick(e) {
    const { onTogglePlay } = this.props;
    onTogglePlay && onTogglePlay(e);
  }

  render() {
    const { playing, seekingIcon, seeking, className, style } = this.props;

    let iconNode;

    if (seeking && seekingIcon) {
      iconNode = React.cloneElement(seekingIcon);
    } else if (playing) {
      iconNode = <PauseIconSVG />;
    } else {
      iconNode = <PlayIconSVG />;
    }

    const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-play-btn', className);

    return (
      <button type="button" className={classNames} style={style} onClick={this.props.onClick}>
        {iconNode}
      </button>
    );
  }
}

export default PlayButton;
