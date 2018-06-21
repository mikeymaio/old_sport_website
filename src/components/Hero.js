import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';

const Hero = ({image, min, max, children, overlay, backgroundSize, backgroundRepeat}) => (
  <div className="hero-container" style={{backgroundColor: '#000'}}>
    <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
      {/* <img
        src={image}
        style={{
        backgroundImage: `url(${image})`,
        width: '100%',
        position: 'absolute',
        top: 0
      }}/> */}
      <div
        className="hero-image"
        style={{
        backgroundImage: `url(${image})`,
        backgroundSize: backgroundSize || 'contain',
        backgroundRepeat: backgroundRepeat,
        width: '100%'
      }}/> {overlay
        ? (
          <div
            style={{
            width: '100%',
            height: '100%',
            backgroundColor: overlay.color || 'black',
            opacity: overlay.opacity || 0.75,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}></div>
        )
        : null}

    </Parallax>
    <div className="hero-children">{children}</div>
  </div>
);

export default Hero;
