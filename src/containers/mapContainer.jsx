import React, { Component } from 'react';
import CounterBtn from '../components/map/counterBtn';
import Counter from '../components/map/counter';
import Sidebar from '../components/map/sidebar';
  import GoHuntingBtn from '../components/map/goHuntingBtn';
  import Upgrades from '../components/map/upgrades';
import VictimSlotsWrapper from '../components/map/victimSlotsWrapper';
import { CONFIG } from '../config/config';


class MapContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hunting: false,
      timeToFinishHunting: 0,
      bloodCounter: 50, // кол-во крови
      bloodPerClick: 1, // кровь за клик
      victims: [CONFIG.defaultVictim],
      victimSlotsCount: 8,
      currentVictimMenu: null,
      autoCollectBlood: 0,
    }
  }

  HandleCollectBloodClick  = () => {
    this.setState({ bloodCounter: this.state.bloodCounter + this.state.bloodPerClick });
    this.SuckBloodFromAllVictims();
  }

  // Функция охоты
  HandleGoHuntingClick = () => {
    this.setState({ 
      hunting: true,
      timeToFinishHunting: 2000,
    });
    
    let huntingTimer = setInterval(() => {
      if (this.state.timeToFinishHunting === 0) {
        this.setState({
          hunting: false,
          victims: [...this.state.victims, {name: 'Вонючий Пётр', age: 24, blood: 2000, bloodPerTick: 1,}],
        });
        this.UpdateBloodFormula();
        return clearInterval(huntingTimer);
      }
      this.setState({timeToFinishHunting: this.state.timeToFinishHunting - 1000});
    }, 1000);
  }

  // При добавлении новой жертвы пересчитать кровь за клик
  UpdateBloodFormula() {
    let sum = this.state.victims.reduce((sum, current) => {
      return sum + current.bloodPerTick;
    }, 0);
    this.setState({
      bloodPerClick: sum,
    });
  }

  // Высосать кровь с каждого
  SuckBloodFromAllVictims(autoCollect) {
    let victims = this.state.victims.map((item) => {
      item.blood = item.blood - (autoCollect ? this.state.autoCollectBlood : item.bloodPerTick);
      return item;
    });
    this.setState({
      victims: victims,
    })
  }

  // Открытие меню в сайдбаре
  OpenVictimUpgradeMenu = (victimIndex) => {
    this.setState((state) => ({
      currentVictimMenu: victimIndex === state.currentVictimMenu ? null : victimIndex,
    }));
  }

  // Применение апгрейда
  UpgradeApply = (upgradeItem) => {
    if (upgradeItem.price > this.state.bloodCounter) {
      return;
    }
    if (upgradeItem.type === 'increaseClick') {
      this.HandleIncreaseClickType(upgradeItem);
    }
    if (upgradeItem.type === 'autoCollect') {
      this.HandleAutoCollectType(upgradeItem);
    }
    this.UpdateBloodFormula();
  }

  HandleIncreaseClickType(upgradeItem) {
    let victims = [...this.state.victims];
    victims[this.state.currentVictimMenu].bloodPerTick = upgradeItem.bloodPerTick;
    this.setState((state) => ({
      bloodCounter: state.bloodCounter - upgradeItem.price,
      victims: victims,
    }));
  }

  HandleAutoCollectType(upgradeItem) {
    this.setState((state) => ({
      bloodCounter: state.bloodCounter - upgradeItem.price,
      autoCollectBlood: state.autoCollectBlood + upgradeItem.bloodPerTick,
    }));
    setInterval(() => {
      this.setState((state) => ({
        bloodCounter: state.bloodCounter + state.autoCollectBlood * this.state.victims.length,
      }));
      this.SuckBloodFromAllVictims(true);
    }, upgradeItem.duration);
  }

  render() {
    return (
      <div className="map__wrapper">
        <Sidebar>
          <GoHuntingBtn 
            HandleGoHuntingClick = { this.HandleGoHuntingClick } 
            TimeToFinishHunting = { this.state.timeToFinishHunting } 
            HuntingState = { this.state.hunting } 
            IsReachMaxCount = { this.state.victims.length === this.state.victimSlotsCount }
          />
          <Upgrades CurrentVictimMenu = { this.state.currentVictimMenu } UpgradeApply = { this.UpgradeApply }/>
        </Sidebar>
        <VictimSlotsWrapper 
          OpenVictimUpgradeMenu = { this.OpenVictimUpgradeMenu } 
          SlotItemsCount = { this.state.victimSlotsCount } 
          Victims = { this.state.victims }
        />
        <CounterBtn HandleCollectBloodClick = { this.HandleCollectBloodClick } HuntingState = { this.state.hunting }/>
        <Counter CurrentCounter = { this.state.bloodCounter } />
      </div>
    );
  }
}

export default MapContainer;