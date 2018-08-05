import React, { Component } from 'react';
import Card from '../components/shared/Card';

export default class About extends Component {
  componentDidMount() {
    // listing vars here so they're in the global scope
    let cards;
    let nCards
    let cover;
    let openContent;
    let openContentText
    let pageIsOpen = false;
    let openContentImage;
    let closeContent;
    let windowWidth;
    let windowHeight;
    let currentCard;

    // initiate the process
    init();

    function init() {
      resize();
      selectElements();
      attachListeners();
    }

    // select all the elements in the DOM that are going to be used
    function selectElements() {
      cards = document.getElementsByClassName('card'),
      nCards = cards.length,
      cover = document.getElementById('cover'),
      openContent = document.getElementById('open-content'),
      openContentText = document.getElementById('open-content-text'),
      openContentImage = document.getElementById('open-content-image')
      closeContent = document.getElementById('close-content');
    }

    /* Attaching three event listeners here:
      - a click event listener for each card
      - a click event listener to the close button
      - a resize event listener on the window
    */
    function attachListeners() {
      for (var i = 0; i < nCards; i++) {
        attachListenerToCard(i);
      }
      closeContent.addEventListener('click', onCloseClick);
      window.addEventListener('resize', resize);
    }

    function attachListenerToCard(i) {
      cards[i].addEventListener('click', function(e) {
        var card = getCardElement(e.target);
        onCardClick(card, i);
      })
    }

    /* When a card is clicked */
    function onCardClick(card, i) {
      // set the current card
      currentCard = card;
      // add the 'clicked' class to the card, so it animates out
      currentCard.className += ' clicked';
      // animate the card 'cover' after a 500ms delay
      setTimeout(function() {animateCoverUp(currentCard)}, 500);
      // animate out the other cards
      animateOtherCards(currentCard, true);
      // add the open class to the page content
      openContent.className += ' open';
    }

    /*
    * This effect is created by taking a separate 'cover' div, placing
    * it in the same position as the clicked card, and animating it to
    * become the background of the opened 'page'.
    * It looks like the card itself is animating in to the background,
    * but doing it this way is more performant (because the cover div is
    * absolutely positioned and has no children), and there's just less
    * having to deal with z-index and other elements in the card
    */
    function animateCoverUp(card) {
      // get the position of the clicked card
      var cardPosition = card.getBoundingClientRect();
      // get the style of the clicked card
      var cardStyle = getComputedStyle(card);
      setCoverPosition(cardPosition);
      setCoverColor(cardStyle);
      scaleCoverToFillWindow(cardPosition);
      // update the content of the opened page
      openContentText.innerHTML = '<h1>'+card.children[2].textContent+'</h1>'+paragraphText;
      openContentImage.src = card.children[1].src;
      setTimeout(function() {
        // update the scroll position to 0 (so it is at the top of the 'opened' page)
        window.scroll(0, 0);
        // set page to open
        pageIsOpen = true;
      }, 300);
    }

    function animateCoverBack(card) {
      var cardPosition = card.getBoundingClientRect();
      // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
      setCoverPosition(cardPosition);
      scaleCoverToFillWindow(cardPosition);
      // animate scale back to the card size and position
      cover.style.transform = 'scaleX('+1+') scaleY('+1+') translate3d('+(0)+'px, '+(0)+'px, 0px)';
      setTimeout(function() {
        // set content back to empty
        openContentText.innerHTML = '';
        openContentImage.src = '';
        // style the cover to 0x0 so it is hidden
        cover.style.width = '0px';
        cover.style.height = '0px';
        pageIsOpen = false;
        // remove the clicked class so the card animates back in
        currentCard.className = currentCard.className.replace(' clicked', '');
      }, 301);
    }

    function setCoverPosition(cardPosition) {
      // style the cover so it is in exactly the same position as the card
      cover.style.left = cardPosition.left + 'px';
      cover.style.top = cardPosition.top + 'px';
      cover.style.width = cardPosition.width + 'px';
      cover.style.height = cardPosition.height + 'px';
    }

    function setCoverColor(cardStyle) {
      // style the cover to be the same color as the card
      // cover.style.backgroundColor = cardStyle.backgroundColor;
      cover.style.backgroundColor = 'rgba(33, 33, 33, 0.7)';
    }

    function scaleCoverToFillWindow(cardPosition) {
      // calculate the scale and position for the card to fill the page,
      var scaleX = windowWidth / cardPosition.width;
      var scaleY = windowHeight / cardPosition.height;
      var offsetX = (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
      var offsetY = (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
      // set the transform on the cover - it will animate because of the transition set on it in the CSS
      cover.style.transform = 'scaleX('+scaleX+') scaleY('+scaleY+') translate3d('+(offsetX)+'px, '+(offsetY)+'px, 0px)';
    }

    /* When the close is clicked */
    function onCloseClick() {
      // remove the open class so the page content animates out
      openContent.className = openContent.className.replace(' open', '');
      // animate the cover back to the original position card and size
      animateCoverBack(currentCard);
      // animate in other cards
      animateOtherCards(currentCard, false);
    }

    function animateOtherCards(card, out) {
      var delay = 100;
      for (var i = 0; i < nCards; i++) {
        // animate cards on a stagger, 1 each 100ms
        if (cards[i] === card) continue;
        if (out) animateOutCard(cards[i], delay);
        else animateInCard(cards[i], delay);
        delay += 100;
      }
    }

    // animations on individual cards (by adding/removing card names)
    function animateOutCard(card, delay) {
      setTimeout(function() {
        card.className += ' out';
      }, delay);
    }

    function animateInCard(card, delay) {
      setTimeout(function() {
        card.className = card.className.replace(' out', '');
      }, delay);
    }

    // this function searches up the DOM tree until it reaches the card element that has been clicked
    function getCardElement(el) {
      if (el.className.indexOf('card ') > -1) return el;
      else return getCardElement(el.parentElement);
    }

    // resize function - records the window width and height
    function resize() {
      if (pageIsOpen) {
        // update position of cover
        var cardPosition = currentCard.getBoundingClientRect();
        setCoverPosition(cardPosition);
        scaleCoverToFillWindow(cardPosition);
      }
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    }

    var paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur elementum fringilla. Praesent id ullamcorper massa, in scelerisque sem. Nulla porta, arcu sit amet suscipit consequat, elit sem ornare turpis, eu aliquet nulla ligula at lorem. Suspendisse nec massa quis libero tincidunt convallis non non risus. Praesent ut dui viverra odio condimentum auctor. Proin sit amet luctus turpis. Suspendisse faucibus fermentum tortor ac accumsan.

    Phasellus vulputate dui vel libero vehicula, a commodo sem volutpat. Pellentesque semper diam sapien, at ullamcorper nulla ultrices sit amet. Quisque et justo lacinia, tincidunt urna id, elementum risus. Nam non nunc vel dui iaculis fermentum. Aliquam semper nisl et mauris commodo auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vestibulum faucibus diam id auctor. Aliquam tincidunt fringilla tellus nec ornare. Duis imperdiet magna a lectus blandit, vitae feugiat velit pellentesque. Quisque maximus est dolor, non hendrerit sapien euismod non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ante enim, finibus eu tincidunt et, scelerisque vel sapien. Praesent ut consectetur justo, vitae convallis ipsum. Proin euismod erat sed libero fermentum commodo.

    Pellentesque nec nisi tortor. Vestibulum hendrerit lectus non eros euismod cursus. Fusce imperdiet iaculis porta. Pellentesque malesuada tellus viverra, tempus purus eget, sodales orci. Vivamus ornare sollicitudin sapien vehicula accumsan. Morbi at venenatis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non vulputate lorem, vitae lacinia felis. Aliquam pulvinar massa ornare tristique congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum leo mi, volutpat vitae gravida eget, feugiat vel odio. Maecenas eleifend finibus orci sagittis euismod. Nam lorem justo, lobortis et dictum ut, rhoncus quis nunc. Praesent eget justo magna.`;
  }
  render() {
  return (
    <div className="container">
      <div className="card__row column-0">
          <Card
            className="card card-color-0"
            image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg'
            name="Nick Vergara"
            instrument="Vocals / Guitar"
          />
          <Card
            className="card card-color-1"
            image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg'
            name="Brian Williams"
            instrument="Keys"
          />
      </div>
      <div className="card__row column-1">
          <Card
            className="card card-color-2"
            image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg'
            name="Mikey Maio"
            instrument="Strings"
          />
          <Card
            className="card card-color-0"
            image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg'
            name="Andrew Gaul"
            instrument="Saxophone"
          />
          <Card
            className="card card-color-3"
            image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg'
            name="Keith Roenke"
            instrument="Drums"
          />
      </div>

        <div id="cover" className="cover"></div>
        <div id="open-content" className="open-content">
          <div href="#" id="close-content" className="close-content"><span className="x-1"></span><span className="x-2"></span></div>
          <img id="open-content-image" src="" />
          <div className="text" id="open-content-text">
          </div>
        </div>
      </div>
      );
    }
};
