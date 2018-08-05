import React, { Component } from 'react';
import TourList from './TourList';

export default class TourSlide extends Component {
    state = {
      upcomingEvents: [],
    }

  componentWillMount() {
    fetch('https://api.songkick.com/api/3.0/artists/8772679/calendar.json?apikey=oVkLSsVWWKzFBEB5')
    .then((response) => {
      return response.json();
    })
    .then((resJson) => {
      console.log(resJson.resultsPage);
      const data = resJson.resultsPage.results.event
      this.setState({ upcomingEvents: data });
    });
  }

  render() {
    return (
      <div data-target="4" className="slide slide--4">
        <div className="slide__darkbg slide--4__darkbg"></div>
        <div className="slide__text-wrapper slide--4__text-wrapper">
          <div
            className="slide__letter slide--4__letter"
            style={{
            fontSize: '30vw'
          }}>
            TOUR
          </div>
          <div className="slide__text slide__text--1">
            <TourList gigs={this.state.upcomingEvents} />
            <div className="sk-logo__wrapper">
              <img src={require('../../../assets/powered-by-sk/powered-by-songkick-white.svg')} style={{width: 100 }}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}