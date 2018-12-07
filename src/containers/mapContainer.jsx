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
      bloodCounter: 100, // кол-во крови
      bloodPerClick: 1, // кровь за клик
      victims: [CONFIG.defaultVictim],
      victimSlotsCount: 8,
      currentVictimMenu: null,
      autoCollectBlood: 0,
      victimsTypes: {
        bloodPerClickType1: 1,
        bloodPerClickType2: 1,
      },
      upgradeCouner: 0,
    }
  }

  SuckBloodFromAllVictims  = (click) => {
    let allVictimsDamage = 0;
    let victims = this.state.victims.map((item) => {
      allVictimsDamage = allVictimsDamage + (click ? this.state.victimsTypes['bloodPerClickType'+item.type] : this.state.autoCollectBlood);
      item.blood = item.blood - (click ? this.state.victimsTypes['bloodPerClickType'+item.type] : this.state.autoCollectBlood);
      return item;
      
    });
    this.setState((state) => ({
      victims: victims,
      bloodCounter: state.bloodCounter + allVictimsDamage,
    }));
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
          victims: [...this.state.victims, {name: 'Вонючий Пётр', age: 24, blood: 2000, type: 1,}],
        });
        return clearInterval(huntingTimer);
      }
      this.setState({timeToFinishHunting: this.state.timeToFinishHunting - 1000});
    }, 1000);
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
      this.HandleIncreaseClickType(upgradeItem, upgradeItem.forVictimType);
    }
    if (upgradeItem.type === 'autoCollect') {
      this.HandleAutoCollectType(upgradeItem);
    }
  }

  // функция апгрейда на увеличение добычи по клику
  HandleIncreaseClickType(upgradeItem, type) {
    let tempVictimsTypes = Object.assign({}, this.state.victimsTypes);
    tempVictimsTypes['bloodPerClickType'+type] = upgradeItem.bloodPerTick;
    this.setState((state) => ({
      bloodCounter: state.bloodCounter - upgradeItem.price,
      victimsTypes: tempVictimsTypes,
    }), () => {
      this.updateUpgrades(upgradeItem);
    });
  }

  // функция апгрейда автодобычи
  HandleAutoCollectType(upgradeItem) {
    this.setState((state) => ({
      bloodCounter: state.bloodCounter - upgradeItem.price,
      autoCollectBlood: state.autoCollectBlood + upgradeItem.bloodPerTick,
    }));
    setInterval(() => {
      this.setState((state) => ({
        bloodCounter: state.bloodCounter + state.autoCollectBlood * this.state.victims.length,
      }));
      this.SuckBloodFromAllVictims(false)
    }, upgradeItem.duration);
  }

  updateUpgrades(upgradeItem) {
    // upgradeItem.updateLevel(upgradeItem);
    upgradeItem.level = upgradeItem.level + 1;
    upgradeItem.price = upgradeItem.price * 3;
    upgradeItem.bloodPerTick = upgradeItem.bloodPerTick * 2;
    this.setState((state) => ({
      upgradeCouner: state.upgradeCouner++,
    }));
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
        <CounterBtn SuckBloodFromAllVictims = { this.SuckBloodFromAllVictims } HuntingState = { this.state.hunting }/>
        <Counter CurrentCounter = { this.state.bloodCounter } />
      </div>
    );
  }
}

export default MapContainer;