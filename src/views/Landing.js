import React, {Component} from 'react';
import $ from 'jquery';
import Header from '../components/shared/Header';
import handleSwipe from '../swipe';
import IntroSlide from '../components/Landing/IntroSlide';
import AboutSlide from '../components/Landing/AboutSlide';
import MusicSlide from '../components/Landing/MusicSlide';
import TourSlide from '../components/Landing/Tour/TourSlide';
import ContactSlide from '../components/Landing/ContactSlide';

export default class Landing3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
      curSlide: 0,
    }
    // this.handleClick = this
    //   .handleClick
    //   .bind(this);

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
    let slides = [
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
        title: 'TOUR',
        content: 'Tour Dates Coming Soon...'
      }, {
        title: 'CONTACT',
        content: 'Email Us'
      }
    ]; // Change number of slides in CSS also
    let numSlides = slides.length;

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
      if (curSlide >= numSlides)
        return;
      pagination(0);
      setTimeout(timeout, animSpd);
      bullets(curSlide + 1);
      curSlide++;
      // this.setState({ curSlide })
    }

    function navigateLeft() {
      if (curSlide <= 1)
        return;
      pagination(2);
      setTimeout(timeout, animSpd);
      bullets(curSlide - 1);
      curSlide--;
      // this.setState({ curSlide })
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
      if (e.which === 39) 
        navigateRight();
      if (e.which === 37) 
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

    const slider = document.getElementById('slide__container');

    handleSwipe(slider, navigateLeft, navigateRight);
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
            <IntroSlide />
            <AboutSlide />
            <MusicSlide />
            <TourSlide />
            <ContactSlide />
          </div>
          <ul className="nav">
            <li data-target="1" className="nav__slide nav__slide--1 nav-active"></li>
            <li data-target="2" className="nav__slide nav__slide--2"></li>
            <li data-target="3" className="nav__slide nav__slide--3"></li>
            <li data-target="4" className="nav__slide nav__slide--4"></li>
            <li data-target="5" className="nav__slide nav__slide--5"></li>
          </ul>
          {/* {this.state.curSlide !== 5 && ( */}
          <div data-target="right" className="side-nav side-nav--right">
            <span className="fa fa-chevron-right"></span>
          </div>
          {/* )} */}
          {/* {this.state.curSlide !== 0 && ( */}
          <div data-target="left" className="side-nav side-nav--left">
            <span className="fa fa-chevron-left"></span>
          </div>
          {/* )} */}
        </div>
      </div>
    )
  }
}