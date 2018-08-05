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
      <div class="wrapper">
        <div class="Rtable Rtable--5cols Rtable--collapse">
          <div class="Rtable-row Rtable-row--head">
            <div class="Rtable-cell date-cell column-heading">Date</div>
            <div class="Rtable-cell topic-cell column-heading">Venue</div>
            <div class="Rtable-cell access-link-cell column-heading">Location</div>
            <div class="Rtable-cell replay-link-cell column-heading">Tickets</div>
          </div>

          {this.renderTourDates()}

        </div>
      </div>
    );
  }
}