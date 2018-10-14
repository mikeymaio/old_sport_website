import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class AboutSlide extends Component {
  render() {
    return (

      <div className="swiper-slide">
        <figure className="slide-bgimg slide-bgimg--2" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website-219318.appspot.com/o/images%2FOld_Sport_19.jpg?alt=media&token=c50b8f90-987e-47f0-a082-a1f6c4af95cf)' }}>
          <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website-219318.appspot.com/o/images%2FOld_Sport_19.jpg?alt=media&token=c50b8f90-987e-47f0-a082-a1f6c4af95cf" alt="about" className="entity-img" />
        </figure>
        <div className="content">
          <div className="slide__darkbg slide--2__darkbg"></div>
          <div className="slide__text-wrapper slide--2__text-wrapper">
            <div className="slide__letter slide--2__letter title">
              BIO
            </div>
          </div>
          <div className="about__container" style={{ position: 'relative', zIndex: 100, top: 20, padding: '50px 0' }}>
            {/* <div> */}
              <div style={{ position: 'absolute', top: 75 }}>
              <div className="slide__text slide__text--2 title">
                  Of course we are
                </div>
                <div className="slide__text slide__text--2--name title">
                  OLD_SPORT
                </div>
              </div>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <div className="bio-card">
                  <div className="section__content__wrapper">
                    <p className="section__content caption">
                    OLD_SPORT is a five piece soul-rock band out of Los Angeles, California. Formed to create the soundtrack for the award-winning independent film ELSEWHERE, they have since headlined legendary clubs on both coasts, including The Troubadour in L.A. and The Mercury Lounge in Manhattan. They are on the heels of a second successful east coast tour and are currently in the studio recording their debut album with Steve Kille of Dead Meadow. Influences include Spoon, The Strokes, Elvis Costello, Arcade Fire and The E Street Band.
                    </p>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}