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
    // this.handleClick = this
    //   .handleClick
    //   .bind(this);

    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.init = this.init.bind(this);
    this.timeout = this.timeout.bind(this);
    this.bullets = this.bullets.bind(this)
    this.navigateLeft = this.navigateLeft.bind(this);
    this.navigateRight = this.navigateRight.bind(this);
    this.handleHeaderNav = this.handleHeaderNav.bind(this);

  }

  componentDidMount() {
    this.init();
  }

  init() {
    if (this.slider) {
      const self = this;
    $(document)
      .on('click', '.nav__slide:not(.nav-active)', function () {
        let target = Number($(this).attr('data-target'));
        self.bullets(target);
        self.setState({ slideIndex: target });
        self.pagination(1);
      });

    $(document).on('click', '.header__slide:not(.nav-active)', function () {
      let target = Number($(this).attr('data-target'));
      self.bullets(target);
      self.setState({ slideIndex: target });
      self.pagination(1);
    });

    $(document).on('click', '.side-nav', function () {
      let target = $(this).attr('data-target');

      if (target === 'right')
        self.navigateRight();
      if (target === 'left')
        self.navigateLeft();
      }
    );

    $(document).on('keydown', function (e) {
      if (e.which === 39 || e.which === 40)
        self.navigateRight();
      if (e.which === 37 || e.which === 38)
        self.navigateLeft();
      }
    );


    $(document).on('mousewheel DOMMouseScroll', function (e) {
      if (self.state.animation)
        return;
      let delta = e.originalEvent.wheelDelta;

      if (delta > 0 || e.originalEvent.detail < 0)
        self.navigateLeft();
      if (delta < 0 || e.originalEvent.detail > 0)
        self.navigateRight();
      }
    )


    const slider = document.getElementById('slide__container');

    handleSwipe(slider, this.navigateLeft, this.navigateRight);
      }
  }

  handleClick() {
    console.log(this.state.toggleMenu);
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  setSlideIndex(slideIndex) {
    this.setState({ slideIndex })
  }

  bullets(dir) {
    const index = this.state.slideIndex
    $('.nav__slide--' + index).removeClass('nav-active');
    $('.nav__slide--' + dir).addClass('nav-active');
  }

  timeout() {
    this.setState({ animation: false });
  }

  pagination(direction) {
    const $slider = $('.slider');
    this.setState({ animation: true, diff: 0 });
    $slider.addClass('animation');
    $slider.css({
      'transform': 'translate3d( -' + ((this.state.slideIndex - direction) * 100) + '%, 0, 0)'
    });

    $slider
      .find('.slide__darkbg')
      .css({
        'transform': 'translate3d(' + ((this.state.slideIndex - direction) * 50) + '%, 0, 0)'
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
    // this.state.slideIndex++;
    this.setSlideIndex(this.state.slideIndex += 1)
    // this.setState({ this.state.slideIndex })
  }

  navigateLeft() {
    if (this.state.slideIndex <= 1)
      return;
    this.pagination(2);
    setTimeout(this.timeout, this.state.animSpd);
    console.log(this.state.slideIndex)
    this.bullets(this.state.slideIndex - 1);
    // this.state.slideIndex--;
    this.setSlideIndex(this.state.slideIndex -= 1)
    // this.setState({ this.state.slideIndex })
  }

  toDefault() {
    this.pagination(1);
    setTimeout(this.timeout, this.state.animSpd);
  }

  handleHeaderNav(slideIndex) {
    console.log(slideIndex)
    this.setSlideIndex(slideIndex)
  }

  // renderSideNav() {
  //   if (this.state.slideIndex === 1) {
  //     return (

  //     );
  //   }
  // }

  render() {

    let slideClass;
    this.state.toggleMenu
      ? slideClass = 'slideInLeft slide-menu'
      : slideClass = 'slideInRight';
    return (
      <div className="main-container">
        <Header onNav={index => this.handleHeaderNav(index)} />
        <div className="cont" id="slide__container">
          <div className="slider" tabIndex="0" ref={node => this.slider = node} onKeyPress={e => console.log('KEY PRESSED = ', e)}>
            <IntroSlide />
            <AboutSlide />
            <MusicSlide />
            <TourSlide slideIndex={this.state.slideIndex} />
            <ContactSlide />
          </div>
          <ul className="nav">
            <li data-target="1" className="nav__slide nav__slide--1 nav-active"></li>
            <li data-target="2" className="nav__slide nav__slide--2"></li>
            <li data-target="3" className="nav__slide nav__slide--3"></li>
            <li data-target="4" className="nav__slide nav__slide--4"></li>
            <li data-target="5" className="nav__slide nav__slide--5"></li>
          </ul>
          {/* {this.state.this.state.slideIndex !== 5 && ( */}
          { this.state.slideIndex !== 1 && (
            <div data-target="left" className="side-nav side-nav--left">
              <span className="fa fa-chevron-left"></span>
            </div>
          )}
          { this.state.slideIndex !== 5 && (
            <div data-target="right" className="side-nav side-nav--right">
              <span className="fa fa-chevron-right"></span>
            </div>
          )}
        </div>
      </div>
    )
  }
}