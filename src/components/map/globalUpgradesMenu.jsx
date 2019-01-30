import React from 'react';
import Upgrade from './upgrade';
import CustomScroll from 'react-custom-scroll';
import { CONFIG } from '../../config/config';

const GlobalUpgradesMenu = ({ UpgradeApply }) => {
  return(
    <div className="sidebar-upgrades-menu">
      <div className="sidebar-upgrades-menu__name"> Upgrades </div>
      <div className="sidebar-upgrades-menu__list">
      <CustomScroll>
        { CONFIG.globalUpgrades.map((item) => {
          return <Upgrade key = { item.id } Item = { item } UpgradeApply = { UpgradeApply } />
        }) }
      </CustomScroll>
      </div>
    </div>
  )
}

export default GlobalUpgradesMenu;