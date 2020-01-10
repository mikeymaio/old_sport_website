import React, { Component } from 'react';

export default class Modal extends Component {

  render() {
    if (!this.props.visible) return null;
    return (
      <div className="modal modal-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          background: 'rgba(0,0,0,0.7)',
        }}
      >
        <div className="modal-header">
        </div>
        <div className="modal-content-container">
        <div className="modal-content">
          <button
            className="close-button"
            onClick={this.props.onClose}
          >
            <span className="fa fa-close"></span>
          </button>
          <a
            href="https://www.youtube.com/watch?v=hfq3SQ_ttkA" target="_blank"
          >
            <h1>Have you seen our new music video?</h1>
          </a>

          <iframe className="visible-xs" width="300" height="300" src="https://www.youtube.com/embed/hfq3SQ_ttkA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <iframe className="hidden-xs" width="560" height="315" src="https://www.youtube.com/embed/hfq3SQ_ttkA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
      </div>
    )
  }
}