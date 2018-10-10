import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class AboutSlide extends Component {
  render() {
    return (

      <div className="swiper-slide">
        <figure className="slide-bgimg slide-bgimg--2" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_19.jpg?alt=media&token=c1dda655-8629-4310-9871-47daf1e61237)' }}>
          <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_19.jpg?alt=media&token=c1dda655-8629-4310-9871-47daf1e61237" alt="about" className="entity-img" />
        </figure>
        <div className="content">
          <div className="slide__darkbg slide--2__darkbg"></div>
          <div className="slide__text-wrapper slide--2__text-wrapper">
            <div className="slide__letter slide--2__letter title">
              BIO
            </div>
          </div>
          <div className="about__container" style={{ position: 'relative', zIndex: 100, top: 20 }}>
            <div>
              <div className="bio-card">
                <div className="slide__text slide__text--2 title">
                  Of course we are
                </div>
                <div className="slide__text slide__text--2--name title">
                  OLD_SPORT
                </div>
                <div className="section__content__wrapper">
                  <p className="section__content caption">
                  OLD_SPORT is a five piece soul-rock band out of Los Angeles, California. Formed to create the soundtrack for the award-winning independent film ELSEWHERE, they have since headlined legendary clubs on both coasts, including The Troubadour in L.A. and The Mercury Lounge in Manhattan. They are on the heels of a second successful east coast tour and are currently in the studio recording their debut album with Steve Kille of Dead Meadow. Influences include Spoon, The Strokes, Elvis Costello, Arcade Fire and The E Street Band.
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