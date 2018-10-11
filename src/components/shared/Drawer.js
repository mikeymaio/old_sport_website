import React from 'react';
import ReactDOM from 'react-dom';

export default class Drawer extends React.Component {
  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target) && this.props.toggleMenu) {
      this.props.onClick();
    }
  }

  render() {
    return(
      <div>
        <button type="button hamburger" onClick={this.props.onClick} style={{ marginTop: 25 }}>
          <span className="fa fa-bars"></span>
        </button>
      <div className={"sliding-menu animated " + this.props.slideClass}>
        <button type="button" onClick={() => this.props.onClick()}>
          <span className="fa fa-close"></span>
        </button>
        <ul className="header2__drawer__menu">
        <li className="header__slide nav__slide--1 nav-active" onClick={() => this.props.onNav(1)}>
            <p>Home</p>
          </li>
          <li className="header__slide nav__slide--2" onClick={() => this.props.onNav(2)}>
            <p>Bio</p>
          </li>
          <li className="header__slide nav__slide--3" onClick={() => this.props.onNav(3)}>
            <p>Music</p>
          </li>
          <li className="header__slide nav__slide--4" onClick={() => this.props.onNav(4)}>
            <p>Tour</p>
          </li>
          <li className="header__slide nav__slide--5" onClick={() => this.props.onNav(5)}>
            <p>Contact</p>
          </li>
        </ul>
      </div>
      </div>
    );
  }
}
