import React from 'react';
import { Element } from 'react-scroll';
/* import Navigation from './components/Navigation/Navigation.js'; */
import Header from './components/Header/Header.js';
import EventDetails from './components/EventDetails/EventDetails.js';
import Gallery from './components/Gallery/Gallery.js';
import EndCard from './components/EndCard/EndCard.js';
import Countdown from './components/Countdown/Countdown.js';
import './App.css';

export default function App() {
  return (
    <div className="app">
      {/* {<Navigation /> } */}
      <Element name="home">
        <Header />
      </Element>
     <Element name="event">
        <EventDetails />
      </Element>
     <Element name="countdown">
        <Countdown />
      </Element>
     <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="end">
        <EndCard />
      </Element>
    </div>
  );
}