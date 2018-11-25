import React, { Component } from 'react';
import CounterBtn from '../components/map/counterBtn';
import Counter from '../components/map/counter';
import Sidebar from '../components/map/sidebar';
import VictimSlotsWrapper from '../components/map/victimSlotsWrapper';

class MapContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hunting: false,
      timeToFinishHunting: 0,
      bloodCounter: 0,
      victims: [],
      victimSlotsCount: 8,
    }
  }

  HandleCollectBloodClick  = () => {
    this.setState({ bloodCounter: this.state.bloodCounter + 1 });
  }

  HandleGoHuntingClick = () => {
    this.setState({ 
      hunting: true,
      timeToFinishHunting: 2000,
    });
    
    let huntingTimer = setInterval(() => {
      if (this.state.timeToFinishHunting === 0) {
        this.setState({
          hunting: false,
          victims: [...this.state.victims, {name: 'Лакута', age: 3}],
        });
        return clearInterval(huntingTimer);
      }
      this.setState({timeToFinishHunting: this.state.timeToFinishHunting - 1000});
    }, 1000);
  }

  render() {
    return (
      <div className="map__wrapper">
        <Sidebar 
          HandleGoHuntingClick = { this.HandleGoHuntingClick } 
          TimeToFinishHunting = { this.state.timeToFinishHunting } 
          HuntingState = { this.state.hunting } 
          IsReachMaxCount = { this.state.victims.length === this.state.victimSlotsCount }
        />
        <VictimSlotsWrapper SlotItemsCount = { this.state.victimSlotsCount } Victims = { this.state.victims }/>
        <CounterBtn HandleCollectBloodClick = { this.HandleCollectBloodClick } HuntingState = { this.state.hunting }/>
        <Counter CurrentCounter = { this.state.bloodCounter } />
      </div>
    );
  }
}

export default MapContainer;