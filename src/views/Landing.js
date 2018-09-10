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
      slideIndex: 1,
      animSpd: 1000, // Change also in CSS
      diff: 0,
      animation: false,
      numSlides: 5,
      $slider: $('.slider'),
    }

    this.init = this.init.bind(this);
    this.timeout = this.timeout.bind(this);
    this.bullets = this.bullets.bind(this)
    this.navigateLeft = this.navigateLeft.bind(this);
    this.navigateRight = this.navigateRight.bind(this);
    this.handleNav = this.handleNav.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('mousewheel', this.handleScroll);
    window.addEventListener('DOMMouseScroll', this.handleScroll);

    this.init();
  }

  init() {
    if (this.slider) {
      const slider = document.getElementById('slide__container');
      handleSwipe(slider, this.navigateLeft, this.navigateRight);
    }
  }

  handleClick() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  bullets(dir) {
    const index = this.state.slideIndex
    $('.nav__slide--' + index).removeClass('nav-active');
    $('.nav__slide--' + dir).addClass('nav-active');
  }

  timeout() {
    this.setState({ animation: false });
  }

  pagination(direction, slideIndex = this.state.slideIndex) {
    const $slider = $('.slider');
    this.setState({ animation: true, diff: 0 });
    $slider.addClass('animation');
    $slider.css({
      'transform': 'translate3d( -' + ((slideIndex - direction) * 100) + '%, 0, 0)'
    });

    $slider
      .find('.slide__darkbg')
      .css({
        'transform': 'translate3d(' + ((slideIndex - direction) * 50) + '%, 0, 0)'
      });

    $slider
      .find('.slide__letter')
      .css({'transform': 'translate3d(0, 0, 0)'});

    $slider
      .find('.slide__text')
      .css({'transform': 'translate3d(0, 0, 0)'});
  }

  navigateRight() {
    if (this.state.slideIndex >= this.state.numSlides)
      return;
    this.pagination(0);
    setTimeout(this.timeout, this.state.animSpd);
    this.bullets(this.state.slideIndex + 1);
    this.setState({ slideIndex: this.state.slideIndex += 1 });
  }

  navigateLeft() {
    if (this.state.slideIndex <= 1)
      return;
    this.pagination(2);
    setTimeout(this.timeout, this.state.animSpd);
    this.bullets(this.state.slideIndex - 1);
    this.setState({ slideIndex: this.state.slideIndex -= 1 });
  }

  toDefault() {
    this.pagination(1);
    setTimeout(this.timeout, this.state.animSpd);
  }

  handleNav(slideIndex) {
    this.bullets(slideIndex);
    this.setState({ slideIndex });
    setTimeout(this.timeout, this.state.animSpd);
    this.pagination(1, slideIndex);
  }

  handleKeyDown(e) {
    if (e.which === 39 || e.which === 40 || (e.which === 32 && !e.shiftKey)) {
      this.navigateRight();
    }
    if (e.which === 37 || e.which === 38 || (e.which === 32 && e.shiftKey)) {
      this.navigateLeft();
    }
  }

  handleScroll(e) {
    if (this.state.animation) {
      return;
    }
    let delta = e.wheelDelta;
    if (delta > 0 || e.detail < 0) {
      this.navigateLeft();
    }
    if (delta < 0 || e.detail > 0) {
      this.navigateRight();
    }
  }

  render() {

    let slideClass;
    this.state.toggleMenu
      ? slideClass = 'slideInLeft slide-menu'
      : slideClass = 'slideInRight';
    return (
      <div className="main-container">
        <Header handleNav={this.handleNav} />
        <div className="cont" id="slide__container">
          <div
            className="slider"
            tabIndex="0"
            ref={node => this.slider = node}
          >
            <IntroSlide slideIndex={this.state.slideIndex} />
            <AboutSlide slideIndex={this.state.slideIndex} />
            <MusicSlide slideIndex={this.state.slideIndex} initHorizontalScroll={this.init} />
            <TourSlide slideIndex={this.state.slideIndex} initHorizontalScroll={this.init} />
            <ContactSlide slideIndex={this.state.slideIndex} />
          </div>
          <ul className="nav">
            <li className="nav__slide nav__slide--1 nav-active"
            onClick={() => this.handleNav(1)}>
            </li>
            <li className="nav__slide nav__slide--2"
            onClick={() => this.handleNav(2)}>
            </li>
            <li className="nav__slide nav__slide--3"
            onClick={() => this.handleNav(3)}>
            </li>
            <li className="nav__slide nav__slide--4"
            onClick={() => this.handleNav(4)}>
            </li>
            <li className="nav__slide nav__slide--5"
            onClick={() => this.handleNav(5)}>
            </li>
          </ul>
          { this.state.slideIndex !== 1 && (
            <div className="side-nav side-nav--left" onClick={this.navigateLeft}>
              <span className="fa fa-chevron-left"></span>
            </div>
          )}
          { this.state.slideIndex !== 5 && (
            <div className="side-nav side-nav--right" onClick={this.navigateRight}>
              <span className="fa fa-chevron-right"></span>
            </div>
          )}
        </div>
      </div>
    )
  }
}