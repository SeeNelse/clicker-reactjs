import React from 'react';
import Upgrade from './upgrade';
import { CONFIG } from '../../config/config';

const VictimUpgradesMenu = ({ CurrentVictimMenu, UpgradeApply }) => {
  return(
    <div className="sidebar-upgrades-menu">
      <div className="sidebar-upgrades-menu__name"> Жертва номер { CurrentVictimMenu+1 } </div>
      { CONFIG.victimUpgrades.map((item) => {
        return <Upgrade key = { item.id } Item = { item } UpgradeApply = { UpgradeApply } />
      }) }
    </div>
  )
}

export default VictimUpgradesMenu;