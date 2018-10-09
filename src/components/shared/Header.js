import React, {Component} from 'react';
import Drawer from './Drawer';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
          <li className="header__slide nav__slide--1 nav-active" onClick={() => this.props.handleNav(0)}>
              <p>Home</p>
            </li>
            <li className="header__slide nav__slide--2" onClick={() => this.props.handleNav(1)}>
              <p>Bio</p>
            </li>
            <li className="header__slide nav__slide--3" onClick={() => this.props.handleNav(2)}>
              <p>Music</p>
            </li>
            <li className="header__slide nav__slide--4" onClick={() => this.props.handleNav(3)}>
              <p>Tour</p>
            </li>
            <li className="header__slide nav__slide--5" onClick={() => this.props.handleNav(4)}>
              <p>Contact</p>
            </li>
          </ul>
        </Drawer>
        <ul className="header2__menu" style={{ alignItems: 'center' }}>
            <li className="header__slide nav__slide--1 nav-active" onClick={() => this.props.handleNav(0)}>
              <div
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: 'black',
                  borderRadius: 30,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  padding: 5
                }}
              >
                <img src={require("../../assets/old-sport-logo-white-black.jpg")} alt="OS" style={{ height: '100%', width: '100%' }} />
              </div>
            </li>
            <li className="header__slide nav__slide--2" onClick={() => this.props.handleNav(1)}>
              <a>BIO</a>
            </li>
            <li className="header__slide nav__slide--3" onClick={() => this.props.handleNav(2)}>
              <a>MUSIC</a>
            </li>
            <li className="header__slide nav__slide--4" onClick={() => this.props.handleNav(3)}>
              <a>TOUR</a>
            </li>
            <li className="header__slide nav__slide--5" onClick={() => this.props.handleNav(4)}>
              <a>CONTACT</a>
            </li>
          </ul>
      </header>
    )
  }
}