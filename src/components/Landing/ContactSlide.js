import React, { Component } from 'react';

export default class ContactSlide extends Component {
  render() {
    return (
      <div className="swiper-slide">
        <figure className="slide-bgimg slide-bgimg--5" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website-219318.appspot.com/o/images%2FOld_Sport_14.jpg?alt=media&token=49c7305c-53dc-4ac8-b7f0-a82c7c051166)' }}>
          <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website-219318.appspot.com/o/images%2FOld_Sport_14.jpg?alt=media&token=49c7305c-53dc-4ac8-b7f0-a82c7c051166" alt="contact" className="entity-img" />
        </figure>
        <div className="content">
        <div
            className="slide__darkbg slide--5__darkbg"
            style={{
            backgroundColor: 'transparent'
          }}></div>
          <div className="slide__text-wrapper slide--5__text-wrapper">
            <div
              className="slide__letter slide--5__letter title"
              style={{
              fontSize: '20vw'
            }}>
              CONTACT
            </div>
            {/* <div className="caption" /> */}
            <div id="contact" className="contact__container caption">
              <div className="contact-card">
                <h2 className="section__header">
                  Contact
                </h2>
                <p style={{
                  fontSize: 18
                }}>{`booking: `}
                  <a href="mailto:contact@ofcourseweare.com">contact@ofcourseweare.com</a>
                </p>
                <ul className="social-icons">
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
                  <li>
                    <a href="https://www.youtube.com/channel/UCMxS8kCZ2ESw6w7laHrnTsQ" target="_blank" className="social-icon">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}