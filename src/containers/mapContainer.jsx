import React, { Component } from 'react';
import CounterBtn from '../components/map/counterBtn';
import Counter from '../components/map/counter';
import Sidebar from '../components/map/sidebar';
import VictimSlotsWrapper from '../components/map/victimSlotsWrapper';

class MapContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      bloodCounter: 0,
    }
  }

  HandleCollectBloodClick  = () => {
    this.setState({ bloodCounter: this.state.bloodCounter + 1 });
  }

  render() {
    return (
      <div className="map__wrapper">
        <Sidebar />
        <VictimSlotsWrapper SlotItemsCount = { 8 }/>
        <CounterBtn HandleCollectBloodClick = { this.HandleCollectBloodClick } />
        <Counter CurrentCounter = { this.state.bloodCounter } />
      </div>
    );
  }
}

export default MapContainer;