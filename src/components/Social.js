import React, { Component } from 'react';

export default class Social extends Component {
  render() {
    return (
      <div className="social__container">
        <ul className="social-icon__list" style={{ flexDirection: 'row' }}>
          <li>
            <a
              href="https://www.facebook.com/ofcourseweareoldsport/"
              target="_blank"
              className="social-icon">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/old_sportmusic/"
              target="_blank"
              className="social-icon">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/OLD_SPORTmusic"
              target="_blank"
              className="social-icon">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          {/* <li>
            <a href="" target="_blank" className="social-icon">
              <i className="fa fa-youtube"></i>
            </a>
          </li> */}
        </ul>
      </div>
    )
  }
}