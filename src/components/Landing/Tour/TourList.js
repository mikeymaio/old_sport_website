import React, { Component } from 'react';
import TourListItem from './TourListItem';

export default class TourList extends Component {
  renderTourDates() {
    if (this.props.gigs) {
      const classname = 'Rtable-row'
      return (
        this.props.gigs.map((gig, index) => <TourListItem gig={gig} className={index % 2 === 0 ? 'Rtable-row is-striped' : 'Rtable-row'} />)
      )
    }
    return (
      <h1>No Shows Scheduled</h1>
    )
  }
  render() {
    return (
      <div className="wrapper">
        <div className="Rtable Rtable--5cols Rtable--collapse">
          <div className="Rtable-row Rtable-row--head">
            <div className="Rtable-cell date-cell column-heading">Date</div>
            <div className="Rtable-cell topic-cell column-heading">Venue</div>
            <div className="Rtable-cell access-link-cell column-heading">Location</div>
            <div className="Rtable-cell replay-link-cell column-heading">Tickets</div>
          </div>

          {this.renderTourDates()}

        </div>
      </div>
    );
  }
}