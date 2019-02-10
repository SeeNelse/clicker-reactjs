import React from 'react';
import Upgrade from './upgrade';
import { CONFIG } from '../../config/config';
import { Scrollbars } from 'react-custom-scrollbars';

const GlobalUpgradesMenu = ({ UpgradeApply }) => {
  return(
    <div className="sidebar-upgrades-menu">
      <div className="sidebar-upgrades-menu__name"> Upgrades </div>
      <div className="sidebar-upgrades-menu__list">
        <Scrollbars style={{ width: '100%', height: '100%' }}>
          { CONFIG.globalUpgrades.map((item) => {
            return <Upgrade key = { item.id } Item = { item } UpgradeApply = { UpgradeApply } />
          }) }
        </Scrollbars>
      </div>
    </div>
  )
}

export default GlobalUpgradesMenu;