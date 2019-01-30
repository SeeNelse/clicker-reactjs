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
      autoHunting: false,
      butcher: false,
      butcherBooty: 0,
      timeToFinishHunting: 0,
      bloodCounter: 100, // кол-во крови
      victims: [CONFIG.defaultVictim],
      victimSlotsCount: 8,
      currentVictimMenu: null,
      autoCollectBlood: 0,
      victimMeat: 0,
      victimsTypes: {
        bloodPerClickType1: 1,
        bloodPerClickType2: 1,
      },
      upgradeCouner: 0,
    }
  }

  SuckBloodFromAllVictims = (click) => {
    let allVictimsDamage = 0;
    let victims = this.state.victims.filter((item, i) => {
      if (item.blood < this.state.victimsTypes['bloodPerClickType'+item.type]) { // если дамага больше, чем хп у жертвы
        allVictimsDamage = allVictimsDamage + item.blood;
        this.setState((state) => ({
          victimMeat: this.state.victimMeat + item.meat + this.state.butcherBooty,
        }), () => {
          // console.log(this.state.victimMeat);
        });;
      } else {
        allVictimsDamage = allVictimsDamage + (click ? this.state.victimsTypes['bloodPerClickType'+item.type] : this.state.autoCollectBlood);
      }
      item.blood = item.blood - (click ? this.state.victimsTypes['bloodPerClickType'+item.type] : this.state.autoCollectBlood);
      if (item.blood === 0) {
        this.setState((state) => ({ // добавить мясо 
          victimMeat: this.state.victimMeat + item.meat + this.state.butcherBooty,
        }));
      }
      return item.blood > 0;
    });
    this.setState((state) => ({
      victims: victims,
      bloodCounter: state.bloodCounter + allVictimsDamage,
    }));
  }


  // Функция охоты
  HandleGoHuntingClick = (notAutoHunting) => {
    if (this.state.victims.length === this.state.victimSlotsCount || this.state.hunting) {
      return;
    }
    if (notAutoHunting) {
      this.setState({ 
        hunting: true,
        timeToFinishHunting: 2000,
      });
    } else {
      this.setState({ 
        autoHunting: true,
        timeToFinishHunting: 2000,
      });
    }
    
    let huntingTimer = setInterval(() => {
      if (this.state.timeToFinishHunting === 0) {
        this.setState({
          hunting: false,
          autoHunting: false,
          victims: [...this.state.victims, {name: 'Вонючий Пётр', iconUrl: 'images/victims/victim-type-1.png', age: 24, blood: 200, type: 1, meat: 1,}],
        });
        return clearInterval(huntingTimer);
      }
      this.setState({timeToFinishHunting: this.state.timeToFinishHunting - 1000});
    }, 1000);
  }

  // Открытие меню в сайдбаре
  OpenVictimUpgradeMenu = (event, victimIndex) => {
    while (event.target !== document.querySelector('.map-top')) {
      if (event.target.classList.contains('victim__man')) {
        let key = +event.target.dataset.key
        this.setState((state) => ({
          currentVictimMenu: key === state.currentVictimMenu ? null : key,
        }));
        return;
      } else {
        this.setState((state) => ({
          currentVictimMenu: null
        }));
      }
      event.target = event.target.parentNode;
    }
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
    if (upgradeItem.type === 'autoHunting') {
      this.AutoHutnig(upgradeItem);
    }
    if (upgradeItem.type === 'meatExtraction') {
      this.MeatExtraction(upgradeItem);
    }
  }

  // Функция апгрейда на увеличение добычи по клику
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

  // Функция апгрейда автодобычи крови, таймер автодобычи
  HandleAutoCollectType(upgradeItem) {
    this.setState((state) => ({
      bloodCounter: state.bloodCounter - upgradeItem.price,
      autoCollectBlood: upgradeItem.bloodPerTick,
    }), () => {
      this.updateUpgrades(upgradeItem);
    });
    clearInterval(this.autoCollectTimer);
    this.autoCollectTimer = setInterval(() => {
      this.SuckBloodFromAllVictims(false)
    }, upgradeItem.duration);
  }

  // Функция апгрейда автоохоты
  AutoHutnig = (upgradeItem) => {
    this.setState((state) => ({
      bloodCounter: state.bloodCounter - upgradeItem.price,
    }), () => {
      this.updateUpgrades(upgradeItem);
    });
    clearInterval(this.autoHutningTimer);
    this.autoHutningTimer = setInterval(() => {
      this.HandleGoHuntingClick(false);
    }, upgradeItem.duration);
  }

  // Функция апгрейда мясника
  MeatExtraction = (upgradeItem) => {
    this.setState((state) => ({
      bloodCounter: state.bloodCounter - upgradeItem.price,
      butcher: true,
      butcherBooty: state.butcherBooty + upgradeItem.butcherBooty,
    }), () => {
      this.updateUpgrades(upgradeItem);
    });

  }

  // Функция обновления апгрейда
  updateUpgrades(upgradeItem) {
    upgradeItem.level = upgradeItem.level + 1;
    upgradeItem.price = upgradeItem.price * 3;
    upgradeItem.bloodPerTick = upgradeItem.bloodPerTick * 2;
    this.setState((state) => ({
      upgradeCouner: state.upgradeCouner++,
    }));
  }

  render() {
    return (
      <div className="map-wrapper">
        <div className="map-top">
          <Sidebar>
            <Upgrades 
              CurrentVictimMenu = { this.state.currentVictimMenu }
              UpgradeApply = { this.UpgradeApply }
            />
          </Sidebar>
          <VictimSlotsWrapper 
            OpenVictimUpgradeMenu = { this.OpenVictimUpgradeMenu } 
            SlotItemsCount = { this.state.victimSlotsCount } 
            Victims = { this.state.victims }
          />
        </div>
        <div className="map-bot">
          <GoHuntingBtn 
            HandleGoHuntingClick = { this.HandleGoHuntingClick } 
            TimeToFinishHunting = { this.state.timeToFinishHunting } 
            HuntingState = { this.state.hunting } 
            AutoHuntingState = { this.state.autoHunting }
            IsReachMaxCount = { this.state.victims.length === this.state.victimSlotsCount }
          />
          <CounterBtn SuckBloodFromAllVictims = { this.SuckBloodFromAllVictims } HuntingState = { this.state.hunting }/>
          <Counter CurrentCounter = { this.state.bloodCounter } CounterType = { true } />
          <Counter CurrentCounter = { this.state.victimMeat } CounterType = { false } />
        </div>
      </div>
    );
  }
}

export default MapContainer;