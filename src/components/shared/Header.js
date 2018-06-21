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
              <a>OS</a>
            </li>
            <li data-target="2" className="header__slide nav__slide--2">
              <a>About</a>
            </li>
            <li data-target="3" className="header__slide nav__slide--3">
              <a>Music</a>
            </li>
            <li data-target="4" className="header__slide nav__slide--4">
              <a>Gallery</a>
            </li>
            <li data-target="5" className="header__slide nav__slide--5">
              <a>Contact</a>
            </li>
          </ul>
        </Drawer>
        <ul className="header2__menu">
            <li data-target="1" className="header__slide nav__slide--1 nav-active">
              <a>OS</a>
            </li>
            <li data-target="2" className="header__slide nav__slide--2">
              <a>About</a>
            </li>
            <li data-target="3" className="header__slide nav__slide--3">
              <a>Music</a>
            </li>
            <li data-target="4" className="header__slide nav__slide--4">
              <a>Gallery</a>
            </li>
            <li data-target="5" className="header__slide nav__slide--5">
              <a>Contact</a>
            </li>
          </ul>
      </header>
    )
  }
}