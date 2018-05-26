import React, {Component} from 'react';
import Hero from '../components/Hero';
import SpotifyPlayer from 'react-spotify-player';

const image = require('../assets/oldsporttest.png')

const size = {
  width: '100%',
  height: 300
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

export default class Landing extends Component {
  scrollTo(element, to, duration) {
    if (duration <= 0) 
      return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) 
        return;
      window.scrollTo(element, to, duration - 10);
    }, 10);
  }
  render() {
    return (
      <div id="top">
        <Hero min={'-20%'} max={'20%'} image={require('../assets/banner.jpg')}></Hero>
        <div id="about">
          <Hero
            id="about"
            min={'-20%'}
            max={'20%'}
            image={require('../assets/Old_Sport_19.jpg')}>
            <div
              style={{
              width: '100vw',
              height: '100vh',
              backgroundColor: 'black',
              opacity: 0.75,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h2
                style={{
                color: 'white',
                fontSize: 30,
                zIndex: 10
              }}>BIO</h2>
              <p
                style={{
                color: 'white',
                margin: 75
              }}>
                OLD_SPORT is a 5-piece soul rock band based out of L.A. with roots to NYC.
                Formed to create the soundtrack for the award winning independent film
                ELSEWHERE, they have since played all over the east and west coasts headlining
                such legendary clubs as The Troubadour in L.A. and The Mercury Lounge in
                Manhattan. They are on the heals of a second successful east coast tour and are
                currently in the studio recording their debut album with Steve Kille of Dead
                Meadow. Influences include Spoon, The Strokes, Elvis Costello, Arcade Fire and
                The E Street Band.
              </p>
            </div>
          </Hero>
        </div>
        <div
          id="music"
          style={{
          padding: 50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2
            style={{
            color: 'white',
            fontSize: 30,
            zIndex: 10
          }}>
            MUSIC
          </h2>
          <div>
            <SpotifyPlayer // All Old Sport tracks
              // uri="https://open.spotify.com/artist/3qqupZtrYex2noc6gi1iWW"
              // Burning Cigarettes single
              uri="https://open.spotify.com/track/6n1Fkt4IADZBC4LWCAR7ci" size={size} view={view} theme={theme}/>
          </div>
        </div>
        <Hero min={'-20%'} max={'20%'} image={require('../assets/Old_Sport_14.jpg')}></Hero>
        <div
          id="contact"
          style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
          <p style={{
            color: 'white'
          }}>EMAIL:
            <a>old_sport_music@gmail.com</a>
          </p>
          <a
            href="#"
            style={{
            margin: 20
          }}
            onClick={() => {
            const elmnt = document.getElementById("top");
            this.scrollTo(document.body, elmnt.offsetTop, 2000)
          }}>
            Back to the top
          </a>
        </div>
      </div>
    )
  }
}
