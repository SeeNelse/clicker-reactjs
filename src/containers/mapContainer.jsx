import React, { Component } from 'react';
import MapCounterBtn from '../components/map/mapCounterBtn';
import MapCounter from '../components/map/mapCounter';

class MapContainer extends Component {
  render() {
    return (
      <div className="map__wrapper">
        <MapCounterBtn></MapCounterBtn>
        <MapCounter></MapCounter>
      </div>
    );
  }
}

export default MapContainer;