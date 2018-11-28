import React, { Component } from 'react';
import CounterBtn from '../components/map/counterBtn';
import Counter from '../components/map/counter';
import Sidebar from '../components/map/sidebar';
import VictimSlotsWrapper from '../components/map/victimSlotsWrapper';
import { CONFIG } from '../config/config';

class MapContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hunting: false,
      timeToFinishHunting: 0,
      bloodCounter: 0,
      bloodPerClick: 1,
      victims: [CONFIG.defaultVictim],
      victimSlotsCount: 8,
    }
  }

  HandleCollectBloodClick  = () => {
    this.setState({ bloodCounter: this.state.bloodCounter + this.state.bloodPerClick });
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
          victims: [...this.state.victims, {name: 'Вонючий Билли', status: '', age: 24}],
        });
        this.UpdateBloodFormula();
        return clearInterval(huntingTimer);
      }
      this.setState({timeToFinishHunting: this.state.timeToFinishHunting - 1000});
    }, 1000);
  }

  UpdateBloodFormula() {
    this.setState({
      bloodPerClick: this.state.bloodPerClick + 5 * (this.state.victims.length + 1),
    });
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