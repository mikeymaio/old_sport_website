import React, {Component} from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Header from '../components/shared/Header';

export default class Landing3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      toggleMenu: false
    }
    this.onSelectTrack = this
      .onSelectTrack
      .bind(this);
    this.handleStartStop = this
      .handleStartStop
      .bind(this)
    this.handleClick = this
      .handleClick
      .bind(this);

  }

  onSelectTrack(e, track) {
    e.preventDefault()
    this.setState({selectedTrack: track})
    console.log(this.state.selectedTrack)
  }

  handleStartStop() {
    this.setState({
      playing: !this.state.playing
    })
  }

  componentDidMount() {
    // $(document).ready(function() {
    const $cont = $('.cont');
    const $slider = $('.slider');
    const $nav = $('.nav');
    const winW = $(window).width();
    const animSpd = 1000; // Change also in CSS
    const distOfLetGo = winW * 0.2;
    let curSlide = 1;
    let animation = false;
    let diff = 0;

    // Generating slides
    let arrCities = [
      {
        title: 'OLDSPORT',
        content: 'OLDSPORT'
      }, {
        title: 'BIO',
        content: 'OUR BIO...'
      }, {
        title: 'MUSIC',
        content: 'MUSIC'
      }, {
        title: 'GALLERY',
        content: 'Gallery Coming Soon...'
      }, {
        title: 'CONTACT',
        content: 'Email Us'
      }
    ]; // Change number of slides in CSS also
    let numOfCities = arrCities.length;

    function bullets(dir) {
      $('.nav__slide--' + curSlide).removeClass('nav-active');
      $('.nav__slide--' + dir).addClass('nav-active');
    }

    function timeout() {
      animation = false;
    }

    function pagination(direction) {
      animation = true;
      diff = 0;
      $slider.addClass('animation');
      $slider.css({
        'transform': 'translate3d( -' + ((curSlide - direction) * 100) + '%, 0, 0)'
      });

      $slider
        .find('.slide__darkbg')
        .css({
          'transform': 'translate3d(' + ((curSlide - direction) * 50) + '%, 0, 0)'
        });

      $slider
        .find('.slide__letter')
        .css({'transform': 'translate3d(0, 0, 0)'});

      $slider
        .find('.slide__text')
        .css({'transform': 'translate3d(0, 0, 0)'});
    }

    function navigateRight() {
      if (curSlide >= numOfCities) 
        return;
      pagination(0);
      setTimeout(timeout, animSpd);
      bullets(curSlide + 1);
      curSlide++;
    }

    function navigateLeft() {
      if (curSlide <= 1) 
        return;
      pagination(2);
      setTimeout(timeout, animSpd);
      bullets(curSlide - 1);
      curSlide--;
    }

    function toDefault() {
      pagination(1);
      setTimeout(timeout, animSpd);
    }

    $(document)
      .on('click', '.nav__slide:not(.nav-active)', function () {
        let target = +$(this).attr('data-target');
        bullets(target);
        curSlide = target;
        pagination(1);
      });

    $(document).on('click', '.header__slide:not(.nav-active)', function () {
      let target = +$(this).attr('data-target');
      bullets(target);
      curSlide = target;
      pagination(1);
    });

    $(document).on('click', '.side-nav', function () {
      let target = $(this).attr('data-target');

      if (target === 'right') 
        navigateRight();
      if (target === 'left') 
        navigateLeft();
      }
    );

    $(document).on('keydown', function (e) {
      if (e.which === 39 || e.which === 40) 
        navigateRight();
      if (e.which === 37 || e.which === 38) 
        navigateLeft();
      }
    );

    $(document).on('mousewheel DOMMouseScroll', function (e) {
      if (animation) 
        return;
      let delta = e.originalEvent.wheelDelta;

      if (delta > 0 || e.originalEvent.detail < 0) 
        navigateLeft();
      if (delta < 0 || e.originalEvent.detail > 0) 
        navigateRight();
      }
    );
    // });
  }

  handleClick() {
    console.log(this.state.toggleMenu);
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  render() {

    let slideClass;
    this.state.toggleMenu
      ? slideClass = 'slideInLeft slide-menu'
      : slideClass = 'slideInRight';
    return (
      <div className="main-container">
        <Header/>
        <div className="cont" id="slide__container">
          <div className="slider">
            <div data-target="1" className="slide slide--1">
              <div className="slide__darkbg slide--1__darkbg"></div>
              <div className="slide__text-wrapper slide--1__text-wrapper">
                <div
                  className="slide__letter slide--1__letter"
                  style={{
                  fontSize: '25vw',
                  textAlign: 'center'
                }}>
                  OLD SPORT
                </div>
                <div className="slide__text slide__text--1">
                  Of course we are...
                </div>
              </div>
            </div>
            <div data-target="2" className="slide slide--2">
              <div className="slide__darkbg slide--2__darkbg"></div>
              <div className="slide__text-wrapper slide--2__text-wrapper">
                <div className="slide__letter slide--2__letter">
                  BIO
                </div>
                <div className="about__container">
                  <div>
                    <div className="bio-card">
                      <h2 className="section__header">BIO</h2>
                      <p className="section__content">
                        OLD_SPORT is a 5-piece soul rock band based out of L.A. with roots to NYC.
                        Formed to create the soundtrack for the award winning independent film
                        ELSEWHERE, they have since played all over the east and west coasts headlining
                        such legendary clubs as The Troubadour in L.A. and The Mercury Lounge in
                        Manhattan. They are on the heals of a second successful east coast tour and are
                        currently in the studio recording their debut album with Steve Kille of Dead
                        Meadow. Influences include Spoon, The Strokes, Elvis Costello, Arcade Fire and
                        The E Street Band.
                      </p>
                      <Link to="about" className="more__info__badge">
                        Learn more
                      </Link>
                      {/* <img className="photo__img" src={require("../assets/IMG_4111.JPG")}/> */}
                      {/* <img className="photo__img" src={require("../assets/Old_Sport_32.jpg")}/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-target="3" className="slide slide--3">
              <div className="slide__darkbg slide--3__darkbg"></div>
              <div className="slide__text-wrapper slide--3__text-wrapper">
                <div
                  className="slide__letter slide--3__letter"
                  style={{
                  fontSize: '30vw'
                }}>
                  MUSIC
                </div>
                <div className="music__container">
                  <h2 className="section__header">
                    MUSIC
                  </h2>
                  <div id="spotify__player" style={{width: '75%'}}>
                    <iframe
                      src="https://open.spotify.com/embed?uri=spotify:album:2IVpnH6bmApCeElMDSqwwQ"
                      style={{
                        width: '100%',
                        height: 100,
                        opacity: 0.9
                      }}
                      frameBorder="0"
                      allowtransparency="true" allow="encrypted-media"
                    />
                    <iframe
                      src="https://open.spotify.com/embed?uri=spotify:album:7crdwKShPO8gt1mdqhU6Dd" style={{
                        width: '100%',
                        height: 100,
                        opacity: 0.9
                      }}
                      frameBorder="0"
                      allowtransparency="true" allow="encrypted-media"
                    />
                  </div>
                  <div style={{width: '75%'}}>
                    <iframe
                      src="https://open.spotify.com/follow/1/?uri=spotify:artist:7vymsKsxaBuqW9idxrQUOE&size=detail&theme=dark&show-count=0" width="300"
                      height="56"
                      scrolling="no"
                      frameBorder="0"
                      style={{
                        border:'none',
                        overflow:'hidden',
                        alignSelf: 'flex-end',
                        margin: 20
                      }}
                      allowtransparency="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div data-target="4" className="slide slide--4">
              <div className="slide__darkbg slide--4__darkbg"></div>
              <div className="slide__text-wrapper slide--4__text-wrapper">
                <div
                  className="slide__letter slide--4__letter"
                  style={{
                  fontSize: '40vw'
                }}>
                  GALLERY
                </div>
                <div className="slide__text slide__text--1">
                  Gallery Coming Soon...
                </div>
              </div>
            </div>
            <div data-target="5" className="slide slide--5">
              <div
                className="slide__darkbg slide--5__darkbg"
                style={{
                backgroundColor: 'transparent'
              }}></div>
              <div className="slide__text-wrapper slide--5__text-wrapper">
                <div
                  className="slide__letter slide--5__letter"
                  style={{
                  fontSize: '20vw'
                }}>
                  CONTACT
                </div>
                <div id="contact" className="contact__container">
                  <div className="contact-card">
                    <h2 className="section__header">
                      Contact
                    </h2>
                    <p style={{
                      fontSize: 18
                    }}>{`booking: `}
                      <a href="mailto:nickvergara1@gmail.com">old_sport_music@gmail.com</a>
                    </p>
                    <ul className="social-icons">
                      <li>
                        <a
                          href="https://www.facebook.com/oldoldsport/"
                          target="_blank"
                          className="social-icon">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/old_sportmusic/"
                          target="_blank"
                          className="social-icon">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/OLDSPORTMusic"
                          target="_blank"
                          className="social-icon">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank" className="social-icon">
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav">
            <li data-target="1" className="nav__slide nav__slide--1 nav-active"></li>
            <li data-target="2" className="nav__slide nav__slide--2"></li>
            <li data-target="3" className="nav__slide nav__slide--3"></li>
            <li data-target="4" className="nav__slide nav__slide--4"></li>
            <li data-target="5" className="nav__slide nav__slide--5"></li>
          </ul>
          <div data-target="right" className="side-nav side-nav--right">
            <span className="fa fa-chevron-right"></span>
          </div>
          <div data-target="left" className="side-nav side-nav--left">
            <span className="fa fa-chevron-left"></span>
          </div>
        </div>
      </div>
    )
  }
}