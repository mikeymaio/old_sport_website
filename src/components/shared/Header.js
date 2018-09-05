import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Drawer from './Drawer';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  scroll(event, element) {
    event.preventDefault()
    window.scrollTo({'behavior': 'smooth', 'left': 0, 'top': element.offsetTop});
  }

  handleClick() {
    console.log(this.state.toggleMenu);
    this.setState({toggleMenu: !this.state.toggleMenu});
  }
  render() {
    let slideClass;
    this.state.toggleMenu
      ? slideClass = 'slideInLeft slide-menu'
      : slideClass = 'slideInRight';
    return (
      <header className="header2">
      <button type="button" onClick={this.handleClick}>
          <span className="fa fa-bars"></span>
        </button>
        <Drawer slideClass={slideClass} onClick={this.handleClick}>
          <button type="button" onClick={this.handleClick}>
            <span className="fa fa-close"></span>
          </button>
          <ul className="header2__drawer__menu">
          <li data-target="1" className="header__slide nav__slide--1 nav-active">
              <a>Home</a>
            </li>
            <li data-target="2" className="header__slide nav__slide--2">
              <a>Bio</a>
            </li>
            <li data-target="3" className="header__slide nav__slide--3">
              <a>Music</a>
            </li>
            <li data-target="4" className="header__slide nav__slide--4">
              <a>Tour</a>
            </li>
            <li data-target="5" className="header__slide nav__slide--5">
              <a>Contact</a>
            </li>
          </ul>
        </Drawer>
        <ul className="header2__menu" style={{ alignItems: 'center' }} >
            <li data-target="1" className="header__slide nav__slide--1 nav-active">
              {/* <a>OS</a> */}
              {/* <image src="../../assets/old-sport-logo.jpg" style={{ height: 40, width: 40}} /> */}
              <div style={{ height: 60, width: 60, backgroundColor: 'black', borderRadius: 30, marginTop: 10, justifyContent: 'cennter', alignItems: 'center', overflow: 'hidden', padding: 5 }}>
                <img src={require("../../assets/old-sport-logo-white-black.jpg")} alt="OS" style={{ height: '100%', width: '100%' }} />
              </div>
            </li>
            <li data-target="2" className="header__slide nav__slide--2">
              <a>BIO</a>
            </li>
            <li data-target="3" className="header__slide nav__slide--3">
              <a>MUSIC</a>
            </li>
            <li data-target="4" className="header__slide nav__slide--4">
              <a>TOUR</a>
            </li>
            <li data-target="5" className="header__slide nav__slide--5">
              <a>CONTACT</a>
            </li>
          </ul>
      </header>
    )
  }
}