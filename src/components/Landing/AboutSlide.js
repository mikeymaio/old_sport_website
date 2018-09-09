import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class AboutSlide extends Component {
  render() {
    return (
      <div data-target="2" className="slide slide--2">
      <div className="slide--2__wrapper">
        <div className="slide__darkbg slide--2__darkbg"></div>
        {/* <div className="slide__text-wrapper slide--2__text-wrapper">
          <div className="slide__letter slide--2__letter">
            BIO
          </div>
        </div> */}
          <div className="about__container" style={{ position: 'absolute', zIndex: 100, top: 20}}>
            <div>
              <div className="bio-card">
                <div className="slide__text slide__text--2">
                  Of course we are
                </div>
                <div className="slide__text slide__text--2--name">
                  OLD_SPORT
                </div>
                <div className="section__content__wrapper">
                  <p className="section__content">
                  OLD_SPORT is a 5-piece soul rock band based out of L.A. with roots to NYC. Formed to create the soundtrack for the award winning independent film ELSEWHERE, they have since played all over the east and west coasts headlining such legendary clubs as The Troubadour in L.A. and The Mercury Lounge in Manhattan. They are on the heals of a second successful east coast tour and are currently in the studio recording their debut album with Steve Kille of Dead Meadow. Influences include Spoon, The Strokes, Elvis Costello, Arcade Fire and The E Street Band.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}