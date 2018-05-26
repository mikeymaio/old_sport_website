import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/header.css';

export default class Header extends Component {
  scrollTo(element, to, duration) {
    if (duration <= 0) 
      return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) 
        return;
      window.scrollTo(element, to, duration - 10);
    }, 10);
  }
  render() {
    return (
      <header className="header">
        <ul className="header__menu">
          <li>
            <a
              href="#"
              onClick={() => {
              const elmnt = document.getElementById("about");
              this.scrollTo(document.body, elmnt.offsetTop, 2000);
            }}>About</a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
              const elmnt = document.getElementById("music");
              this.scrollTo(document.body, elmnt.offsetTop, 2000);
            }}>Music</a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
              const elmnt = document.getElementById("videos");
              this.scrollTo(document.body, elmnt.offsetTop, 2000);
            }}>Videos</a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
              const elmnt = document.getElementById("contact");
              this.scrollTo(document.body, elmnt.offsetTop, 2000);
            }}>Contact</a>
          </li>
        </ul>
      </header>
    )
  }
}