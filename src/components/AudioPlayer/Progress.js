import React, { Component } from 'react';
import ClassNames from 'classnames';

class Progress extends Component {
  state = {
    track: 0
  }
  handleSeekTrack(e) {
    const { onSeekChange } = this.props;
    const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;
    onSeekChange && onSeekChange(xPos * this.props.duration);
  }

  render() {
    const { className, innerClassName, style, currentTime, duration } = this.props;
    let { value, innerStyle } = this.props;

    if (!value && currentTime && duration) {
      value = (currentTime / duration) * 100 || 0;
    }

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    const classNames = ClassNames('sb-soundplayer-progress-container', className);
    const innerClassNames = ClassNames('sb-soundplayer-progress-inner', innerClassName);

    if (!innerStyle) {
      innerStyle = {};
    }

    innerStyle = Object.assign({}, innerStyle, {width: `${value}%`});

    return (
      <div className={classNames} style={style} onClick={this.handleSeekTrack.bind(this)} onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}>
        <div className={innerClassNames} style={innerStyle} />
      </div>
    );
  }
}

export default Progress;
