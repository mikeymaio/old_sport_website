import React, { Component } from 'react';
import TourListItem from './TourListItem';

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.preventScrollPropagation = this.preventScrollPropagation.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }


  preventScrollPropagation(e) {
    e.stopPropagation();
  }

  onMouseEnter() {
    this[`list${this.props.listIndex}`].focus();

    this[`list${this.props.listIndex}`].addEventListener('DOMMouseScroll', this.preventScrollPropagation)
    this[`list${this.props.listIndex}`].addEventListener('mousewheel', this.preventScrollPropagation)
    this[`list${this.props.listIndex}`].addEventListener('mouseover', this.preventScrollPropagation)
    this[`list${this.props.listIndex}`].addEventListener('keydown', this.preventScrollPropagation)
  }

  onMouseLeave() {
    this[`list${this.props.listIndex}`].blur();

    this[`list${this.props.listIndex}`].removeEventListener('DOMMouseScroll', this.preventScrollPropagation)
    this[`list${this.props.listIndex}`].removeEventListener('mousewheel', this.preventScrollPropagation)
    this[`list${this.props.listIndex}`].removeEventListener('mouseover', this.preventScrollPropagation)
    this[`list${this.props.listIndex}`].removeEventListener('keydown', this.preventScrollPropagation)
  }



  renderTourDates() {
    if (this.props.gigs) {
      const classname = 'Rtable-row'
      return (
        this.props.gigs.map((gig, index) => <TourListItem gig={gig} className={index % 2 === 0 ? 'Rtable-row is-striped' : 'Rtable-row'} />)
      )
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <h1>No Shows Scheduled</h1>
      </div>
    )
  }
  render() {
    return (
      <div className="wrapper tour-list__wrapper" tabIndex="0" ref={node => this[`list${this.props.listIndex}`] = node}
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave}
      >
        <div className="Rtable Rtable--5cols Rtable--collapse tourlist">
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