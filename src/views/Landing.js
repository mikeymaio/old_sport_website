import React, {Component} from 'react';
import Swiper from 'swiper';

import Header from '../components/shared/Header';
import IntroSlide from '../components/Landing/IntroSlide';
import AboutSlide from '../components/Landing/AboutSlide';
import MusicSlide from '../components/Landing/MusicSlide';
import TourSlide from '../components/Landing/Tour/TourSlide';
import ContactSlide from '../components/Landing/ContactSlide';
import Social from '../components/Social';
import NewsModal from '../components/Landing/NewsModal';


export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
      slideIndex: 0,
      animSpd: 1000, // Change also in CSS
      animation: false,
      numSlides: 5,
      modalVisible: true,
    }
    this.handleNav = this.handleNav.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.initSwiper = this.initSwiper.bind(this);

  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('mousewheel', this.handleScroll);
    window.addEventListener('DOMMouseScroll', this.handleScroll);

    this.initSwiper();
    this.preventMobileScroll();
  }

  preventMobileScroll() {
    if (this.isMobile()) {
      const main = document.querySelector(".main-container");
      const height = window.innerHeight;
      main.style.height = height + "px";
    }
  }

  isMobile() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
      check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
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
    interleaveOffset = 0.5;

    // Main Slider
    let mainSliderOptions = {
      loop: true,
      speed:1000,
      autoplay: {
        delay:5000
      },
      grabCursor: true,
      watchSlidesProgress: true,
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChange: function() {
          let swiper = this;
          self.setState({ slideIndex: swiper.realIndex })
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
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  render() {
    return (
      <div className="main-container">
        <NewsModal visible={this.state.modalVisible} onClose={this.toggleModal} />
        <Header handleNav={this.handleNav} />
        <div className="swiper-container main-slider loading">
          <div className="swiper-wrapper">
            <IntroSlide />
            <AboutSlide />
            <MusicSlide />
            <TourSlide isMobile={this.isMobile()}/>
            <ContactSlide />
          </div>
          {this.state.slideIndex !== 0 && <div className="swiper-button-prev swiper-button-white" onClick={() => this.swiper.slidePrev(1000)} />}
          {this.state.slideIndex !== 4 && <div className="swiper-button-next swiper-button-white" onClick={() => this.swiper.slideNext(1000)} />}
        </div>
        <ul className="nav">
          <li className={`nav__slide nav__slide--1 ${this.state.slideIndex === 0 ? 'nav-active' : ''}`}
          onClick={() => this.handleNav(1)}>
          </li>
          <li className={`nav__slide nav__slide--2 ${this.state.slideIndex === 1 ? 'nav-active' : ''}`}
          onClick={() => this.handleNav(2)}>
          </li>
          <li className={`nav__slide nav__slide--3 ${this.state.slideIndex === 2 ? 'nav-active' : ''}`}
          onClick={() => this.handleNav(3)}>
          </li>
          <li className={`nav__slide nav__slide--4 ${this.state.slideIndex === 3 ? 'nav-active' : ''}`}
          onClick={() => this.handleNav(4)}>
          </li>
          <li className={`nav__slide nav__slide--5 ${this.state.slideIndex === 4 ? 'nav-active' : ''}`}
          onClick={() => this.handleNav(5)}>
          </li>
        </ul>
        <Social />
      </div>
    )
  }
}

