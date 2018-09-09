import React, { Component } from 'react';
import TourListItem from './TourListItem';
import $ from 'jquery'

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.preventScrollPropagation = this.preventScrollPropagation.bind(this);
  }
  // componentDidMount() {
  //     // Example:

  //     if (this.list) {
  //       console.log('THIS.LIST!')
  //       this[`list${this.props.listIndex}`].addEventListener('click', this.preventScrollPropagation)
  //       this[`list${this.props.listIndex}`].addEventListener('DOMMouseScroll', this.preventScrollPropagation)
  //       this[`list${this.props.listIndex}`].addEventListener('mousewheel', this.preventScrollPropagation)
  //       this[`list${this.props.listIndex}`].addEventListener('mouseover', this.preventScrollPropagation)

  //       this[`list${this.props.listIndex}`].addEventListener('onkeydown', this.preventScrollPropagation)
  //       this[`list${this.props.listIndex}`].addEventListener('keydown', () => console.log('KEYDOWN'));
  //     // $(document).on('keydown', function (e) {
  //     //   console.log(e.which)
  //     //   if (e.which === 39 || e.which === 40)
  //     //     navigateRight();
  //     //   if (e.which === 37 || e.which === 38)
  //     //     navigateLeft();
  //     //   }
  //     // );

  //     }
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps.slideIndex)
  //   if (nextProps.slideIndex === 4) {
  //     this[`list${this.props.listIndex}`].addEventListener('click', this.preventScrollPropagation)
  //     this[`list${this.props.listIndex}`].addEventListener('DOMMouseScroll', this.preventScrollPropagation)
  //     this[`list${this.props.listIndex}`].addEventListener('mousewheel', this.preventScrollPropagation)
  //     this[`list${this.props.listIndex}`].addEventListener('mouseover', this.preventScrollPropagation)

  //     this[`list${this.props.listIndex}`].addEventListener('onkeydown', this.preventScrollPropagation)
  //     this[`list${this.props.listIndex}`].addEventListener('keydown', () => console.log('KEYDOWN'));
  //     this[`list${this.props.listIndex}`].addEventListener('mouseover', e => {
  //       $(this[`list${this.props.listIndex}`]).focus();
  //       this.preventScrollPropagation(e)
  //     })
  //     this[`list${this.props.listIndex}`].addEventListener('mouseout', e => {
  //       $(this[`list${this.props.listIndex}`]).blur();
  //       // this.preventScrollPropagation(e)
  //     })
  //   } else {
  //     this[`list${this.props.listIndex}`].removeEventListener('click', this.preventScrollPropagation)
  //     this[`list${this.props.listIndex}`].removeEventListener('DOMMouseScroll', this.preventScrollPropagation)
  //     this[`list${this.props.listIndex}`].removeEventListener('mousewheel', this.preventScrollPropagation)
  //     this[`list${this.props.listIndex}`].removeEventListener('mouseover', this.preventScrollPropagation)

  //     this[`list${this.props.listIndex}`].removeEventListener('onkeydown', this.preventScrollPropagation)
  //     this[`list${this.props.listIndex}`].removeEventListener('keydown', () => console.log('KEYDOWN'));
  //     this[`list${this.props.listIndex}`].removeEventListener('mouseover', this.preventScrollPropagation)
  //   }
  // }

  preventScrollPropagation(e) {
    console.log(e)
    // const scrollTop = this.scrollTop
    // const scrollHeight = this.scrollHeight
    // const height = parseFloat(window.getComputedStyle(this, null).getPropertyValue('height'))
    // const delta = e.type == 'DOMMouseScroll' ? (e.detail * -40) : e.wheelDelta
    // const up = delta > 0

    const prevent = () => {
      e.stopPropagation()
      // e.preventDefault()
      e.returnValue = false
      return false
    }

    // e.stopPropagation()

    prevent()

    // Scrolling down, but this will take us past the bottom.
    // if (!up && -delta > scrollHeight - height - scrollTop) {
    //   console.log('PREVENTING HORIZONTAL SCROLL, LINE 69')
    //   prevent()
    //   return this.scrollTop = scrollHeight
    //   // return prevent()

    // // Scrolling up, but this will take us past the top.
    // } else if (up && delta > scrollTop) {
    //   console.log('PREVENTING HORIZONTAL SCROLL, LINE 76')
    //   prevent()
    //   return this.scrollTop = 0
    //   // return prevent()
    // }
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
      <div className="wrapper tour-listwrapper" tabIndex="0" ref={node => this[`list${this.props.listIndex}`] = node}
      onMouseEnter={() => {
        console.log('ON MOUSENTER WORKS!')
        $(this[`list${this.props.listIndex}`]).focus();
      }}
      onMouseLeave={() => {
        console.log('ON MOUSENTER WORKS!')
        $(this[`list${this.props.listIndex}`]).blur();
      }}
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