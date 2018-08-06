import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class AboutSlide extends Component {
  render() {
    return (
      <div data-target="2" className="slide slide--2">
      <div className="slide--2__wrapper">
        <div className="slide__darkbg slide--2__darkbg"></div>
        <div className="slide__text-wrapper slide--2__text-wrapper">
          <div className="slide__letter slide--2__letter">
            BIO
          </div>
        </div>
          <div className="about__container">
            <div>
              <div className="bio-card">
                <h2 className="section__header">BIO</h2>
                <div className="section__content__wrapper">
                  <p className="section__content">
                    OLD_SPORT is a 5-piece soul rock band based out of L.A.
                    Formed to create the soundtrack for the award winning independent film
                    "ELSEWHERE", they have since played both coasts, headlining
                    legendary clubs such as The Troubadour in L.A. and The Mercury Lounge in
                    Manhattan. On the heals of a second successful east coast tour, they and are
                    currently recording their debut album with Steve Kille of Dead
                    Meadow.<br />Influences include Spoon, The Strokes, Elvis Costello, Arcade Fire and
                    The E Street Band.
                  </p>
                </div>
                {/* <Link to="about" className="more__info__badge">
                  Learn more
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}