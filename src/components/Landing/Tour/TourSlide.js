import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TourList from './TourList';
import 'react-tabs/style/react-tabs.css';

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
      const data = resJson.resultsPage.results.event
      this.setState({ upcomingEvents: data });
    });

    fetch('https://api.songkick.com/api/3.0/artists/8772679/gigography.json?apikey=oVkLSsVWWKzFBEB5')
    .then((response) => {
      return response.json();
    })
    .then((resJson) => {
      const data = resJson.resultsPage.results.event
      this.setState({ pastEvents: data.reverse() });
    });
  }

  render() {
    return (
      <div className="swiper-slide">
        <figure className="slide-bgimg slide-bgimg--4" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2F_DSC3855.jpg?alt=media&token=00a6f37e-ffbc-4560-966d-2e621c0d0c2f)' }}>
          <img src="https://firebasestorage.googleapis.com/v0/b/old-sport-website.appspot.com/o/images%2F_DSC3855.jpg?alt=media&token=00a6f37e-ffbc-4560-966d-2e621c0d0c2f" alt="tour" className="entity-img" />
        </figure>
        <div className="content">
          <div className="slide__darkbg slide--4__darkbg"></div>
          <div className="slide__text-wrapper slide--4__text-wrapper">
            <div className="slide__letter slide--4__letter title">
              TOUR
            </div>
            <div className="caption" />
            <div className="slide__text slide__text--1">
              <Tabs>
                <TabList>
                  <Tab className="tab__header">UPCOMING</Tab>
                  <Tab className="tab__header">PAST</Tab>
                </TabList>

                <TabPanel>
                  <TourList
                    gigs={this.state.upcomingEvents}
                    slideIndex={this.props.slideIndex}
                    listIndex={1}
                    initHorizontalScroll={this.props.initHorizontalScroll}
                  />
                </TabPanel>
                <TabPanel>
                  <TourList
                    gigs={this.state.pastEvents}
                    slideIndex={this.props.slideIndex}
                    listIndex={2}
                    initHorizontalScroll={this.props.initHorizontalScroll}
                  />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="sk-logo__wrapper">
          <img src={require('../../../assets/powered-by-sk/powered-by-songkick-white.svg')} alt="songkick" style={{width: 100 }}/>
        </div>
      </div>
    );
  }
}