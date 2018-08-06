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
      console.log(resJson.resultsPage);
      const data = resJson.resultsPage.results.event
      this.setState({ upcomingEvents: data });
    });

    
    fetch('https://api.songkick.com/api/3.0/artists/8772679/gigography.json?apikey=oVkLSsVWWKzFBEB5')
    .then((response) => {
      return response.json();
    })
    .then((resJson) => {
      console.log(resJson.resultsPage);
      const data = resJson.resultsPage.results.event
      console.log(resJson.resultsPage.results.event)
      this.setState({ pastEvents: data.reverse() });
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
            {/* <TourList gigs={this.state.upcomingEvents} /> */}

            <Tabs>
              <TabList>
                <Tab className="tab__header">UPCOMING</Tab>
                <Tab className="tab__header">PAST</Tab>
              </TabList>

              <TabPanel>
                <TourList gigs={this.state.upcomingEvents} />
              </TabPanel>
              <TabPanel>
                <TourList gigs={this.state.pastEvents} />
              </TabPanel>
            </Tabs>

            <div className="sk-logo__wrapper">
              <img src={require('../../../assets/powered-by-sk/powered-by-songkick-white.svg')} style={{width: 100 }}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}