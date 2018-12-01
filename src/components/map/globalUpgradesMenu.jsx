import React from 'react';
import Upgrade from './upgrade';
import { CONFIG } from '../../config/config';

const GlobalUpgradesMenu = ({ CurrentVictimMenu, UpgradeApply }) => {
  return(
    <div className="sidebar-upgrades-menu">
      <div className="sidebar-upgrades-menu__name"> Меню </div>
      { CONFIG.globalUpgrades.map((item) => {
        return <Upgrade key = { item.id } Item = { item } UpgradeApply = { UpgradeApply } />
      }) }
    </div>
  )
}

export default GlobalUpgradesMenu;