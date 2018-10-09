import React, {Component} from 'react';
import $ from 'jquery';
import Header from '../components/shared/Header';
import handleSwipe from '../swipe';
import IntroSlide from '../components/Landing 2/IntroSlide';
import AboutSlide from '../components/Landing 2/AboutSlide';
import MusicSlide from '../components/Landing 2/MusicSlide';
import TourSlide from '../components/Landing 2/Tour/TourSlide';
import ContactSlide from '../components/Landing 2/ContactSlide';
import Social from '../components/Social';
import Swiper from 'swiper';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
      slideIndex: 0,
      animSpd: 1000, // Change also in CSS
      diff: 0,
      animation: false,
      numSlides: 5,
      $slider: $('.slider'),
    }
    this.handleNav = this.handleNav.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.initSwiper = this.initSwiper.bind(this);

  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('mousewheel', this.handleScroll);
    window.addEventListener('DOMMouseScroll', this.handleScroll);

    this.initSwiper();
  }


  handleNav(index) {
    this.swiper.slideTo(index, 1000);
  }

  handleKeyDown(e) {
    if (e.which === 39 || e.which === 40 || (e.which === 32 && !e.shiftKey)) {
      this.swiper.slideNext(1000);
    }
    if (e.which === 37 || e.which === 38 || (e.which === 32 && e.shiftKey)) {
      this.swiper.slidePrev(1000);
    }
  }

  handleScroll(e) {
    if (this.state.animation) {
      return;
    }
    let delta = e.wheelDelta;
    if (delta > 0 || e.detail < 0) {
      this.swiper.slidePrev(1000);
    }
    if (delta < 0 || e.detail > 0) {
      this.swiper.slideNext(1000);
    }
  }

  initSwiper() {
    const self = this;
    // Params
    let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

    // Main Slider
    let mainSliderOptions = {
      // loop: true,
      speed:1000,
      autoplay: {
        delay:5000
      },
      // loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChange: function(){
          self.setState({ slideIndex: self.swiper.activeIndex })
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (let i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        },
      }
    };
    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

    this.swiper = mainSlider;

    // Navigation Slider
    // let navSliderOptions = {
    //   // loop: true,
    //   loopAdditionalSlides: 10,
    //   speed:1000,
    //   spaceBetween: 5,
    //   slidesPerView: 5,
    //   centeredSlides : true,
    //   touchRatio: 0.2,
    //   slideToClickedSlide: true,
    //   direction: 'horizontal',
    //   on: {
    //     imagesReady: function(){
    //       this.el.classList.remove('loading');
    //     },
    //     click: function(){
    //       mainSlider.autoplay.stop();
    //     },
    //   }
    // };
  }

  render() {

    let slideClass;
    this.state.toggleMenu
      ? slideClass = 'slideInLeft slide-menu'
      : slideClass = 'slideInRight';
    return (
      <div className="main-container">
        <Header handleNav={this.handleNav} />

        <div className="swiper-container main-slider loading">
          <div className="swiper-wrapper">
          <div className="swiper-slide">
              <figure className="slide-bgimg slide-bgimg--1" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_38.jpg?alt=media&token=0f4efe73-eb0f-4261-9137-cd9962e0379a)' }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_38.jpg?alt=media&token=0f4efe73-eb0f-4261-9137-cd9962e0379a" className="entity-img" />
              </figure>
              <div className="content">
                <IntroSlide />
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg slide-bgimg--2" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_19.jpg?alt=media&token=c1dda655-8629-4310-9871-47daf1e61237)' }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_19.jpg?alt=media&token=c1dda655-8629-4310-9871-47daf1e61237" className="entity-img" />
              </figure>
              <div className="content">
                <AboutSlide />
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg slide-bgimg--3" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_32.jpg?alt=media&token=982cc7b8-cbb9-49e6-8dea-2bbf9799c171)' }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_32.jpg?alt=media&token=982cc7b8-cbb9-49e6-8dea-2bbf9799c171" className="entity-img" />
              </figure>
              <div className="content">
                <MusicSlide />
              </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg slide-bgimg--4" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2F_DSC3855.jpg?alt=media&token=00a6f37e-ffbc-4560-966d-2e621c0d0c2f)' }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2F_DSC3855.jpg?alt=media&token=00a6f37e-ffbc-4560-966d-2e621c0d0c2f" className="entity-img" />
              </figure>
              <div className="content">
                <TourSlide />
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg slide-bgimg--5" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_14.jpg?alt=media&token=8201f525-c11f-4975-a8fd-2ba5edb864e2)' }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2FOld_Sport_14.jpg?alt=media&token=8201f525-c11f-4975-a8fd-2ba5edb864e2" className="entity-img" />
              </figure>
              <div className="content">
                <ContactSlide />
              </div>
            </div>
          </div>
          <ul className="nav">
            <li className={`nav__slide nav__slide--1 ${this.state.slideIndex === 0 ? 'nav-active' : ''}`}
            onClick={() => this.handleNav(0)}>
            </li>
            <li className={`nav__slide nav__slide--2 ${this.state.slideIndex === 1 ? 'nav-active' : ''}`}
            onClick={() => this.handleNav(1)}>
            </li>
            <li className={`nav__slide nav__slide--3 ${this.state.slideIndex === 2 ? 'nav-active' : ''}`}
            onClick={() => this.handleNav(2)}>
            </li>
            <li className={`nav__slide nav__slide--4 ${this.state.slideIndex === 3 ? 'nav-active' : ''}`}
            onClick={() => this.handleNav(3)}>
            </li>
            <li className={`nav__slide nav__slide--5 ${this.state.slideIndex === 4 ? 'nav-active' : ''}`}
            onClick={() => this.handleNav(4)}>
            </li>
          </ul>
          {this.state.slideIndex !== 0 && <div className="swiper-button-prev swiper-button-white" onClick={() => this.swiper.slidePrev(1000)} />}
          {this.state.slideIndex !== 4 && <div className="swiper-button-next swiper-button-white" onClick={() => this.swiper.slideNext(1000)} />}
        </div>
        <Social />
      </div>
    )
  }
}

