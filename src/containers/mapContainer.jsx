import React, { Component } from 'react';
import CounterBtn from '../components/map/counterBtn';
import Counter from '../components/map/counter';

class MapContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      bloodCounter: 0,
    }
  }

  HandleCollectBloodClick  = () => {
    console.log(1)
    this.setState({ bloodCounter: this.state.bloodCounter + 1 });
  }


  render() {
    return (
      <div className="map__wrapper">
        <CounterBtn HandleCollectBloodClick = { this.HandleCollectBloodClick }></CounterBtn>
        <Counter CurrentCounter = { this.state.bloodCounter }></Counter>
      </div>
    );
  }
}

export default MapContainer;