import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  scroll(event, element) {
    event.preventDefault()
    window.scrollTo({'behavior': 'smooth', 'left': 0, 'top': element.offsetTop});
  }
  render() {
    return (
      <header className="header">
        <ul className="header__menu">
          <li>
            <a
              href="#"
              onClick={(event) => {
              const elmnt = document.getElementById("about");
              this.scroll(event, elmnt);
            }}>About</a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
              const elmnt = document.getElementById("music");
              this.scroll(event, elmnt);
            }}>Music</a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
              const elmnt = document.getElementById("gallery");
              this.scroll(event, elmnt);
            }}>Gallery</a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
              const elmnt = document.getElementById("contact");
              this.scroll(event, elmnt);
            }}>Contact</a>
          </li>
        </ul>
      </header>
    )
  }
}