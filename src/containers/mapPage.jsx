import React, { Component } from 'react';
import MapContainer from './mapContainer';

class MapPage extends Component {
  render() {
    return (
      <div className="map-main">
        <MapContainer></MapContainer>
      </div>
    );
  }
}

export default MapPage;