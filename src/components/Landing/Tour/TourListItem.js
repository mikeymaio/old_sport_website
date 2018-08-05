import React, { Component } from 'react';
import format from 'date-fns/format'

export default class TourListItem extends Component {
  render() {
    const { gig, className } = this.props;
    return (
      <div className={className}>
      <div className="Rtable-cell date-cell">
        <div className="Rtable-cell--heading">Date</div>
        <div className="Rtable-cell--content date-content"><span className="webinar-date">{format(gig.start.date, 'MMMM DD, YYYY')}</span><br />{format(gig.start.datetime, 'hh:mm a')}</div>
      </div>
      <div className="Rtable-cell topic-cell">
      <div className="Rtable-cell--heading">Venue</div>
        <div className="Rtable-cell--content title-content"><a className="venue__link" href={gig.venue.uri} target="_blank">{gig.venue.displayName}</a></div>
      </div>
      <div className="Rtable-cell access-link-cell">
        <div className="Rtable-cell--heading">Location</div>
        <div className="Rtable-cell--content access-link-content">{gig.location.city}</div>
      </div>
      <div className="Rtable-cell replay-link-cell">
        <div className="Rtable-cell--heading">Tickets</div>
        <div><a className="ticket__link" href={gig.uri} target="_blank">{gig.uri.length > 12 ? `${gig.uri.match(/.{1,11}/g)[1]}...` : gig.uri}</a></div>
      </div>
    </div>
    )
  }
}